(function(){
  // Mobile nav
  const toggle = document.querySelector('.nav__toggle');
  const list = document.getElementById('nav__list');
  if(toggle && list){
    toggle.addEventListener('click', ()=>{
      const expanded = list.getAttribute('aria-expanded') === 'true';
      list.setAttribute('aria-expanded', String(!expanded));
      toggle.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // Year
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // Theme toggle
  const btn = document.getElementById('themeToggle');
  const setTheme = (t)=>{
    document.documentElement.dataset.theme = t;
    try{ localStorage.setItem('theme', t);}catch(e){}
  };
  const saved = (()=>{ try{return localStorage.getItem('theme')}catch(e){ return null }})();
  if(saved){ setTheme(saved); }
  if(btn){
    btn.addEventListener('click', ()=>{
      const cur = document.documentElement.dataset.theme || 'auto';
      const next = cur === 'dark' ? 'light' : cur === 'light' ? 'auto' : 'dark';
      setTheme(next);
      btn.title = 'Tema: ' + next;
    });
  }

  // Service worker
  if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
      navigator.serviceWorker.register('/sw.js').catch(()=>{});
    });
  }
})();
