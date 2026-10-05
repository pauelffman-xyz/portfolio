/* -------------------------------------------------------------
   Paula Elffman - identidad de pestana (el mismo icono en todo el sitio)
   1. El icono es una carita pixelada: un circulo de pixeles con dos
      ojos y una sonrisa, en una grilla de 16 x 16 (cada pixel de la
      grilla es un pixel real de la pestana, por eso se ve nitido).
      Es la misma idea del loader de la home. Al abrir la pagina
      guina un ojo una vez.
      Circulo oscuro con cara clara; si el navegador esta en modo
      oscuro se invierte solo (circulo claro, cara oscura).
   2. La barra del navegador en mobile toma el color de fondo de la pagina
      (y lo sigue al cambiar entre claro y oscuro).
   Uso, dentro del <head>:  <script src="assets/tab.js" defer></script>
   Sin JS queda el favicon fijo de assets/favicon.svg (mismo dibujo).
   ------------------------------------------------------------- */
(function () {
  var INK = '#24242C', PAPER = '#F4F4F6';
  var CIRCLE = 'M5 0h6v1h2v1h1v1h1v2h1v6h-1v2h-1v1h-1v1h-2v1h-6v-1h-2v-1h-1v-1h-1v-2h-1v-6h1v-2h1v-1h1v-1h2z';
  var EYE_L = 'M5 4h2v3h-2z', EYE_R = 'M9 4h2v3h-2z', WINK = 'M8 5h4v1h-4z';
  var SMILE = 'M3 9h2v1h6v-1h2v1h-1v1h-1v1h-6v-1h-1v-1h-1z';

  function svg(wink) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">' +
      '<style>.c{fill:' + INK + '}.f{fill:' + PAPER + '}@media (prefers-color-scheme:dark){.c{fill:' + PAPER + '}.f{fill:' + INK + '}}</style>' +
      '<path class="c" d="' + CIRCLE + '"/>' +
      '<path class="f" d="' + EYE_L + (wink ? WINK : EYE_R) + SMILE + '"/></svg>';
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

  /* 2 - color de la barra del navegador = fondo de la pagina */
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
