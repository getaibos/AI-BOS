/* =========================================================
   AI BOS — Design System
   Palette: Deep Navy bg / Electric Blue / Cyan / Purple
   Type: Poppins (display) + Inter (body)
   ========================================================= */

:root{
  --bg-0: #05080f;
  --bg-1: #0b1120;
  --bg-2: #101a30;
  --blue: #6c63ff;
  --cyan: #00e5ff;
  --purple: #a855f7;
  --white: #ffffff;
  --sub: #b9c0d4;
  --sub-dim: #7c8399;

  --glass-bg: rgba(255,255,255,0.055);
  --glass-bg-strong: rgba(255,255,255,0.09);
  --glass-border: rgba(255,255,255,0.14);
  --glass-shadow: 0 8px 32px rgba(0,0,0,0.45);

  --grad-brand: linear-gradient(120deg, var(--blue) 0%, var(--purple) 52%, var(--cyan) 100%);
  --grad-radial: radial-gradient(circle at 50% 50%, rgba(108,99,255,0.35), transparent 70%);

  --font-display: 'Poppins', 'Montserrat', sans-serif;
  --font-body: 'Inter', 'Manrope', sans-serif;

  --radius-lg: 24px;
  --radius-md: 16px;
  --radius-sm: 10px;

  --container: 1180px;
}

*,*::before,*::after{ box-sizing: border-box; }
html{ scroll-behavior: smooth; }
body{
  margin:0;
  background: var(--bg-0);
  background-image:
    radial-gradient(circle at 15% 0%, rgba(108,99,255,0.16), transparent 40%),
    radial-gradient(circle at 85% 20%, rgba(0,229,255,0.10), transparent 35%),
    radial-gradient(circle at 50% 100%, rgba(168,85,247,0.14), transparent 40%);
  color: var(--white);
  font-family: var(--font-body);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
h1,h2,h3,h4{
  font-family: var(--font-display);
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 .5em;
  letter-spacing: -0.01em;
}
p{ margin: 0 0 1em; color: var(--sub); }
a{ color: inherit; text-decoration: none; }
img{ max-width:100%; display:block; }
ul{ list-style:none; margin:0; padding:0; }
button{ font-family: inherit; cursor:pointer; }

.container{
  width: 100%;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 24px;
}
.eyebrow{
  display:inline-flex; align-items:center; gap:8px;
  font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--cyan); font-weight:600; margin-bottom: 14px;
}
.eyebrow::before{
  content:''; width:8px; height:8px; border-radius:50%;
  background: var(--grad-brand); box-shadow: 0 0 12px var(--cyan);
}
.gradient-text{
  background: var(--grad-brand);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.section{ padding: 96px 0; position: relative; }
.section-head{ max-width: 640px; margin-bottom: 56px; }
.section-head.center{ margin-left:auto; margin-right:auto; text-align:center; }
.section-head p{ font-size: 1.05rem; }

/* ---------- Glass surfaces ---------- */
.glass{
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-radius: var(--radius-lg);
  box-shadow: var(--glass-shadow);
}
.glass-card{
  padding: 28px;
  transition: transform .35s ease, border-color .35s ease, background .35s ease;
}
.glass-card:hover{
  transform: translateY(-6px);
  border-color: rgba(255,255,255,0.28);
  background: var(--glass-bg-strong);
}

/* ---------- Buttons ---------- */
.btn{
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  padding: 14px 28px; border-radius: 999px; font-weight:600; font-size:0.95rem;
  border: 1px solid transparent; transition: all .25s ease; white-space: nowrap;
}
.btn-primary{
  background: var(--grad-brand); color:#fff;
  box-shadow: 0 8px 24px rgba(108,99,255,0.35);
}
.btn-primary:hover{ transform: translateY(-2px); box-shadow: 0 12px 32px rgba(108,99,255,0.5); }
.btn-ghost{
  background: rgba(255,255,255,0.04); color:#fff; border-color: var(--glass-border);
}
.btn-ghost:hover{ background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.3); }
.btn-block{ width:100%; }
.btn-sm{ padding: 10px 20px; font-size: 0.85rem; }

