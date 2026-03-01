const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

const httpServer = http.createServer((req, res) => {
  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = path.join(__dirname, filePath);
  const ext = path.extname(filePath);
  const mime = { '.html':'text/html', '.js':'application/javascript', '.css':'text/css' };
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': mime[ext] || 'text/plain' });
    res.end(data);
  });
});

const wss = new WebSocket.Server({ server: httpServer });
const LOBBY_SIZE = 6;
const TICK_RATE = 20;
let rooms = {};

function createRoom(roomId) {
  return { id:roomId, state:'lobby', players:{}, bullets:[], teamScore:{blue:0,red:0}, tickInterval:null };
}
function getOrCreateRoom(roomId) {
  if (!rooms[roomId]) rooms[roomId] = createRoom(roomId);
  return rooms[roomId];
}
function assignTeam(room) {
  const blues = Object.values(room.players).filter(p=>p.team==='blue').length;
  const reds  = Object.values(room.players).filter(p=>p.team==='red').length;
  return blues <= reds ? 'blue' : 'red';
}
const TILE = 48;
const SPAWN_BLUE = [{x:2*TILE+24,y:2*TILE+24},{x:3*TILE+24,y:2*TILE+24},{x:2*TILE+24,y:3*TILE+24},{x:3*TILE+24,y:3*TILE+24},{x:4*TILE+24,y:2*TILE+24},{x:4*TILE+24,y:3*TILE+24}];
const SPAWN_RED  = [{x:27*TILE+24,y:21*TILE+24},{x:26*TILE+24,y:21*TILE+24},{x:27*TILE+24,y:20*TILE+24},{x:26*TILE+24,y:20*TILE+24},{x:25*TILE+24,y:21*TILE+24},{x:25*TILE+24,y:20*TILE+24}];

function broadcast(room, msg) {
  const data = JSON.stringify(msg);
  Object.values(room.players).forEach(p => { if(p.ws && p.ws.readyState===WebSocket.OPEN) p.ws.send(data); });
}
function sendTo(ws, msg) { if(ws.readyState===WebSocket.OPEN) ws.send(JSON.stringify(msg)); }

function startGameLoop(room) {
  if(room.tickInterval) clearInterval(room.tickInterval);
  room.tickInterval = setInterval(() => {
    if(room.state!=='playing') return;
    broadcast(room, {
      type:'snapshot',
      players: Object.fromEntries(Object.entries(room.players).map(([id,p])=>[id,{x:p.x,y:p.y,angle:p.angle,hp:p.hp,maxHp:p.maxHp,dbno:p.dbno,dead:p.dead,team:p.team,name:p.name,slot:p.slot}])),
      bullets: room.bullets,
      teamScore: room.teamScore,
    });
    room.bullets = [];
  }, TICK_RATE);
}

wss.on('connection', (ws) => {
  let playerId=null, roomId=null, room=null;

  ws.on('message', (raw) => {
    let msg; try { msg=JSON.parse(raw); } catch { return; }

    if(msg.type==='join') {
      roomId = msg.roomId||'default';
      room = getOrCreateRoom(roomId);
      playerId = 'p_'+Math.random().toString(36).slice(2,8);
      if(room.state==='playing') { sendTo(ws,{type:'error',message:'Partita già iniziata'}); return; }
      if(Object.keys(room.players).length>=LOBBY_SIZE) { sendTo(ws,{type:'error',message:'Stanza piena'}); return; }
      const team = assignTeam(room);
      const blueCount = Object.values(room.players).filter(p=>p.team==='blue').length;
      const redCount  = Object.values(room.players).filter(p=>p.team==='red').length;
      const sp = team==='blue' ? SPAWN_BLUE[blueCount%SPAWN_BLUE.length] : SPAWN_RED[redCount%SPAWN_RED.length];
      room.players[playerId] = {ws,id:playerId,name:msg.name||'Player',team,x:sp.x,y:sp.y,angle:0,hp:100,maxHp:100,dbno:false,dead:false,slot:0,kills:0};
      ws.playerId=playerId; ws.roomId=roomId;
      sendTo(ws,{type:'joined',playerId,team,spawn:sp,roomId,players:Object.fromEntries(Object.entries(room.players).map(([id,p])=>[id,{name:p.name,team:p.team,x:p.x,y:p.y}]))});
      broadcast(room,{type:'playerJoined',playerId,name:room.players[playerId].name,team,playerCount:Object.keys(room.players).length});
      return;
    }

    if(!room||!playerId||!room.players[playerId]) return;
    const player = room.players[playerId];

    if(msg.type==='startGame') {
      if(room.state!=='lobby') return;
      room.state='countdown'; room.teamScore={blue:0,red:0}; room.bullets=[];
      let count=5; broadcast(room,{type:'countdown',count});
      const cd=setInterval(()=>{
        count--;
        if(count>0) { broadcast(room,{type:'countdown',count}); }
        else {
          clearInterval(cd); room.state='playing';
          let bi=0,ri=0;
          Object.values(room.players).forEach(p=>{
            const sp = p.team==='blue'?SPAWN_BLUE[bi++%SPAWN_BLUE.length]:SPAWN_RED[ri++%SPAWN_RED.length];
            p.x=sp.x; p.y=sp.y; p.hp=100; p.dbno=false; p.dead=false;
          });
          broadcast(room,{type:'gameStart',players:Object.fromEntries(Object.entries(room.players).map(([id,p])=>[id,{x:p.x,y:p.y,team:p.team,name:p.name}]))});
          startGameLoop(room);
        }
      },1000);
      return;
    }
    if(msg.type==='update') { if(room.state!=='playing') return; player.x=msg.x;player.y=msg.y;player.angle=msg.angle;player.hp=msg.hp;player.dbno=msg.dbno;player.dead=msg.dead;player.slot=msg.slot; return; }
    if(msg.type==='bullet') { if(room.state!=='playing') return; room.bullets.push({x:msg.x,y:msg.y,vx:msg.vx,vy:msg.vy,dmg:msg.dmg,ownerTeam:player.team,ownerId:playerId}); return; }
    if(msg.type==='hit') {
      if(room.state!=='playing') return;
      const target=room.players[msg.targetId]; if(!target||target.dead) return;
      if(target.dbno) { target.dead=true; if(player.team!==target.team){player.kills++;room.teamScore[player.team]++;broadcast(room,{type:'killed',killerId:playerId,targetId:msg.targetId,teamScore:room.teamScore});} }
      else { target.hp-=msg.dmg; if(target.hp<=0){target.hp=30;target.dbno=true;broadcast(room,{type:'downed',killerId:playerId,targetId:msg.targetId});}else{broadcast(room,{type:'damaged',targetId:msg.targetId,hp:target.hp});} }
      return;
    }
    if(msg.type==='revive') {
      const target=room.players[msg.targetId]; if(!target||!target.dbno||target.dead||target.team!==player.team) return;
      target.dbno=false; target.hp=50; broadcast(room,{type:'revived',targetId:msg.targetId,reviverId:playerId}); return;
    }
    if(msg.type==='ping') { sendTo(ws,{type:'pong'}); return; }
  });

  ws.on('close', () => {
    if(!room||!playerId) return;
    delete room.players[playerId];
    broadcast(room,{type:'playerLeft',playerId});
    if(Object.keys(room.players).length===0) { if(room.tickInterval) clearInterval(room.tickInterval); delete rooms[roomId]; }
  });
});

httpServer.listen(PORT, () => console.log(`DARKZONE server on port ${PORT}`));
