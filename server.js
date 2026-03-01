// ============================================================
//  DARKZONE - Server Multiplayer
//  npm install ws
//  node server.js
// ============================================================
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const fs   = require('fs');

const PORT = process.env.PORT || 3000;

// ── HTTP server: serve index.html e static files ──────────────
const httpServer = http.createServer((req, res) => {
  let filePath = req.url === '/' ? '/index.html' : req.url;
  const ext = path.extname(filePath);
  const mime = { '.html':'text/html', '.js':'application/javascript', '.css':'text/css' };

  // Try public/ first, then root
  const tryPaths = [
    path.join(__dirname, 'public', filePath),
    path.join(__dirname, filePath),
  ];

  const tryNext = (i) => {
    if (i >= tryPaths.length) { res.writeHead(404); res.end('Not found'); return; }
    fs.readFile(tryPaths[i], (err, data) => {
      if (err) { tryNext(i + 1); return; }
      res.writeHead(200, { 'Content-Type': mime[ext] || 'text/plain' });
      res.end(data);
    });
  };
  tryNext(0);
});

// ── WebSocket server ──────────────────────────────────────────
const wss = new WebSocket.Server({ server: httpServer });

// Stato globale
const LOBBY_SIZE = 6;   // max giocatori
const TICK_RATE  = 20;  // ms tra un tick e l'altro (50fps server)

let rooms = {};          // roomId -> Room

function createRoom(roomId) {
  return {
    id: roomId,
    state: 'lobby',      // 'lobby' | 'countdown' | 'playing'
    players: {},         // socketId -> PlayerState
    countdown: 0,
    tickInterval: null,
    lastTick: Date.now(),
  };
}

function getOrCreateRoom(roomId) {
  if (!rooms[roomId]) rooms[roomId] = createRoom(roomId);
  return rooms[roomId];
}

// ── Team assignment ───────────────────────────────────────────
function assignTeam(room) {
  const blues = Object.values(room.players).filter(p => p.team === 'blue').length;
  const reds  = Object.values(room.players).filter(p => p.team === 'red').length;
  return blues <= reds ? 'blue' : 'red';
}

// ── Spawn points ──────────────────────────────────────────────
const TILE = 48;
const SPAWN_BLUE = [
  {x:2*TILE+24,y:2*TILE+24},{x:3*TILE+24,y:2*TILE+24},
  {x:2*TILE+24,y:3*TILE+24},{x:3*TILE+24,y:3*TILE+24},
  {x:4*TILE+24,y:2*TILE+24},{x:4*TILE+24,y:3*TILE+24},
];
const SPAWN_RED = [
  {x:27*TILE+24,y:21*TILE+24},{x:26*TILE+24,y:21*TILE+24},
  {x:27*TILE+24,y:20*TILE+24},{x:26*TILE+24,y:20*TILE+24},
  {x:25*TILE+24,y:21*TILE+24},{x:25*TILE+24,y:20*TILE+24},
];

function getSpawn(room, team) {
  const taken = Object.values(room.players).filter(p => p.team === team);
  const spawns = team === 'blue' ? SPAWN_BLUE : SPAWN_RED;
  return spawns[taken.length % spawns.length];
}

// ── Broadcast helpers ─────────────────────────────────────────
function broadcast(room, msg) {
  const data = JSON.stringify(msg);
  Object.values(room.players).forEach(p => {
    if (p.ws && p.ws.readyState === WebSocket.OPEN) p.ws.send(data);
  });
}

function sendTo(ws, msg) {
  if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(msg));
}

// ── Game tick: invia snapshot a tutti ─────────────────────────
function startGameLoop(room) {
  if (room.tickInterval) clearInterval(room.tickInterval);
  room.tickInterval = setInterval(() => {
    if (room.state !== 'playing') return;
    // Snapshot di tutti i giocatori
    const snapshot = {
      type: 'snapshot',
      players: Object.fromEntries(
        Object.entries(room.players).map(([id, p]) => [id, {
          x: p.x, y: p.y, angle: p.angle,
          hp: p.hp, maxHp: p.maxHp,
          dbno: p.dbno, dead: p.dead,
          team: p.team, name: p.name,
          slot: p.slot,
        }])
      ),
      bullets: room.bullets || [],
      teamScore: room.teamScore || {blue:0,red:0},
    };
    broadcast(room, snapshot);
    // Svuota bullets dopo averle inviate (verranno ricaricate dai client)
    room.bullets = [];
  }, TICK_RATE);
}