/* ---------- Nav ---------- */
.nav{
  position: sticky; top:0; z-index: 100;
  background: rgba(6,10,20,0.7);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.nav-inner{
  display:flex; align-items:center; justify-content:space-between;
  padding: 16px 24px; max-width: var(--container); margin:0 auto;
}
.logo{ display:flex; align-items:center; gap:10px; font-family: var(--font-display); font-weight:700; font-size:1.25rem; }
.logo-mark{
  width:34px; height:34px; border-radius:10px; position:relative;
  background: var(--grad-brand);
  box-shadow: 0 0 18px rgba(108,99,255,0.55);
}
.logo-mark::before{
  content:''; position:absolute; inset:6px; border-radius:6px;
  background: var(--bg-0);
}
.logo-mark::after{
  content:''; position:absolute; inset:11px; border-radius:50%;
  background: var(--grad-brand); box-shadow: 0 0 10px var(--cyan);
}
.nav-links{ display:flex; align-items:center; gap:6px; }
.nav-links a{
  padding: 10px 16px; border-radius: 999px; font-size: 0.92rem; color: var(--sub);
  transition: all .2s ease;
}
.nav-links a:hover, .nav-links a.active{ color:#fff; background: rgba(255,255,255,0.08); }
.nav-actions{ display:flex; align-items:center; gap:10px; }
.nav-toggle{
  display:none; background:none; border:none; width:38px; height:38px;
  flex-direction:column; align-items:center; justify-content:center; gap:5px;
}
.nav-toggle span{ width:22px; height:2px; background:#fff; border-radius:2px; }

@media (max-width: 920px){
  .nav-links{
    position:fixed; inset: 68px 16px auto 16px; flex-direction:column; align-items:stretch;
    background: rgba(10,14,26,0.97); border:1px solid var(--glass-border); border-radius: var(--radius-md);
    padding: 12px; gap:2px; transform: translateY(-12px); opacity:0; pointer-events:none; transition: all .25s ease;
  }
  .nav-links.open{ transform: translateY(0); opacity:1; pointer-events:auto; }
  .nav-links a{ padding: 12px 16px; }
  .nav-toggle{ display:flex; }
  .nav-actions .btn-ghost{ display:none; }
}

/* ---------- Hero / AI core visual ---------- */
.hero{ padding: 72px 0 40px; position:relative; }
.hero-grid{ display:grid; grid-template-columns: 1.05fr 0.95fr; gap: 56px; align-items:center; }
.hero h1{ font-size: clamp(2.2rem, 4.2vw, 3.4rem); }
.hero-sub{ font-size: 1.08rem; max-width: 480px; }
.hero-cta{ display:flex; gap:14px; margin: 28px 0 40px; flex-wrap:wrap; }
.hero-stats{ display:flex; gap: 34px; flex-wrap:wrap; }
.hero-stat b{ font-family: var(--font-display); font-size: 1.5rem; display:block; }
.hero-stat span{ font-size: 0.82rem; color: var(--sub-dim); }

.ai-core{
  position: relative; width: 100%; aspect-ratio: 1/1; max-width: 460px; margin: 0 auto;
  display:flex; align-items:center; justify-content:center;
}
.ai-core canvas{ position:absolute; inset:0; width:100%; height:100%; opacity:0.55; }
.core-ring{
  position:absolute; border-radius:50%; border: 1px solid rgba(255,255,255,0.14);
}
.core-ring.r1{ inset: 0; animation: spin 22s linear infinite; border-color: rgba(0,229,255,0.25); }
.core-ring.r2{ inset: 12%; animation: spin 16s linear infinite reverse; border-color: rgba(168,85,247,0.28); }
.core-ring.r3{ inset: 26%; animation: spin 10s linear infinite; border-color: rgba(108,99,255,0.35); }
.core-orb{
  width: 34%; height:34%; border-radius:50%;
  background: radial-gradient(circle at 35% 30%, #dfe6ff, var(--blue) 40%, var(--purple) 75%, var(--cyan) 100%);
  box-shadow: 0 0 60px rgba(108,99,255,0.65), 0 0 120px rgba(0,229,255,0.35);
  animation: pulse 4s ease-in-out infinite;
  position:relative; z-index:2;
}
.core-node{
  position:absolute; padding: 8px 14px; font-size: 0.78rem; font-weight:600;
  border-radius: 999px; background: var(--glass-bg-strong); border:1px solid var(--glass-border);
  backdrop-filter: blur(10px); animation: float 6s ease-in-out infinite;
  display:flex; align-items:center; gap:6px; white-space:nowrap;
}
.core-node i{ width:6px; height:6px; border-radius:50%; background: var(--cyan); box-shadow:0 0 8px var(--cyan); }
.core-node.n1{ top: 2%; left: 52%; animation-delay: 0s; }
.core-node.n2{ top: 24%; left: -4%; animation-delay: .8s; }
.core-node.n3{ bottom: 18%; left: -2%; animation-delay: 1.6s; }
.core-node.n4{ bottom: 0%; left: 46%; animation-delay: 2.4s; }
.core-node.n5{ top: 20%; right: -8%; animation-delay: 1.2s; }
.core-node.n6{ bottom: 22%; right: -6%; animation-delay: 2s; }

@keyframes spin{ to{ transform: rotate(360deg); } }
@keyframes pulse{ 0%,100%{ transform: scale(1); } 50%{ transform: scale(1.06); } }
@keyframes float{ 0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-10px); } }

@media (max-width: 920px){
  .hero-grid{ grid-template-columns: 1fr; }
  .ai-core{ max-width: 360px; }
}

/* ---------- Grids ---------- */
.grid{ display:grid; gap: 24px; }
.grid-2{ grid-template-columns: repeat(2,1fr); }
.grid-3{ grid-template-columns: repeat(3,1fr); }
.grid-4{ grid-template-columns: repeat(4,1fr); }
@media (max-width: 920px){ .grid-3, .grid-4{ grid-template-columns: repeat(2,1fr);} }
@media (max-width: 620px){ .grid-2, .grid-3, .grid-4{ grid-template-columns: 1fr; } }

/* ---------- Icon tile ---------- */
.icon-tile{
  width: 52px; height:52px; border-radius: 14px; display:flex; align-items:center; justify-content:center;
  background: var(--grad-brand); margin-bottom: 18px; flex-shrink:0;
}
.icon-tile svg{ width:26px; height:26px; stroke:#fff; }
.icon-tile.outline{ background: rgba(255,255,255,0.06); border:1px solid var(--glass-border); }
.icon-tile.outline svg{ stroke: var(--cyan); }

/* feature / agent card */
.agent-card{ text-align:left; }
.agent-card h3{ font-size:1.05rem; margin-bottom:6px; }
.agent-card p{ font-size:0.92rem; margin:0; }

/* ---------- Steps / timeline ---------- */
.steps{ position:relative; }
.step{
  display:grid; grid-template-columns: 56px 1fr; gap: 22px; padding: 0 0 40px 0; position:relative;
}
.step:last-child{ padding-bottom:0; }
.step-num{
  width:56px; height:56px; border-radius:50%; background: var(--grad-brand);
  display:flex; align-items:center; justify-content:center; font-family:var(--font-display);
  font-weight:700; font-size:1.1rem; box-shadow: 0 0 24px rgba(108,99,255,0.4); position:relative; z-index:2;
}
.step::before{
  content:''; position:absolute; left:27px; top:56px; bottom:-4px; width:2px;
  background: linear-gradient(var(--blue), var(--purple));
  opacity:.4;
}
.step:last-child::before{ display:none; }
.step-body h3{ margin-bottom:6px; font-size:1.15rem; }

/* ---------- Dashboard mock ---------- */
.dash-mock{ padding: 22px; }
.dash-topbar{ display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; }
.dash-dots{ display:flex; gap:6px; }
.dash-dots span{ width:9px; height:9px; border-radius:50%; background: rgba(255,255,255,0.18); }
.dash-grid{ display:grid; grid-template-columns: 1.4fr 1fr; gap:16px; }
.dash-panel{
  background: rgba(255,255,255,0.04); border:1px solid var(--glass-border); border-radius: var(--radius-md);
  padding: 16px;
}
.dash-panel h4{ font-family: var(--font-body); font-size:0.8rem; color: var(--sub-dim); font-weight:600; margin-bottom:12px; text-transform:uppercase; letter-spacing:.06em;}
.bar-chart{ display:flex; align-items:flex-end; gap:8px; height:120px; }
.bar-chart div{ flex:1; border-radius:6px 6px 0 0; background: linear-gradient(180deg, var(--cyan), var(--blue)); }
.donut{
  width:110px; height:110px; border-radius:50%; margin: 6px auto;
  background: conic-gradient(var(--blue) 0 35%, var(--purple) 35% 65%, var(--cyan) 65% 100%);
  position:relative;
}
.donut::before{ content:''; position:absolute; inset:22px; border-radius:50%; background: var(--bg-1); }
.kpi-row{ display:flex; justify-content:space-between; margin-top:10px; font-size:0.8rem; color:var(--sub-dim); }
.kpi-row b{ color:#fff; display:block; font-size:1.2rem; font-family: var(--font-display); }

/* ---------- Pricing ---------- */
.price-card{ text-align:center; position:relative; }
.price-card.featured{ border-color: rgba(0,229,255,0.5); background: var(--glass-bg-strong); transform: scale(1.03); }
.price-card .tag{
  position:absolute; top:-12px; left:50%; transform:translateX(-50%);
  background: var(--grad-brand); font-size:0.7rem; font-weight:700; padding:5px 14px; border-radius:999px;
  text-transform:uppercase; letter-spacing:.05em;
}
.price-amount{ font-family: var(--font-display); font-size: 2.4rem; margin: 14px 0 4px; }
.price-amount span{ font-size:0.95rem; color: var(--sub-dim); font-weight:400; }
.price-list{ margin: 22px 0; text-align:left; }
.price-list li{ display:flex; gap:10px; padding: 8px 0; font-size:0.92rem; color: var(--sub); border-top:1px solid rgba(255,255,255,0.06); }
.price-list li:first-child{ border-top:none; }
.price-list li svg{ width:16px; height:16px; stroke: var(--cyan); flex-shrink:0; margin-top:2px; }

/* ---------- Forms ---------- */
.form-group{ margin-bottom: 18px; }
.form-group label{ display:block; font-size:0.85rem; color: var(--sub); margin-bottom:8px; }
.form-control{
  width:100%; padding: 13px 16px; border-radius: var(--radius-sm); border:1px solid var(--glass-border);
  background: rgba(255,255,255,0.04); color:#fff; font-family: inherit; font-size:0.95rem;
}
.form-control:focus{ outline:2px solid var(--cyan); outline-offset:1px; border-color: transparent; }
textarea.form-control{ resize: vertical; min-height:120px; }
.form-note{ font-size:0.82rem; color: var(--sub-dim); margin-top:8px; }
.form-success{ display:none; background: rgba(0,229,255,0.1); border:1px solid rgba(0,229,255,0.35); border-radius: var(--radius-sm); padding:14px 16px; font-size:0.9rem; margin-top:16px; }
.form-success.show{ display:block; }

/* ---------- Auth ---------- */
.auth-wrap{ min-height: calc(100vh - 74px); display:flex; align-items:center; justify-content:center; padding: 60px 20px; }
.auth-card{ width:100%; max-width: 420px; padding: 40px 34px; }
.auth-tabs{ display:flex; gap:6px; margin-bottom:28px; background: rgba(255,255,255,0.04); border-radius:999px; padding:4px; }
.auth-tab{ flex:1; text-align:center; padding:10px; border-radius:999px; font-size:0.9rem; font-weight:600; color:var(--sub-dim); }
.auth-tab.active{ background: var(--grad-brand); color:#fff; }
.social-row{ display:flex; gap:12px; margin: 20px 0; }
.social-btn{ flex:1; display:flex; align-items:center; justify-content:center; gap:8px; padding:11px; border-radius: var(--radius-sm); border:1px solid var(--glass-border); background: rgba(255,255,255,0.03); font-size:0.85rem; }
.divider{ display:flex; align-items:center; gap:12px; color: var(--sub-dim); font-size:0.8rem; margin: 20px 0; }
.divider::before, .divider::after{ content:''; flex:1; height:1px; background: rgba(255,255,255,0.12); }
.auth-form-panel{ display:none; }
.auth-form-panel.active{ display:block; }

/* ---------- Profile / CEO ---------- */
.profile-photo{
  width: 220px; aspect-ratio: 1/1; border-radius: 28px; overflow:hidden; position:relative;
  border: 1px solid var(--glass-border); flex-shrink:0;
}
.profile-photo .avatar-fill{
  width:100%; height:100%;
  background: radial-gradient(circle at 35% 25%, rgba(0,229,255,0.5), transparent 55%), var(--grad-brand);
  display:flex; align-items:center; justify-content:center;
}
.profile-photo svg{ width:56%; height:56%; opacity:0.85; }

/* ---------- Why-us tiles ---------- */
.why-tile{ text-align:center; }
.why-tile .icon-tile{ margin: 0 auto 16px; }

/* ---------- Footer ---------- */
.footer{ border-top: 1px solid rgba(255,255,255,0.08); padding: 64px 0 32px; margin-top: 60px; }
.footer-grid{ display:grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 40px; }
.footer h5{ font-family: var(--font-display); font-size:0.9rem; margin-bottom:16px; }
.footer li{ margin-bottom:10px; }
.footer a{ color: var(--sub); font-size:0.9rem; }
.footer a:hover{ color: var(--cyan); }
.footer-brand p{ font-size:0.9rem; max-width:280px; }
.social-icons{ display:flex; gap:10px; margin-top:16px; }
.social-icons a{ width:36px; height:36px; border-radius:50%; border:1px solid var(--glass-border); display:flex; align-items:center; justify-content:center; }
.social-icons svg{ width:16px; height:16px; }
.footer-bottom{ border-top:1px solid rgba(255,255,255,0.08); padding-top:24px; text-align:center; font-size:0.82rem; color: var(--sub-dim); }
@media (max-width: 820px){ .footer-grid{ grid-template-columns: 1fr 1fr; } }

@media (max-width: 700px){
  .dash-grid{ grid-template-columns: 1fr; }
  .auth-card{ padding: 32px 22px; }
}

/* ---------- Reveal on scroll ---------- */
.reveal{ opacity:0; transform: translateY(24px); transition: opacity .7s ease, transform .7s ease; }
.reveal.in{ opacity:1; transform: translateY(0); }

/* ---------- Page hero (inner pages) ---------- */
.page-hero{ padding: 60px 0 20px; text-align:center; }
.page-hero .section-head{ margin: 0 auto; max-width: 720px; }

/* ---------- Misc ---------- */
.divider-line{ height:1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent); margin: 0; }
.badge{ display:inline-block; padding:4px 12px; border-radius:999px; font-size:0.72rem; font-weight:700; background: rgba(0,229,255,0.12); color: var(--cyan); border:1px solid rgba(0,229,255,0.3); }
