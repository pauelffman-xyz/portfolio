/* -------------------------------------------------------------
   Paula Elffman - identidad de pestana (el mismo icono en todo el sitio)
   1. El icono es una carita: los dos ojos y la sonrisa salen de las
      letras de "Pau" (ver el loader de la home). Al abrir la pagina
      guina un ojo una vez.
   2. La barra del navegador en mobile toma el color de fondo de la pagina
      (y lo sigue al cambiar entre claro y oscuro).
   Uso, dentro del <head>:  <script src="assets/tab.js" defer></script>
   Sin JS queda el favicon fijo de assets/favicon.svg.
   ------------------------------------------------------------- */
(function () {
  var TILE = '#24242C', INK = '#F4F4F6';

  function svg(wink) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">' +
      '<rect width="32" height="32" rx="8" fill="' + TILE + '"/>' +
      '<circle cx="10.5" cy="11.5" r="2.7" fill="none" stroke="' + INK + '" stroke-width="2.6"/>' +
      (wink
        ? '<path d="M17 11.5h9" fill="none" stroke="' + INK + '" stroke-width="3"/>'
        : '<circle cx="21.5" cy="11.5" r="2.7" fill="none" stroke="' + INK + '" stroke-width="2.6"/>') +
      '<path d="M8.5 17a7.5 7.5 0 0 0 15 0" fill="none" stroke="' + INK + '" stroke-width="4"/></svg>';
  }

  /* 1 - guino: abierto, cerrado un instante, abierto */
  var still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!still && !document.hidden) {
    var link;
    var paint = function (wink) {
      if (!link) {
        [].forEach.call(document.querySelectorAll('link[rel~="icon"]'), function (l) { l.parentNode.removeChild(l); });
        link = document.createElement('link'); link.rel = 'icon'; link.type = 'image/svg+xml';
        document.head.appendChild(link);
      }
      link.href = 'data:image/svg+xml,' + encodeURIComponent(svg(wink));
    };
    paint(false);
    [[900, true], [1250, false]].forEach(function (f) { setTimeout(function () { paint(f[1]); }, f[0]); });
  }

  /* 2 · color de la barra del navegador = fondo de la página */
  var meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) { meta = document.createElement('meta'); meta.name = 'theme-color'; document.head.appendChild(meta); }
  function syncBar() {
    if (!document.body) return;
    var bg = getComputedStyle(document.body).backgroundColor;
    if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') meta.content = bg;
  }
  function watch() {
    syncBar();
    if ('MutationObserver' in window) new MutationObserver(syncBar).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }
  if (document.body) watch(); else document.addEventListener('DOMContentLoaded', watch);
})();