// ── Connection handler ────────────────────────────────────────
wss.on('connection', (ws) => {
  let playerId = null;
  let roomId   = null;
  let room     = null;

  ws.on('message', (raw) => {
    let msg;
    try { msg = JSON.parse(raw); } catch { return; }

    // ── JOIN ──────────────────────────────────────────────────
    if (msg.type === 'join') {
      roomId   = msg.roomId || 'default';
      room     = getOrCreateRoom(roomId);
      playerId = msg.playerId || ('p_' + Math.random().toString(36).slice(2,8));

      if (room.state === 'playing') {
        sendTo(ws, { type: 'error', message: 'Partita già iniziata' });
        return;
      }
      if (Object.keys(room.players).length >= LOBBY_SIZE) {
        sendTo(ws, { type: 'error', message: 'Stanza piena' });
        return;
      }

      const team  = assignTeam(room);
      const spawn = getSpawn(room, team);

      room.players[playerId] = {
        ws, id: playerId,
        name: msg.name || ('Player_' + playerId.slice(-4)),
        team, x: spawn.x, y: spawn.y, angle: 0,
        hp: 100, maxHp: 100, dbno: false, dead: false,
        slot: 0, kills: 0,
      };

      ws.playerId = playerId;
      ws.roomId   = roomId;

      sendTo(ws, {
        type: 'joined',
        playerId,
        team,
        spawn,
        roomId,
        players: Object.fromEntries(
          Object.entries(room.players).map(([id,p]) => [id, { name:p.name, team:p.team, x:p.x, y:p.y }])
        ),
      });

      broadcast(room, {
        type: 'playerJoined',
        playerId, name: room.players[playerId].name, team,
        playerCount: Object.keys(room.players).length,
      });
      return;
    }

    if (!room || !playerId || !room.players[playerId]) return;
    const player = room.players[playerId];

    // ── START GAME ────────────────────────────────────────────
    if (msg.type === 'startGame') {
      if (room.state !== 'lobby') return;
      room.state = 'countdown';
      room.teamScore = { blue: 0, red: 0 };
      room.bullets = [];
      let count = 5;
      broadcast(room, { type: 'countdown', count });
      const cd = setInterval(() => {
        count--;
        if (count > 0) {
          broadcast(room, { type: 'countdown', count });
        } else {
          clearInterval(cd);
          room.state = 'playing';
          // Reset posizioni
          const teamBlueIdx = {}; const teamRedIdx = {};
          Object.values(room.players).forEach(p => {
            const idx = p.team === 'blue'
              ? (teamBlueIdx[p.team] = (teamBlueIdx[p.team]||0))
              : (teamRedIdx[p.team]  = (teamRedIdx[p.team] ||0));
            const spawns = p.team === 'blue' ? SPAWN_BLUE : SPAWN_RED;
            const spawnIdx = p.team === 'blue' ? teamBlueIdx.blue++ : teamRedIdx.red++;
            const sp = spawns[spawnIdx % spawns.length];
            p.x = sp.x; p.y = sp.y; p.hp = 100; p.dbno = false; p.dead = false;
          });
          broadcast(room, { type: 'gameStart', players: Object.fromEntries(
            Object.entries(room.players).map(([id,p]) => [id, { x:p.x, y:p.y, team:p.team, name:p.name }])
          )});
          startGameLoop(room);
        }
      }, 1000);
      return;
    }

    // ── PLAYER UPDATE (movimento, angolo) ─────────────────────
    if (msg.type === 'update') {
      if (room.state !== 'playing') return;
      player.x     = msg.x;
      player.y     = msg.y;
      player.angle = msg.angle;
      player.hp    = msg.hp;
      player.dbno  = msg.dbno;
      player.dead  = msg.dead;
      player.slot  = msg.slot;
      return;
    }

    // ── BULLET FIRED ──────────────────────────────────────────
    if (msg.type === 'bullet') {
      if (room.state !== 'playing') return;
      if (!room.bullets) room.bullets = [];
      room.bullets.push({
        x: msg.x, y: msg.y,
        vx: msg.vx, vy: msg.vy,
        dmg: msg.dmg, ownerTeam: player.team,
        ownerId: playerId,
        pellets: msg.pellets,
      });
      return;
    }

    // ── HIT ───────────────────────────────────────────────────
    if (msg.type === 'hit') {
      if (room.state !== 'playing') return;
      const target = room.players[msg.targetId];
      if (!target || target.dead) return;
      if (target.dbno) {
        target.dead = true;
        if (player.team !== target.team) {
          player.kills++;
          room.teamScore[player.team]++;
          broadcast(room, { type: 'killed', killerId: playerId, targetId: msg.targetId, teamScore: room.teamScore });
        }
      } else {
        target.hp -= msg.dmg;
        if (target.hp <= 0) {
          target.hp = 30; target.dbno = true;
          broadcast(room, { type: 'downed', killerId: playerId, targetId: msg.targetId });
        } else {
          broadcast(room, { type: 'damaged', targetId: msg.targetId, hp: target.hp });
        }
      }
      return;
    }

    // ── REVIVE ────────────────────────────────────────────────
    if (msg.type === 'revive') {
      const target = room.players[msg.targetId];
      if (!target || !target.dbno || target.dead) return;
      if (target.team !== player.team) return;
      target.dbno = false; target.hp = target.maxHp * 0.5;
      broadcast(room, { type: 'revived', targetId: msg.targetId, reviverId: playerId });
      return;
    }
  });

  ws.on('close', () => {
    if (!room || !playerId) return;
    delete room.players[playerId];
    broadcast(room, { type: 'playerLeft', playerId });
    if (Object.keys(room.players).length === 0) {
      if (room.tickInterval) clearInterval(room.tickInterval);
      delete rooms[roomId];
    }
  });
});

httpServer.listen(PORT, () => {
  console.log(`DARKZONE server running on port ${PORT}`);
});
