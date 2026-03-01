<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>DARKZONE</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&family=Share+Tech+Mono&display=swap');
  *{margin:0;padding:0;box-sizing:border-box;}
  body{background:#0a0a0f;color:#e0e0e0;font-family:'Rajdhani',sans-serif;overflow:hidden;user-select:none;}

  /* ===== SCREENS ===== */
  .screen{display:none;position:fixed;inset:0;flex-direction:column;align-items:center;justify-content:center;}
  .screen.active{display:flex;}

  /* ===== CONNECT SCREEN ===== */
  #screen-connect{background:#07070f;gap:16px;}
  .big-title{font-size:64px;font-weight:700;letter-spacing:10px;color:#00d4ff;text-shadow:0 0 40px #00d4ff66;margin-bottom:6px;}
  .small-sub{font-family:'Share Tech Mono',monospace;font-size:12px;color:#334;letter-spacing:4px;margin-bottom:36px;}
  .connect-box{background:#0d0d1a;border:1px solid #1a1a30;border-radius:8px;padding:36px 44px;display:flex;flex-direction:column;gap:16px;width:380px;}
  .input-group{display:flex;flex-direction:column;gap:6px;}
  .input-label{font-size:11px;letter-spacing:3px;color:#445;text-transform:uppercase;}
  .inp{background:#070710;border:1px solid #222;border-radius:4px;padding:10px 14px;color:#ddd;font-family:'Rajdhani',sans-serif;font-size:16px;outline:none;transition:border-color .2s;}
  .inp:focus{border-color:#00d4ff55;}
  .inp::placeholder{color:#333;}
  .btn-connect{padding:14px;background:linear-gradient(135deg,#00d4ff,#0088aa);border:none;border-radius:4px;font-family:'Rajdhani',sans-serif;font-size:17px;font-weight:700;letter-spacing:4px;color:#000;cursor:pointer;transition:opacity .2s;}
  .btn-connect:hover{opacity:.85;}
  .connect-hint{font-size:11px;color:#334;letter-spacing:1px;text-align:center;}
  #connect-error{font-size:13px;color:#ff4444;text-align:center;min-height:18px;font-family:'Share Tech Mono',monospace;}

  /* ===== HOME ===== */
  #screen-home{background:#0a0a0f;flex-direction:column;align-items:stretch;justify-content:flex-start;}
  .nav-tabs{display:flex;border-bottom:2px solid #1a1a2e;background:#080810;width:100%;}
  .nav-tab{padding:14px 32px;cursor:pointer;font-size:15px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#555;border-bottom:3px solid transparent;transition:all .2s;}
  .nav-tab:hover{color:#aaa;}
  .nav-tab.active{color:#00d4ff;border-bottom-color:#00d4ff;}
  .page{display:none;flex:1;overflow:auto;padding:30px 40px;}
  .page.active{display:flex;flex-direction:column;}
  #page-play{align-items:center;justify-content:center;gap:16px;}
  .game-title{font-size:64px;font-weight:700;letter-spacing:8px;color:#00d4ff;text-shadow:0 0 40px #00d4ff44;margin-bottom:4px;}
  .subtitle{font-family:'Share Tech Mono',monospace;font-size:12px;color:#334;letter-spacing:3px;margin-bottom:24px;}
  .player-tag{font-family:'Share Tech Mono',monospace;font-size:13px;color:#445;letter-spacing:2px;margin-bottom:4px;}
  .btn-play{padding:16px 72px;background:linear-gradient(135deg,#00d4ff,#0088aa);border:none;border-radius:4px;font-family:'Rajdhani',sans-serif;font-size:20px;font-weight:700;letter-spacing:4px;color:#000;cursor:pointer;transition:transform .1s,box-shadow .2s;box-shadow:0 0 30px #00d4ff44;}
  .btn-play:hover{transform:scale(1.03);box-shadow:0 0 50px #00d4ff77;}
  .btn-secondary{padding:10px 36px;background:transparent;border:1px solid #224;border-radius:4px;font-family:'Rajdhani',sans-serif;font-size:14px;letter-spacing:2px;color:#445;cursor:pointer;transition:all .2s;}
  .btn-secondary:hover{border-color:#00d4ff44;color:#00d4ff;}
  .section-title{font-size:11px;letter-spacing:4px;color:#00d4ff;text-transform:uppercase;margin-bottom:10px;}
  .weapon-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(255px,1fr));gap:14px;}
  .weapon-card{background:#0d0d1a;border:1px solid #1a1a30;border-radius:6px;padding:18px;position:relative;transition:border-color .2s;}
  .weapon-card:hover{border-color:#00d4ff33;}
  .weapon-card.sel1{border-color:#00d4ff;}
  .weapon-card.sel2{border-color:#ff6600;}
  .wc-badge{position:absolute;top:8px;right:10px;font-size:10px;letter-spacing:2px;}
  .wc-badge.b1{color:#00d4ff;} .wc-badge.b2{color:#ff6600;}
  .w-name{font-size:19px;font-weight:700;color:#fff;margin-bottom:4px;}
  .w-type{font-size:11px;letter-spacing:2px;color:#556;margin-bottom:12px;}
  .w-stat{display:flex;align-items:center;gap:8px;margin-bottom:5px;font-size:11px;color:#778;}
  .w-bar{flex:1;height:3px;background:#111;border-radius:2px;}
  .w-fill{height:100%;border-radius:2px;background:#00d4ff;}
  .w-fill.r{background:#ff4444;} .w-fill.y{background:#ffaa00;}
  .slot-btns{display:flex;gap:8px;margin-top:12px;}
  .slot-btn{flex:1;padding:7px;border:1px solid #1a1a28;border-radius:3px;background:transparent;color:#556;font-family:'Rajdhani',sans-serif;font-size:11px;letter-spacing:1px;cursor:pointer;transition:all .2s;}
  .slot-btn:hover{border-color:#00d4ff55;color:#00d4ff;}
  #page-profilo{gap:18px;max-width:560px;}
  .stat-row{display:flex;justify-content:space-between;align-items:center;padding:11px 0;border-bottom:1px solid #111;font-size:15px;}
  .stat-val{font-family:'Share Tech Mono',monospace;color:#00d4ff;}

  /* ===== LOBBY ===== */
  #screen-lobby{background:#07070f;gap:0;}
  .lobby-title{font-size:44px;font-weight:700;letter-spacing:8px;color:#00d4ff;text-shadow:0 0 30px #00d4ff66;margin-bottom:4px;}
  .lobby-room{font-family:'Share Tech Mono',monospace;font-size:12px;color:#334;letter-spacing:4px;margin-bottom:34px;}
  .teams-wrap{display:flex;gap:50px;margin-bottom:34px;}
  .team-panel{width:230px;background:#0d0d1a;border-radius:8px;padding:18px;border-top:3px solid;}
  .team-panel.blue{border-color:#3399ff;} .team-panel.red{border-color:#ff4444;}
  .tp-title{font-size:12px;letter-spacing:4px;text-transform:uppercase;margin-bottom:14px;}
  .team-panel.blue .tp-title{color:#3399ff;} .team-panel.red .tp-title{color:#ff4444;}
  .tm{display:flex;align-items:center;gap:9px;padding:7px 0;border-bottom:1px solid #0f0f18;font-size:13px;}
  .tdot{width:9px;height:9px;border-radius:50%;flex-shrink:0;}
  .tdot.blue{background:#3399ff;} .tdot.red{background:#ff4444;}
  .tm-name{flex:1;}
  .tm-tag{font-size:9px;color:#334;font-family:'Share Tech Mono',monospace;}
  .lobby-cd{font-family:'Share Tech Mono',monospace;font-size:60px;color:#fff;text-shadow:0 0 20px #ffffff33;margin-bottom:14px;min-height:76px;transition:color .3s;}
  .lobby-st{font-size:12px;letter-spacing:3px;color:#334;text-transform:uppercase;margin-bottom:24px;}
  .btn-start{padding:13px 56px;background:transparent;border:2px solid #00d4ff;border-radius:4px;font-family:'Rajdhani',sans-serif;font-size:17px;font-weight:700;letter-spacing:4px;color:#00d4ff;cursor:pointer;transition:background .2s;}
  .btn-start:hover{background:#00d4ff22;}
  .btn-start:disabled{opacity:.3;cursor:default;}
  .btn-back{margin-top:10px;padding:7px 28px;background:transparent;border:1px solid #222;border-radius:3px;font-family:'Rajdhani',sans-serif;font-size:12px;letter-spacing:2px;color:#334;cursor:pointer;transition:all .2s;}
  .btn-back:hover{color:#888;border-color:#444;}

  /* ===== GAME ===== */
  #screen-game{background:#000;align-items:flex-start;justify-content:flex-start;}
  #gc{display:block;}
  #hud{position:fixed;inset:0;pointer-events:none;}
  #health-bar{position:absolute;bottom:20px;left:50%;transform:translateX(-50%);width:200px;height:8px;background:#111;border-radius:4px;border:1px solid #1a1a28;}
  #health-fill{height:100%;border-radius:4px;background:linear-gradient(90deg,#ff4444,#ff7777);transition:width .1s;}
  #ammo-hud{position:absolute;bottom:36px;right:20px;font-family:'Share Tech Mono',monospace;font-size:26px;color:#fff;}
  #ammo-hud span{font-size:15px;color:#556;}
  #weapon-hud{position:absolute;bottom:68px;right:20px;font-size:13px;color:#00d4ff;letter-spacing:2px;}
  #reload-wrap{display:none;position:absolute;bottom:48px;left:50%;transform:translateX(-50%);width:150px;}
  #reload-lbl{font-size:11px;letter-spacing:3px;color:#aaa;margin-bottom:4px;text-align:center;}
  #reload-track{height:3px;background:#111;border-radius:2px;}
  #reload-fill{height:100%;width:0;background:#00d4ff;border-radius:2px;}
  #revive-wrap{display:none;position:absolute;bottom:130px;left:50%;transform:translateX(-50%);width:170px;text-align:center;}
  #revive-lbl{font-size:11px;letter-spacing:3px;color:#44ff88;margin-bottom:4px;}
  #revive-track{height:3px;background:#111;border-radius:2px;border:1px solid #222;}
  #revive-fill{height:100%;width:0;background:#44ff88;border-radius:2px;}
  #dbno-overlay{display:none;position:absolute;inset:0;background:rgba(100,0,0,.18);pointer-events:none;border:3px solid #ff000033;animation:dp 1s infinite;}
  @keyframes dp{0%,100%{border-color:#ff000033}50%{border-color:#ff0000aa}}
  #dbno-lbl{display:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:24px;font-weight:700;letter-spacing:6px;color:#ff4444;text-shadow:0 0 20px #ff4444;pointer-events:none;}
  #killfeed{position:absolute;top:150px;right:10px;display:flex;flex-direction:column;gap:4px;pointer-events:none;}
  .kfe{font-size:12px;font-family:'Share Tech Mono',monospace;background:#00000099;padding:4px 10px;border-radius:2px;border-left:2px solid #ff4444;animation:kfi .2s ease;}
  @keyframes kfi{from{opacity:0;transform:translateX(16px)}to{opacity:1;transform:none}}
  #ctrl-hint{position:absolute;bottom:20px;left:10px;font-size:11px;color:#223;letter-spacing:1px;line-height:1.9;}
  #slot-hud{position:absolute;bottom:98px;right:20px;display:flex;flex-direction:column;gap:4px;}
  .slot-ind{padding:4px 12px;border-radius:3px;font-size:12px;border:1px solid #1a1a28;color:#334;letter-spacing:1px;transition:all .15s;}
  .slot-ind.active{border-color:#00d4ff;color:#00d4ff;background:#00d4ff0d;}
  #score-top{position:absolute;top:12px;left:50%;transform:translateX(-50%);font-family:'Share Tech Mono',monospace;font-size:15px;display:flex;gap:10px;align-items:center;}
  .st-b{color:#3399ff;} .st-sep{color:#333;} .st-r{color:#ff4444;}
  #my-kills{position:absolute;top:12px;left:12px;font-family:'Share Tech Mono',monospace;font-size:13px;color:#445;}
  #ping-hud{position:absolute;top:12px;right:148px;font-family:'Share Tech Mono',monospace;font-size:11px;color:#334;}
  .ov-screen{display:none;position:absolute;inset:0;background:#000000bb;align-items:center;justify-content:center;flex-direction:column;gap:18px;}
  .ov-screen.active{display:flex;}
  .ov-screen h2{font-size:38px;letter-spacing:6px;text-shadow:0 0 20px currentColor;}
  .ov-screen h2.elim{color:#ff4444;}
  .ov-screen h2.win{color:#44ff88;}
  .btn-sm{padding:10px 38px;background:#0d0d1a;border:1px solid #222;color:#aaa;font-family:'Rajdhani',sans-serif;font-size:15px;letter-spacing:3px;cursor:pointer;border-radius:3px;transition:all .2s;}
  .btn-sm:hover{border-color:#00d4ff;color:#00d4ff;}
</style>
</head>
<body>

<!-- ===== CONNECT ===== -->
<div class="screen active" id="screen-connect">
  <div class="big-title">DARKZONE</div>
  <div class="small-sub">// MULTIPLAYER SHOOTER //</div>
  <div class="connect-box">
    <div class="input-group">
      <div class="input-label">Il tuo nome</div>
      <input class="inp" id="inp-name" maxlength="16" placeholder="NomeGiocatore" />
    </div>
    <div class="input-group">
      <div class="input-label">Codice Stanza</div>
      <input class="inp" id="inp-room" maxlength="12" placeholder="es: stanza42" />
    </div>
    <div id="connect-error"></div>
    <button class="btn-connect" onclick="connectToServer()">ENTRA</button>
  </div>
  <div class="connect-hint">Stessa stanza = stessa partita · Inventati un codice e condividilo con gli amici</div>
</div>

<!-- ===== HOME ===== -->
<div class="screen" id="screen-home">
  <div class="nav-tabs">
    <div class="nav-tab active" onclick="switchTab('play')">Gioca</div>
    <div class="nav-tab" onclick="switchTab('armi')">Armi</div>
    <div class="nav-tab" onclick="switchTab('profilo')">Profilo</div>
  </div>
  <div class="page active" id="page-play">
    <div class="game-title">DARKZONE</div>
    <div class="subtitle">// TOP-DOWN TACTICAL SHOOTER //</div>
    <div class="player-tag" id="home-playertag">—</div>
    <button class="btn-play" onclick="goToLobby()">CERCA PARTITA</button>
    <button class="btn-secondary" style="margin-top:6px" onclick="showConnect()">Cambia nome / stanza</button>
  </div>
  <div class="page" id="page-armi">
    <div class="section-title">Loadout · Slot 1 &amp; 2 · Slot 3 = Pistola (sempre)</div>
    <div class="weapon-grid" id="weapon-grid"></div>
  </div>
  <div class="page" id="page-profilo">
    <div class="section-title">Statistiche</div>
    <div class="stat-row"><span>Kill</span><span class="stat-val" id="st-kills">0</span></div>
    <div class="stat-row"><span>Morti</span><span class="stat-val" id="st-deaths">0</span></div>
    <div class="stat-row"><span>K/D</span><span class="stat-val" id="st-kd">0.00</span></div>
    <div class="stat-row"><span>Rianimazioni</span><span class="stat-val" id="st-revives">0</span></div>
    <div class="stat-row"><span>Partite</span><span class="stat-val" id="st-games">0</span></div>
    <div class="stat-row"><span>Slot 1</span><span class="stat-val" id="st-s1">M4A1</span></div>
    <div class="stat-row"><span>Slot 2</span><span class="stat-val" id="st-s2">Shotgun</span></div>
  </div>
</div>

<!-- ===== LOBBY ===== -->
<div class="screen" id="screen-lobby">
  <div class="lobby-title">DARKZONE</div>
  <div class="lobby-room" id="lobby-room-label">Stanza: —</div>
  <div class="teams-wrap">
    <div class="team-panel blue"><div class="tp-title">Team Blu</div><div id="lb-blue"></div></div>
    <div class="team-panel red"><div class="tp-title">Team Rosso</div><div id="lb-red"></div></div>
  </div>
  <div class="lobby-cd" id="lobby-cd">—</div>
  <div class="lobby-st" id="lobby-st">In attesa di giocatori...</div>
  <button class="btn-start" id="btn-start" onclick="sendStartGame()">AVVIA PARTITA</button>
  <button class="btn-back" onclick="leaveLobby()">← Menu</button>
</div>

<!-- ===== GAME ===== -->
<div class="screen" id="screen-game">
  <canvas id="gc"></canvas>
  <div id="hud">
    <div id="health-bar"><div id="health-fill" style="width:100%"></div></div>
    <div id="ammo-hud">30<span>/90</span></div>
    <div id="weapon-hud">M4A1</div>
    <div id="reload-wrap"><div id="reload-lbl">RICARICA</div><div id="reload-track"><div id="reload-fill"></div></div></div>
    <div id="revive-wrap"><div id="revive-lbl">RIANIMAZIONE</div><div id="revive-track"><div id="revive-fill"></div></div></div>
    <div id="dbno-overlay"></div>
    <div id="dbno-lbl">ABBATTUTO — usa pistola</div>
    <div id="killfeed"></div>
    <canvas id="mm" width="128" height="128" style="position:absolute;top:10px;right:10px;border:1px solid #1a1a28;border-radius:3px;"></canvas>
    <div id="score-top"><span class="st-b" id="ts-b">BLU 0</span><span class="st-sep">—</span><span class="st-r" id="ts-r">0 ROSSO</span></div>
    <div id="my-kills">KILLS <span id="hud-kills" style="color:#00d4ff">0</span></div>
    <div id="ping-hud">PING —ms</div>
    <div id="ctrl-hint">WASD Muovi · Click Spara · R Ricarica · 1/2/3 Armi<br>Tieni F vicino ad alleato abbattuto = Rianima · Q Menu</div>
    <div id="slot-hud">
      <div class="slot-ind active" id="si1">1 —</div>
      <div class="slot-ind" id="si2">2 —</div>
      <div class="slot-ind" id="si3">3 PISTOLA</div>
    </div>
  </div>
  <div class="ov-screen" id="ov-dead">
    <h2 class="elim">ELIMINATO</h2>
    <div style="font-size:13px;color:#667;letter-spacing:3px">Il tuo team continua...</div>
    <button class="btn-sm" onclick="goToLobby()">NUOVA PARTITA</button>
    <button class="btn-sm" onclick="showHome()">MENU</button>
  </div>
</div>

<script>
// ============================================================
//  WEAPONS
// ============================================================
const WEAPONS=[
  {id:'m4',    name:'M4A1',   type:'Assault Rifle',dmg:22,rof:120,mag:30, reserve:90, reload:2.2,speed:1,   auto:true},
  {id:'ak',    name:'AK-47',  type:'Assault Rifle',dmg:30,rof:80, mag:30, reserve:90, reload:2.5,speed:1,   auto:true},
  {id:'mp5',   name:'MP5',    type:'SMG',          dmg:16,rof:200,mag:30, reserve:120,reload:1.8,speed:1.1, auto:true},
  {id:'sg',    name:'Shotgun',type:'Shotgun',      dmg:14,rof:50, mag:6,  reserve:24, reload:3.0,speed:0.9, auto:false,pellets:8},
  {id:'sniper',name:'Sniper', type:'Sniper',       dmg:90,rof:25, mag:5,  reserve:20, reload:3.5,speed:0.9, auto:false},
  {id:'lmg',   name:'LMG',    type:'LMG',          dmg:18,rof:150,mag:100,reserve:200,reload:4.0,speed:0.85,auto:true},
  {id:'p90',   name:'P90',    type:'SMG',          dmg:15,rof:220,mag:50, reserve:150,reload:2.0,speed:1.1, auto:true},
  {id:'deagle',name:'Deagle', type:'Pistol',       dmg:55,rof:45, mag:7,  reserve:28, reload:2.0,speed:1,   auto:false},
];
const PISTOL={id:'pistol',name:'Pistola',type:'Pistol',dmg:20,rof:60,mag:12,reserve:36,reload:1.5,speed:1,auto:false};
let loadout={slot1:WEAPONS[0],slot2:WEAPONS[3]};
let stats={kills:0,deaths:0,revives:0,games:0};

// ============================================================
//  NETWORK
// ============================================================
let ws=null;
let myId=null, myTeam=null, myName='', myRoom='';
let pingStart=0, pingMs=0;

// Try to detect server URL automatically
function getServerUrl(){
  const loc=window.location;
  if(loc.hostname==='localhost'||loc.hostname==='127.0.0.1'){
    return `ws://${loc.hostname}:${loc.port||3000}`;
  }
  const proto=loc.protocol==='https:'?'wss:':'ws:';
  return `${proto}//${loc.host}`;
}

function connectToServer(){
  const nameEl=document.getElementById('inp-name');
  const roomEl=document.getElementById('inp-room');
  const errEl =document.getElementById('connect-error');
  myName=nameEl.value.trim()||'Giocatore';
  myRoom=roomEl.value.trim()||'default';
  errEl.textContent='Connessione in corso...';

  try{
    ws=new WebSocket(getServerUrl());
  } catch(e){
    errEl.textContent='Impossibile connettersi al server.';
    return;
  }

  ws.onopen=()=>{
    ws.send(JSON.stringify({type:'join',name:myName,roomId:myRoom,playerId:myId}));
  };
  ws.onerror=()=>{ errEl.textContent='Errore di connessione. Server offline?'; };
  ws.onclose=()=>{
    if(currentScreen()!=='connect'){
      alert('Connessione persa. Ricarica la pagina.');
      showScreen('screen-connect');
    }
  };
  ws.onmessage=(e)=>handleMsg(JSON.parse(e.data));
}

function send(obj){ if(ws&&ws.readyState===1) ws.send(JSON.stringify(obj)); }

// ============================================================
//  MAP + GAME CONSTANTS
// ============================================================
const TILE=48,FOV_ANGLE=120*Math.PI/180,FOV_DIST=380;
const MAP_W=30,MAP_H=24;
const RAW=[
  "111111111111111111111111111111",
  "100000000000011110000000000001",
  "100011000000010100000011000001",
  "100011000000000000000011000001",
  "100000000001111111000000000001",
  "100000000000000000000000000001",
  "111110000000000000000000111101",
  "100000000222000000222000000001",
  "100000000222000000222000000001",
  "100000000000000000000000000001",
  "100000111100000000011110000001",
  "100000000000011110000000000001",
  "100000000000011110000000000001",
  "100000111100000000011110000001",
  "100000000000000000000000000001",
  "100000000222000000222000000001",
  "100000000222000000222000000001",
  "111110000000000000000000111101",
  "100000000000000000000000000001",
  "100000000001111111000000000001",
  "100011000000000000000011000001",
  "100011000000010100000011000001",
  "100000000000011110000000000001",
  "111111111111111111111111111111",
];
const MAP=RAW.map(r=>r.split('').map(Number));
function isBlock(tx,ty){ if(tx<0||ty<0||tx>=MAP_W||ty>=MAP_H)return true; return MAP[ty][tx]>=1; }

// ============================================================
//  GAME STATE (local)
// ============================================================
let canvas,ctx,mmCanvas,mmCtx;
let W,H,keys={},mouse={x:0,y:0,down:false};
let gameRunning=false,lastTime=0;
let localPlayer={};       // my player data
let remotePlayers={};     // id -> {x,y,angle,hp,dbno,dead,team,name}
let localBullets=[];      // visual only
let teamScore={blue:0,red:0};
let reviveTarget=null,reviveTimer=0;
const REVIVE_DUR=3.0;
let myKills=0;

// ============================================================
//  SERVER MESSAGE HANDLER
// ============================================================
function handleMsg(msg){
  switch(msg.type){

    case 'joined':
      myId=msg.playerId; myTeam=msg.team;
      remotePlayers={};
      Object.entries(msg.players).forEach(([id,p])=>{ if(id!==myId) remotePlayers[id]=p; });
      showScreen('screen-home');
      document.getElementById('home-playertag').textContent=`${myName} · Stanza: ${myRoom}`;
      break;

    case 'error':
      document.getElementById('connect-error').textContent=msg.message;
      break;

    case 'playerJoined':
      if(msg.playerId!==myId){
        remotePlayers[msg.playerId]={name:msg.name,team:msg.team,x:0,y:0,angle:0,hp:100,dbno:false,dead:false};
      }
      updateLobbyUI();
      break;

    case 'playerLeft':
      delete remotePlayers[msg.playerId];
      updateLobbyUI();
      break;

    case 'countdown':
      document.getElementById('lobby-cd').textContent=msg.count;
      document.getElementById('lobby-st').textContent='La partita inizia tra...';
      document.getElementById('btn-start').disabled=true;
      break;

    case 'gameStart':
      // Posiziona il player locale
      const myInfo=msg.players[myId];
      if(myInfo){ localPlayer.x=myInfo.x; localPlayer.y=myInfo.y; }
      // Aggiorna remoti
      Object.entries(msg.players).forEach(([id,p])=>{ if(id!==myId) remotePlayers[id]={...remotePlayers[id]||{},...p}; });
      stats.games++;
      startLocalGame();
      break;

    case 'snapshot':
      // Aggiorna remoti
      Object.entries(msg.players).forEach(([id,p])=>{
        if(id===myId) return;
        if(!remotePlayers[id]) remotePlayers[id]={};
        Object.assign(remotePlayers[id],p);
      });
      // Bullets visivi dai remoti
      if(msg.bullets) msg.bullets.forEach(b=>{
        if(b.ownerId!==myId) localBullets.push({...b,life:0.6,visual:true});
      });
      teamScore=msg.teamScore||teamScore;
      break;

    case 'downed':
      if(msg.targetId===myId){
        localPlayer.dbno=true; localPlayer.hp=30;
        localPlayer.slot=2; updateSlotUI();
        document.getElementById('dbno-overlay').style.display='block';
        document.getElementById('dbno-lbl').style.display='block';
      }
      if(remotePlayers[msg.targetId]) remotePlayers[msg.targetId].dbno=true;
      break;

    case 'killed':
      if(msg.targetId===myId){
        localPlayer.dead=true; gameRunning=false;
        document.getElementById('ov-dead').classList.add('active');
        stats.deaths++;
      }
      if(remotePlayers[msg.targetId]) remotePlayers[msg.targetId].dead=true;
      if(msg.killerId===myId){ myKills++; stats.kills++; }
      kfAdd(msg.killerId===myId?'TU':remotePlayers[msg.killerId]?.name||'???',
            msg.targetId===myId?'TU':remotePlayers[msg.targetId]?.name||'???','#ff4444');
      teamScore=msg.teamScore;
      break;

    case 'damaged':
      if(msg.targetId===myId){ localPlayer.hp=msg.hp; }
      if(remotePlayers[msg.targetId]) remotePlayers[msg.targetId].hp=msg.hp;
      break;

    case 'revived':
      if(msg.targetId===myId){
        localPlayer.dbno=false; localPlayer.hp=50;
        document.getElementById('dbno-overlay').style.display='none';
        document.getElementById('dbno-lbl').style.display='none';
        localPlayer.slot=0; updateSlotUI();
      }
      if(remotePlayers[msg.targetId]) remotePlayers[msg.targetId].dbno=false;
      kfAdd(msg.reviverId===myId?'TU':remotePlayers[msg.reviverId]?.name||'???',
            'rianima '+(msg.targetId===myId?'TU':remotePlayers[msg.targetId]?.name||'???'),'#44ff88');
      break;

    case 'pong':
      pingMs=Date.now()-pingStart;
      document.getElementById('ping-hud').textContent='PING '+pingMs+'ms';
      break;
  }
}

// ============================================================
//  LOBBY
// ============================================================
function goToLobby(){
  if(!ws||ws.readyState!==1){ showConnect(); return; }
  showScreen('screen-lobby');
  document.getElementById('lobby-room-label').textContent='Stanza: '+myRoom;
  document.getElementById('lobby-cd').textContent='—';
  document.getElementById('lobby-cd').style.color='#fff';
  document.getElementById('lobby-st').textContent='In attesa · Premi AVVIA quando siete pronti';
  document.getElementById('btn-start').disabled=false;
  updateLobbyUI();
}

function updateLobbyUI(){
  const all={[myId]:{name:myName,team:myTeam},...remotePlayers};
  const blueEl=document.getElementById('lb-blue');
  const redEl =document.getElementById('lb-red');
  blueEl.innerHTML=''; redEl.innerHTML='';
  Object.entries(all).forEach(([id,p])=>{
    const isMe=id===myId;
    const html=`<div class="tm"><div class="tdot ${p.team}"></div><span class="tm-name">${p.name}</span><span class="tm-tag">${isMe?'★ TU':'PLAYER'}</span></div>`;
    if(p.team==='blue') blueEl.innerHTML+=html; else redEl.innerHTML+=html;
  });
}

function sendStartGame(){ send({type:'startGame'}); }

function leaveLobby(){ showScreen('screen-home'); }

// ============================================================
//  LOCAL GAME INIT
// ============================================================
function startLocalGame(){
  showScreen('screen-game');
  if(!canvas){
    canvas=document.getElementById('gc');
    ctx=canvas.getContext('2d');
    mmCanvas=document.getElementById('mm');
    mmCtx=mmCanvas.getContext('2d');
    window.addEventListener('resize',resize);
  }
  resize();
  document.getElementById('ov-dead').classList.remove('active');
  document.getElementById('dbno-overlay').style.display='none';
  document.getElementById('dbno-lbl').style.display='none';
  document.getElementById('revive-wrap').style.display='none';
  localBullets=[]; reviveTarget=null; reviveTimer=0; myKills=0;

  // Init local player
  localPlayer={
    x:localPlayer.x||200, y:localPlayer.y||200,
    radius:13, angle:0,
    hp:100, maxHp:100, dbno:false, dead:false,
    speed:165, team:myTeam, slot:0,
    weapons:[
      {...loadout.slot1,ammo:loadout.slot1.mag,res:loadout.slot1.reserve},
      {...loadout.slot2,ammo:loadout.slot2.mag,res:loadout.slot2.reserve},
      {...PISTOL,ammo:PISTOL.mag,res:PISTOL.reserve},
    ],
    reloading:false,reloadTimer:0,fireTimer:0,
    name:myName,
  };
  updateSlotUI();
  gameRunning=true;
  lastTime=performance.now();
  requestAnimationFrame(gameLoop);

  // Ping ogni 3s
  setInterval(()=>{ pingStart=Date.now(); send({type:'ping'}); },3000);
}

function resize(){ if(canvas){ canvas.width=window.innerWidth; canvas.height=window.innerHeight; W=canvas.width; H=canvas.height; }}

// ============================================================
//  GAME LOOP
// ============================================================
function gameLoop(ts){
  if(!gameRunning) return;
  const dt=Math.min((ts-lastTime)/1000,0.05);
  lastTime=ts;
  localUpdate(dt);
  render();
  requestAnimationFrame(gameLoop);
}

let sendTimer=0;
function localUpdate(dt){
  if(localPlayer.dead) return;

  localPlayer.angle=Math.atan2(mouse.y-H/2,mouse.x-W/2);

  const sm=(localPlayer.dbno?0.38:1)*(cw().speed||1);
  let dx=0,dy=0;
  if(keys['KeyW']||keys['ArrowUp'])   dy-=1;
  if(keys['KeyS']||keys['ArrowDown']) dy+=1;
  if(keys['KeyA']||keys['ArrowLeft']) dx-=1;
  if(keys['KeyD']||keys['ArrowRight'])dx+=1;
  if(dx||dy){ const l=Math.hypot(dx,dy); moveEnt(localPlayer,dx/l*localPlayer.speed*sm*dt,dy/l*localPlayer.speed*sm*dt); }

  localPlayer.fireTimer=Math.max(0,localPlayer.fireTimer-dt);
  const w=cw();
  if(mouse.down&&!localPlayer.reloading&&localPlayer.fireTimer<=0){
    if(!localPlayer.dbno||localPlayer.slot===2){
      if(w.ammo>0){
        doFire(localPlayer,w);
        if(!w.auto) mouse.down=false;
      } else if(w.res>0) startReload(localPlayer);
    }
  }

  if(localPlayer.reloading){
    localPlayer.reloadTimer-=dt;
    document.getElementById('reload-fill').style.width=((1-localPlayer.reloadTimer/w.reload)*100)+'%';
    if(localPlayer.reloadTimer<=0) finishReload(localPlayer);
  }

  // Revive
  if(keys['KeyF']&&!localPlayer.dbno){
    const ally=nearestDBNOAlly();
    if(ally){
      reviveTarget=ally; reviveTimer+=dt;
      document.getElementById('revive-wrap').style.display='block';
      document.getElementById('revive-fill').style.width=(Math.min(1,reviveTimer/REVIVE_DUR)*100)+'%';
      if(reviveTimer>=REVIVE_DUR){
        send({type:'revive',targetId:ally.id});
        stats.revives++; reviveTimer=0; reviveTarget=null;
        document.getElementById('revive-wrap').style.display='none';
      }
    }
  } else {
    reviveTimer=0; reviveTarget=null;
    document.getElementById('revive-wrap').style.display='none';
  }

  // Update bullets (visual)
  localBullets=localBullets.filter(b=>{
    b.x+=b.vx*dt; b.y+=b.vy*dt; b.life-=dt;
    if(b.life<=0) return false;
    if(isBlock(Math.floor(b.x/TILE),Math.floor(b.y/TILE))) return false;
    // Hit detection (solo per proiettili miei)
    if(!b.visual){
      Object.entries(remotePlayers).forEach(([id,rp])=>{
        if(rp.dead||rp.team===myTeam) return;
        if((b.x-rp.x)**2+(b.y-rp.y)**2<(13+4)**2){
          send({type:'hit',targetId:id,dmg:b.dmg});
          b.life=0;
        }
      });
    }
    return b.life>0;
  });

  // Bleed out se DBNO
  if(localPlayer.dbno&&!localPlayer.dead){
    localPlayer.hp-=3*dt;
    if(localPlayer.hp<=0){
      localPlayer.dead=true; gameRunning=false;
      stats.deaths++;
      document.getElementById('ov-dead').classList.add('active');
      document.getElementById('dbno-overlay').style.display='none';
      document.getElementById('dbno-lbl').style.display='none';
    }
  }

  // Send state to server every ~50ms
  sendTimer+=dt;
  if(sendTimer>=0.05){
    sendTimer=0;
    send({
      type:'update',
      x:localPlayer.x,y:localPlayer.y,angle:localPlayer.angle,
      hp:localPlayer.hp,dbno:localPlayer.dbno,dead:localPlayer.dead,
      slot:localPlayer.slot,
    });
  }

  updateHUD();
}

function cw(){ return localPlayer.weapons[localPlayer.slot]; }

function moveEnt(e,dx,dy){
  const r=e.radius;
  const nx=e.x+dx;
  if(!isBlock(Math.floor((nx-r)/TILE),Math.floor((e.y-r)/TILE))&&
     !isBlock(Math.floor((nx+r)/TILE),Math.floor((e.y-r)/TILE))&&
     !isBlock(Math.floor((nx-r)/TILE),Math.floor((e.y+r)/TILE))&&
     !isBlock(Math.floor((nx+r)/TILE),Math.floor((e.y+r)/TILE)))
    e.x=nx;
  const ny=e.y+dy;
  if(!isBlock(Math.floor((e.x-r)/TILE),Math.floor((ny-r)/TILE))&&
     !isBlock(Math.floor((e.x+r)/TILE),Math.floor((ny-r)/TILE))&&
     !isBlock(Math.floor((e.x-r)/TILE),Math.floor((ny+r)/TILE))&&
     !isBlock(Math.floor((e.x+r)/TILE),Math.floor((ny+r)/TILE)))
    e.y=ny;
}

function doFire(entity,w){
  entity.fireTimer=60/w.rof; w.ammo--;
  const pellets=w.pellets||1;
  const bArr=[];
  for(let i=0;i<pellets;i++){
    const sp=(pellets>1?(Math.random()-.5)*.45:0)+(Math.random()-.5)*.04;
    const a=entity.angle+sp;
    const bul={x:entity.x,y:entity.y,vx:Math.cos(a)*680,vy:Math.sin(a)*680,dmg:w.dmg,life:1.3,ownerTeam:entity.team,visual:false};
    localBullets.push(bul);
    bArr.push({vx:bul.vx,vy:bul.vy});
  }
  send({type:'bullet',x:entity.x,y:entity.y,vx:bArr[0].vx,vy:bArr[0].vy,dmg:w.dmg,pellets});
}

function startReload(entity){
  const w=entity===localPlayer?cw():entity.weapon;
  if(entity.reloading||w.res<=0||w.ammo===w.mag) return;
  entity.reloading=true; entity.reloadTimer=w.reload;
  document.getElementById('reload-wrap').style.display='block';
  document.getElementById('reload-fill').style.width='0%';
}
function finishReload(entity){
  const w=cw(); const take=Math.min(w.mag-w.ammo,w.res);
  w.ammo+=take; w.res-=take; entity.reloading=false;
  document.getElementById('reload-wrap').style.display='none';
}

function nearestDBNOAlly(){
  let best=null,bd=9999;
  Object.entries(remotePlayers).forEach(([id,p])=>{
    if(p.team!==myTeam||!p.dbno||p.dead) return;
    const d=Math.hypot(p.x-localPlayer.x,p.y-localPlayer.y);
    if(d<90&&d<bd){ bd=d; best={...p,id}; }
  });
  return best;
}

// ============================================================
//  RENDER
// ============================================================
function render(){
  ctx.clearRect(0,0,W,H);
  const cx=localPlayer.x-W/2,cy=localPlayer.y-H/2;
  ctx.save(); ctx.translate(-cx,-cy);

  const s0x=Math.max(0,Math.floor(cx/TILE)),e0x=Math.min(MAP_W-1,Math.floor((cx+W)/TILE)+1);
  const s0y=Math.max(0,Math.floor(cy/TILE)),e0y=Math.min(MAP_H-1,Math.floor((cy+H)/TILE)+1);

  for(let ty=s0y;ty<=e0y;ty++) for(let tx=s0x;tx<=e0x;tx++){
    const t=MAP[ty][tx],px=tx*TILE,py=ty*TILE;
    const vis=inFOV(px+TILE/2,py+TILE/2);
    if(t===1){
      ctx.fillStyle=vis?'#2a2a3c':'#0f0f18'; ctx.fillRect(px,py,TILE,TILE);
      if(vis){ ctx.fillStyle='#3c3c58'; ctx.fillRect(px,py,TILE,3); ctx.fillRect(px,py,3,TILE); ctx.fillStyle='#141420'; ctx.fillRect(px,py+TILE-3,TILE,3); ctx.fillRect(px+TILE-3,py,3,TILE); }
    } else if(t===2){
      ctx.fillStyle=vis?'#1a3a5c':'#0a1520'; ctx.fillRect(px,py,TILE,TILE);
    } else {
      ctx.fillStyle=vis?((tx+ty)%2===0?'#1c1c2a':'#191926'):'#0b0b12';
      ctx.fillRect(px,py,TILE,TILE);
      if(vis){ ctx.strokeStyle='#22224433'; ctx.lineWidth=1; ctx.strokeRect(px+.5,py+.5,TILE-1,TILE-1); }
    }
  }

  // Remote players
  Object.entries(remotePlayers).forEach(([id,p])=>drawRemote(p));

  // Local player
  drawLocal();

  // Bullets
  localBullets.forEach(b=>{
    if(!inFOV(b.x,b.y)&&b.ownerTeam!==myTeam) return;
    ctx.fillStyle=b.ownerTeam===myTeam?'#88ddff':'#ffcc44';
    ctx.beginPath(); ctx.arc(b.x,b.y,3,0,Math.PI*2); ctx.fill();
  });

  if(reviveTarget){
    ctx.strokeStyle='#44ff88'; ctx.lineWidth=2;
    ctx.beginPath(); ctx.arc(reviveTarget.x,reviveTarget.y,19,0,Math.PI*2); ctx.stroke();
  }

  drawFog(cx,cy);
  ctx.restore();
  drawMinimap();
}

function inFOV(wx,wy){
  const dx=wx-localPlayer.x,dy=wy-localPlayer.y,d=Math.hypot(dx,dy);
  if(d>FOV_DIST+TILE) return false;
  if(d<localPlayer.radius*2) return true;
  let diff=Math.atan2(dy,dx)-localPlayer.angle;
  while(diff>Math.PI)diff-=Math.PI*2;
  while(diff<-Math.PI)diff+=Math.PI*2;
  return Math.abs(diff)<=FOV_ANGLE/2;
}

function drawFog(camX,camY){
  ctx.fillStyle='rgba(0,0,0,0.9)';
  ctx.beginPath(); ctx.rect(camX,camY,W,H);
  ctx.moveTo(localPlayer.x,localPlayer.y);
  const sa=localPlayer.angle-FOV_ANGLE/2,ea=localPlayer.angle+FOV_ANGLE/2;
  for(let i=0;i<=64;i++){
    const a=sa+(ea-sa)*(i/64),rd=rayCast(localPlayer.x,localPlayer.y,a,FOV_DIST);
    ctx.lineTo(localPlayer.x+Math.cos(a)*rd,localPlayer.y+Math.sin(a)*rd);
  }
  ctx.closePath(); ctx.fill('evenodd');
}

function rayCast(ox,oy,ang,maxD){
  const n=48,ss=maxD/n;
  for(let i=1;i<=n;i++){
    const d=i*ss;
    if(isBlock(Math.floor((ox+Math.cos(ang)*d)/TILE),Math.floor((oy+Math.sin(ang)*d)/TILE))) return d-ss*.5;
  }
  return maxD;
}

function drawRemote(p){
  if(p.dead) return;
  const vis=inFOV(p.x,p.y);
  if(!vis){
    if(p.team!==myTeam) return; // nemici nascosti
    ctx.globalAlpha=0.2; ctx.fillStyle='#5599ff';
    ctx.beginPath(); ctx.arc(p.x,p.y,13,0,Math.PI*2); ctx.fill(); ctx.globalAlpha=1; return;
  }
  ctx.save(); ctx.translate(p.x,p.y);
  const fill=p.team===myTeam?(p.dbno?'#553388':'#224499'):(p.dbno?'#882222':'#bb2222');
  const stroke=p.team===myTeam?(p.dbno?'#aa55ff':'#4488ff'):(p.dbno?'#ff3333':'#ff6666');
  ctx.fillStyle=fill; ctx.beginPath(); ctx.arc(0,0,13,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle=stroke; ctx.lineWidth=2; ctx.stroke();
  if(!p.dbno){
    ctx.strokeStyle=stroke; ctx.lineWidth=3;
    ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(Math.cos(p.angle)*23,Math.sin(p.angle)*23); ctx.stroke();
    ctx.fillStyle='#111'; ctx.fillRect(-13,-23,26,4);
    ctx.fillStyle=(p.hp/100)>.5?'#44ee44':'#ee4444'; ctx.fillRect(-13,-23,26*(Math.max(0,p.hp)/100),4);
  }
  ctx.fillStyle=p.team===myTeam?'#aaccff':'#ffaaaa';
  ctx.font='bold 10px Rajdhani'; ctx.textAlign='center';
  ctx.fillText(p.name,0,-27);
  if(p.dbno){ ctx.fillStyle='#ff4444'; ctx.font='9px Rajdhani'; ctx.fillText('ABBATTUTO',0,26); }
  ctx.restore();
}

function drawLocal(){
  ctx.save(); ctx.translate(localPlayer.x,localPlayer.y);
  const c=localPlayer.dbno?'#aa2222':'#2255ee',sc=localPlayer.dbno?'#ff4444':'#44aaff';
  ctx.fillStyle=c; ctx.beginPath(); ctx.arc(0,0,13,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle=sc; ctx.lineWidth=2; ctx.stroke();
  ctx.strokeStyle=sc; ctx.lineWidth=3;
  ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(Math.cos(localPlayer.angle)*27,Math.sin(localPlayer.angle)*27); ctx.stroke();
  ctx.fillStyle='#111'; ctx.fillRect(-13,-23,26,4);
  ctx.fillStyle='#44ee44'; ctx.fillRect(-13,-23,26*(Math.max(0,localPlayer.hp)/100),4);
  ctx.fillStyle='#fff'; ctx.font='bold 11px Rajdhani'; ctx.textAlign='center';
  ctx.fillText('TU',0,-27);
  ctx.restore();
}

function drawMinimap(){
  const s=128,sx=s/MAP_W,sy=s/MAP_H;
  mmCtx.fillStyle='#050508'; mmCtx.fillRect(0,0,s,s);
  for(let ty=0;ty<MAP_H;ty++) for(let tx=0;tx<MAP_W;tx++){
    const t=MAP[ty][tx];
    mmCtx.fillStyle=t===1?'#2a2a3a':t===2?'#1a3a5a':'#141420';
    mmCtx.fillRect(tx*sx,ty*sy,sx,sy);
  }
  Object.values(remotePlayers).forEach(p=>{
    if(p.dead) return;
    mmCtx.fillStyle=p.team===myTeam?(p.dbno?'#5533aa':'#3366ff'):(p.dbno?'#884444':'#ff4444');
    mmCtx.fillRect(p.x/TILE*sx-2,p.y/TILE*sy-2,4,4);
  });
  mmCtx.fillStyle='#00d4ff';
  mmCtx.fillRect(localPlayer.x/TILE*sx-3,localPlayer.y/TILE*sy-3,6,6);
  const cx=localPlayer.x/TILE*sx,cy=localPlayer.y/TILE*sy,d2=FOV_DIST/TILE*sx;
  mmCtx.strokeStyle='#00d4ff33'; mmCtx.lineWidth=1;
  mmCtx.beginPath(); mmCtx.moveTo(cx,cy); mmCtx.arc(cx,cy,d2,localPlayer.angle-FOV_ANGLE/2,localPlayer.angle+FOV_ANGLE/2); mmCtx.closePath(); mmCtx.stroke();
}

function updateHUD(){
  const w=cw();
  document.getElementById('ammo-hud').innerHTML=w.ammo+'<span>/'+w.res+'</span>';
  document.getElementById('weapon-hud').textContent=w.name+(localPlayer.dbno?' — ABBATTUTO':'');
  document.getElementById('health-fill').style.width=Math.max(0,localPlayer.hp/localPlayer.maxHp*100)+'%';
  document.getElementById('hud-kills').textContent=myKills;
  document.getElementById('ts-b').textContent='BLU '+teamScore.blue;
  document.getElementById('ts-r').textContent=teamScore.red+' ROSSO';
}

function updateSlotUI(){
  ['si1','si2','si3'].forEach((id,i)=>document.getElementById(id).classList.toggle('active',i===localPlayer.slot));
  document.getElementById('si1').textContent='1 '+loadout.slot1.name;
  document.getElementById('si2').textContent='2 '+loadout.slot2.name;
}

function kfAdd(a,b,col='#ff4444'){
  const kf=document.getElementById('killfeed'),el=document.createElement('div');
  el.className='kfe'; el.style.borderLeftColor=col; el.textContent=a+' ▸ '+b;
  kf.appendChild(el); setTimeout(()=>el.remove(),4000);
}

// ============================================================
//  HOME TABS
// ============================================================
function switchTab(t){
  document.querySelectorAll('.nav-tab').forEach((el,i)=>el.classList.toggle('active',['play','armi','profilo'][i]===t));
  document.querySelectorAll('.page').forEach(el=>el.classList.remove('active'));
  document.getElementById('page-'+t).classList.add('active');
  if(t==='armi') buildWeaponGrid();
  if(t==='profilo') updateStats();
}
function buildWeaponGrid(){
  const g=document.getElementById('weapon-grid'); g.innerHTML='';
  WEAPONS.forEach(w=>{
    const c=document.createElement('div');
    c.className='weapon-card'+(loadout.slot1===w?' sel1':'')+(loadout.slot2===w?' sel2':'');
    let badge='';
    if(loadout.slot1===w) badge='<div class="wc-badge b1">SLOT 1</div>';
    else if(loadout.slot2===w) badge='<div class="wc-badge b2">SLOT 2</div>';
    c.innerHTML=`${badge}<div class="w-name">${w.name}</div><div class="w-type">${w.type}</div>
      <div class="w-stat">DANNO<div class="w-bar"><div class="w-fill r" style="width:${Math.min(100,w.dmg)}%"></div></div></div>
      <div class="w-stat">CADENZA<div class="w-bar"><div class="w-fill" style="width:${Math.min(100,w.rof/2.2)}%"></div></div></div>
      <div class="w-stat">CARICATORE<div class="w-bar"><div class="w-fill y" style="width:${Math.min(100,w.mag)}%"></div></div></div>
      <div class="w-stat">RICARICA<div class="w-bar"><div class="w-fill" style="width:${Math.max(5,100-w.reload*20)}%"></div></div></div>
      <div class="slot-btns"><button class="slot-btn" onclick="setSlot(1,'${w.id}')">SLOT 1</button><button class="slot-btn" onclick="setSlot(2,'${w.id}')">SLOT 2</button></div>`;
    g.appendChild(c);
  });
}
function setSlot(s,id){ const w=WEAPONS.find(x=>x.id===id); if(s===1)loadout.slot1=w; else loadout.slot2=w; buildWeaponGrid(); }
function updateStats(){
  document.getElementById('st-kills').textContent=stats.kills;
  document.getElementById('st-deaths').textContent=stats.deaths;
  document.getElementById('st-kd').textContent=stats.deaths?(stats.kills/stats.deaths).toFixed(2):stats.kills;
  document.getElementById('st-revives').textContent=stats.revives;
  document.getElementById('st-games').textContent=stats.games;
  document.getElementById('st-s1').textContent=loadout.slot1.name;
  document.getElementById('st-s2').textContent=loadout.slot2.name;
}

// ============================================================
//  SCREEN MGMT
// ============================================================
function showScreen(id){ document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active')); document.getElementById(id).classList.add('active'); }
function currentScreen(){ return [...document.querySelectorAll('.screen')].find(s=>s.classList.contains('active'))?.id; }
function showConnect(){ showScreen('screen-connect'); }
function showHome(){ showScreen('screen-home'); gameRunning=false; }

// ============================================================
//  INPUT
// ============================================================
document.addEventListener('keydown',e=>{
  keys[e.code]=true;
  if(!gameRunning) return;
  if(e.code==='Digit1'){ localPlayer.slot=0; updateSlotUI(); }
  if(e.code==='Digit2'){ localPlayer.slot=1; updateSlotUI(); }
  if(e.code==='Digit3'){ localPlayer.slot=2; updateSlotUI(); }
  if(e.code==='KeyR'&&!localPlayer.reloading) startReload(localPlayer);
  if(e.code==='KeyQ'){ gameRunning=false; showHome(); }
  e.preventDefault();
});
document.addEventListener('keyup',e=>keys[e.code]=false);
document.addEventListener('mousemove',e=>{ mouse.x=e.clientX; mouse.y=e.clientY; });
document.addEventListener('mousedown',e=>{ if(e.button===0)mouse.down=true; });
document.addEventListener('mouseup',e=>{ if(e.button===0)mouse.down=false; });
document.getElementById('screen-game').addEventListener('contextmenu',e=>e.preventDefault());

// Auto-focus name input
document.getElementById('inp-name').focus();
document.getElementById('inp-name').addEventListener('keydown',e=>{ if(e.code==='Enter') document.getElementById('inp-room').focus(); });
document.getElementById('inp-room').addEventListener('keydown',e=>{ if(e.code==='Enter') connectToServer(); });
</script>
</body>
</html>
