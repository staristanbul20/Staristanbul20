
(function(){
  const key='staristanbul20-lang';
  const buttons=[...document.querySelectorAll('[data-lang]')];
  function setLang(lang){
    document.documentElement.lang=lang;
    document.documentElement.dir=lang==='ar'?'rtl':'ltr';
    document.body.classList.toggle('english',lang==='en');
    document.querySelectorAll('[data-ar][data-en]').forEach(el=>{el.innerHTML=lang==='en'?el.dataset.en:el.dataset.ar});
    document.querySelectorAll('[data-wa-ar][data-wa-en]').forEach(el=>{el.href='https://wa.me/905377273314?text='+encodeURIComponent(lang==='en'?el.dataset.waEn:el.dataset.waAr)});
    document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
    localStorage.setItem(key,lang);
  }
  buttons.forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
  setLang(localStorage.getItem(key)||'ar');
})();
