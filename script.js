// script.js - handles sidebar, typed subtitle, parallax, and canvas rain

document.addEventListener('DOMContentLoaded', () => {
  // Sidebar open/close
  const sidebar = document.getElementById('sidebar');
  document.getElementById('openSidebar').onclick = () => sidebar.classList.add('open');
  document.getElementById('closeSidebar').onclick = () => sidebar.classList.remove('open');

  // Toggle theme (simple invert filter as toy)
  const toggle = document.getElementById('toggleTheme');
  let dark = true;
  toggle.onclick = () => {
    dark = !dark;
    if (!dark) {
      document.documentElement.style.setProperty('--neon-blue', '#89f7ff');
      document.body.style.filter = 'invert(.03) hue-rotate(25deg) saturate(1.1)';
    } else {
      document.documentElement.style.setProperty('--neon-blue', '#00eaff');
      document.body.style.filter = '';
    }
  };

  // Typed subtitle text
  const typedSub = document.getElementById('typed-sub');
  const sentences = [
    "A neon-soaked UI concept — glassmorphism meets motion.",
    "Built with HTML, CSS & vanilla JavaScript.",
    "Glitchy headings, hologram cards, and digital rain.",
  ];
  let si = 0, ti = 0, forward = true;
  function typeLoop() {
    const current = sentences[si];
    if (forward) {
      typedSub.textContent = current.slice(0, ++ti);
      if (ti === current.length) { forward = false; setTimeout(typeLoop, 1200); return; }
    } else {
      typedSub.textContent = current.slice(0, --ti);
      if (ti === 0) { forward = true; si = (si+1) % sentences.length; }
    }
    setTimeout(typeLoop, forward ? 40 : 18);
  }
  typeLoop();

  // Mouse parallax effect
  const hero = document.getElementById('hero');
  hero.addEventListener('mousemove', (e) => {
    const w = hero.clientWidth, h = hero.clientHeight;
    const nx = (e.clientX - w/2) / w;
    const ny = (e.clientY - h/2) / h;
    // move skyline subtly
    const svg = document.querySelector('.skyline');
    svg.style.transform = translate3d(${nx*8}px, ${ny*6}px, 0) rotate(${nx*0.8}deg);
    // shift scan line
    const scan = document.querySelector('.scan-line');
    scan.style.transform = translateX(${nx*40}px) translateY(${ny*40}px);
  });

  // Canvas digital rain
  (() => {
    const c = document.getElementById('rain-canvas');
    const ctx = c.getContext('2d');
    let W = c.width = innerWidth;
    let H = c.height = innerHeight;
    const columns = Math.floor(W/14);
    const drops = Array(columns).fill(1);

    function resize() {
      W = c.width = innerWidth;
      H = c.height = innerHeight;
    }
    window.addEventListener('resize', resize);

    function draw() {
      ctx.fillStyle = 'rgba(0,0,0,0.08)';
      ctx.fillRect(0, 0, W, H);
      ctx.font = '12px monospace';
      for (let i=0;i<drops.length;i++) {
        const x = i * 14;
        const text = Math.random() > 0.9 ? '01' : Math.random() > 0.6 ? '10' : '01';
        ctx.fillStyle = 'rgba(57,255,20,0.06)';
        ctx.fillText(text, x, drops[i] * 14);
        if (drops[i] * 14 > H && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      requestAnimationFrame(draw);
    }
    draw();
  })();

  // Small enter CTA effect
  document.querySelector('.big-neon').addEventListener('click', () => {
    document.getElementById('projects').scrollIntoView({behavior:'smooth'});
  });

});