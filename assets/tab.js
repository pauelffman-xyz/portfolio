/* tab.js - Nov 2026. The animated pixel smiley was removed; the tab icon is now the static "PE" monogram
   (assets/favicon.svg, favicon-32.png, apple-touch-icon.png), set by the <link> tags in each page.
   This file only keeps the browser bar color in step with the page background, in light and dark mode. */
(function(){
  function sync(){
    try{
      var bg=getComputedStyle(document.body).backgroundColor;
      if(!bg||bg==='rgba(0, 0, 0, 0)'||bg==='transparent') bg=getComputedStyle(document.documentElement).backgroundColor;
      var m=document.querySelector('meta[name="theme-color"]');
      if(!m){ m=document.createElement('meta'); m.name='theme-color'; document.head.appendChild(m); }
      m.content=bg;
    }catch(e){}
  }
  function start(){ sync(); if(window.MutationObserver) new MutationObserver(sync).observe(document.body,{attributes:true,attributeFilter:['class']}); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
})();
