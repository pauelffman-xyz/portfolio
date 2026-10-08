# Paula Elffman — Portfolio OS · Design Bible

*Última actualización: 8 de octubre de 2026 — **Home: copy nuevo en el hero y en Selected work.** (1) El párrafo del hero (`.hello-sub`) dice ahora qué diseña Paula, para quién, hace cuánto y dónde está hoy. (2) Las cinco líneas de las cards de Selected work (`.wc-line`) pasaron a ser "qué producto + un dato que el caso sostiene". (3) La meta description de `index.html` (`description`, `og:description`, `twitter:description`) quedó alineada con el hero. (4) En Experience (itti), el dato "44.6% / Monchis CVR" pasó a "44.6% / Favorite Places CVR", por la misma regla de que un número va con lo que mide. (5) `sukupay-proto-case.html`: "4 Partners" pasó a "3 Brands" en los datos del problema y en el cierre. (6) `vendor-tool-case.html`: se corrigió un caption que era una nota de trabajo, y se resolvieron y borraron las 14 notas `TODO` del código (rol, revisión de fotos por el equipo, un solo dato de 72 h, meta +98%, entre otras). Por eso la línea de vendor tool en la home pasó a "72 h of manual catalog work, down to zero." (7) `monchis-case.html`: los cuatro números animados de la investigación van escritos en el HTML con su valor real, y pasa a ser regla para todos los cases. No se sacó ni se movió ningún caso. Ver "Copy de la home: hero y Selected work (8 de octubre de 2026)" en AJUSTES RÁPIDOS POST-REVIEW, que incluye las reglas de copy y los pendientes de la revisión.*

*Última actualización previa: 8 de octubre de 2026 — **SukuPay Prototyper: Genesis es del equipo de ingeniería, board de componentes y header en el color del link.** (1) `sukupay-proto-case.html` deja en claro que Genesis lo pensaron y construyeron los devs (Alejandro Alvarez, Engineering Manager; Joaquin Beceiro, Frontend; Illan Cohn, Backend) y que Paula lo usa en su proceso de trabajo. Van nombrados en el cover y en el bloque de Genesis. Ver "Cambios en `sukupay-proto-case.html` (8 de octubre de 2026)". (2) El caso pasó a llamarse **SukuPay · Prototyper** (antes "SukuPay · Design system") en el header, la pestaña, el título al compartir y el footer. (3) **Los dos verdes, animados:** los círculos de lima y teal van centrados y casi tocándose, con animación. (4) **Design system como board**, debajo de los círculos. Ver "Board de SukuPay Prototyper". (5) **Regla nueva para todos los cases: el texto del header va en el mismo color que "Back to portfolio"**, ya no en gris. Ver "Texto del header en el color del link de volver (`#nav-ink`)". Aplicado en los 16 cases. (6) **Header transparente en todos:** los 12 cases que no tenían el bloque `#nav-glass` lo recibieron (ver la tabla de "Header transparente arriba, vidrio al hacer scroll"). (7) **SukuPay Home: el UX audit en formato rojo de error.** Las diez cards blancas donde Paula analiza el producto pasaron a ser ítems rojos como la lista de problemas de monchis. Ver "Cambios en `sukupay-case.html` (8 de octubre de 2026)".*

*Última actualización previa: 7 de octubre de 2026 — **SmartPass: design system como board y header transparente.** (1) La sección Design System de `smartpass-case.html` dejó de ser cuatro grupos apilados (escalas de color, tipografía, toasts, filtros) y pasó a ser **un solo board** con todo a la vista: tipografía, botones, código de verificación, filtro, modal, íconos, colores, toast y badges. Está hecho en HTML/CSS, no es una imagen, y los componentes van **equidistantes**: una sola separación entre todos y un solo margen. Ver "DESIGN SYSTEM COMO BOARD" dentro de CASE STUDIES. (2) `smartpass-case.html` recibió el bloque `#nav-glass`: el header va sin fondo arriba de todo (se ve el degradé del cover) y toma el vidrio al hacer scroll. Ver "Header transparente arriba, vidrio al hacer scroll". (3) **Home: cover nuevo en la card de smartpass** (More work): `assets/smartpass-accreditations.webp`, el teléfono con la pantalla de acreditaciones, en lugar del login provisorio. Ver "Notas de covers" en "Home: grilla de casos". (4) **muv: imagen de Envío reemplazada** por el abanico de cuatro pantallas (`muv-assets/muv-envio-fan.webp`) sobre un fondo `--bg3`. También se eliminó de Process la figura del flujo completo (`muv-full-flow.webp`). Ver "Cambios en `vendor-tool-case.html` y `muv-case.html` (6 de octubre de 2026)". (5) **muv: design system como board.** La biblioteca de componentes en imágenes se reemplazó por un board con los componentes reconstruidos en HTML/CSS desde el frame de Figma. Ver "Board de muv". (6) **smartpass, mobile:** Screen 03 y Screen 04 ocupan todo el ancho en el celular (antes quedaban al 72% y 60%). Ver "smartpass-case.html — pantallas sueltas en mobile". (7) **muv, 7 de octubre:** se corrigieron las pantallas Destination y Categories (mockups nuevos `-v2`) y se le dio margen izquierdo a la imagen de las dos homes. Ver "Cambios en `muv-case.html` (7 de octubre de 2026)". (8) **Vendor Tool, 7 de octubre:** el hero abre con la foto de la laptop (la de la card de la home), la composición de cinco pantallas va debajo, y en mobile las capturas se achican en proporción en vez de cortarse con scroll horizontal. Ver "Cambios en `vendor-tool-case.html` (7 de octubre de 2026)". (9) **Vendor Tool: design system como board.** La "Component library" colapsada con nueve capturas se reemplazó por el board con los componentes en HTML/CSS (botones, switches, chips, buscador de categorías, tabs de la cola, navegación lateral y colores), que en mobile se apila. Ver "Board de Vendor Tool". (10) **Vendor Tool: la captura de la cola de órdenes pasó a ser dos order cards en código.** En la decisión 2 se quitó `vt-orders-queue.webp` (se veía borrosa) y en su lugar van las dos cards de "Preparando", en tiempo y pasada de límite, hechas en HTML/CSS desde Figma, más chicas y sobre un fondo neutro. Ver "Cambios en `vendor-tool-case.html` (7 de octubre de 2026)".*

*Última actualización previa: 6 de octubre de 2026 — **Cases: header transparente en Vendor Tool y equipo en el hero.** (1) `vendor-tool-case.html` recibió el bloque `#nav-glass` que ya tenía `muv-case.html`: el header de arriba (`.back-nav`) va sin fondo mientras la página está arriba de todo y toma el vidrio al hacer scroll. Le faltaba, por eso seguía con fondo. Ver "Header transparente arriba, vidrio al hacer scroll" dentro de CASE STUDIES. (2) **Equipo en el bloque de datos del hero:** Vendor Tool suma la fila Team (Lucia Giacomelli, Product Manager; Fabian de la Cruz, Engineering Manager) y muv completa la suya (Passengers: Nathalia Torres, PM; Gabriel Vargas, Engineering Manager; data). El degradé del hero (`--grad-warm`) no se tocó: sigue siendo regla.*

*Última actualización previa: 5 de octubre de 2026 — **About: limpieza y datos de experiencia.** Se quitaron dos textos (el tagline bajo el statement y la frase "My primary tools are Figma & Claude…"), y los 21 chips verdes del timeline de Experience (`.dv-tag`) pasaron a ser **datos** (`.dv-facts`: valor arriba, etiqueta abajo, sin píldora ni verde). De paso, fechas y ciudad del timeline y el rótulo "My superpower" quedaron alineados a la regla Editorial. Ver "About: limpieza y datos de experiencia" en AJUSTES RÁPIDOS POST-REVIEW. El mismo día, **el icono de la pestaña pasó a ser una carita pixelada** (círculo de píxeles, 16×16), ver "Pestaña: carita pixelada que guiña".*

*Última actualización previa: Octubre 2026 — **etiquetas «Editorial» en todo el sitio**: se eliminó el tratamiento de micro-etiqueta en mayúsculas (8–11px, mono o Space Grotesk, tracking .12–.18em, rayita de color adelante) en la home y en los 14 cases del template viejo. Ahora todas las etiquetas siguen el modelo de `muv-case.html` y `vendor-tool-case.html`: tipografía del cuerpo (Geist, o Inter en los cases que usan Inter), minúsculas con mayúscula inicial, sin tracking, gris `--ash`, sin rayita. Ver la sección nueva "ETIQUETAS — ESTILO EDITORIAL" dentro de DESIGN TOKENS. También en esta pasada: limpieza de 90 archivos sin uso (65 MB) e imagen nueva en la tarjeta de Foody de la home (`assets/foody-home.webp`).*

*Última actualización previa: Octubre 2026 — tres arreglos en la home + un cambio de copy. (1) **Carousel horizontal con auto-avance y arrastre** (dedo o mouse), reescrito en JS: la animación CSS pura se trababa en mobile y no se podía mover a mano. (2) **Pantalla en blanco al volver de un case con «atrás»**: el navegador restauraba la home desde bfcache con el overlay del Wipe todavía tapando todo; ahora un listener `pageshow` lo destapa. (3) **Esquinas inferiores de las cards del carousel cortadas**: no era el `border-radius`, era el `.projects-header` (margen negativo) tapando los últimos 32px (mobile) / 8px (desktop) de cada card; se subió el `padding-bottom` del carousel. Además, el intro de "AI in my workflow" ahora dice "My primary tool is **Figma & Claude**". **Luego se aplicó el mismo arreglo de `pageshow` a los 15 cases con overlay y se arregló el botón volver muerto de `elektra-otp.html`** (ver "Wipe Transition → Volver con «atrás»"). Ver "Carousel — auto-avance + arrastre (Octubre 2026)", "Carousel — esquinas inferiores cortadas", "Wipe Transition → Volver con «atrás»" y "AI in my workflow".*

*Última actualización previa: Octubre 2026 — **dark mode accesible en los cases**, empezando por `monchis-case.html`: auditoría WCAG AA automática (238 textos fallaban en dark, 218 en light → 0 en ambos), capa `<style id="theme-a11y">` con tokens nuevos (`--surface`, `--red-fill`, `--green-ink`, `--mock-ink`), regla de "mockups claros en ambos modos" y script `a11y-audit.py`. Ver la sección nueva "DARK MODE ACCESIBLE EN CASES" dentro de CASE STUDIES.*

*Última actualización previa: Septiembre 2026 — bloque v3 (degradés, aire, sombras y animaciones con pausa estilo Apple) aplicado a los 13 cases restantes con un "adaptador" para el template viejo `.section`/`.cover`. Ver "Adaptador v3 para el template viejo" dentro de "CASE STUDIES — LENGUAJE VISUAL v3".*

*Última actualización previa: Septiembre 2026. Nuevo **lenguaje visual v3 para los case studies**, que pasa a ser regla para todos los cases: (1) cuatro ajustes estilo Apple/Mac (animaciones con pausa y `--ease-apple`, más espacio con `--sec`/`--stack` más grandes, sombras amplias `--sh-card`/`--sh-float` que reemplazan los bordes, degradés que se funden en blanco `--grad-*`, con la regla `.sec.tint + .sec.tint` para no cortar dos fondos seguidos); (2) **escenas tipo dibujo** en SVG inline para contar las situaciones del caso (arco frustración → causa → principio → resolución, como máximo una por sección, código de globos fijo, dos acentos de marca por case). Implementado en `muv-case.html` (escena 3 + bloque v3; además se eliminó la decisión "Navy for action, orange for the brand" y la sección pasó a "Three decisions"). Pendiente en los otros cases. Ver la sección nueva "CASE STUDIES — LENGUAJE VISUAL v3".*

*Última actualización previa: Septiembre 2026 — `index.html` externalizado: pesaba 16.7MB (98% eran imágenes/videos en base64 inline). Se sacaron los 18 assets únicos a una carpeta `assets/` nueva (webp/jpg/webm reales, `src="assets/..."` en vez de data URI), con tres optimizados de paso — el PNG de Monchis (2.3MB→40KB, resize a 900px alto + WebP), la foto de perfil (1.99MB→23KB, se mostraba a 100×100px pero pesaba 2268×4032px) y el video de `muv` (3.43MB→800KB, era 2560×1440 sin necesidad, se bajó a 960×540 y se sacó el audio que igual estaba muted). `index.html` quedó en 282KB. De paso se corrigió un bug preexistente (no introducido en esta sesión): el `<!DOCTYPE html>` y el `<html lang="en">` de apertura venían corrompidos — el favicon en base64 se había comido ese pedazo, dejando literalmente `<!DOassets/favicon.webp"en">` como primera línea del archivo. Ver detalle y la nueva regla de ARCHIVOS en "ÍNDEX — Assets externalizados" dentro de CASE STUDIES / sección general.*

*Última actualización previa: Septiembre 2026 — `sukupay-case.html`: se embebió el prototipo interactivo real (`sukupay-home-prototype.html`, un "Bundled Page" exportado de la herramienta de prototipado — no un case study nuevo) dentro de la sección "Result · Two Directions Explored", debajo del montage estático de "The North" proposal, vía `<iframe src="sukupay-home-prototype.html" width="100%" height="1000">`. Nuevo archivo agregado a ARCHIVOS y nueva sección "Prototipo interactivo embebido (iframe)" dentro de CASE STUDIES con el gotcha de fondo claro fijo del bundle vs. dark mode del case. Ver detalle ahí.*

*Última actualización previa: Septiembre 2026 — tres assets nuevos en el gallery: (1) `.tile-muv` — el cover de video se reemplazó por contenido real (antes era un placeholder), pero el archivo subido venía en H.264/AAC y **no reproduce como `data:` URI en navegadores sin códecs propietarios** (ver gotcha nuevo en "Covers de tiles animados"); se transcodificó a VP9/Opus WebM, mismo patrón que ya usaba el tile, pero el peso subió de ~624KB a ~3.5MB — queda documentado como excepción al protocolo de IMÁGENES. (2) `.tile-smartpass` — cover cambiado de screenshot del dashboard a screenshot del login, WebP ~74KB (dentro de protocolo). (3) `.tile-memorable` (case `drivers`) — cover cambiado a un mockup nuevo de 3 teléfonos, WebP ~270KB (dentro de protocolo). Ver notas nuevas dentro de PROJECTS VIEW.*

*Última actualización previa: Septiembre 2026 — carousel horizontal: se sacó `memorable` (2 cards, ambas mitades del loop) — el case ya vive solo abajo, en el gallery, para no duplicarlo; la card de Monchis home se reemplazó por un asset nuevo (`02.png`, 1448×1520, mismo PNG con alpha que ya usaba esa card, para respetar el drop-shadow del mockup) en ambas mitades del loop. Gallery: se reordenó visualmente `foody`/`hotaru`/`everyone` (a pedido: `foody` pegado a `memorable`, `everyone` como último tile) usando el mismo patrón ya documentado de "reusar clase para heredar posición" — nunca se tocó ningún `grid-column`/`grid-row` ni gradiente. Ver nota nueva dentro de PROJECTS VIEW → Tiles actuales, incluye un gotcha de implementación para quien edite el HTML del gallery por script.*

*Última actualización previa: Septiembre 2026 — rediseño de "My superpower" (tercera iteración, ver sección dedicada dentro de DASHBOARD VIEW): título "I bridge the gap." ahora con efecto scramble/decrypt (referencia: oscarhernandez.vercel.app), eyebrow "My superpower" agrandado (`.hs-eyebrow-lg`), `.hs-bridge` (línea + 3 nodos) reemplazado por `.hs-super-flow` (3 chips unidos por flechas), y el trigger de la animación se desacopló del `IntersectionObserver` de "Beyond the work" — ahora tiene el suyo propio sobre `#hsFeature`. `#hsBridge` ya no existe en el DOM.*

*Última actualización previa: Septiembre 2026 — segundo bug de dark mode corregido en los 12 case studies: `.back-nav` sticky y su meta (`.nav-right`/`.back-nav-right`) tenían fondo/color hardcodeados al valor de light sin contraparte dark (literales, no variables — el script de auditoría del bug anterior no los detectaba), ver sección "BUG CONOCIDO Y CORREGIDO — .back-nav" dentro de CASE STUDIES; además, cuatro ajustes puntuales en `smartpass-case.html` (único case con su propio token `--green` en paralelo a `var(--accent)`): `--green` sin par dark agregado, wordmark ".dim" mode-aware, contraste de `--ash` subido a AA, tarjetas de `.flow-node` con texto fijo (fondo blanco fijo en los dos modos), y scroll-reveal escalonado en "The design process" — ver sección "smartpass-case.html — ajustes puntuales".*

*Última actualización previa: Septiembre 2026 — 'JetBrains Mono' reemplazada por 'Space Grotesk' en labels/eyebrows/metadata de los 11 case studies standalone (ver sección "Septiembre 2026" en DESIGN TOKENS); bug de texto invisible en dark mode corregido en 8 case studies (`--ink`/`--ash2` sin override en `body.dark-mode{}`, ver sección "BUG CONOCIDO Y CORREGIDO" dentro de CASE STUDIES) —*

*Última actualización previa: Septiembre 2026 — tile hover reveal ralentizado a pedido (referencia: calebixca.com) con gradient teal nuevo en la zona del título (`.tile-ui::after`, quinta excepción de color fijo — mismo motivo que el spotlight glow), timing en cascada scrim→categoría→nombre→gradient→headline (ver sección dedicada en PROJECTS VIEW).*

*Última actualización previa: Agosto 2026 — tiles simplificados (sin categoría teal, solo título + descripción + CTA), CTA "View case study" con Shiny Text sweep (react-bits → vanilla, hover-triggered, fix legibilidad vs gradiente teal→#005043), "Beyond the work" cards compactadas (5 en fila, grid 5-col, emoji hover fix), Core Strengths chips unificados (todos accent, sin fondo gris), dock rediseñado (dark: verde accent, light: blanco + negro), link a LinkedIn en hero, filtros de categoría removidos del gallery, light mode default, hero copy (Hi I'm Pau + roles tachados), carousel horizontal (5 imgs), dock unificado visible en cases (Home / About Me / LinkedIn / light-dark toggle), top-nav eliminado, accent dual (#009D71 light / #22F0A4 dark), colores hardcodeados limpiados, chips de experiencia (.dv-tag) en verde accent light/dark, nueva sección "AI in my workflow" (carousel interactivo con auto-avance) arriba de Core strengths, About con statement de posicionamiento (reemplazó las passions), cierre "Beyond the work" rediseñado a bento con superpower bridge (5 facetas), timeline corregida desde LinkedIn (7 entries), tile spotlight glow (mouse-tracking, react-bits → vanilla) en las 11 tiles del gallery, título/categoría de tile pasan a reveal-en-hover sin chip (default en las 11, antes solo sukupay-ds), fondos hardcodeados por tile eliminados (todas caen a var(--ghost)), título de sukupay-ds mode-aware (verde dark / blanco light, segunda excepción a var(--accent)), spotlight glow fijado a #22F0A4 en ambos modos (tercera excepción — el scrim de la tile es oscuro fijo, no cambia con el modo), título/categoría de tile fijados a blanco/#22F0A4 en ambos modos (cuarta excepción, mismo motivo — eran invisibles en light)*

---

## ARCHIVOS


| Archivo                 | Peso         | Función                                                                  |
| ----------------------- | ------------ | ------------------------------------------------------------------------ |
| `index.html`            | ~282KB       | Archivo principal (antes `paula-elffman-portfolio.html`). Sept 2026: ya NO contiene las imágenes/videos inline — ver `assets/` abajo. |
| `assets/`               | ~2.6MB       | Carpeta nueva (Sept 2026) — 18 archivos (webp/jpg/webm) que `index.html` referencia por `src="assets/nombre.ext"`. Ver sección dedicada más abajo. |
| `portfolio-images.js`   | ~6MB         | Imágenes de tiles (lazy load)                                            |
| `muv-images.js`         | ~6MB         | Imágenes del case study muv                                              |
| `muv-case.html`         | ~6MB         | Case study muv completo + Design System section                          |
| `muv-case-images.js`    | lazy         | Imágenes de `muv-case.html`                                              |
| `monchis-case.html`     | ~4MB         | Case study monchis completo                                              |
| `monchis-ds-home.html`  | standalone   | Design system + home monchis                                             |
| `everyone-case.html`    | standalone   | Case study Everyone (light)                                              |
| `smartpass-case.html`   | standalone   | Case study Smartpass (light)                                             |
| `sukupay-case.html`     | standalone   | Case study SukuPay (light)                                               |
| `sukupay-home-prototype.html` | 1.4MB  | Prototipo interactivo real de la Home "North" (Bundled Page exportado de la herramienta de prototipado, self-contained: CSS + fuentes + lógica embebidos). **Debe vivir en la misma carpeta que `sukupay-case.html`**, que lo embebe vía `<iframe>` — no es un case aparte, no tiene su propio nav ni Wipe Transition. |
| `vendor-tool-case.html` | standalone   | Case study Vendor Tool / Monchis (light)                                 |
| `hugo-case.html`        | ~100KB       | Case study hugo completo (light) — hackathon, no Design System section   |
| `hugo-case-images.js`   | ~375KB, lazy | Imágenes de `hugo-case.html` (screenshots reales del producto)           |


> Todos los archivos deben estar en la **misma carpeta** para que los links funcionen — desde Sept 2026 esto incluye la carpeta `assets/` completa (no solo los `.html`).

### `index.html` — assets externalizados (Septiembre 2026)

El archivo pesaba 16.7MB, de los cuales 16.45MB (98%) eran 18 imágenes/videos distintos incrustados como `data:...;base64,...` directo en el HTML — incluyendo duplicados exactos (el loop del carrusel horizontal guarda cada asset dos veces, y al estar inline cada copia pagaba el peso completo de nuevo, sin beneficio de cache del navegador). Se sacaron los 18 a `assets/`, referenciados por ruta relativa (`src="assets/muv.jpg"`, etc.) en vez de data URI. Resultado: `index.html` 282KB, `assets/` 2.6MB, total 2.9MB (era 16.7MB).

De paso se optimizaron tres que estaban muy sobredimensionados para el lugar donde se muestran:
- **`monchis-cover.webp`** (el PNG con alpha del carrusel "Monchis") — 2.30MB → 40KB. Era 1448×1520 con canal alpha (para el drop-shadow del mockup, ver nota vieja en PROJECTS VIEW); se bajó a 900px de alto (de sobra para el `height:440px` del `.carousel-card img`) y se convirtió a WebP conservando el alpha.
- **`paula-elffman.webp`** (foto de perfil, dashboard) — 1.99MB → 23KB. Fuente de 2268×4032px para un `.dv-photo-ring` de apenas 100×100px; se bajó a 700px de lado máximo.
- **`muv-cover.webm`** (video de fondo del tile `muv`) — 3.43MB → 800KB. Era 2560×1440 a 5.5Mbps; se re-encodeó VP9 a 960×540 (de sobra para el tile, que nunca se ve a más de unos cientos de px) y se sacó el audio (el `<video>` ya tiene `muted`, así que el audio no se usaba y no se pierde nada).

El resto (14 assets) se sacó tal cual, sin recomprimir — mismo bytes, solo movidos a archivo aparte.

**Convención de nombres:** el nombre de archivo sale del `data-case` del tile más cercano cuando existe, si no del `alt` de la imagen (slugificado). Si se agrega un asset nuevo a mano, conviene seguir el mismo criterio para que quede rastreable.

**🐛 Bug encontrado y corregido de paso (preexistente, no introducido en esta sesión):** el `<!DOCTYPE html>` y el `<html lang="en">` de apertura estaban corrompidos — el primer asset en base64 (un favicon webp de 31KB) se había comido ese pedazo de texto, dejando literalmente `<!DOassets/favicon.webp"en">` como primeras dos líneas reales del archivo (el resto de `<head>` — meta charset, viewport, title — estaba intacto, empezaba justo después). Probablemente un bug de algún find-and-replace demasiado amplio en una pasada anterior de inlining de imágenes. Se reconstruyó el boilerplate estándar (`<!DOCTYPE html>\n<html lang="en">`) y el favicon quedó como `<link rel="icon" type="image/webp" href="assets/favicon.webp">` dentro de `<head>`. Sin este fix el navegador entra en quirks mode (no reconoce el doctype), lo cual puede explicar comportamientos raros de CSS que no se hayan atribuido a otra causa — vale la pena revisar si había algo así dando vueltas.

---

## DESIGN TOKENS

```css
/* === DARK MODE (default en :root) === */
--void:    #24242C   /* Background principal */
--ghost:   #2C2C36   /* Background secundario */
--ghost-2: #32323E   /* Background hover */
--paper:   #F4F4F6   /* Texto principal */
--ash:     rgba(244,244,246,.5)   /* Texto secundario */
--ash-2:   rgba(244,244,246,.25)  /* Texto terciario */
--accent:  #22F0A4   /* Emerald Bright — acento en dark */
--accent-2:#42E8A8
--line:    rgba(244,244,246,.08)  /* Bordes sutiles */
--line-md: rgba(244,244,246,.15)  /* Bordes medios */
--surface:     var(--ghost-2)     /* Fondo de tarjeta elevada (ej. .ai-lab) */
--shadow-card: 0 24px 60px -20px rgba(0,0,0,.6), 0 2px 10px rgba(0,0,0,.35)  /* Sombra de tarjeta elevada */

/* === LIGHT MODE (body.light-mode) === */
--void:    #F5F4F0   /* Background principal claro */
--ghost:   #E8E7E3   /* Background secundario */
--ghost-2: #DDDCDA   /* Background hover */
--paper:   #1A1A22   /* Texto principal oscuro */
--paper-2: #2C2C36
--ash:     #6B6B7A   /* Texto secundario */
--ash-2:   #9090A0   /* Texto terciario */
--accent:  #009D71   /* Emerald Dark — acento en light */
--accent-2:#00875F
--line:    rgba(26,26,34,.07)
--line-md: rgba(26,26,34,.13)
--surface:     #FFFFFF   /* Fondo de tarjeta elevada (ej. .ai-lab) — blanco puro, no --ghost */
--shadow-card: 0 24px 48px -18px rgba(20,20,35,.18), 0 3px 12px rgba(20,20,35,.07)

```

**Regla de color accent:**

- **Dark mode:** Emerald Bright `#22F0A4` — brilla sobre fondos oscuros.
- **Light mode:** Emerald Dark `#009D71` — tiene suficiente contraste sobre fondos claros.
- Usar siempre `var(--accent)` en el código. El cambio entre `#22F0A4` y `#009D71` es automático vía los overrides de `body.light-mode`.
- "Product Designer" en el hero usa `color: var(--accent)` (emerald en ambos modos).

**Colores hardcodeados eliminados (Julio 2026):** Se reemplazaron todos los `#22F0A4` y `rgba(244,244,246,...)` hardcodeados por `var(--accent)`, `var(--ash)`, `var(--ash-2)` y `var(--paper)` para que el About Me y el Home se adapten automáticamente a light/dark. Los elementos corregidos: `.dv-word-accent` (nombre "Pau"), `.dv-roles` y `.dv-roles s`, `.dv-story p` y `.dv-story b`, `.ph-title em`, `.ph-msep`, `.ph-filter-toggle.active`, y el inline style de SmartPass.

**Regla:** nunca usar hex o rgba hardcodeados para colores que deban cambiar entre modos. Siempre usar `var(--accent)`, `var(--paper)`, `var(--ash)`, etc.

**Tipografías:**

- `'Geist'` — Display, títulos, nombres (700–800)
- `'Muli'` — Body, párrafos (300–400)
- `'Space Grotesk'` — Labels, metadata, categorías, uppercase (reemplaza a `'JetBrains Mono'` en los 11 case studies, ver nota Septiembre 2026 abajo)

**✅ Septiembre 2026 — JetBrains Mono reemplazada por Space Grotesk en labels/eyebrows de los case studies**

Se sacó `'JetBrains Mono'` de las labels (eyebrows, section labels, back-nav, metadata uppercase) porque se sentía "de código" incluso para textos cortos. Se probaron variantes mono más suaves y también la opción de unificar todo con Geist, pero se optó por una familia sans distinta y con personalidad: **Space Grotesk** (Google Fonts, pesos 300/400/500/600/700). Mantiene el aire técnico-editorial del uppercase + letter-spacing pero sin el look "terminal".

- **Aplicado en:** los 11 case studies standalone — `theforkreviewscase.html`, `theforkshortlistcase.html`, `sukupay-case.html`, `sukupay-ds-case.html`, `muv-case.html`, `hugo-case.html`, `monchis-case.html`, `memorable-case.html`, `everyone-case.html`, `monchis-drivers-case.html`, `smartpass-case.html`.
- **Cambio mecánico:** en el `<link>` de Google Fonts, `family=JetBrains+Mono:wght@...` → `family=Space+Grotesk:wght@300;400;500;600;700`; y todo `font-family:'JetBrains Mono',monospace;` → `font-family:'Space Grotesk',sans-serif;`. Reemplazo 1:1, ninguna otra propiedad (tamaño, spacing, color, uppercase) se tocó.
- **Pendiente / fuera de este alcance:** `index.html` (home) todavía usa `'JetBrains Mono'` en varios lugares — tokens `dv-`* (AI in my workflow, prompt), design system embebido de `muv`/`sukupay-ds` dentro del home, etc. No se tocó porque no forma parte de los archivos de case study standalone. Si se decide extender el cambio al home, aplicar el mismo swap ahí (buscar `JetBrains` en `index.html`).

---

### ETIQUETAS — ESTILO EDITORIAL (Octubre 2026) ✅ regla para todo el sitio

**Por qué:** las etiquetas chicas en mayúsculas muy espaciadas, con rayita de color adelante, se leían "hechas por IA" y sin oficio. `muv-case.html` y `vendor-tool-case.html` ya usaban otra cosa (`.kicker`, `.meta dt`, `.label`): ese pasa a ser el estándar.

**La regla (vale para cualquier etiqueta, eyebrow, kicker, caption, badge, pie de página o rótulo):**
- **Tipografía:** la del cuerpo de la página — `'Geist',sans-serif`, o `'Inter',sans-serif` en los cases que usan Inter (Elektra, Memorable, SukuPay Home, SukuPay Prototyper). Nada de `'JetBrains Mono'` ni `'Space Grotesk'` para etiquetas.
- **Caja:** `text-transform:none` + `letter-spacing:0`. El texto se escribe en el HTML en *sentence case*: mayúscula solo en la primera palabra y después de un separador (`·`, `—`, `→`). Se respetan siglas (AI, UX, OTP, CVR…), nombres propios y de producto (SukuPay, TheFork, Itti Sports, Foody Match, Master Chef, Creative Pretest…) y cargos (`Sr Product Designer`). Las marcas en minúscula quedan como están (`hugo`, `monchis`, `smartpass`).
- **Tamaños:** kickers de sección (`.eyebrow`, `.dv-label`, `.work-label`, `.case-eyebrow`) → `.9375rem` / peso 500. Subtítulo de sección (`.sl-text`, `.sl-t`) → `.875rem` / 500. Resto: lo que medía menos de 8px → `.75rem`; 8–9.5px → `.8125rem`; más → `.875rem`. **Nada por debajo de 12px**, salvo los rótulos rotados `.arr-lbl` (`.6875rem`).
- **Color:** los kickers pasan de color de acento a `var(--ash)`. El resto conserva su color (los que marcan estado —antes/después, error/éxito, número de paso— siguen en su color).
- **Sin rayita:** `.eyebrow::before`, `.dv-label::before`, `.work-label::before` quedan con `display:none`.

**Excepciones (no se tocan):** textos que imitan la interfaz de un producto dentro de un mockup — `.tp-screen-eyebrow`, `.tp-bal-lbl` (home) y `.proto-ph-eyebrow`, `.proto-ph-bal-lbl` (SukuPay Prototyper). Tampoco los usos de Space Grotesk / JetBrains Mono que no son etiquetas: números, código, hex de color, URLs.

**Al crear un case o una sección nueva:** no volver a escribir `text-transform:uppercase` con tracking en etiquetas. Copiar el patrón de `.kicker` de MUV.

**Etiqueta lateral eliminada:** se quitó de `index.html` el rótulo vertical fijo del borde izquierdo (`#section-label`, "Paula Elffman · Portfolio OS" / "· Projects" / "· About"), junto con su CSS y la línea de `switchView()` que le cambiaba el texto. No volver a agregarlo.

**Alcance del cambio:** 309 reglas CSS + 93 estilos inline, 18 rayitas, 227 textos pasados a sentence case, en `index.html` y 14 cases. De paso se corrigió un typo en Foody ("Fremium" → "Freemium") y se unificó "ITTI" → "Itti".

## DECISIÓN — Portfolio dark / Cases light + Wipe Transition

*Julio 2026 — ✅ APROBADO, no tocar sin pedido explícito*

### El contraste dark → light es intencional

El home (`index.html`) vive en dark (`--void #24242C`). Los 6 case studies viven en light (`--bg ~#F5F4F0`). **Se decidió no unificar todo a un solo modo** — el dark da impacto a la primera impresión, el light da legibilidad a contenido largo (texto, screens, data). Lo que faltaba no era eliminar el contraste, sino hacerlo sentir a propósito en vez de accidental. La solución: una transición que hace de puente entre ambos modos.

### Wipe Transition — cómo funciona

Al hacer click en un tile, un círculo (`clip-path: circle()`) crece desde el punto exacto del click hasta cubrir toda la pantalla, y recién ahí ocurre el cambio de contenido. Al volver, el mismo círculo se abre desde donde estaba el botón "← Back to portfolio", revelando el home.

Como los cases son páginas separadas (navegación real, no SPA), el punto de click se pasa de una página a otra vía `sessionStorage` (`key: 'wipeEntry'`, valor `{x, y}`) para que el círculo "continúe" en el mismo lugar aunque sea un load nuevo del browser.

**Regla de color:** el overlay de cada página usa **su propio color de fondo** — nunca el de la página destino. El portfolio cubre con `var(--void)`, cada case cubre con su propio `var(--bg)` (o `#24242C` cuando el case hace el wipe de salida hacia el portfolio, vía la clase `.dark` en `#wipe-overlay`). Esto evita tener que coordinar colores entre archivos: cada página solo necesita saber su propio bg.

**Timing:** 600ms, `cubic-bezier(.65,0,.35,1)`. Es el único número a tocar si el efecto se siente lento/rápido (aparece 2 veces por archivo: el `600` del `setTimeout` y el `.6s` del CSS `.animate`).

### Volver con «atrás» — bfcache (Octubre 2026)

*Octubre 2026 — ✅ corregido, a pedido ("cada vez que voy a un caso y vuelvo a la home se queda en blanco")*

**Síntoma:** en el celular, al tocar un case y volver con el botón «atrás» del navegador, la home quedaba **en blanco** (solo el color de fondo `var(--void)`), sin contenido.

**Causa:** al navegar, `wipeAndNavigate()` primero **cubre** la pantalla con el overlay (`clip-path: circle(150% ...)`) y recién después cambia de página. Al volver con «atrás», el navegador (iOS/Chrome mobile, bfcache) **no recarga la home: la restaura tal como estaba** — con el overlay todavía en `circle(150%)`, o sea tapando todo. Como no es un load nuevo, el bloque que lee `sessionStorage('wipeEntry')` y hace `wipeRevealFrom()` **no corre**.

**Fix (en `index.html`, justo debajo de `wipeAndNavigate`):**

```js
var lastWipe=null;
function wipeAndNavigate(url,x,y){
  lastWipe={x:x,y:y};                 // se recuerda el punto del click
  sessionStorage.setItem('wipeEntry',JSON.stringify({x:x,y:y}));
  wipeCoverFrom(x,y,function(){ window.location.href=url; });
}
function wipeReset(){ /* saca .animate y deja clip-path:circle(0% at 50% 50%) */ }
window.addEventListener('pageshow',function(e){
  if(!e.persisted || !wipeOverlay) return;    // solo cuando viene de bfcache
  sessionStorage.removeItem('wipeEntry');
  if(lastWipe){ wipeRevealFrom(lastWipe.x,lastWipe.y); setTimeout(wipeReset,750); }
  else { wipeReset(); }
  lastWipe=null;
});
```

Si la página restaurada todavía recuerda dónde se tocó, el overlay se **abre desde ese punto** (misma animación de siempre); si no, simplemente se resetea. `e.persisted` es `true` solo cuando la página viene de bfcache, así que en una carga normal el listener no hace nada.

**Regla para el futuro:** cualquier overlay/estado que se anime **antes** de navegar tiene que poder **deshacerse en `pageshow` con `e.persisted`**, porque la página puede volver a mostrarse sin recargar. Aplica a cualquier transición de salida que se agregue.

**Cómo se verificó:** se reprodujo con el archivo original (overlay en `circle(150% at 200px 400px)` → pantalla en blanco igual que la captura) y con el nuevo (overlay en `circle(0%)`, home visible). La restauración se simuló disparando `new PageTransitionEvent('pageshow',{persisted:true})` — **no se probó con un «atrás» real en un iPhone**, queda por confirmar en el dispositivo.

**✅ Aplicado también a los cases (Octubre 2026):** los 15 cases con `#wipe-overlay` (`everyone`, `fancymonas`, `hotaru`, `hugo`, `memorable`, `monchis`, `monchis-drivers`, `muv`, `onboarding`, `smartpass`, `sukupay`, `sukupay-proto`, `thefork-reviews`, `thefork-shortlist`, `vendor-tool`) recibieron un `<script>` nuevo justo antes de `</body>`, marcado con el comentario `BFCACHE FIX`: en `pageshow` con `e.persisted` saca `.animate` y `.dark` del overlay y lo deja en `circle(0% at 50% 50%)` (también borra `wipeEntry`). Es un agregado puro, no toca el bloque Wipe existente de cada case. **Antes del arreglo, los 15 quedaban con el overlay tapando todo** al volver (reproducido simulando la restauración). **Regla para un case nuevo:** pegar también este bloque (ver cualquier case existente).

**Casos especiales detectados en esa revisión:**
- `elektra-otp.html`: el botón "Volver al portfolio" tenía `href="#"` — **no llevaba a ningún lado**. Ahora apunta a `index.html`. Sigue **sin overlay ni transición** (es un link común), igual que `foody-case.html`; no hace falta el bloque `BFCACHE FIX` en ninguno de los dos porque no tienen overlay que quede tapando.
- `fancymonas-case.html` y `hotaru-case.html` **no leen `wipeEntry` al cargar**: al llegar desde la home no hay animación de apertura del círculo (los demás cases sí). No genera pantalla en blanco; queda como diferencia de comportamiento, no se tocó.
- `onboarding.html`, `thefork-reviews-case.html` y `thefork-shortlist-case.html` usan una variante del bloque Wipe (cubren con `classList.toggle('dark',false)` en vez de `coverFrom(...,true,...)`): el `BFCACHE FIX` funciona igual en las dos variantes.

**Verificado:** simulación de restauración (`PageTransitionEvent('pageshow',{persisted:true})`) en los 17 archivos y recorrido home → case → botón volver → «atrás» en un navegador emulando celular: 0 problemas. Ojo: en ese navegador de prueba el «atrás» recarga la página en vez de restaurarla, así que **el bug real de bfcache no se pudo reproducir de punta a punta** — solo la restauración simulada. Falta confirmarlo en un iPhone real.

### Código (idéntico en los 6 case HTML)

```css
#wipe-overlay{
  position:fixed; inset:0; z-index:99999;
  background:var(--bg);   /* el bg propio de cada case */
  pointer-events:none;
  clip-path:circle(0% at 50% 50%);
}
#wipe-overlay.animate{ transition:clip-path .6s cubic-bezier(.65,0,.35,1); }
#wipe-overlay.dark{ background:#24242C; }  /* usado al volver al portfolio */

```

```js
/* WIPE TRANSITION — bloque autocontenido, va en su propio <script> */
(function(){
  var overlay=document.getElementById('wipe-overlay');
  function coverFrom(x,y,dark,cb){ /* cubre la pantalla creciendo desde x,y */ }
  function revealFrom(x,y){ /* revela el contenido abriendo desde x,y */ }
  var entry=sessionStorage.getItem('wipeEntry');
  if(entry){ /* si venimos de un wipe: revealFrom(x,y) y borra el storage */ }
  var backBtn=document.getElementById('back-to-portfolio');
  if(backBtn){ /* al click: coverFrom(x,y,true,...) y navega */ }
})();

```

En `index.html` el mismo patrón vive en `wipeCoverFrom()` / `wipeRevealFrom()` / `wipeAndNavigate(url,x,y)`, más un mapa `CASE_PAGE_MAP` que decide a qué `.html` navegar según el `data-case` del tile clickeado.

### Para agregar el efecto a un case nuevo

1. Copiar el bloque CSS de arriba, adaptando `var(--bg)` al token real del archivo (algunos usan `--paper`, otros `--ink` para texto — el overlay siempre usa el bg, no el texto).
2. Agregar `<div id="wipe-overlay"></div>` como primer hijo de `<body>`.
3. Agregar `id="back-to-portfolio"` al `<a class="back-btn">`.
4. Pegar el bloque JS en un `<script>` propio, antes del script de lazy-load de imágenes.
5. En `index.html`, agregar la entrada correspondiente a `CASE_PAGE_MAP`.

---

## ESTRUCTURA DE VISTAS

```
Body
├── #page-loader        "Hi! 👊" — aparece 900ms, luego se elimina
├── (#cur + #cur-ring   ELIMINADO Oct 2026: cursor nativo, ver "Ajustes rápidos post-review")
├── #section-label      Label vertical izquierda
├── #projects-view      Vista activa por defecto (.view.active)
│   ├── .hello-hero     Sección "Hi, I'm Pau." + roles + subtítulo
│   ├── .project-carousel  Carousel horizontal infinito de imágenes de proyectos
│   ├── .projects-header  Marquee + filtros (ya no es sticky)
│   └── .gallery        Grid de tiles
├── #dashboard-view     Vista de about/experiencia (.view)
├── #case-panel         Panel overlay para cases (display:none / .open)
├── Templates           <template id="tpl-*"> para cases overlay
└── #dock               Navegación bottom (Home / About Me / LinkedIn / Light-Dark toggle)

```

**Cambio de vista:** `switchView('projects')` / `switchView('dashboard')` — agrega/quita `.active`.

---

## TOP NAV + HELLO HERO + LIGHT/DARK MODE ✅ APROBADO

*Julio 2026 — inspirado en sriramph.com*

### Top Nav (`#top-nav`) — ELIMINADO

La barra fija superior fue eliminada. Todo su contenido (LinkedIn, theme toggle) se consolidó en el dock bottom. El elemento `#top-nav` queda en el HTML como `display:none` por retrocompatibilidad.

### Hello Hero (`.hello-hero`)

Sección dentro de `#projects-view`, **antes** del `.project-carousel`. Tres líneas:

1. **Título:** `<h1 class="hello-word">Hi, I'm Pau.</h1>` — `font-size:clamp(2rem,6vw,4.5rem)`, `font-weight:800`, `letter-spacing:-.03em`.
2. **Roles:** `<p class="hello-roles">` — Los roles anteriores van tachados con `<s>` (Graphic, Web, UI, UX) en `color:var(--ash-2)` con `opacity:.6`. "Product Designer." va en `<em>` con `font-weight:600`, `color:var(--paper)`. Font-size: `clamp(1.25rem,3vw,2rem)`.
3. **Subtítulo:** `<p class="hello-sub">` "Based in Buenos Aires. I design fintech, mobility and food-tech apps for teams across Latin America, Europe and the US. 10 years in, now leading design at SukuPay." (texto del 8 de octubre de 2026; ver "Copy de la home: hero y Selected work") — `font-size:clamp(1rem,2.5vw,1.375rem)`, `color:var(--ash)`.

- `min-height:55vh`, `padding:10rem 3.5rem 4rem` (mobile: `6rem 1.5rem 2rem`, `min-height:35vh`).

### Carousel horizontal de proyectos (`.project-carousel`)

Sección dentro de `#projects-view`, **entre** el `.hello-hero` y el `.projects-header` (marquee + filtros). Inspirado en el scroll horizontal de sriramph.com.

**Estructura HTML:**

```html
<div class="project-carousel">
  <div class="carousel-track">
    <div class="carousel-card"><img src="..." alt="..."></div>
    <!-- cards duplicadas para loop infinito -->
  </div>
</div>

```

**Comportamiento:**

- **Desde Octubre 2026 el movimiento lo maneja JS** (auto-avance + arrastre, ver subsección "Carousel — auto-avance + arrastre"). El `@keyframes carouselScroll` (30s linear infinite, `translateX(-50%)`) **sigue en el CSS pero solo como fallback**: se usa únicamente si el script no corre o si el track no tiene un número par de cards. Con JS activo el track lleva la clase `.is-js` y la animación CSS se apaga (`animation:none`).
- Las cards se duplican en el HTML para que el loop sea seamless (el script usa la distancia entre la card 0 y la card `n/2` como período del loop).
- Hover sobre el track con **mouse** pausa el avance. En touch ya no hay pausa por hover (el `:hover` queda "pegado" en el celular después de tocar).
- Hover sobre una card individual: `scale(1.02)` — **solo en dispositivos con hover real** (`@media(hover:hover)`).

**Dimensiones:**

- Desktop: imágenes a `height: 440px`, ancho auto (cada imagen determina su propio ancho). Padding del contenedor: `2rem 0 5.25rem` (mobile: `1.5rem 0 4.25rem`) — el `padding-bottom` NO es decorativo, ver "Carousel — esquinas inferiores cortadas".
- Mobile (`max-width:768px`): imágenes a `height: 250px`.
- Las imágenes usan `border-radius: 1rem` directamente en el `<img>` (no en el contenedor), sin `overflow: hidden`, para que las esquinas redondeadas originales se respeten al 100%.
- **Exportar imágenes a 1520px de alto** (760 × 2 para retina), ancho libre. Formatos actuales: 02 Monchis app (1448×1520 — actualizado Septiembre 2026, antes 744×1520), 03 Monchis desktop (2400×1520), 04 MUV (1198×1520). *(01 Memorable se sacó del carousel en Septiembre 2026 — el case sigue viviendo abajo, en el gallery.)*

**Fade edges:** pseudo-elementos `::before` y `::after` con gradientes de `var(--void)` a transparente para que las cards se desvanezcan en los bordes. Ancho: **6rem en desktop, 2rem en mobile** (a 6rem comían ~100px de un celular de 390px y tapaban media card).

**Imágenes actuales:** 02.png (Monchis app), 03.png (Monchis desktop), 04.png (MUV). Están embebidas como base64 a resolución completa 2x (1520px alto) — la mayoría JPEG quality 80; **02.png (Monchis app) es PNG con canal alpha** (el mockup tiene sombra/esquinas transparentes, necesita alpha para no verse con fondo blanco sobre el carousel oscuro).

**Regla para el futuro:** para agregar un proyecto al carousel, agregar un `<div class="carousel-card"><img>` nuevo en **ambas mitades** del track (la original y la duplicada) para mantener el loop. Para quitar los placeholders grises, reemplazar las imágenes 02 y 04 con covers reales de proyectos.

### Carousel — auto-avance + arrastre (Octubre 2026)

*Octubre 2026 — ✅ nuevo, a pedido ("que ande solo y a su vez pueda pasarlo con la mano")*

**Problema:** en mobile el carousel "se trababa un poco" y no se podía mover a mano. Era una animación CSS pura (`translateX` en loop): sin gestos, y el `:hover { animation-play-state:paused }` y el `scale(1.02)` se quedaban pegados después de tocar una card.

**Solución:** un bloque JS nuevo, justo antes de `/* TILE CLICKS */` (comentario `/* PROJECT CAROUSEL ... */`), que reemplaza la animación CSS por un loop con `requestAnimationFrame` y `transform: translate3d(...)`.

- **Auto-avance:** velocidad = `período / LOOP_SECONDS` con `LOOP_SECONDS = 30` (la misma vuelta de 30s que tenía el CSS). **Es el número a tocar** si se quiere más rápido/lento.
- **Arrastre:** Pointer Events (`pointerdown` en el track; `pointermove`/`pointerup`/`pointercancel` en `window`), así que el mismo código sirve para dedo, lápiz y mouse. El gesto empieza a contar como arrastre pasados **6px** de movimiento.
- **Scroll vertical:** `.project-carousel` lleva `touch-action: pan-y pinch-zoom` — el navegador sigue manejando el scroll vertical de la página aunque el dedo esté sobre el carousel; solo el gesto horizontal es del script.
- **Impulso:** al soltar, la velocidad del swipe se conserva (tope ±4000 px/s) y vuelve a la velocidad normal con un decaimiento exponencial de ~0.4s (`Math.exp(-dt/.4)`). Si el dedo estuvo quieto >90ms antes de soltar, no hay impulso.
- **Drag ≠ click:** si hubo arrastre, un listener `click` en fase de captura lo cancela (`preventDefault` + `stopPropagation`), así que **arrastrar no abre el case**; un toque simple sí lo abre (sigue pasando por `wipeAndNavigate`, ver "Carousel clickeable").
- **Pausas:** hover de mouse (solo `pointerType==='mouse'`), `prefers-reduced-motion` (queda quieto, solo se mueve a mano), fuera de pantalla (`IntersectionObserver`, `rootMargin:100px`) y pestaña oculta (`visibilitychange`) — no gasta batería cuando no se ve. También se reengancha en `pageshow` (volver con «atrás»).
- **Medición:** el período se recalcula en `load` de cada imagen, en `resize` y con `ResizeObserver` sobre el track (las cards tienen ancho automático según la imagen, así que el período no se conoce hasta que cargan).
- **CSS asociado:** `.carousel-track.is-js` (`animation:none; cursor:grab`), `.is-dragging` (`cursor:grabbing`), `will-change:transform`, `user-select:none`, y en las imágenes `-webkit-user-drag:none` + `-webkit-touch-callout:none` (evita el drag nativo de imágenes y el menú de "guardar imagen" al mantener apretado en iOS).

**Requisito:** el track tiene que tener un **número par de cards** (la mitad duplicada). Si no, el script no se activa y queda el fallback CSS. Agregar un proyecto = una card nueva en cada mitad (regla de siempre); el script lo toma solo, no hay que tocar nada.

**Verificado (Chromium emulando mobile 390×844, touch real vía CDP):** auto-avance ≈33.5 px/s (período 1005px / 30s); un arrastre de 200px mueve el track 201.7px; arrastrar no navega; un toque en una card navega al case; 0 errores de consola. **No se probó en un iPhone físico** — queda por confirmar la sensación del gesto/inercia en el dispositivo real.

### Carousel — esquinas inferiores cortadas (Octubre 2026)

*Octubre 2026 — ✅ corregido, a pedido ("que se vean los 4 bordes redondeados iguales, abajo pareciera cortarse")*

**Síntoma:** en mobile (y en menor medida en desktop) las cards del carousel tenían las esquinas de arriba redondeadas y las de abajo rectas. El `border-radius:1rem` del `<img>` estaba bien (computed `16px`, caja de 250px, `overflow` visible).

**Causa real:** el `.projects-header` (el bloque del marquee, `position:relative; z-index:50; background:var(--void)`) tiene **margen superior negativo** para subirse sobre el espacio que deja el carousel: **`-5rem` en desktop, `-4rem` en mobile** (en mobile hay dos reglas, `-2rem` en el bloque `/* ── MOBILE ── */` y `-4rem` en un segundo `@media(max-width:768px)` más abajo; **gana la segunda**, por cascada). El `padding-bottom` del carousel era menor que ese margen (`4.5rem` vs `5rem` en desktop = 8px tapados; `2rem` vs `4rem` en mobile = 32px tapados), así que el header, opaco y con z-index alto, **pintaba encima de la parte baja de las cards** y se llevaba las esquinas.

**Fix:** subir el `padding-bottom` del carousel por encima del margen negativo del header: desktop `4.5rem → 5.25rem`, mobile `2rem → 4.25rem` (0.25rem de aire sobre el límite exacto).

**Regla para el futuro:** `padding-bottom` de `.project-carousel` **siempre mayor** que `|margin-top|` de `.projects-header` en cada breakpoint. Si se cambia uno, cambiar el otro. **Consecuencia visual aceptada:** el bloque "Projects" (marquee + gallery) quedó ~2.25rem más abajo en mobile y ~0.75rem más abajo en desktop que antes.

**Cómo diagnosticarlo si vuelve a pasar:** `document.elementsFromPoint(x, y)` sobre un punto justo encima del borde inferior de una card devuelve, en orden, qué elementos están pintando ahí — acá devolvía `DIV.projects-header` antes que el `IMG`. Cuando un `border-radius` "no se ve" pero el computed style está bien, sospechar de un elemento que tapa, no del radio.

### Carousel clickeable — cada card lleva a su case

*Agosto 2026 — ✅ nuevo, a pedido*

Las 10 `.carousel-card` (5 imágenes × 2 copias del loop) ahora son clickeables y navegan al case study correspondiente, igual que los tiles del `#gallery`.

**Mapeo imagen →** `data-case` **→ página:**


| Alt de la imagen                | `data-case` | Página                                           |
| ------------------------------- | ----------- | ------------------------------------------------ |
| SukuPay — Fintech               | `suku`      | `sukupay-case.html`                              |
| Monchis — Food delivery app     | `monchis`   | `monchis-case.html`                              |
| Monchis — Store management      | `monchis`   | `monchis-case.html` (mismo case que la anterior) |
| MUV — Ride-hailing              | `muv`       | `muv-case.html`                                  |

*(Memorable se sacó del carousel en Septiembre 2026 — ya no hay card ni fila de mapeo para `memorable` acá; el case sigue clickeable desde su tile en el `#gallery`.)*


**Implementación:**

- Cada `.carousel-card` suma `data-case="…"`, `role="button"`, `tabindex="0"` y `aria-label="… case study"`.
- CSS: `.carousel-card{cursor:pointer;}` + `.carousel-card:focus-visible{outline:2px solid var(--accent);...}`.
- JS: nuevo listener `carouselTrack.addEventListener('click', ...)` (dentro del mismo `DOMContentLoaded` que ya maneja el `#gallery`) que reutiliza `CASE_PAGE_MAP` + `wipeAndNavigate()` — la misma lógica y transición que usan los tiles del home. No hay lógica de doble-tap (eso es solo para los tiles con hover-reveal); acá el click navega directo.
- El teclado (Enter/Espacio) ya funciona solo, porque el handler existente `document.querySelectorAll('[data-case]').forEach(...)` no está scopeado al gallery — agarra cualquier elemento con `data-case` en el documento, carousel incluido.

**Regla para el futuro:** si se agrega un proyecto nuevo al carousel (ver regla arriba), sumarle también `data-case`/`role`/`tabindex`/`aria-label` apuntando a su entry en `CASE_PAGE_MAP` — si no, la card queda decorativa y no clickeable.

### Dock unificado (bottom)

El dock bottom (`bottom:2rem`) es ahora el único elemento de navegación fijo. Contiene:

- **Home** / **About Me** — botones de vista con pill animada.
- **Separador** (`<div class="dock-sep">`) — línea vertical de 1px.
- ~~**LinkedIn**~~ — *eliminado del dock en Octubre 2026 (index y cases). Vive en el About: `.dv-linkedin`.*
- **Theme toggle** — botón sol/luna para alternar light/dark.

**Regla para el futuro:** para agregar un link nuevo (Resume, Dribbble, email), agregarlo como `<a class="dock-link">` después del separador y antes del theme toggle.

### Dock visible en Case Studies

El dock se muestra por encima de los case studies (`z-index:9700`, arriba del `#case-panel` que tiene `z-index:9500`). Esto permite al usuario volver a Home o About Me sin tener que cerrar el case con la X.

- `switchView()` ahora llama a `closeCase()` automáticamente si hay un case abierto.
- El botón de cerrar case (`.panel-close`) sigue disponible en `z-index:9600`.

**Regla:** cualquier overlay futuro que deba cubrir el dock necesita `z-index > 9700`.

### Dock en Case Studies (archivos separados)

Los cases son archivos HTML independientes (`memorable-case.html`, `monchis-case.html`, etc.). Cada uno tiene su propio dock inyectado antes de `</body>` con id `#portfolio-dock`. Es una versión simplificada del dock principal:

- **Home** — link a `index.html`
- **About Me** — link a `index.html#about`
- **Separador** + theme toggle (LinkedIn se quitó en Octubre 2026; vive en el About)
- Sin theme toggle (los cases son siempre light).
- Estilos inline en un `<style>` dentro del mismo bloque, no depende de CSS externo.
- `z-index:9700`, `background:rgba(240,239,236,0.85)` con backdrop-blur.

**Regla para el futuro:** al crear un case nuevo, copiar el bloque `<!-- Portfolio Navigation Dock -->` desde cualquier case existente y pegarlo antes de `</body>`. O usar el script de inyección que agrega el dock a todos los `*-case.html` de una vez.

### Light/Dark Mode

**Default: LIGHT.** El `<body>` arranca con `class="light-mode"` hardcodeado en el HTML para evitar flash de dark mode antes de que cargue el JS.

**Decisión:** el home alterna entre light (default) y dark con el toggle del dock. Los case studies siguen siendo siempre light.

**Implementación:**

- `body.light-mode` overridea los CSS custom properties en `:root` con una paleta invertida:
  - `--void: #F5F4F0` (fondo claro)
  - `--paper: #1A1A22` (texto oscuro)
  - `--ghost/#ghost-2` ajustados a grises claros
  - `--line/--line-md` ajustados para contraste sobre fondo claro
- `toggleTheme()` en JS hace `body.classList.toggle('light-mode')` y guarda en `localStorage('pe-theme')`.
- Al cargar, se lee `localStorage` y se aplica si corresponde.
- El botón usa dos SVGs (sol y luna), uno visible en cada modo via CSS (`body.light-mode .icon-sun { display:none }` etc.).
- El dock también tiene un override para `body.light-mode` (background y border ajustados).

**Regla para el futuro:** cualquier elemento nuevo que use `var(--void)`, `var(--paper)`, `var(--ghost)`, `var(--ash)`, `var(--line)` o `var(--line-md)` se adapta automáticamente al light mode sin CSS adicional. Si un componente necesita un color **fijo** que no cambie con el tema, usar el hex directo, no el custom property.

---

## PROJECTS VIEW — REGLAS

> **Octubre 2026:** la grilla de tiles descrita en esta sección fue reemplazada por *Selected work + More work* (ver "Home: grilla de casos — ESTADO ACTUAL" en "Ajustes rápidos post-review"). Lo que sigue queda como historial.

### Grid

- 12 columnas en desktop, 6 en tablet, 1 en mobile
- Gap: `1rem`
- Padding: `2rem 3.5rem 4rem`

### Tiles actuales


| Tile            | Clase                                          | Columnas | Fila | Estado                                                                                                                                                                                     |
| --------------- | ----------------------------------------------- | -------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| sukupay DS      | `.tile-sukupay-ds`                             | 1/6      | 1    | ✅ Placeholder con headline propio · `data-case="sukuds"`                                                                                                                                   |
| muv             | `.tile-muv`                                    | 6/13     | 1    | 🧪 Cover animado (GIF, en prueba — ver decisión abajo) · `data-case="muv"`                                                                                                                 |
| hugo            | `.tile-monchis-home` (reusa clase/posición)    | 1/6      | 2    | ✅ Cover = video (`hugo.webm`) · `data-case="hugo"` — ver nota Agosto 2026 más abajo                                                                                                        |
| smartpass       | `.tile-smartpass`                              | 6/13     | 2    | ✅ Placeholder gris, estirado para tapar el hueco que dejó `.tile-drivers` · `data-case="smart"`                                                                                            |
| monchis drivers | `.tile-monchis-drivers` (reusa clase/posición) | 1/5      | 3    | ✅ Real · `data-case="drivers"` — ver nota Agosto 2026 más abajo                                                                                                                             |
| everyone        | `.tile-everyone`                               | 5/9      | 3    | ✅ Placeholder gris · `data-case="everyone"`                                                                                                                                                 |
| sukupay         | `.tile-sukupay`                                | span 4   | 3    | 🔲 Placeholder · `data-case="suku"`                                                                                                                                                        |
| memorable       | `.tile-memorable` (reusa clase/posición)       | span 4   | 3    | ✅ Real · `data-case="memorable"` — ver nota Agosto 2026 más abajo                                                                                                                           |
| vendor          | `.tile-vendor`                                 | auto     | 3    | ⚠️ Sin regla CSS de grid propia (cae al tamaño default de `.tile`) · `data-case="vendor"` — pendiente, ver TODO                                                                            |
| autocloud       | `.tile-ph`                                     | span 4   | 3    | 🔲 Placeholder                                                                                                                                                                             |
| thefork         | `.tile-ph`                                     | span 4   | 3    | 🔲 Placeholder                                                                                                                                                                             |


> ✅ **Resuelto (Julio 2026):** `.tile-drivers` ya no tiene `data-case="suku"` duplicado. **Actualización Agosto 2026:** ese slot dejó de usarse (ver nota abajo) — `.tile-drivers` quedó como CSS muerto, candidato a limpieza. **Falta:** no hay ningún tile con `data-case="vendor"` en el gallery con una posición de grid propia — `vendor-tool-case.html` ya tiene el Wipe Transition listo pero el tile cae al tamaño default de `.tile` (ver fila arriba).

> **Agosto 2026 — ✅ Home recortado a 11 tiles, a pedido:** se **eliminó** la fila "ROW 4 — Placeholders" completa (`project x`, `project y`, `project z`, `project w`, `project v` — 5 tiles `.tile-ph.tile-ph-sm`, filler genérico sin marca real). Quedan **9 cases reales + 2 placeholders con nombre real** (`autocloud`, `thefork`), total **11 tiles** en el home. El grid es auto-flow (sin `grid-row` fijo en estos tiles finales), así que quitar tiles del final no rompe el layout ni deja huecos — simplemente el grid termina antes.
>
> **Regla para el futuro:** si se necesita volver a mostrar placeholders genéricos ("coming soon" sin nombre de marca), agregarlos al final del `#gallery`, después de `thefork`, y duplicar la card en ambos lugares no aplica acá (esto no es el carousel) — es un tile único, no hace falta duplicar nada.

> **Agosto 2026 — ✅ Tile de monchis home eliminado del gallery, hugo ocupa su lugar (a pedido):** el tile `.tile-monchis-home` (search bar animado + `monchis-tile.jpg`) se **sacó** del `#gallery` — el case de monchis ya está representado arriba, en el carousel horizontal, así que quedaba duplicado. El div de **hugo** (antes con clase `.tile-drivers`, 6/9 fila 2, 440px) **pasó a usar la clase `.tile-monchis-home`**, quedando en la posición grande (1/6, fila 2, 560px) que dejó monchis. Contenido del tile de hugo sin cambios (mismo `data-case="hugo"`, mismo cover en video). El hueco que dejó `.tile-drivers` (6/9, fila 2) se tapó estirando `.tile-smartpass` de `9/13` a `6/13` (7 columnas), así la fila 2 queda sin huecos: hugo (1/6) + smartpass (6/13).
>
> **Patrón usado — "reusar clase para heredar posición":** en vez de escribir una regla de grid nueva, se **intercambió qué `<div>` lleva cada clase de posicionamiento** (`data-case`, contenido y cover de cada tile no se tocan). Es el mismo patrón que ya existía para hugo/`.tile-drivers` desde Julio 2026 (ver nota arriba) — se repitió acá y en el swap de memorable/monchis drivers (nota siguiente). **Para replicar:** si un tile A debe ocupar la posición de un tile B, cambiarle a A la clase de posicionamiento de B, y darle a B la clase que tenía A (o una de auto-flow tipo `.tile-sukupay`/`.tile-ph` si A no tenía posición fija). Los media queries de tablet/mobile que referencian esas clases por nombre siguen aplicando correctamente sin tocarlos, porque van atados a la clase, no al tile específico.

> **Agosto 2026 — ✅ monchis drivers ocupa el lugar de memorable, a pedido:** mismo patrón que arriba. El div de **monchis drivers** (headline "Shift management for 1,200+ drivers.") pasó a usar la clase `.tile-memorable` (1/5, fila 3 — la posición grande de esa fila). El div de **memorable** pasó a usar la clase `.tile-monchis-drivers`, que ahora es auto-flow `span 4` (la posición que dejó monchis drivers, después de sukupay en la fila 3). `data-case` y contenido de ambos tiles sin cambios.

> **Septiembre 2026 — ✅ `everyone` pasa a ser el último tile del gallery y `foody` queda pegado a `memorable`, a pedido:** mismo patrón de "reusar clase para heredar posición" que las dos notas de arriba — no se reordenó el DOM ni se tocó ningún `grid-column`/`grid-row`. Rotación de contenido en 3 wrappers: el div de **thefork-shortlist** pasó a usar la clase `.tile-everyone` (5/9, fila 3 — al lado de `drivers`, la posición fija que dejó `everyone`); el div de **foody** pasó a usar la instancia de `.tile-ph` que antes tenía thefork-shortlist (auto-flow, cae en la fila de al lado de `memorable`); el div de **everyone** pasó a usar la clase `.tile-foody` (auto-flow, es la que queda última en el orden del documento). `data-case`, `data-category` y todo el contenido viajan con cada div — solo cambia qué clase de posicionamiento lleva.
>
> **⚠️ Gotcha para quien edite el HTML de `#gallery` por script (regex/split, no a mano):** el bloque de la última tile del gallery termina así:
> ```
> ...</div>
>     </div>
>     
> 
> 
>   </div>
> </div>
> ```
> El primer `</div>` (indentado 4 espacios) todavía cierra **la tile**, no el `#gallery`. Si el delimitador de "acá termina el contenido y empieza el cierre del contenedor" arranca en ese `</div>`, la última tile pierde un cierre y el browser la anida adentro de la tile anterior — visualmente se ve como si una tapara a la otra o como si el contenido de una "desapareciera" sin ningún error de sintaxis global (el conteo total de `<div>`/`</div>` del archivo sigue dando parejo, así que un chequeo superficial no lo detecta). El delimitador correcto arranca **después** de ese `</div>` de la tile, en el bloque de líneas en blanco que sigue.

### Para agregar imagen real a un tile

1. Encodear PNG/JPG a base64
2. Reemplazar el `src` del `.tile-cover-wrap img` correspondiente
3. Si pesa +500KB → moverlo a `portfolio-images.js` con lazy load

### Regla: NO encimar imágenes

- Cada tile tiene: `tile-bg` (color) → `tile-cover-wrap` (imagen) → `tile-ui` (info+gradient)
- El gradient del `tile-ui` va de `rgba(8,8,12,.96)` abajo a `transparent` 70% arriba
- Nunca usar `position:absolute` doble sin z-index claro

### Tile de Monchis — Search Animado

- El search bar está `position:absolute; top:1.5rem; left:1.5rem; z-index:10`
- Las frases rotan cada **2800ms** con slide vertical (entra desde abajo, sale hacia arriba)
- Easing entrada: `cubic-bezier(0.22,1,0.36,1)` (iOS-like)
- Easing salida: `cubic-bezier(0.55,0,1,0.45)` (rápido)
- Frases: "¿Una comida rica?" / "Hamburguesas o pizza" / "¿Algo fresco?" / "¿Ya desayunaste?" / "Sushi con delivery gratis" / "Pizzas al 50% OFF"

### Filtros

- `filterProjects(cat, btn)` — filtra por `data-category` en cada tile
- Categorías: `all`, `mobility`, `food`, `fintech`, `ecommerce`, `saas`

### Título del header ("Thinker. Tinkerer. Boundary breaker.") vs `#identity`

*Julio 2026 — ✅ APROBADO, no tocar sin pedido explícito*

`#identity` (nombre + rol, "Paula Elffman / Senior Product Designer") es `position:fixed;top:2rem;right:2.5rem` — flota independiente del flujo del header. El `.ph-title` vive en el mismo header, por eso en algún momento se lo achicó a mano para que no lo pisara, en vez de resolver el espacio real.

**Fix aplicado:**

- `.ph-title-row` tiene `padding-right:15rem` (240px) — una reserva **fija** que el título nunca cruza, sin importar el ancho de pantalla. Deja siempre ≥40px libres antes de `#identity`.
- Gracias a esa reserva, `.ph-title` pudo crecer: `clamp(2.5rem,6vw,6.5rem)` (antes `clamp(2.25rem,5.2vw,5.5rem)`).
- Trade-off intencional: el título ocupa **menos ancho** (envuelve en más líneas) a cambio de **más tamaño de fuente**.
- En mobile (`@media max-width:768px`) el `padding-right` se resetea a `0` en `.ph-title-row` — ahí `#identity` se reposiciona más chico (`top:1.25rem;right:1.25rem`) y el layout ya wrappea distinto, no hace falta la reserva.

**Regla para el futuro:** si el título necesita crecer más, subir el `15rem` de reserva junto con el tamaño, nunca el tamaño solo — así no vuelve a pisar `#identity`.

---

### Legibilidad — `.tile-category` y `.ph-mitem` (marquee)

*Julio 2026 — ✅ APROBADO, no tocar sin pedido explícito*

> ⚠️ **Actualización Julio 2026:** la parte de `.tile-category` de esta decisión (opacity 1, siempre visible) quedó **superada** por la decisión "Texto de tiles solo en hover" más abajo, a pedido explícito. `.ph-mitem` (marquee) sigue vigente sin cambios.

Dos elementos de texto secundario quedaron demasiado chicos/tenues para leerse en uso real (detectado por captura de pantalla):

`.tile-category` (label tipo "Fintech · Web3 · 2024" arriba del nombre en cada tile)

- Antes: `font-size:.5rem` (8px), `letter-spacing:.14em`, `opacity:.85`
- Ahora: `font-size:.6875rem` (11px), `letter-spacing:.12em`, `opacity:1`
- El tracking se redujo un poco porque con más tamaño una tracking tan ancha vuelve a costar lectura.

`.ph-mitem` (ítems del marquee que se desliza bajo el título — "Access control · E-commerce · Design systems...")

- Antes: `font-size:.5rem` (8px), `color:var(--ash-2)` (25% opacidad)
- Ahora: `font-size:.6875rem` (11px), `color:var(--ash)` (50% opacidad)
- Mismo criterio de tamaño que `.tile-category`, para que el sistema quede consistente.

**Pendiente, no resuelto todavía:** en la captura se ve `#section-label` (el texto vertical "Paula Elffman — Portfolio OS" pegado al borde izquierdo) pisando el primer ítem del marquee. Es `position:fixed;top:50%` — siempre centrado verticalmente en el viewport — así que se cruza con cualquier contenido que caiga a media altura de la pantalla, no solo el marquee. No se tocó porque implica una decisión de layout (reposicionar o resolver z-index/color), no solo de tamaño. Queda anotado en PRÓXIMOS PASOS.

**Nota de mantenimiento:** tanto `.ph-title` como `.tile-category` como `.ph-marquee`/`.ph-mitem` tienen **definiciones CSS duplicadas** en el archivo (misma selector declarado dos veces en distintas zonas del `<style>`). La última definición es la que gana por cascada, así que los fixes de arriba se aplicaron sobre la que efectivamente renderiza — pero las versiones viejas siguen ahí como código muerto. Candidato a limpieza general en una pasada futura.

---

### Covers de tiles animados (video) — `muv`

*Julio 2026 — cover pasó de GIF a `<video>` embebido (migración no quedó documentada en su momento). Septiembre 2026 — ✅ contenido real cargado, con un gotcha importante de compatibilidad.*

`.tile-muv` usa `<video autoplay loop muted playsinline>` (no `<img>`) dentro de `.tile-cover-wrap`, embebido inline como `data:video/webm;base64,...` — a diferencia de `muv-teal.gif`/`monchis-tile.jpg`, este si va inline pese a superar ampliamente los 300KB del protocolo de IMÁGENES (ver excepción documentada ahí).

- **Tamaño del cover:** `800×600px` en el layout (el archivo real es 2560×1440, el CSS lo recorta/escala con `object-fit`).
- **Contenido actual:** clip real de 5.17s subido por Pau, reemplazando el placeholder que había antes.

**🐛 Gotcha (Septiembre 2026) — H.264/AAC no reproduce como `data:` URI en navegadores sin códecs propietarios:** el archivo que subió Pau venía como MP4 (H.264 + AAC). Al embeberlo tal cual (`data:video/mp4;base64,...`), el `<video>` tira `MEDIA_ELEMENT_ERROR: DEMUXER_ERROR_NO_SUPPORTED_STREAMS` en cualquier build de Chromium sin códecs propietarios (`canPlayType('video/mp4')` devuelve `''`) — típico de navegadores/motores basados en Chromium open-source. Esto es independiente de si el `moov atom` está al principio o al final del archivo (probado con `-movflags +faststart`, mismo error) — es directamente falta de decoder H.264/AAC en el motor, no un problema de contenedor.
  - **Fix aplicado:** transcodificar a **VP9 + Opus dentro de WebM** (`ffmpeg -c:v libvpx-vp9 -crf 32 -b:v 0 -c:a libopus -b:a 96k`), que es el mismo formato que ya usaba este tile y tiene soporte universal en motores basados en Chromium (con o sin códecs propietarios), Firefox y Edge.
  - **Costo:** el peso subió de ~624KB (loop corto en prueba) a **~3.5MB** (clip real de 5s a mayor resolución). Es el asset más pesado del sitio embebido inline — candidato a bajarle el bitrate o acortar el clip si se nota en tiempo de carga real.
  - **Regla para el futuro:** cualquier video que se suba para un tile tiene que salir como WebM/VP9 (o VP8) antes de embeberlo — nunca MP4/H.264 directo a `data:` URI, sin importar que "funcione en mi Chrome" (Chrome de escritorio con Widevine/códecs propietarios sí lo reproduce; el motor usado para verificar este sitio, no). Verificar con `document.createElement('video').canPlayType(...)` antes de dar por bueno un formato nuevo.

**Para replicar en otro tile:** reemplazar el `src` del `img` (o pasar a `<video>`) dentro de `.tile-cover-wrap` del tile correspondiente — mismo punto que "Para agregar imagen real a un tile" más arriba. Si es video, seguir el gotcha de arriba para el formato.

---

### Texto de tiles — solo "View case study" visible, resto en hover

*Julio 2026 — ✅ APROBADO, no tocar sin pedido explícito* *(revisión de la decisión original "Texto de tiles solo en hover" — el arrow dejó de ocultarse)*

**Decisión:** de los 4 elementos de texto del tile, solo `.tile-arrow` ("View case study ↗") queda visible por defecto — ahora como **botón pill**, fondo negro semitransparente con blur, no como texto plano. `.tile-category`, `.tile-name` y `.tile-headline` siguen ocultos hasta el hover.

```css
/* categoría y nombre — ocultos hasta hover (headline ya se comportaba así) */
.tile .tile-category,
.tile .tile-name {
  opacity:0;
  transform:translateY(6px);
  transition:opacity .35s var(--ease), transform .35s var(--ease);
}
.tile:hover .tile-category,
.tile:hover .tile-name {
  opacity:1;
  transform:translateY(0);
}

/* arrow → botón siempre visible */
.tile-arrow {
  opacity:1;
  align-self:flex-start;
  background:rgba(0,0,0,.55);
  backdrop-filter:blur(6px);
  -webkit-backdrop-filter:blur(6px);
  padding:.5rem .875rem;
  border-radius:999px;
  margin-top:.875rem;
  transition:background .3s var(--ease), gap .3s var(--ease);
}
.tile:hover .tile-arrow {
  background:rgba(0,0,0,.75);
  gap:.75rem;
}
.tile-arrow.coming-soon {
  background:rgba(0,0,0,.3); /* fondo más tenue para diferenciar de casos con case study real */
}

```

Este bloque se agregó **al final del** `<style>`, después de todo lo demás, para ganar por cascada sin tener que tocar/borrar las reglas duplicadas viejas de `.tile-category` y `.tile-arrow` que ya estaban dando vueltas en el archivo (ver nota de mantenimiento arriba). Sigue siendo código muerto acumulado, no se limpió.

**Razón del cambio de enfoque:** con category+name+arrow todos ocultos (versión anterior), el tile quedaba sin ningún indicio de interactividad hasta pasar el mouse — no había affordance de "esto es clickeable". Con el botón siempre visible, el tile comunica "hay algo acá" incluso en reposo, y el resto de la info (nombre, categoría, headline) se reserva para cuando el usuario ya mostró intención.

**Nota de posición:** el arrow vive dentro del mismo `.tile-info` que category/name/headline (que siguen ocupando espacio en el flujo aunque estén en `opacity:0`), así que su posición vertical no salta al hacer hover — queda fijo abajo a la izquierda del tile en ambos estados.

**Ya no hace falta la excepción de "Coming soon" que tenía la versión anterior** (forzar opacity 1 solo en ese caso) — ahora el arrow siempre está visible para todos los tiles por igual, `.tile-arrow.coming-soon` solo ajusta el color de fondo del botón para diferenciarlo visualmente.

---

### Tile hover reveal — gradient teal en zona de título + timing en cascada

*Septiembre 2026 — ✅ APROBADO, no tocar sin pedido explícito*

**Pedido:** replicar cómo revela sus tiles calebixca.com — un gradient sutil detrás del título del proyecto que aparece muy lento, y no solo el gradient: todo el hover se sentía rápido/golpeado en comparación.

**Gradient nuevo — `.tile-ui::after`:** capa hermana de `.tile-ui::before` (el scrim oscuro), con un teal fijo — no `var(--accent)`, mismo motivo que el spotlight glow y las otras excepciones de esta sección: el scrim de fondo es oscuro fijo en ambos modos, así que el acento mode-aware (`#009D71` en light) se perdería contra él.

```css
.tile-ui::after{
  content:'';
  position:absolute; inset:0; z-index:-1;
  background:linear-gradient(0deg,
    rgba(34,240,164,.20) 0%,
    rgba(34,240,164,.11) 24%,
    rgba(34,240,164,.03) 46%,
    transparent 66%);
  opacity:0;
  transform:translateY(14px);
  transition:opacity 1.8s var(--ease), transform 1.8s var(--ease);
}
.tile:hover .tile-ui::after,
.tile.tile-tapped .tile-ui::after{
  opacity:1;
  transform:translateY(0);
  transition-delay:.15s;
}
```

Se pinta encima del scrim oscuro (mismo `z-index:-1`, pero declarado después de `::before` → gana el orden de pintado dentro de ese stacking context), así el teal queda como un brillo residual sobre el oscurecimiento en vez de competir con él por contraste.

**Todo el hover se hizo más lento — tabla de timings:**

| Elemento | Antes | Ahora |
| --- | --- | --- |
| `.tile-glow` (spotlight que sigue el mouse) | opacity `.5s` | opacity `1.3s` |
| `.tile-cover` (zoom de la imagen) | transform `.7s` | transform `1.6s` |
| `.tile-ui::before` (scrim oscuro) | opacity `.7s` base / `.45s` en hover (aparecer era más rápido que desaparecer) | opacity `1s` base / `1.5s` en hover (ahora aparecer es lo lento) |
| `.tile-category` / `.tile-name` | opacity+transform `.35s` | opacity+transform `1.1s` — `.tile-name` con `.06s` de delay extra sobre `.tile-category` |
| `.tile-headline` | opacity+transform `.3s` | opacity+transform `1.1s`, delay `.18s` (llega última de las tres) |
| `.tile-ui::after` (nuevo, teal) | — | opacity+transform `1.8s`, delay `.15s` |

**Orden de llegada en el hover, de más rápido a más lento:** scrim oscuro → categoría → nombre → gradient teal → headline. Cada elemento tiene su propio timing para que la revelación se sienta en capas y no como un solo golpe de opacity — es la parte de "aparece muy slow, todo" del pedido.

**⚠️ Nota de mantenimiento:** el snippet de código en "Texto de tiles — solo View case study visible, resto en hover" (más arriba) todavía muestra `transition:opacity .35s var(--ease)` para `.tile-category`/`.tile-name` — quedó **desactualizado** por este cambio; no se reescribió ese bloque para no tocar el resto de esa sección. La regla que efectivamente gana por cascada y renderiza es la de acá (misma lógica de "última definición gana" que ya aplica al resto de duplicados del archivo, ver nota de mantenimiento en "Legibilidad — `.tile-category`" más arriba).

**Para replicar en un tile nuevo:** no hace falta tocar nada por tile — `.tile-ui::after`, igual que el scrim y el spotlight glow, es una regla global sobre `.tile-ui` y aplica sola a cualquier tile nuevo que use esa estructura.

---

### Headlines de tiles — acortados

*Julio 2026 — ✅ APROBADO*

Se simplificaron los `.tile-headline` para que se lean rápido en la ventana de hover (antes eran oraciones largas pensadas para estar siempre visibles).


| Tile                    | Antes                                                                       | Ahora                                     |
| ----------------------- | --------------------------------------------------------------------------- | ----------------------------------------- |
| muv                     | End-to-end ride-hailing for 2M+ trips across Paraguay.                      | Ride-hailing for 2M+ trips in Paraguay.   |
| monchis (home)          | New home experience driving 44.6% CVR for 61K users.                        | Food delivery redesign. 44.6% CVR.        |
| monchis (drivers)       | Real-time shift management for 1,200+ active drivers.                       | Shift management for 1,200+ drivers.      |
| smartpass               | Digital ticketing where great experiences begin.                            | Digital ticketing & access.               |
| everyone                | End-to-end e-commerce for a global multi-brand fashion platform.            | E-commerce for a global fashion platform. |
| sukupay                 | Redesigning trust and speed in crypto remittances from the US to Guatemala. | Crypto remittances, US → Guatemala.       |
| hugo                    | — (nuevo, sin versión "antes")                                              | AI Customer Success agent, vibe coded.    |
| autocloud (placeholder) | Fleet management and automotive workflow design.                            | Fleet management for automotive teams.    |
| thefork (placeholder)   | Restaurant discovery and booking for 8M+ users.                             | Restaurant discovery for 8M+ users.       |


**Criterio:** priorizar "qué es" + un número de impacto cuando existía, descartar el resto.

---

### Imagen real en tile de monchis home

*Julio 2026 — ✅ APROBADO*

Se reemplazó el cover estático de `.tile-monchis-home` (mockup de la app, screenshot con logo) por `monchis-tile.jpg`.

- **Original:** PNG 1600×1200, 692KB.
- **Procesado:** mismo tamaño (1600×1200 = 4:3, coincide exacto con el cover 800×600 del tile, no hizo falta recortar), comprimido a JPG calidad 82 → **~88KB**.
- Referenciado como archivo externo (`<img src="monchis-tile.jpg">`), mismo patrón que `muv-teal.gif` — no embebido en base64 pese a pesar menos de 300KB.
- **Excepción al protocolo:** el protocolo de IMÁGENES (ver esa sección) dice que <300KB debería ir inline en base64. Se dejó como archivo externo por consistencia con el tile de muv y porque simplifica iterar mientras estamos probando covers. Ver decisión "¿Creamos `portfolio-images.js`?" justo abajo.

---

### Cover de `.tile-smartpass` actualizado

*Septiembre 2026 — ✅ a pedido*

Se reemplazó el cover (screenshot del dashboard de acreditaciones, "¡Hola María!") por un screenshot de la pantalla de login ("Dónde empiezan las grandes experiencias").

- **Original:** PNG 1872×1248.
- **Procesado:** comprimido a WebP calidad 82 → **~74KB**, embebido inline en base64 (dentro del protocolo, no hace falta excepción). Mismo `alt` que ya tenía el tile.

### Cover de `.tile-memorable` (case `drivers`) actualizado

*Septiembre 2026 — ✅ a pedido*

Se reemplazó el cover (mapa de la app, foco en la ruta) por un mockup nuevo de 3 teléfonos superpuestos sobre foto urbana nocturna, mismo headline ("Shift management for 1,200+ drivers.").

- **Original:** PNG 1760×1328.
- **Procesado:** comprimido a WebP calidad 82 → **~270KB**, embebido inline en base64 (dentro del protocolo, justo por debajo del límite de 300KB — si se vuelve a reemplazar este cover, vigilar que no lo pase).

---

### ¿Creamos `portfolio-images.js`? — Por ahora NO

*Julio 2026 — decisión activa, revisar cuando cambien las condiciones*

`portfolio-images.js` figura en la tabla de ARCHIVOS y en el protocolo de imágenes, pero **todavía no existe como archivo real**. Se evaluó crearlo ahora y se decidió posponerlo.

**Razón:** el lazy-load con `IntersectionObserver` se justifica cuando hay varios tiles con imágenes en el rango 300KB–1MB (suficiente peso como para que valga la pena no cargarlas todas de entrada). Hoy solo hay 2 tiles con imagen real:

- `muv-teal.gif` → 7.5MB (temporal, va a pasar a `.mp4`, no aplica al rango del lazy load igual)
- `monchis-tile.jpg` → 88KB (por debajo del umbral, no lo necesita)

Ninguno de los dos justifica construir el sistema todavía. Se optó por seguir con archivos externos simples (`src` relativo) mientras se está en fase de prueba de covers.

**Cuándo reconsiderar:** cuando haya 3-4+ tiles con imagen real, y/o alguna pese específicamente 300KB–1MB. Hasta entonces, `portfolio-images.js` sigue siendo un archivo planeado, no uno real — si algo en el proyecto asume que existe, hay que corregirlo.

---

### Tiles en mobile — tap-to-reveal (no hay `:hover` en touch)

*Julio 2026 — ✅ APROBADO*

**Problema:** con el botón "View case study" como único elemento visible por defecto (ver decisión de arriba) y el resto del texto detrás de `:hover`, en touch (sin mouse) el usuario nunca vería a qué proyecto correspondía cada tile — `:hover` no se dispara en mobile.

**Decisión:** primer tap revela la info (igual que el hover en desktop), sin navegar. Segundo tap sobre el mismo tile, o tap directo sobre el botón "View case study", navega al case study.

```js
gallery.addEventListener('click', function(e){
  var tile = e.target.closest('[data-case]');
  if(!tile) return;
  var onArrow = e.target.closest('.tile-arrow');
  if(isTouch && !onArrow && !tile.classList.contains('tile-tapped')){
    e.preventDefault();
    document.querySelectorAll('.tile.tile-tapped').forEach(function(t){
      if(t!==tile) t.classList.remove('tile-tapped');
    });
    tile.classList.add('tile-tapped');
    return;
  }
  // ...navegación normal (ya existía)
});

// tap afuera de cualquier tile cierra el que estaba revelado
document.addEventListener('click', function(e){
  if(!e.target.closest('.tile')){
    document.querySelectorAll('.tile.tile-tapped').forEach(function(t){
      t.classList.remove('tile-tapped');
    });
  }
});

```

```css
/* .tile-tapped replica el estado :hover para category, name, headline, arrow y el zoom del cover */
.tile:hover .tile-category, .tile.tile-tapped .tile-category,
.tile:hover .tile-name,     .tile.tile-tapped .tile-name     { opacity:1; transform:translateY(0); }
.tile:hover .tile-headline, .tile.tile-tapped .tile-headline { opacity:1; transform:translateY(0); }
.tile:hover .tile-cover,    .tile.tile-tapped .tile-cover    { transform:scale(1.04); }
.tile:hover .tile-arrow,    .tile.tile-tapped .tile-arrow    { background:rgba(0,0,0,.75); gap:.75rem; }

```

**Detección de touch:** `window.matchMedia('(hover:none)').matches` — en desktop con mouse esto es `false`, así que el comportamiento de click normal (un solo click navega) no cambia.

**Por qué el botón navega directo sin el paso intermedio:** es una call-to-action explícita ("View case study ↗"), no ambigua — tocarlo comunica intención clara de entrar, a diferencia de tocar la imagen/fondo del tile genérico.

**Alcance de la revisión mobile (Julio 2026):** se pidió mobile de "todo el sitio" (home + dashboard + case studies). El archivo principal (`index.html`) ya tenía cobertura `@media` para home (grid de tiles, header de proyectos), About (`.av-`*) y Dashboard (`.db-*`, `.dv-*`) desde antes de esta sesión — no se reconstruyó de cero, se sumó el tap-to-reveal sobre esa base existente.

**Pendiente:** los 6 case studies (`muv-case.html`, `monchis-case.html`, `everyone-case.html`, `smartpass-case.html`, `sukupay-case.html`, `vendor-tool-case.html`) no están disponibles todavía para revisar/ajustar su mobile — hay que subirlos.

---

## DASHBOARD VIEW — REGLAS

### APROBADO — No tocar sin pedido explícito

**Secciones (en orden):**

1. `.dv-avatar` — Foto + título "About me" · *simplificado Agosto 2026*
2. `.dv-section` — About (story + positioning statement) · *statement Agosto 2026*
3. `.dv-section` — AI in my workflow (carousel interactivo — ver subsección abajo) · *nuevo Agosto 2026*
4. `.dv-section.dv-bg` — Core strengths (pills) + My superpower (bridge), **misma sección** · *fusionadas Agosto 2026, ver nota abajo*
5. `.dv-section` — Experience (timeline)
6. `.dv-section.dv-bg` — Human side (bento: facetas de Pau) · *rediseñado Agosto 2026, superpower removida*

### About — statement de posicionamiento

*Agosto 2026 — ✅ a pedido (reemplaza el grid de passions)*

En el About, tras el `.dv-story` (los 4 párrafos, sin cambios), se **quitó la grilla "What I'm especially passionate about"** (`.dv-passions-label` + 6 `.dv-passion`) y se puso un **statement de posicionamiento** (`.dv-statement`):

- `.dv-statement-h` (Geist, ~2.375rem) — frase con las partes clave en verde accent (`em` → `var(--accent)`): *"I design **complex digital products** and use **AI** to accelerate research, exploration, prototyping and iteration — without losing the **human judgment** behind the work."*
- `.dv-statement-tags` (mono, `--ash-2`) — tagline *Product Designer · AI-native workflows · FinTech · B2B SaaS*, con los separadores `·` en `var(--accent)` (`.dv-statement-tags span`).
  - ⚠️ **Eliminado el 5 de octubre de 2026** (feedback del dev: sonaba a titular de LinkedIn). El statement queda solo con la frase; `.dv-statement-h` pasó a `margin-bottom:0` y se borró el CSS de `.dv-statement-tags`. No volver a agregarlo.

Highlights vía `var(--accent)` → bright #22F0A4 en dark, teal #009D71 en light. Separado del story por `border-top` (mismo patrón que tenían las passions).

> **Nota de limpieza:** las reglas `.dv-passions`* / `.dv-passion*` quedaron como **código muerto** (ya no se usan). Candidato a borrar junto con `.dv-card`*.

### Avatar

*Agosto 2026 — ✅ simplificado a pedido*

- Foto embebida directamente como `data:image/jpeg;base64,...` (NO lazy load)
- Círculo con `box-shadow: 0 0 0 3px rgba(38,216,151,.3), 0 0 0 7px rgba(38,216,151,.08)`
- Título: `<h1 id="dv-name-anim">"About <span class='dv-word-accent'>me</span>"` — mismo mask-reveal animation que antes (word-by-word), solo cambió el texto.
- **Se quitaron:** el `<p class="dv-roles">` (roles tachados: Graphic, Web, UI, UX, Product Designer) y el `<p class="dv-location">` ("Based in Buenos Aires · Open to remote"). El `.dv-avatar` ahora es solo foto + título "About me", sin subtítulos.
- Las clases `.dv-roles` / `.dv-location` quedaron en el CSS como **código muerto** (ya no se usan en este bloque) — no borrar sin confirmar que no se reusan en otro lado.

### Timeline de experiencia (en orden cronológico inverso)

*Actualizada Agosto 2026 desde LinkedIn — 7 entries reales*

1. **SukuPay** — Mar 2026–Present · Senior PD · Miami Beach, FL · Remote
2. **itti** — Aug 2024–Mar 2026 · Senior PD · Asunción, Paraguay · Remote (Muv, Monchis, Vendoor Tool, Drivers App, Smart Pass)
3. **Beyond Art Group** — Aug 2021–Aug 2024 · Product Designer Consultant · Seasonal · Buenos Aires
4. **AutoCloud** — Jul 2023–Apr 2024 · Principal PD · US · Remote
5. **TheFork · TripAdvisor** — Apr 2019–Jun 2023 · Senior PD · Remote
6. **Hotaru App** — Mar 2020–Jun 2022 · Principal PD & Co-Founder · Seasonal · Buenos Aires
7. **Restorando** — Oct 2016–Apr 2019 · Product Designer · Buenos Aires (adquirida por TheFork · TripAdvisor en 2019)

> **Cambios Agosto 2026 (a pedido):** se corrigieron fechas/rol/ubicación de **itti** (antes figuraba "2021–Present · Buenos Aires", real Aug 2024–Mar 2026 · Asunción), **TheFork** (antes "2019–2021 · Product Designer", real Apr 2019–Jun 2023 · Senior PD) y **Restorando** (antes "2017–2019 · UX/UI", real Oct 2016–Apr 2019 · Product Designer). Se **agregó Hotaru App** (Co-Founder) y se **eliminó** el entry fantasma "AutoCloud 2015–2017 · UX Designer" que no existe en el LinkedIn real. Orden = cronológico inverso por fecha de fin (= orden del LinkedIn).

> **Títulos del About Me (Agosto 2026, a pedido):** el `.dv-exp-h` pasó de "10 years. *Four chapters.*" → **"10 years *in product.*"**. El `.dv-human-h` de la sección "Beyond the work" pasó de "What feeds *the work.*" → **"Besides being a *product designer…*"** (el label mono "Beyond the work" no cambió).

### Chips de experiencia (`.dv-tag`) — verde accent en light/dark

> ⚠️ **Reemplazado el 5 de octubre de 2026.** Los chips ya no existen: ver "About: limpieza y datos de experiencia" en AJUSTES RÁPIDOS POST-REVIEW. Lo que sigue queda como historial.

*Agosto 2026 — ✅ corregido a pedido*

Los 21 chips de estado bajo cada empleo del timeline (ej. `Web3 · Fintech`, `Muv — 2.2M+ trips Q4`) usaban `color:var(--ash-2)` + borde `var(--line-md)` → en **light** quedaban casi invisibles (contraste ~2.6:1 sobre `#F5F4F0`). Ahora toman el verde de acento en ambos modos:

- `color:var(--accent)` → `#009D71` en light, `#22F0A4` (bright) en dark. Automático, sin hardcode.
- Relleno + borde tintados con `color-mix(in srgb, var(--accent) N%, transparent)` (9% fill / 38% borde), con **fallback sólido** (`border:1px solid var(--accent)` / `background:transparent`) para browsers sin `color-mix`.
- Estado `:hover` nuevo (borde 60% / fill 15%).

**Regla:** los chips derivan su color del token `--accent` vía `color-mix`, así que respetan la regla de "nunca hardcodear colores que cambian entre modos". Es el mismo criterio que `.dv-pill-g`.

### AI in my workflow — carousel interactivo (arriba de Core strengths)

*Agosto 2026 — ✅ nuevo, a pedido*

Sección nueva en el About Me, **entre About y Core strengths**. Muestra cómo Pau integra AI (Claude) en su flujo de diseño, en formato módulo interactivo tipo "stories" (patrón Linear/Stripe), no como texto plano.

**Estructura HTML:** `.dv-section` (sin `dv-bg`) → `.dv-label` "AI in my workflow" → `.dv-human-h` "AI as a *force multiplier.*" → `.ai-intro` (2 párrafos) → `.ai-lab` (el módulo).

**Copy del intro (Octubre 2026):** el segundo párrafo de `.ai-intro` pasó de "My primary tool is **Claude**, which I use across the whole product design lifecycle. A few of the ways:" a "My primary tool is **Figma &amp; Claude**, which I use across the whole product design lifecycle. A few of the ways:" (a pedido; `&amp;` en el HTML, se ve "Figma & Claude", en negrita igual que antes). Nota de gramática: con dos herramientas, en inglés lo correcto sería "My primary **tools are**..." — se dejó como se pidió; es un cambio de una palabra si se quiere corregir. La barra del módulo (`claude · design-workflow`) y el resto de la sección no se tocaron.

**Módulo** `.ai-lab`**:**

- `.ai-bar` — barra de ventana: 3 dots (el 3° `.live` en accent) + título mono `claude · design-workflow`. *(Ya no tiene flechas — ver rediseño abajo.)*
- `.ai-progress` — segmentos (uno por slide) que se llenan solos y **auto-avanzan** (~5.2s c/u). Generados por JS a partir de los slides.
- `.ai-stage` > `.ai-track` — carousel horizontal (`translateX(-i*100%)`, transición .5s). 6 `.ai-slide`, cada una con eyebrow mono (`01 · …`), título Geist, descripción Muli y un `.ai-prompt` que **se tipea solo** (typewriter con cursor que parpadea).
- `.ai-nav-row` → `#aiPrev` + `.ai-nav` (pills) + `#aiNext` — fila inferior con las flechas a cada costado de las pills (ver rediseño abajo).

**Las 6 capacidades (**`data-nav`**):** Research · Prototyping · Exploration · UX writing · Critique · Production (Claude Design).

### `.ai-lab` — rediseño visual (tarjeta elevada, centrada, flechas abajo)

*Agosto 2026 — ✅ a pedido*

**Problema/pedido:** el módulo ocupaba **todo el ancho** del `.dv-section` (sin límite propio), tenía el mismo gris de fondo que el resto de la página (`var(--ghost)`, sin contraste) y las flechas ‹ › vivían arriba a la derecha, dentro de la barra de ventana.

**Cambios:**

1. **Ancho y centrado:** `.ai-lab` ahora tiene `max-width:860px; margin:0 auto` — deja de ocupar el ancho completo del `.dv-section` y queda centrado en desktop, igual que `.ai-intro` (780px) pero un poco más ancho.
2. **Fondo + elevación:** se agregaron dos tokens nuevos en `:root` (dark) y `body.light-mode` (light):
  - `--surface` — el fondo de la tarjeta. Dark: `var(--ghost-2)` (sin cambios de fondo, ya elevaba bien). Light: `#FFFFFF` (antes `var(--ghost)` = `#E8E7E3`, un gris que casi no se despegaba del `--void` de fondo `#F5F4F0`).
  - `--shadow-card` — sombra sutil para despegarlo del fondo. Light: `0 24px 48px -18px rgba(20,20,35,.18), 0 3px 12px rgba(20,20,35,.07)`. Dark: `0 24px 60px -20px rgba(0,0,0,.6), 0 2px 10px rgba(0,0,0,.35)`.
  - `.ai-lab` pasa a `background:var(--surface); box-shadow:var(--shadow-card);` (antes `background:var(--ghost)`, sin shadow).
3. **Flechas abajo, a los costados de las pills:** se sacaron del `.ai-bar` (ya no hay `.ai-bar-ctrl`) y se movieron a una fila nueva `.ai-nav-row` al final de la tarjeta: `‹ [pills de temas] ›`, todo centrado como grupo (`justify-content:center`). `.ai-nav` (las pills) también se centra (`justify-content:center`, antes alineado a la izquierda).

**Por qué "a cada costado" y no una fila propia:** agrupar navegación de tema (pills) + navegación de slide (flechas) en una sola fila inferior evita sumar altura al componente y deja la barra superior (`.ai-bar`) limpia, solo con la identidad de la ventana (dots + título).

**Archivos tocados:** `index.html` — tokens en `:root`/`body.light-mode`, CSS de `.ai-lab`/`.ai-bar`/`.ai-nav`/`.ai-nav-row`/`.ai-arrow`, HTML del bloque `#aiLab` (arrows movidos), media query mobile (`.ai-nav{padding:1rem}` → `.ai-nav-row{padding:1rem;gap:.5rem}`).

**IDs sin cambios:** `#aiPrev`, `#aiNext`, `#aiProgress`, `#aiTrack`, `#aiNav` — el JS (`getElementById`) sigue funcionando igual, solo cambió dónde viven los botones en el DOM.

**Regla para el futuro:** `--surface`/`--shadow-card` quedaron como tokens genéricos para "tarjeta elevada sobre el fondo" — reutilizables si se necesita otro componente con el mismo tratamiento (ej. si `.hs-feature` necesitara despegarse del fondo más adelante), en vez de inventar un tercer par de valores.

**Interacción / JS (bloque autocontenido, IIFE sobre** `#aiLab`**):**

- Auto-avance con `setTimeout`; el fill del segmento y el avance están sincronizados. `DUR = 5200ms` es **la única variable a tocar** para cambiar la velocidad.
- **Pausa al hover** (congela el segmento activo por su ancho computado) y **resume** con el tiempo restante exacto.
- Arranca cuando la sección entra en viewport (`IntersectionObserver`), así el typewriter dispara recién al verse.
- Respeta `prefers-reduced-motion`: sin auto-avance ni tipeo (prompt completo estático, sin parpadeo).

**Tokens / tipografías:** todo con tokens `dv-`* (`--accent`, `--paper`, `--ash`, `--ash-2`, `--ghost`, `--void`, `--line*`) + `color-mix` para los tints → light/dark automático. Fuentes: Geist (títulos), Muli (body), JetBrains Mono (labels + prompt).

**Copy:** condensado del texto original de Pau (se mantuvo la idea de "force multiplier" y la mención a Claude / Claude Design). Los prompts de ejemplo por slide son ilustrativos.

**Preview aislado:** se generó `ai-section-preview.html` (standalone, con toggle light/dark y los mismos tokens/fuentes) para revisar solo esta sección sin abrir todo el portfolio. **No es parte del deploy** — es solo para review, no va en la tabla de ARCHIVOS.

**Regla para el futuro:** para sumar/quitar una capacidad, agregar/quitar un `.ai-slide` con su `data-nav` y `data-prompt` dentro de `#aiTrack` — los segmentos de progreso y las pills de nav se generan solos a partir de los slides, no hay que tocar el JS.

### Core strengths (13 pills, 4 en Emerald)

- Emerald: User Research, Design Systems, Visual Design, AI-assisted Design
- Clase: `.dv-pill-g`

### My superpower — combinada dentro de la sección Core strengths

*Agosto 2026 — ✅ movida y fusionada a pedido (dos iteraciones). Septiembre 2026 — ✅ tercera iteración: contenido interno rediseñado (scramble title + chip flow), ver más abajo.*

**Iteración 1:** `.hs-feature` (el bloque "I bridge the gap.") vivía **dentro** del bento `.hs-grid` de "Beyond the work", como primera celda (span 6). Se sacó de ahí y pasó a ser su propia `.dv-section.dv-bg`, entre Core strengths y Experience.

**Iteración 2:** esa sección propia se **fusionó con la de Core strengths** — ya no son dos `.dv-section.dv-bg` consecutivas, sino **una sola**: `.dv-label` "Core strengths" → `.dv-pills` → `.hs-feature`, todo dentro del mismo `<div class="dv-section dv-bg">`. Motivo: las dos secciones separadas dejaban un espacio vertical grande entre las pills y la card (dos paddings de `.dv-section` sumados, `5rem` cada uno). Al fusionarlas, ese espacio pasó a ser un solo `margin-top:2.5rem` en `.hs-feature` — mucho más ajustado, se leen como un conjunto.

- `.hs-feature` — eyebrow mono "My superpower" → `.hs-super-title` "I bridge the gap." → subtítulo → (en esta iteración) `.hs-bridge`: visualización literal del bridge, 3 nodos (`Stakeholder language` → `Dev handoff` → `Shipped product`) unidos por una línea (`.hs-line > i`) que se **dibuja** (scaleX 0→1) y nodos (`.hs-node-dot`) que se **encienden en secuencia** (delays 0 / .5s / 1s) al entrar en viewport. *(Reemplazado en Iteración 3, ver abajo.)*
- **Fondo blanco + sombra (Agosto 2026, a pedido):** `.hs-feature` usaba `background:var(--ghost-2)` — en light mode eso es un gris que casi no se distingue del `--void` de fondo de la sección (mismo problema que tuvo `.ai-lab`, ver esa sección). Se cambió a los mismos tokens reutilizables `--surface` (blanco puro en light) + `box-shadow:var(--shadow-card)`, para que la card se despegue del fondo. También se quitó el `grid-column:span 5` (CSS muerto — ya no vive dentro de un grid).
- ~~El id `#hsBridge` sigue siendo único en el documento...~~ *(obsoleto, ver "IDs" en Iteración 3 — `#hsBridge` ya no existe.)*

**Iteración 3 (actual, Septiembre 2026):** rediseño completo del contenido interno de `.hs-feature`, a pedido — Pau no quería el diagrama de línea+nodos y pidió que el título apareciera con el efecto de scramble/decrypt del hero de **oscarhernandez.vercel.app**.

- `.hs-eyebrow` — nuevo modificador `.hs-eyebrow-lg` (se agrega junto a `.hs-eyebrow`, no la reemplaza): sube `font-size` de `.5625rem` a `clamp(.8125rem,1.1vw,.9375rem)` y `font-weight` a 700. Es exclusivo de este eyebrow — el resto de los eyebrows del sitio (Experience, Beyond the work, etc.) siguen en el tamaño base.
- `.hs-super-title` ("I bridge the gap.") tiene ahora efecto **scramble/decrypt**: al entrar en viewport arranca vacío y cada carácter cicla por un charset random (`!<>-_\/[]{}—=+*^?#$%&01`) antes de resolverse al carácter final; el timing de inicio/fin de cada carácter es aleatorio por índice (no todos resuelven a la vez, efecto "cascada"). Mientras un carácter está scrambleando queda envuelto en `<span class="hs-scramble-char">` (accent, 75% opacidad) para distinguirlo del texto ya resuelto.
  - Implementación: clase `Scrambler` en vanilla JS (`requestAnimationFrame`, cero dependencias) instanciada sobre `#hsSuperTitle`. El texto final vive en `data-text="I bridge the gap."` — **si el copy cambia, actualizar ahí**, no solo el texto visible dentro del `<h3>`.
- `.hs-bridge` (línea + nodos) fue **reemplazado** por `.hs-super-flow`: 3 chips pill (`.hs-super-chip`, mono uppercase, mismo tratamiento visual que `.dv-pill`) unidos por flechas (`.hs-super-arrow`, `→` en accent) — `Stakeholder language → Dev handoff → Shipped product`. Aparecen con fade + rise escalonado (delays 0 / .15s / .3s) al agregarse `.is-live` al contenedor `#hsSuperFlow`.
- **Trigger único y desacoplado:** scramble del título y `.is-live` de los chips disparan juntos, desde un solo `IntersectionObserver` nuevo sobre `#hsFeature` (threshold .4, se desconecta tras disparar una vez). Antes, el `.is-live` del bridge dependía del observer de `#hsGrid` ("Beyond the work") — es decir, la animación de esta sección solo corría cuando el usuario llegaba a *otra* sección más abajo. Quedó corregido: ahora dispara con su propia sección.
- Mobile (`≤768px`): `.hs-super-flow` pasa a columna (`flex-direction:column`) y `.hs-super-arrow` se oculta — mismo criterio que tenía `.hs-bridge` (perdía la línea horizontal en mobile).
- `prefers-reduced-motion`: el scramble se salta (texto final directo, sin animación) y chips/flechas quedan fijos en `opacity:1`, sin transición.

**IDs — qué cambió:**
- `#hsBridge` **ya no existe.** La regla de "no duplicarlo" de la Iteración 2 queda obsoleta.
- Nuevos: `#hsFeature` (contenedor, target del `IntersectionObserver`), `#hsSuperTitle` (el `<h3>`, con `data-text`), `#hsSuperFlow` (contenedor de chips, recibe `.is-live`).
- El script viejo debajo de "Beyond the work" (el que escucha `#hsGrid`) todavía tiene `var bridge=document.getElementById('hsBridge')` — queda como código muerto inofensivo (`if(bridge)` da `false` siempre). No rompe nada; si en algún momento se limpia ese script, se puede borrar esa línea junto con el `bridge.classList.add('is-live')` de adentro de su `reveal()`.

**Regla para el futuro:** si se necesita otra card "elevada" en el About Me, reusar `--surface`/`--shadow-card` (mismo criterio que `.ai-lab` y `.hs-feature`) en vez de inventar un tercer tratamiento de fondo. Si se agrega un cuarto paso al flow (más allá de los 3 chips), sumar el delay correspondiente en `.hs-super-flow.is-live .hs-super-chip:nth-of-type(n)` — los delays actuales solo cubren el 3° y 5° hijo (los chips; los pares son las flechas).

### Human side — bento "Beyond the work" (rediseñado)

*Agosto 2026 — ✅ nuevo formato, a pedido (reemplaza el grid 4×2 de* `.dv-card`*); superpower removida en revisión posterior*

La sección de cierre pasó del grid estático `.dv-cards` (8 cards iguales, emoji + nombre + insight) a un **bento animado** (`.hs-grid`, 6 columnas).

**Estructura:**

- `.hs-cell-travel` + `.hs-cell-food` (span 3 c/u) — las dos que Pau destacó, más grandes.
- 3 `.hs-cell-sm` (span 2) — AI, Photography, Cultures. *(Agosto 2026: se quitaron Books, Architecture y Music a pedido; las 3 restantes ocupan exactamente una fila de 6 col, así que el bento sigue balanceado sin tocar el grid.)*
- Cada `.hs-cell`: emoji + nombre (Geist) + insight (Muli). **Reveal escalonado** al scroll (fade + rise, delay = índice × 60ms) y **hover** (lift −4px, borde accent, emoji scale 1.15).

> **Nota:** el bloque `.hs-feature` (superpower) ya **no vive acá** — ver sección "My superpower" arriba. Solo quedan las celdas de facetas.

**JS (IIFE autocontenido sobre** `#hsGrid`**):** un `IntersectionObserver` dispara el reveal de las cells cuando la sección entra en viewport; los `transition-delay` inline se limpian tras el reveal para que el hover no quede retrasado. Respeta `prefers-reduced-motion` (todo en estado final, sin animación). *(Septiembre 2026: este mismo IIFE también intentaba disparar el `.is-live` de `#hsBridge` — quedó como línea muerta inofensiva desde que "My superpower" se rediseñó con su propio trigger, ver Iteración 3 en la sección "My superpower" arriba.)*

**Tokens/tipografías:** `dv-`* tokens + `color-mix` para tints → light/dark automático. Geist (títulos), Muli (body), JetBrains Mono (eyebrow/labels).

**Mobile:** el bento colapsa a 2 col (`768px`) y 1 col (`480px`); el bridge pasa a lista vertical (línea oculta, nodos apilados con dot + label en fila).

**Regla para el futuro:** para sumar/quitar una faceta, agregar/quitar un `.hs-cell.hs-cell-sm` dentro de `#hsGrid` — el reveal escalonado se calcula solo por índice, no hay que tocar el JS. Para cambiar cuál faceta va grande, usar `hs-cell-travel`/`hs-cell-food` (span 3) o `hs-cell-sm` (span 2).

> **Ajuste Agosto 2026 (labels del bridge):** los 3 nodos van en **una sola línea** (`.hs-node-label` con `white-space:nowrap`). Al principio tenían saltos forzados (`Stakeholder<br>language`, etc.) que partían las palabras y se veían raro; se quitaron los `<br>` y se subió el `max-width` del `.hs-bridge` a 620px para que las labels entren cómodas. Alternativa punchier si en algún momento se quiere acortar: keywords sueltos (Stakeholders → Handoff → Shipped), ya que el subtítulo de arriba dice la frase completa.

> **Fix Agosto 2026 (dots del bridge):** `.hs-node-dot` y `.hs-node-label` eran `<span>` (inline) y en desktop `.hs-node` no era flex, así que el navegador **ignoraba el** `width/height/margin` del dot (los inline no respetan dimensiones) → los círculos casi no se veían y la label quedaba al costado en vez de debajo. Fix: `display:block` en ambos. En mobile ya funcionaba porque ahí `.hs-node` es flex.

> **Nota de limpieza:** las reglas `.dv-cards` / `.dv-card`* quedaron como **código muerto** (ya no se usan). Candidato a borrar en una pasada futura.

---

## CASE STUDIES

### ✅ Julio 2026 — Todos los cases son ahora páginas separadas (light), con Wipe Transition

Se migraron `smartpass` y `sukupay` de overlay dark (`<template id="tpl-*">` dentro del portfolio) a páginas `.html` independientes en light, igual que `muv` y `monchis`. Esto resuelve la inconsistencia visual dark/light documentada arriba: ahora todo case entra/sale con el mismo wipe, sin importar cuál sea.


| Case        | Archivo                 | data-case → CASE_PAGE_MAP |
| ----------- | ----------------------- | ------------------------- |
| muv         | `muv-case.html`         | `muv`                     |
| monchis     | `monchis-case.html`     | `monchis`                 |
| sukupay     | `sukupay-case.html`     | `suku`                    |
| smartpass   | `smartpass-case.html`   | `smart`                   |
| everyone    | `everyone-case.html`    | `everyone`                |
| vendor tool | `vendor-tool-case.html` | `vendor`                  |
| hugo        | `hugo-case.html`        | `hugo`                    |


**Pendiente de limpieza:** `<template id="tpl-smart">` y `<template id="tpl-suku">` quedaron huérfanos dentro de `index.html` (ya no se usan, `openCase()` solo corre como fallback si un `data-case` no está en `CASE_PAGE_MAP`). Se pueden borrar en una pasada futura sin romper nada.

### Para agregar un nuevo case como página

1. Crear `nombre-case.html` con el mismo back nav + Wipe Transition (ver sección arriba)
2. Agregar la entrada en `CASE_PAGE_MAP` dentro de `index.html`
3. Verificar que el tile en el gallery tenga el `data-case` correcto (ver bug conocido abajo)

### ✅ Septiembre 2026 — Prototipo interactivo embebido (iframe) en `sukupay-case.html`

Debajo del montage estático de "The North" proposal (sección "Result · Two Directions Explored"), se agregó el prototipo real y clickeable de esa Home, en vez de dejar solo la screenshot:

```html
<iframe src="sukupay-home-prototype.html" width="100%" height="1000" style="border:0" loading="lazy" title="..."></iframe>
```

`sukupay-home-prototype.html` es un "Bundled Page" — un export self-contained (CSS, fuentes en base64/blob, lógica de la animación) de la herramienta de prototipado, no un archivo escrito a mano. Corre solo (loop automático de ~20s: oculta el balance, colapsa el header al hacer scroll, invierte el tipo de cambio, abre una FAQ, muestra el sheet de USDC) y también responde a scroll/tap real.

**Reglas para este patrón:**
- El archivo del prototipo **tiene que estar en la misma carpeta** que el `-case.html` que lo embebe (mismo principio que la regla general de ARCHIVOS) — el `src` del iframe es relativo.
- No editar el contenido del Bundled Page a mano: es código generado (`x-dc`, `DCLogic`, tokens `--bt-*`/`--bm-*` de Figma Variables) pensado para exportarse de nuevo desde la herramienta, no para tocarse línea por línea. Si hace falta un cambio de contenido/copy dentro del prototipo, se re-exporta.
- `width="100%"` + altura fija en px (no `vh`) — el bundle centra un phone-shell de 390×844 + un panel de notas a su lado (`flex-wrap:wrap`), así que necesita una altura mínima generosa; `1000px` deja margen para el layout desktop (phone + notas lado a lado) y en mobile el panel de notas cae debajo del teléfono, por eso `.proto-embed-frame iframe{height:960px}` en el media query de 900px — confirmar visualmente si el bundle cambia de contenido.

**Gotcha — fondo del bundle fijo, no sigue el dark mode del case:** el Bundled Page tiene su propio fondo hardcodeado (`#F1F0EC` / `#FAFAFA` dentro de su propio `<body>`), no lee las CSS vars de `sukupay-case.html`. Con el toggle dark activo, el iframe queda como un rectángulo claro sobre el resto de la página oscura — mismo tipo de "seam" que el facade de YouTube en `hugo-case.html` (ver `HUGO CASE STUDY`), pero acá no hay facade posible porque el prototipo necesita el iframe cargado desde el arranque para ser interactivo. Se envolvió en `.proto-embed-frame` (borde + radius + sombra) para que el corte se lea como una "ventana" intencional y no como un bug, pero **no está resuelto** — si se quiere que combine con dark mode, la herramienta de prototipado tendría que exportar una variante dark, o habría que inyectar CSS por JS dentro del iframe (mismo origen, así que es técnicamente posible, pero no se hizo en esta pasada).

### 🐛 BUG CONOCIDO Y CORREGIDO (Septiembre 2026) — texto invisible en dark mode dentro de los cases

**Síntoma:** títulos, labels y porcentajes ilegibles (texto negro sobre fondo oscuro) al activar el toggle dark del dock — o directamente al entrar a un case si `localStorage.pe-theme` ya venía en `'dark'` desde otra página del portfolio.

**Causa raíz:** cada case tiene su propio `:root{}` con tokens en light y un bloque `body.dark-mode{}` que los reescribe para dark. Ese bloque de override se copió y pegó entre todos los cases, pero **nunca incluyó `--ink` ni `--ash2`** — dos tokens de texto que sí existen en el `:root` de varios cases (son remanentes de una convención de nombres más vieja; los cases más nuevos ya usan `--paper`/`--ash-2`, que sí estaban bien cubiertos). Resultado: en dark mode, `--bg` pasaba a oscuro pero `--ink`/`--ash2` seguían apuntando a su valor claro-sobre-fondo-claro original (`#1A1814` / `rgba(26,24,20,.15)`), casi negro — invisible sobre el nuevo fondo oscuro.

**Regla para cualquier case nuevo o edición futura de tokens:** cada variable de texto/label definida en `:root` (cualquiera usada como `color:var(--x)` sobre grandes bloques de contenido, no solo accents puntuales) **debe tener su contraparte en `body.dark-mode{}`**. Antes de dar por cerrado un case, correr este chequeo:

```bash
# Compara variables de :root vs las que el bloque body.dark-mode realmente sobreescribe
comm -23 <(sed -n '/^:root{/,/^}/p' archivo.html | grep -oP '(?<=  --)[a-zA-Z0-9_-]+(?=:)' | sort -u) \
         <(sed -n '/body\.dark-mode{/,/^}/p' archivo.html | grep -oP '(?<=--)[a-zA-Z0-9_-]+(?=:)' | sort -u)
```

Lo que aparezca en el resultado y sea un color de **texto** (no un accent de marca puntual tipo `--red`/`--orange`/`--navy`/`--purple`/`--teal`/`--amber`/`--lime`, que se dejan fijos a propósito porque son colores saturados con contraste suficiente en ambos fondos — mismo criterio que las excepciones de color fijo documentadas en DESIGN TOKENS) hay que agregarlo al bloque `body.dark-mode{}`, típicamente:
```css
--ink:#F4F4F6;
--ash2:rgba(244,244,246,0.15);
```

**Estado por archivo (auditado y corregido):**

| Archivo | Usaba `--ink` | Usaba `--ash2` | Fix aplicado |
| --- | --- | --- | --- |
| `theforkreviewscase.html` | Sí | Sí | ✅ `--ink` + `--ash2` agregados |
| `theforkshortlistcase.html` | Sí | Sí | ✅ `--ink` + `--ash2` agregados |
| `monchis-case.html` | Sí | Sí | ✅ `--ink` + `--ash2` agregados |
| `monchis-drivers-case.html` | Sí | Sí | ✅ `--ink` + `--ash2` agregados |
| `smartpass-case.html` | Sí | Sí | ✅ `--ink` + `--ash2` agregados |
| `muv-case.html` | No (usa `--paper`, ya cubierto) | Sí | ✅ `--ash2` agregado |
| `hugo-case.html` | No (usa `--paper`, ya cubierto) | Sí | ✅ `--ash2` agregado |
| `everyone-case.html` | No (usa `--paper`, ya cubierto) | Sí | ✅ `--ash2` agregado |
| `sukupay-case.html` | No | No | Sin cambios — ya estaba bien |
| `sukupay-ds-case.html` | No | No | Sin cambios — ya estaba bien |
| `memorable-case.html` | No | No | Sin cambios — ya estaba bien |

---

### Header transparente arriba, vidrio al hacer scroll (`#nav-glass`, octubre 2026)

**Qué es:** el header sticky de los cases (`.back-nav`, el de "← Back to portfolio") **no lleva fondo mientras la página está arriba de todo**: se ve el degradé del hero por detrás. Apenas se hace scroll vuelve a su fondo de vidrio (blanco al 92% con blur en light, `rgba(36,36,44,.92)` en dark) y a su línea inferior.

**Cómo está hecho:** un bloque propio al final del `<head>`, igual en todos los cases: `<style id="nav-glass">` más un script corto.

- El script pone la clase `nav-top` en `<html>` cuando el scroll es menor a 8px y mide el alto real del header en `--nav-h`.
- `html.nav-top .back-nav` anula fondo, blur, borde y sombra.
- `.back-nav` lleva `margin-bottom:calc(-1 * var(--nav-h))` y el primer bloque de `<main>` un `border-top` transparente del mismo alto con `background-origin:border-box`, así el degradé del hero empieza desde el borde de arriba y no queda una franja blanca bajo el header.
- Con `prefers-reduced-motion` no hay transición.

**Para aplicarlo a otro case:** copiar el bloque completo desde `muv-case.html` (del comentario `<!-- HEADER: transparent at the top… -->` hasta el `</script>` anterior a `</head>`). No hay nada que ajustar por case.

**No confundir con el fondo del hero.** Lo que se quitó es el fondo del header de arriba, no el degradé `--grad-warm` del hero, que sigue.

| Archivo | `#nav-glass` |
| --- | --- |
| `muv-case.html` | ✅ |
| `vendor-tool-case.html` | ✅ (6 de octubre de 2026) |
| `smartpass-case.html` | ✅ (6 de octubre de 2026), variante para el template viejo, ver nota |
| `sukupay-proto-case.html` | ✅ (8 de octubre de 2026), bloque de muv más las dos líneas que fijan el vidrio, ver nota |
| `elektra-otp.html`, `everyone-case.html`, `fancymonas-case.html`, `foody-case.html`, `hotaru-case.html`, `hugo-case.html`, `memorable-case.html`, `monchis-case.html`, `monchis-drivers-case.html`, `sukupay-case.html`, `thefork-reviews-case.html`, `thefork-shortlist-case.html` | ✅ (8 de octubre de 2026), bloque literal de muv. Cada case conserva su propio vidrio al hacer scroll |

**Estado: los 16 cases lo tienen.** `sukupay-home-prototype.html` no lleva header (va embebido en un iframe).

**Dos casos a tener en cuenta:** en `elektra-otp.html` el cover va en caja (`.cover.wrap`) y el degradé vive en el `body`, así que lo que se ve detrás del header es el fondo de la página. En `thefork-shortlist-case.html` hay una franja verde de "Borrador" arriba del header: el header queda transparente debajo de ella y el cover empieza justo ahí.

**Nota para el template viejo (`.section` / `.cover`, sin `<main>`), aplicada en `smartpass-case.html`:** el bloque se rearmó a partir de esta descripción, no se copió de `muv-case.html`. Hace lo mismo con dos diferencias de selector: el "primer bloque" es `.back-nav + .cover` (lleva el `border-top` transparente del alto del header y `background-origin:border-box`, así `--grad-hero` empieza desde el borde de arriba), y el vidrio queda fijado dentro del bloque en los valores de la regla (blanco al 92% en light, `rgba(36,36,44,.92)` en dark) con selectores `html body…`, porque smartpass traía dos fondos viejos del header (`.82` en light y `rgba(30,30,38,.85)` en dark, este último en el `<style>` del final del body). Revisado arriba y con scroll, en light y dark, a 1440, 1100, 820 y 390px. Si se quiere el bloque literal de muv, se puede reemplazar: el comportamiento es el mismo.

**En `sukupay-proto-case.html` (8 de octubre de 2026)** se usó el bloque literal de muv, que ya trae el selector `.back-nav + .cover`, y se le sumaron dos líneas para fijar el vidrio en los valores de la regla, porque el caso traía `.82` en light y un `color-mix` en dark: `html body .back-nav{background:rgba(255,255,255,.92);}` y `html body.dark-mode .back-nav{background:rgba(36,36,44,.92);}`. Ojo: entre el `</nav>` y el `.cover` no puede haber ningún otro elemento (ni un `<script>`), porque el selector `+` deja de aplicar.

### Texto del header en el color del link de volver (`#nav-ink`, 8 de octubre de 2026)

**La regla, para todos los cases:** el texto del header que antes iba en gris (el nombre del caso, por ejemplo "SukuPay · Prototyper", y la firma "Paula Elffman · Sr Product Designer") va **en el mismo color que "← Back to portfolio"**. El header queda en un solo color. Reemplaza al `color:var(--ash)` que se había puesto en septiembre de 2026 (ver "BUG CONOCIDO Y CORREGIDO — .back-nav").

**Qué color es:** el del link de volver de ese case, no un verde fijo. Cada case nombra el token que usa su `.back-btn` en la primera línea del bloque (`--nav-ink`). Como es un token, cambia solo entre light y dark: en dark el header toma el tono brillante del case (en los verdes: `#61FF61` en SukuPay y SukuPay Prototyper, `#22F0A4` en smartpass, `#4ADE80` en los dos de TheFork).

**Cómo está hecho:** un bloque propio al final del `<head>`, después de `#nav-glass`, igual en todos los cases. Solo cambia la línea de `--nav-ink`:

```html
<!-- HEADER TEXT: the case name and the byline take the colour of the "Back to portfolio" link (Oct 2026). Same block in every case; only the --nav-ink line(s) change. -->
<style id="nav-ink">
.back-nav{--nav-ink:var(--accent);}
html body .back-nav .back-nav-title,html body .back-nav .back-nav-right,html body .back-nav .back-nav-r,html body .back-nav .nav-title,html body .back-nav .nav-right,html body.dark-mode .back-nav .back-btn{color:var(--nav-ink);}
</style>
```

- Cubre todas las variantes de nombre de clase: `.back-nav-title` / `.nav-title`, `.back-nav-right` / `.nav-right` y `.back-nav-r` (Elektra).
- `--nav-ink` va declarado en `.back-nav` y no en `:root`, para que tome el valor de dark mode del token.
- El `html body` adelante es para ganarle a los `body.dark-mode .back-nav-right{…}` que varios cases tienen sueltos.
- **Si el link de un case no tiene tono para dark** (queda oscuro sobre oscuro), se agrega una segunda línea, `body.dark-mode .back-nav{--nav-ink:#…;}`, y el propio link la toma en dark (por eso `.back-btn` está en la lista de selectores con `body.dark-mode`). Hizo falta en dos: `thefork-shortlist-case.html` (`#4ADE80`, el mismo que TheFork Reviews) y `monchis-drivers-case.html` (`#FF6F8A`, el mismo que monchis home).
- **No toca los links del índice** que muv y Vendor Tool llevan en el centro del header (`.toc`). Son navegación con su propio hover y siguen en gris.
- No cambia tamaños ni pesos.

**Para un case nuevo:** pegar el bloque y poner en `--nav-ink` el mismo token que usa `.back-btn` en ese archivo.

| Archivo | `--nav-ink` | Light | Dark |
| --- | --- | --- | --- |
| `elektra-otp.html` | `var(--red)` | `#DA291C` | no tiene dark mode |
| `everyone-case.html` | `var(--purple-2)` | `#964BFE` | `#D6B6FF` |
| `fancymonas-case.html` | `var(--ash)` | negro al 55% | blanco al 55% |
| `foody-case.html` | `var(--orange)` | `#FAA41A` | no tiene dark mode |
| `hotaru-case.html` | `var(--gold)` | `#B9873B` | `#B9873B` |
| `hugo-case.html` | `var(--orange)` | `#0033A0` | `#7CA6FF` |
| `memorable-case.html` | `var(--accent)` | `#9846FF` | `#C699FF` |
| `monchis-case.html` | `var(--red)` | `#C8102E` | `#FF6F8A` |
| `monchis-drivers-case.html` | `var(--red)` + línea de dark | `#E8143C` | `#FF6F8A` |
| `muv-case.html` | `var(--orange-ink)` | `#B93E05` | `#FF9A6B` |
| `smartpass-case.html` | `var(--green)` | `#17A25D` | `#22F0A4` |
| `sukupay-case.html` | `var(--accent)` | `#0E6B4A` | `#61FF61` |
| `sukupay-proto-case.html` | `var(--accent)` | `#005043` | `#61FF61` |
| `thefork-reviews-case.html` | `var(--accent-text)` | `#0B8457` | `#4ADE80` |
| `thefork-shortlist-case.html` | `var(--red)` + línea de dark | `#0B8457` | `#4ADE80` |
| `vendor-tool-case.html` | `var(--red-ink)` | `#C8102E` | `#FF6F88` |

**Estado: los 16 cases lo tienen.**

**A tener en cuenta:**
- **Fancy Monas:** su link de volver es gris (`--ash`), no un color de marca, así que el header quedó todo en ese gris. Ahora los tres textos tienen el mismo tono (antes iban al 55%, 40% y 30%).
- **Contraste en light:** en tres cases el color del link es claro y el texto chico del header se lee menos que cuando era gris: Foody (naranja sobre blanco, 2,0:1), Hotaru (dorado sobre beige, 2,5:1) y smartpass (verde sobre verde claro, 2,9:1). Es el color que ya tenía el link. Si se quiere, se puede oscurecer el tono del header en esos tres.
- En mobile varios cases ocultan la firma (y monchis home también el nombre del caso); eso no cambió.

**Revisado:** en los 16 archivos, con un navegador, a 1360 y 390px, en light y dark, arriba de todo y con scroll: el color calculado de cada texto del header es igual al del link, el header es transparente arriba y toma el vidrio al hacer scroll, el cover empieza desde el borde superior y no aparece scroll horizontal nuevo. (`monchis-case.html` ya traía scroll horizontal en desktop, 1436px en una ventana de 1360, por el carrusel `.fc-slide`; no se tocó.)

### DESIGN SYSTEM COMO BOARD (`.dsb`, octubre 2026)

**Qué es:** la parte de design system de un case se arma como **un solo board**, no como grupos apilados con título, descripción y tarjeta por componente. En una sola pieza se ve la tipografía en grande, los estados de botón, los componentes clave, el set de íconos y los colores. Referencias: el board de ejemplo con Playfair Display + Inter y el frame `example` del archivo de Figma `Muv-landing` (board de SmartPass).

**Aplicado en:** `smartpass-case.html` y `muv-case.html` (los dos el 6 de octubre de 2026), `vendor-tool-case.html` (7 de octubre de 2026) y `sukupay-proto-case.html` (8 de octubre de 2026). En muv reemplazó, a pedido de Paula, a la sección de imágenes que estaba marcada como aprobada. Ver "Board de muv" y "Board de Vendor Tool" más abajo.

**Reglas:**

- **No es una imagen.** Los componentes se construyen en HTML/CSS con los tokens del Figma (colores, radios, tamaños de texto). Se ven nítidos a cualquier tamaño y en mobile se pueden reordenar.
- **Equidistante.** Una sola separación entre componentes, igual en horizontal y en vertical (`--g`, 40 en la escala del board), y un solo margen exterior (`--p`, 52). Las columnas quedan al ras arriba y abajo. **Cuando el board tiene muchas piezas, más aire:** en SukuPay Prototyper (más de 20 componentes) con 40 quedaba "todo medio pegado" y Paula pidió separarlo; ahí `--g` es 64 y `--p` 72.
- **Qué absorbe la diferencia de alto:** las piezas que son contenedor y no componente: la tarjeta blanca del código de verificación, la tarjeta blanca de los badges y los swatches de color. Los componentes no se estiran en alto. Excepción en smartpass: el filtro ocupa el ancho de su columna (en Figma mide 174 y dejaba un hueco a su derecha).
- **Escala:** todas las medidas son px de Figma multiplicados por `--u` (`100cqw / 1170`), así el board escala entero con su contenedor. Para sumar o cambiar un componente se usan los valores de Figma tal cual, multiplicados por `--u`.
- **Colores fijos, no tokens de página.** El board es un specimen de UI: queda claro también en dark mode (misma excepción que `.flow-node`).
- **Fondo del board, según el caso:** gris `#F2F3F5` cuando los componentes son planos y blancos (smartpass); blanco con `--sh-card` cuando los componentes ya traen su propia sombra, como en el frame de Figma (muv).
- **Clases con prefijo.** Todo lo que va dentro del board lleva prefijo (`dsb-` para la estructura, y uno por producto para los componentes: `mv-` en muv, `vt-` en Vendor Tool). Nada de nombres genéricos: en muv una clase interna `.meta` chocó con el `.meta` del hero y desarmó las category cards.
- **Tipografía del producto:** si el producto usa una fuente que el case no carga, se suma al `<link>` de Google Fonts (smartpass: Inter 400/500/600/700).
- **Mobile (contenedor de 900px o menos):** el board deja de ser grilla y se apila: tipografía, colores, botones, código, modal, íconos en fila, filtro, toast, badges, con la misma separación entre todos y cada pieza a tamaño de lectura (`--u` de 1px como máximo).
- **Debajo del board:** una fila de notas cortas con el porqué (smartpass: Color, Type, Feedback, Filters). Cuatro columnas en desktop, dos hasta 900px, una en mobile.
- **Íconos:** en smartpass son los de Lucide con el mismo nombre que en Figma (`user`, `trash-2`, `eye`, `calendar`, `map-pin`, `check`, `search`, `check-check`, `circle`, `chevron-down`, `x`), inline como SVG.

**Layout de smartpass (desktop):** cuatro columnas: botones + código + filtro · modal + badges · riel de íconos · colores. El título "Font Inter" va arriba a la izquierda y el toast abajo a la derecha, bajo los colores.

**Diferencias con el frame de Figma (smartpass):** el toast y los badges cambiaron de lugar entre sí para que las columnas cierren al ras; el filtro no muestra el tercer botón que asomaba cortado; el texto del badge de éxito se igualó al de warning (en Figma estaba más chico); el copy lleva signos de apertura ("¿No recibiste el código?", "¡Felicitaciones!").

**Qué se eliminó en smartpass:** las escalas de color de 11 pasos con hex, las filas de Display, el toast de error y el empty state, junto con su CSS (`.ds-group`, `.color-scale`, `.swatch`, `.type-row`, `.ds-comp`, `.ds-tag`, `.toast-preview`, `.filter-mock`). Se conservan `.ds-intro`, `.ds-title` y `.ds-sub`.

#### Board de muv (`muv-case.html`, 6 de octubre de 2026)

Fuente: frame `example` del archivo de Figma `muv-app` (nodo `40000133:78231`) y el export 2x que pasó Paula.

- **Qué reemplazó:** la "Component library" colapsada (`<details class="lib">`) con sus cuatro grupos de imágenes (driver card, category card, ride-state alerts, toasts) y sus 11 capturas (`muv_case_010` a `muv_case_020`). Ahora es una sección abierta, `#system`, con título, el board y los tres principios (State-driven, Information hierarchy, Reusable by design), que se conservaron tal cual. Las alertas de estado y los toasts ya no aparecen en el caso: no están en el board de Figma.
- **Componentes, todos vivos:** bottom navigation en dos estados (Inicio y Viajes activos), Servicios, hoja de pago (reintegro ueno, tarjeta, cupón, "Confirmar viaje"), category card seleccionada y sin seleccionar, hoja del viaje (ETA, driver card, "Tu viaje", método de pago y total, "Cancelar viaje"), lista de favoritos y aviso de agregar favorito. Más "Font Inter" y los colores (Brand `#FF6200`, Hover `#E65800`, Primary `#001555`, y tres pasos claros).
- **Tamaño real:** los componentes de muv están a 1x en Figma (hoja de 393 de ancho). Para que no queden chicos, el board se sale del `.wrap` de 1200px: `.dsb-wrap` mide `min(1336px, 100vw - 2 * --gutter)` y se centra. A 1440px de pantalla queda casi a tamaño real (`--u` 0,99).
- **Layout (desktop):** tres columnas de 393 · 393 · 361. Columna A: "Font Inter", las dos navs, la hoja de pago y las dos category cards. Columna B: Servicios y la hoja del viaje. Columna C: colores, favoritos y aviso. Separación única `--g` 42,5 y margen `--p` 52 (canvas 1336). Los colores absorben la diferencia de alto; los componentes no se tocan. El título va a 88 en vez de 104,6 para que entre en su columna.
- **Contenedor de 999px o menos:** dos columnas (A y B) y debajo colores a la izquierda, favoritos y aviso a la derecha. **De 699px o menos:** una columna, en este orden: tipografía, colores, navs, Servicios, pago, category cards, hoja del viaje, favoritos, aviso.
- **Ilustraciones y fotos:** los autos, la caja, el avatar, el logo de la tarjeta y la marca de ueno se recortaron del export 2x de Paula y van embebidos en base64 (WebP, 25 KB en total, dentro del protocolo de imágenes). Las dos tiles de Servicios son el fondo completo de la tile con el rótulo borrado, y el rótulo va como texto vivo encima. El auto plateado de la driver card tiene el degradé naranja quitado para que no se vea un recuadro. Si se exportan los originales de Figma se pueden reemplazar uno por uno.
- **Íconos:** Iconsax (los `vuesax/...` de Figma), inline como SVG: `linear` con trazo, `bulk` y `bold` con relleno. Figma mantiene el trazo en 1,5px cuando achica un ícono, así que los de 18 y 16px llevan `stroke-width` compensado.
- **Diferencias con Figma:** "Tu viaje" (Lexend) y las direcciones de favoritos (Roboto) van en Inter, para no cargar dos familias por tres textos; las etiquetas de los colores van a 10 en vez de 8,6; el emoji del aviso depende del sistema.
- **Limpieza:** se quitó el CSS de `details.lib`, `.lib-body`, `.comp-group`, `.comp-grid` y `.comp`, y el script que cargaba `muv-case-images.js`: ya nada en la página usa `data-img-id`, así que ese archivo dejó de cargarse. Inter pasó de `500;600` a `400;500;600;700` en el `<link>` de Google Fonts.
- **Revisado:** cada componente comparado contra su recorte del export de Figma, y la sección a 1920, 1440, 1150, 900, 768 y 390px, en light y dark, sin scroll horizontal.
- **Clases de muv:** `.mv-nav`, `.mv-pay` (`.mv-mkt`, `.mv-payrow`), `.mv-serv` (`.mv-tile`), `.mv-sheet` (`.mv-eta`, `.mv-driver`, `.mv-trip`, `.mv-total`), `.mv-cat` (`.is-on` = seleccionada), `.mv-favs`, `.mv-prompt`, `.mv-btn` (`.is-navy .is-soft .is-white .is-text .is-sm`), `.mv-home` (indicador de iPhone).

#### Board de Vendor Tool (`vendor-tool-case.html`, 7 de octubre de 2026)

Fuente: frame `example` del archivo de Figma `Muv-landing` (nodo `40000610:33149`) y el export 2x que pasó Paula.

- **Qué reemplazó:** toda la "Component library" colapsada (`<details class="lib">`): los seis grupos (Status components, Order card, Queue tabs, List rows, Category picker, Stat card) con sus textos y sus nueve capturas (`vt-status-pills.webp` y las ocho `vt-comp-*.webp`), que ya no se usan en el caso. Ahora es una sección abierta, `#system`, con título ("The system behind the tool"), el board y los tres principios (Legible statuses, Forgiving destructive actions, No guessing), que se conservaron tal cual. Ya no aparecen en el caso: los status pills, la línea de tiempo, la order card (en reposo y con urgencia), las filas de lista y la stat card, porque no están en el board de Figma.
- **Componentes, todos vivos:** botones Primary, Secondary y Danger en dos estados (3 × 2), switch encendido y apagado, botones de ícono editar y eliminar, chips de categoría ("Los más vendidos 🏆" y "Agregar categoria"), buscador de categorías con sus cuatro sugerencias, tabs de la cola de órdenes (Historial 100, Delivery/Pick up 99, Preparando 99 y Pendientes 10 activo) y la navegación lateral con el segundo ítem seleccionado. Más "Font Inter" y los colores: Brand `#E6224F`, Gradient (`#E6224F` → `#B01135`), Accent `#22E6B8` y Neutral `#F0F0F0`.
- **Layout (desktop):** cuatro columnas de 351 · 352 · 56 · 349. Columna A: botones, chips, buscador. Columna B: switches + botones de ícono, tabs. Después la navegación lateral, centrada en alto, y los colores a todo el alto. "Font Inter" va arriba, sobre A y B. Separación única `--g` 40 y margen `--p` 52 (canvas 1332). Fondo blanco con `--sh-card`, y se sale del `.wrap` igual que el de muv: `min(1332px, 100vw - 2 * --gutter)`.
- **Las columnas cierran al ras sin estirar nada:** A = 93 + 40 + 32 + 40 + 250 y B = 40 + 40 + 375, las dos 455. Para que cierre, los dos switches van uno al lado del otro en la misma fila que los botones de ícono (en Figma el apagado iba debajo del encendido) y los chips quedan a una separación `--g` del buscador (en Figma estaban a 10).
- **Contenedor de 999px o menos:** las columnas A y B y la navegación quedan igual, y los colores pasan a una banda horizontal debajo. **De 699px o menos:** una columna, en este orden: tipografía, colores (banda), botones, switches y botones de ícono, chips, buscador, tabs y la navegación en fila. En un celular de 390px los botones quedan de 36px de alto con texto de 12,5px.
- **Íconos:** Material Symbols outlined (los mismos nombres que en Figma: `order_approve`, `menu_book`, `acute`, `receipt_long`, `payments`, `source_notes`, `skillet`, `stylus`, `delete`, `add`, `check`, `close`), inline como SVG. El pin de Delivery y la lupa son los de Ant Design (`environment`, `search`), y el usuario es `user-round` de Lucide. El paquete trae los íconos con tamaño óptico 48, que se ve más fino que en Figma, así que se usa peso 700 en la navegación y en editar/eliminar, 600 en los tabs y los switches, y 500 en el "+".
- **Diferencias con Figma:** el texto de los tabs va a 21,26 (Figma informa 32,27 como valor de respaldo, pero el ancho real de cada tab y el export dan 21,26) y el badge activo a 18,22 con alto 24,3; la columna A mide 351 en vez de 347 y los botones ocupan todo ese ancho (108 cada uno en vez de 107); la separación entre las dos filas de botones es 13, igual que entre columnas (en Figma 25); los chips llevan 11 de padding en vez de 12 para que entren con cualquier fuente de emoji; las etiquetas de los colores van a 10 en vez de 8,6 y centradas en alto; "Neutral" va en `#8A8A8A` en vez de `#999797`; el emoji del chip depende del sistema.
- **Limpieza:** se quitó el CSS de `details.lib`, `.lib-body`, `.comp-group`, `.comp-grid`, `.comp`, `.thumb--pad`, `.stack-comp`, `.comp--wide` y `.comp--narrow`. `.principles` se conserva (también lo usa Solution). Inter pasó de `500;600` a `400;500;600;700` en el `<link>` de Google Fonts. La sección ya no lleva `padding-block` en línea: usa el de `.sec`.
- **Revisado:** cada componente comparado contra su recorte del export de Figma, y la sección a 1920, 1440, 1150, 900, 768, 390 y 360px, en light y dark, sin scroll horizontal ni textos cortados.
- **Clases de Vendor Tool:** `.vt-btns`, `.vt-btn` (`.is-primary .is-secondary .is-danger`, más `.is-off`, `.is-on`, `.is-line`), `.vt-ctrl`, `.vt-sw` (`.is-off`), `.vt-icon`, `.vt-chips`, `.vt-chip` (`.is-add`), `.vt-card`, `.vt-search` (`.vt-box`, `.vt-opt`), `.vt-tabs` (`.vt-tab`, `.is-on` = activo), `.vt-rail` (`.is-on` = seleccionado).

#### Board de SukuPay Prototyper (`sukupay-proto-case.html`, 8 de octubre de 2026)

Fuente: frame `example` del archivo de Figma `Proposal-SukuPay` (nodo `286:7013`) y la captura del frame que pasó Paula.

- **Dónde va:** en la sección "The color decision", debajo de los círculos de lima y teal, con título propio ("The system, in one board."). No es una sección aparte.
- **Componentes, todos vivos:** "Font DM Sans", ocho botones (Primary, Soft, Outline, Borderless, Secondary, Tertiary, Tertiary soft, Disabled), ocho íconos, colores (Brand `#61FF61`, Primary `#005044`, `#C8FFC8` y tres pasos), bottom navigation, tres botones redondos de ícono con badge, recipient card (SukuPay y Zigi), los tres estados de envío (Enviado, Envio rechazado, Enviando), modal, los dos badges de tipo de cambio, card de últimos envíos, card de solicitud de dinero, header con stepper, tres banners de feedback, tres cards de método de pago y el selector de país.
- **Layout (desktop):** tres columnas de 360. Arriba, sobre A y B: tipografía, botones (4 × 2) e íconos (2 × 4). Columna A: navegación, botones redondos, recipient card, los tres estados, modal. Columna B: badges, últimos envíos, recipient card de Zigi, solicitud, stepper, feedback. Columna C: colores, métodos de pago, selector de país. Separación única `--g` 64 y margen `--p` 72 (canvas 1352), a pedido de Paula (la primera versión iba con 40 y 48). Fondo blanco con `--sh-card`. Los colores absorben la diferencia de alto.
- **Contenedor de 999px o menos:** columnas A y B, y debajo colores + dos métodos de pago a la izquierda, "Agregar tarjeta" + selector de país a la derecha. **De 699px o menos:** una columna, en este orden: tipografía, colores, botones (de a dos), íconos en fila, columna A, columna B, métodos de pago, selector de país.
- **Tipografía:** DM Sans, sumada al `<link>` de Google Fonts (`opsz,wght@9..40,400..800`). Los componentes van con `opsz` 14, como en Figma; el título "Font DM Sans" va con `opsz` 40, que es lo que da el ancho del frame (421).
- **Íconos:** Iconoir (los mismos nombres que en Figma), en un sprite SVG inline dentro del `<figure>`; los de relleno son la variante `solid`.
- **⚠️ Piezas que no son las originales.** La conexión con Figma cortó por el límite de llamadas del plan antes de poder exportar los SVG, así que: el ícono **wallet-check** es el `wallet` de Iconoir, sin el check (aparece en la tira de íconos, en la navegación y en el botón redondo); el **logo de Zigi** es un recuadro lima `#ABF24B` con "ZIGI" en texto; las **banderas** son de `circle-flags` y la marca de **Apple Pay** de `simple-icons`. **Pendiente:** que Paula pase los SVG de wallet-check y de Zigi para reemplazarlos.
- **Diferencias con Figma:** todas las cards miden 360 de ancho (en Figma van de 350 a 390) para que las columnas queden parejas, así que algún texto corta la línea en otro lugar; los íconos van en grilla de 2 × 4 al lado de los botones (en Figma son una tira vertical entre columnas); el círculo verde de la recipient card es un color plano `#01C601`.
- **Revisado:** contra la captura del frame, a 1440, 1100, 834, 768 y 390px, en light y dark, sin scroll horizontal.
- **Clases de SukuPay:** `.sk-btns`, `.sk-btn` (`.is-soft .is-outline .is-ghost .is-secondary .is-tertiary .is-tertiary-soft .is-disabled .is-lg`), `.sk-icons`, `.sk-nav`, `.sk-trio`, `.sk-rcp`, `.sk-act`, `.sk-modal`, `.sk-badge`, `.sk-rate`, `.sk-repeat`, `.sk-req`, `.sk-step`, `.sk-fb`, `.sk-pay` (`.is-method .is-add`), `.sk-country`. Estructura: `.dsb-band` (franja de arriba) y `.dsb-sub` (las dos mitades de la columna C).

**CSS classes clave**

```css
.dsb-wrap      /* figure, contenedor de container queries */
.dsb           /* el board: grilla, --u, --g, --p */
.dsb-col       /* columna apilada (a y b); display:contents en mobile */
.dsb-type      /* specimen tipográfico */
.dsb-btns / .dsb-btn (.is-primary .is-hover .is-disabled .is-soft .is-loading .is-icon .is-lg .is-secondary)
.dsb-otp       /* tarjeta del código de verificación */
.dsb-filter    /* multi-select de empresas */
.dsb-modal     /* modal de inicio de sesión */
.dsb-icons     /* riel de íconos */
.dsb-colors / .dsb-sw (.is-step .is-dark)
.dsb-toast / .dsb-badges / .dsb-badge (.is-warning .is-success)
.dsb-notes     /* notas bajo el board */
```

### 🐛 BUG CONOCIDO Y CORREGIDO (Septiembre 2026) — `.back-nav` sticky y su meta (`.nav-right` / `.back-nav-right`) fijos al valor de light, sin contraparte en dark

**Síntoma:** con el toggle dark activo, el header sticky de arriba (el que tiene "← Back to portfolio" y el nombre del case) se quedaba con el fondo crema de light mode mientras el resto de la página ya estaba oscuro — banda clara pegada arriba de una página oscura. El texto de la derecha del nav ("Paula Elffman · Sr Product Designer") además desaparecía: era un gris oscuro fijo, invisible sobre cualquier fondo oscuro.

**Causa raíz:** mismo patrón que el bug de `--ink`/`--ash2` de la sección anterior, pero en dos propiedades que ni siquiera pasan por una variable:
- `.back-nav{ background:rgba(245,244,240,.92); }` (o su variante por-case: `rgba(246,244,237,.92)` en everyone, `rgba(245,244,240,.92)` en el resto) — literal hardcodeado, nunca tuvo override en `body.dark-mode{}`.
- `.nav-right` / `.back-nav-right{ color:rgba(26,24,20,.3); }` (sukupay y sukupay-ds usan `rgba(21,33,25,.3)`, su propio "ink" de marca) — mismo problema, literal fijo sin contraparte dark.

Como no son `var(--x)`, el script de auditoría de la sección anterior (que compara tokens de `:root` vs `body.dark-mode{}`) no los detecta — hay que grepear literales hardcodeados a mano, no solo variables.

**Fix aplicado — en los 12 case studies standalone:**
```css
/* después del bloque body.dark-mode{...} de cada archivo */
body.dark-mode .back-nav{background:rgba(30,30,38,.85);}
```
y en `.nav-right`/`.back-nav-right`, se reemplazó el literal fijo por `color:var(--ash);` (mismo tratamiento que ya tenía `.nav-title`/`.back-nav-title` al otro lado del nav — quedan con el mismo peso visual entre los dos lados). **Reemplazado el 8 de octubre de 2026:** esos textos ya no van en gris sino en el color del link de volver. Ver "Texto del header en el color del link de volver (`#nav-ink`)".

**Estado por archivo (auditado y corregido, Septiembre 2026):**

| Archivo | `.back-nav` bg fijo | `.nav-right`/`.back-nav-right` color fijo | Fix aplicado |
| --- | --- | --- | --- |
| `smartpass-case.html` | Sí | Sí (ya usaba `.nav-right`) | ✅ dark override + `var(--ash)` |
| `everyone-case.html` | Sí | Sí (`.back-nav-right`) | ✅ dark override + `var(--ash)` |
| `hugo-case.html` | Sí | Sí (`.back-nav-right`) | ✅ dark override + `var(--ash)` |
| `memorable-case.html` | Sí | No tiene nav-right (solo `.back-nav-title`) | ✅ solo dark override |
| `monchis-case.html` | Sí | Sí (`.nav-right`) | ✅ dark override + `var(--ash)` |
| `monchis-drivers-case.html` | Sí | Sí (`.nav-right`) | ✅ dark override + `var(--ash)` |
| `muv-case.html` | Sí | Sí (`.back-nav-right`) | ✅ dark override + `var(--ash)` |
| `sukupay-case.html` | Sí | Sí (`.back-nav-right`, `rgba(21,33,25,.3)`) | ✅ dark override + `var(--ash)` |
| `sukupay-ds-case.html` | Sí | Sí (`.back-nav-right`, `rgba(21,33,25,.3)`) | ✅ dark override + `var(--ash)` |
| `thefork-reviews-case.html` | Sí | Sí (`.nav-right`) | ✅ dark override + `var(--ash)` |
| `theforkshortlistcase.html` | Sí | Sí (`.nav-right`) | ✅ dark override + `var(--ash)` |
| `vendor-tool-case.html` | Sí | Sí (`.nav-right`) | ✅ dark override + `var(--ash)` |

**Regla para cualquier case nuevo:** el chequeo de la sección anterior (`--ink`/`--ash2`) no alcanza — hay que además grepear `background:rgba(24[5-6],244,2[3-4]0` y `color:rgba(2[16],2[43],2[05],.3)` (los literales de fondo/texto de light que se copian-pegan al armar el nav de un case nuevo) y confirmar que ambos tengan salida en `body.dark-mode{}`, ya sea vía variable o vía selector `body.dark-mode .clase{...}` explícito.

---

### smartpass-case.html — ajustes puntuales (Septiembre 2026)

Durante la misma revisión aparecieron cuatro problemas específicos de este case (no compartidos con los otros 11, porque smartpass es el único que usa `--green` como su propio token de acento en vez de sumarse al `var(--accent)` del resto del sistema):

- **`--green` sin contraparte dark:** a diferencia de `var(--accent)` (que sí tiene el par `#009D71` light / `#22F0A4` dark automático), `--green:#17A25D` se definía solo en `:root` y nunca se sobreescribía en `body.dark-mode{}`. Resultado: "experiences", "Security", los dots de los pillars/use-cases, el eyebrow y la leyenda del flow quedaban en el verde oscuro de light dentro de dark mode, sin el brillo que sí tiene el resto del portfolio. Fix: `--green:#22F0A4; --green2:rgba(34,240,164,.12);` agregado al bloque `body.dark-mode{}` de este archivo.
- **`.cover-title .dim` (la "pass" del wordmark):** no usa variable, es un literal `rgba(20,21,26,.12)` — pensado como texto fantasma sobre fondo claro. En dark, ese mismo literal es casi negro sobre casi negro. Fix: `body.dark-mode .cover-title .dim{ color:var(--green); text-shadow:0 0 28px rgba(34,240,164,.35); }` — mismo patrón que el título mode-aware de sukupay-ds.
- **Contraste de `--ash` insuficiente:** `rgba(20,21,26,.5)` sobre `--bg:#F5F4F0` da ~3.4:1, por debajo del 4.5:1 que exige AA para texto normal (afectaba, entre otros, "Reduction / elimination of fraud in access to spaces" en los pillars). Subido a `rgba(20,21,26,.62)` (~4.9:1). Este token es de uso amplio en el case (`.ov-body`, `.pillar li`, `.cm-label`, `.footer-l/r`, etc.), así que el fix corrige todo el texto secundario de una vez.
- **`.flow-node` (Flow & Roles):** el fondo de estas tarjetas es blanco fijo en los dos modos (representan pantallas de UI, no chrome de página), pero `.flow-node-title` usaba `var(--ink)` — que en dark pasa a blanco, texto blanco sobre tarjeta blanca, invisible. Fix: título y subtítulo pasan a color fijo oscuro (`#14151A` / `rgba(20,21,26,.62)`), con una excepción para `.flow-node.mail` (cuyo fondo sí es adaptable vía `--green2`) que mantiene `var(--ash)`.
- **"The design process" — más peso visual:** los números ahora entran con scroll-reveal escalonado (`IntersectionObserver`, `.1s` de stagger entre pasos) y el paso 01 aterriza primero, más grande (44px vs 34px) y relleno de verde, en vez de los seis círculos estáticos e iguales de antes.

Ninguno de estos cuatro es un patrón a replicar en los otros 11 cases — son consecuencia directa de que smartpass es el único archivo con un segundo sistema de acento (`--green`) en paralelo al `var(--accent)` compartido.

---

### smartpass-case.html — pantallas sueltas en mobile (6 de octubre de 2026)

**Síntoma (celular):** en "Final outcome · Admin dashboard", Screen 03 y Screen 04 quedaban angostas y centradas, con la imagen y el texto ocupando el 72% y el 60% del ancho.

**Causa:** los dos bloques tenían el ancho en un `style` inline (`max-width:72%` y `max-width:60%`) y el texto con `text-align:center` inline, así que el bloque `MOBILE` no los alcanzaba.

**Solución:** pasaron a clases: `.shot-solo` (72%, centrado) y `.shot-solo.is-narrow` (60%). En desktop se ven igual que antes. A 768px o menos ocupan todo el ancho y el texto va alineado a la izquierda, como Screen 01 y 02.

**Regla (ya estaba para los grids, vale también para esto):** ningún ancho ni alineación inline en los cases; siempre una clase que el media query pueda cambiar.

### 🐛 BUG CONOCIDO Y CORREGIDO (Septiembre 2026) — token de marca por-case sin contraste AA en dark

**Síntoma:** en varios cases, el color de marca del case (el que reemplaza a `var(--accent)` porque cada case tiene su propia paleta — azul de Hugo, rojo de Vendor Tool, violeta de Everyone/Memorable, verde de SukuPay) se ve apagado o directamente invisible en dark mode. A diferencia del bug de `.back-nav`, acá el token sí tiene overrides en `body.dark-mode{}` — el problema es que ese override **repite el mismo valor de light**, que nunca fue pensado para un fondo oscuro.

**Causa raíz:** estos tokens se heredan del branding del proyecto real (el azul exacto de Hugo, el rojo exacto de Vendor Tool), sampleado en su versión "de marca" — pensada para fondos claros o para imprenta. Contraste medido contra `--bg:#24242C` (dark):

| Archivo | Token | Valor original | Contraste en dark | Fix |
| --- | --- | --- | --- | --- |
| `hugo-case.html` | `--orange` (alias interno del azul de Hugo) | `#0033A0` | <1.5:1 | `#7CA6FF` |
| `vendor-tool-case.html` | `--red` | `#E8143C` | ~3.4:1 | `#E6224F` |
| `everyone-case.html` | `--purple` / `--purple-2` | `#8B5CF6` / `#964BFE` | ~3.6:1 / ~3.5:1 | `#C6A6F6` / `#D6B6FF` |
| `memorable-case.html` | `--accent` (+ `--grad`, literal aparte) | `#9846FF` | ~3.4:1 | `#C699FF` (tint 45% hacia blanco del original — sin valor pedido, derivado) |
| `monchis-case.html` / `monchis-drivers-case.html` | `--red` (mismo hex que vendor-tool) | `#E8143C` | ~3.4:1 | `#F06680` en drivers · **monchis: `#FF6F8A` (Oct 2026)** — el override nunca había llegado al archivo, ver "DARK MODE ACCESIBLE EN CASES" |
| `thefork-reviews-case.html` / `theforkshortlistcase.html` | `--red` (verde de marca reusando el alias `--red`) | `#0B8457` | ~3.3:1 | `#6DB59A` |
| `sukupay-case.html` / `sukupay-ds-case.html` | `--accent` | `#0E6B4A` / `#005043` | casi 1:1 | `#61FF61` (el lime que sukupay-ds ya tenía hardcodeado en otro lugar) |

Todos por encima de 4.5:1 sobre `--bg:#24242C` salvo donde el token ya pasaba (ej. `--orange` de muv `#FF6B2C` en 5.4:1, `--teal` de monchis-drivers en 6.6:1 — esos quedaron sin tocar).

**Nota sobre sukupay-ds:** `.cover-title .combo` pinta un gradiente de texto `linear-gradient(90deg, var(--lime) 0%, var(--accent) 100%)` — con `--accent` ahora también en `#61FF61`, ese degradé se ve sólido en dark (los dos extremos son el mismo verde) en vez de bicolor. Es una consecuencia cosmética menor del fix, no un error — si se quiere mantener el efecto de dos tonos en dark habría que darle a `--accent` un verde distinto (más claro o más oscuro) en vez de igualarlo al lime.

**Bug relacionado encontrado de paso:** `sukupay-case.html` y `sukupay-ds-case.html` tenían el mismo bug de ".dim" que smartpass (`.cover-title .dim` con `rgba(21,33,25,.15)` fijo, invisible en dark) — corregido con el mismo patrón: `body.dark-mode .cover-title .dim{ color:var(--accent-o-lime); text-shadow:... }`.

---

### ✅ Octubre 2026 — DARK MODE ACCESIBLE EN CASES (empezando por `monchis-case.html`)

**Síntoma reportado (mobile, dark):** texto gris casi invisible (eyebrows, labels, descripciones), bloques que seguían blancos dentro de la página oscura ("Animated dynamic search", tarjetas de reglas, variaciones del placeholder, chips de anotación), header sticky crema sobre página oscura, y textos dentro de los mockups que se volvían blancos sobre fondo blanco. O sea: no era accesible y **por momentos se mezclaba con light**.

**Lo que encontró la auditoría** (script automático, ver abajo — mide contraste real de cada texto contra el fondo que tiene detrás, sumando transparencias):

| | Antes | Después |
| --- | --- | --- |
| Textos bajo AA en **dark** | 238 | 0 |
| Textos bajo AA en **light** | 218 | 0 |
| Bloques claros "colados" en dark (fuera de mockups) | 13 | 0 |

**Hallazgo importante: light tampoco pasaba.** El `--ash` heredado (`rgba(26,24,20,.5)`) da 3.3:1 sobre `--bg` — casi todo el texto secundario del case estaba bajo AA *también en light*. Arreglar solo el dark habría dejado el problema a medias.

**Causas raíz (cinco, todas repetibles en otros cases):**
1. **Tokens de texto con poco contraste en los dos modos** — `--ash` light (3.3:1) y `--ash` dark `#7A7A90` (3.7:1). El bug de Sept 2026 cubrió que los tokens *existieran* en dark, no que *contrastaran*.
2. **`#fff` literal en superficies** (`.se-rule`, `.ann-bubble`, `.mds-search-hero`, `.mds-comp-card`, `.search-hero` con gradiente `#fff → #FFF5F7`, tarjetas inline `background:#fff`). No pasan por variables → el script de tokens de Sept no las detecta → quedan blancas en dark. **Esto es lo que se ve como "se mezcla con light".**
3. **Fixes documentados que nunca llegaron al archivo** — la biblia decía que monchis ya tenía `--red` dark `#F06680`, `.back-nav` dark y `.nav-right` con `var(--ash)`; el archivo no tenía ninguno (probablemente se pisaron al reemplazar el HTML). **Lección: la tabla de "estado por archivo" no reemplaza volver a auditar.**
4. **Un solo token rojo para dos usos** — `--red` se usaba como *texto* (necesita aclararse en dark) y como *fondo con texto blanco encima* (`.mb-item.accent`, `.kd-result`, `.callout`, `.badge-r` — necesita mantenerse profundo). Con un solo token, cualquier valor rompe uno de los dos usos.
5. **Mockups de UI que heredaban colores de la página** — dentro de `.search-phone` / `.phone-shell` (pantallas de la app, fondo blanco fijo) había texto en `var(--ink)` → en dark, blanco sobre blanco. Y al revés, `#999` fijo daba 2.8:1 aunque el fondo fuera blanco.

**Reglas nuevas (para todos los cases):**

1. **AA en los dos modos, siempre.** Texto ≥ 4.5:1; texto grande (≥24px, o ≥18.66px bold) ≥ 3:1. Se mide, no se estima. Decorativo puro (números gigantes de fondo tipo `.fc-num` al 12% de opacidad) va con `aria-hidden="true"` y queda exento — el contenido real tiene que estar en texto aparte.
2. **Superficies = tokens, nunca `#fff` literal.** `--surface` (tarjeta elevada: `#FFFFFF` light / `#2C2C36` dark) y `--surface-2` (campo dentro de tarjeta: `#F5F5F5` / `#34343F`). Gradientes de sección en dark se arman desde `var(--bg)`.
3. **Dos tokens por color de marca:** `--red` = **texto/íconos** (se aclara en dark: `#C8102E` → `#FF6F8A`) y `--red-fill` = **superficie con texto blanco** (fijo `#C8102E` en los dos modos, blanco encima 5.9:1). Mismo patrón para cualquier marca que se use de las dos formas. Verde: `--green-ink` (`#14713F` light / `#4ADE80` dark) reemplaza al `#27ae60` literal (2.6:1).
4. **Mockups de UI son pantallas reales → claros en los dos modos, con texto fijo oscuro** (`--mock-ink:#1A1814`, `--mock-ash:#6B6B6B` = 5.3:1 sobre blanco). Nunca `var(--ink)`/`var(--ash)` adentro de un mockup. Se leen como "una pantalla dentro de la página", igual que una screenshot — no son un seam, son contenido. (Mismo criterio que ya tenía `.flow-node` en smartpass.)
5. **Colores categóricos (tags, leyendas) necesitan par dark explícito.** Ej. tags de quotes: light `#8A5F00` / `#335DB8` / `#5E3FB8`, dark `#F5C451` / `#8FB0FF` / `#C2A8FF`.
6. **Un solo bloque `body.dark-mode{}` de tokens** (el del final del archivo). Los ajustes de componentes van en `<style id="theme-a11y">` justo antes de `</head>`, para ganar por cascada sin tocar reglas existentes (mismo patrón que el adaptador v3).

**Tokens finales en `monchis-case.html`:**

```css
/* light (:root, en <style id="theme-a11y">) */
--ash:rgba(26,24,20,.68);   /* 5.9:1  (antes .5 = 3.3:1) */
--red:#C8102E;              /* texto: 5.4:1 (el #E8143C de marca daba 4.2:1) */
--red-fill:#C8102E;  --red2:rgba(200,16,46,.08);
--green-ink:#14713F;
--surface:#FFFFFF;  --surface-2:#F5F5F5;
--mock-ink:#1A1814; --mock-ash:#6B6B6B;

/* dark (body.dark-mode{}, bloque único al final) */
--ash:#A3A3B6;  --ash-2:#8C8CA0;   /* 6.2:1 / 4.6:1 sobre #24242C (antes #7A7A90 = 3.7:1) */
--red:#FF6F8A;  --red-fill:#C8102E;  --red2:rgba(255,111,138,.12);
--green-ink:#4ADE80;
--surface:#2C2C36;  --surface-2:#34343F;
/* + body.dark-mode .back-nav{background:rgba(36,36,44,.88);} */
```

**Nota de marca:** el rojo de texto en light pasó de `#E8143C` a `#C8102E` (un poco más profundo). El `#E8143C` de marca se sigue viendo en los mockups y screenshots; en el chrome de la página se usa la versión accesible. La diferencia es mínima a la vista y deja de fallar AA.

**Excepción aceptada:** emojis dentro de mockups (ej. 🛒 sobre el FAB rojo) — son íconos, no texto; el script los marca pero no aplican.

**Cómo auditar (obligatorio antes de cerrar cualquier case):** `a11y-audit.py` (Playwright + Chromium, en la misma carpeta que la biblia). Recorre cada texto visible, calcula el fondo real detrás (compone transparencias y gradientes hasta el `body`) y reporta los que no pasan, más los bloques claros que quedan en dark:

```bash
python3 a11y-audit.py /ruta/al/archivo-case.html dark  1440   # desktop dark
python3 a11y-audit.py /ruta/al/archivo-case.html light 1440   # desktop light
python3 a11y-audit.py /ruta/al/archivo-case.html dark  390    # mobile
```

Salida JSON: `fails` (texto, contraste medido, mínimo requerido, clase) y `seams` (bloques claros en dark — revisar a mano: si es un mockup, está bien; si es chrome o tarjeta, es un bug). Objetivo: `fails: []` en los dos modos.

**Pendiente:** aplicar las mismas reglas a los otros cases. Por lo que muestran los bugs de Sept, los candidatos seguros son los que tienen `--ash` heredado con alpha `.5` y superficies `#fff` literales: `monchis-drivers`, `vendor-tool`, `thefork-*`, `smartpass` (ya tiene `--ash` en .62 — puede que solo falten las superficies), `muv`.

---

## CASE STUDIES — LENGUAJE VISUAL v3: estilo Apple + escenas dibujadas

*Septiembre 2026 · ✅ APROBADO · ✅ Parte 1 (bloque v3) IMPLEMENTADA en todos los cases: `muv-case.html` y `vendor-tool-case.html` con el bloque original, y los otros 13 con el "adaptador" (ver abajo) · ⏳ Parte 2 (escenas) solo en muv y monchis*

### Adaptador v3 para el template viejo (`.section` / `.cover`) — Septiembre 2026

Los cases que no están armados como muv (`.sec`/`.hero`/`.wrap`) sino con el template viejo (`.section`, `.cover`, `.dec`, `.ins`, `.img-frame`, `.phone-shell`…) llevan un bloque `<style id="v3-principles">` insertado **justo antes de `</head>`** (después de todos los estilos del case, así gana por cascada sin tocar reglas existentes). Aplicado en: `fancymonas`, `memorable`, `sukupay`, `sukupay-proto`, `hotaru`, `smartpass`, `hugo`, `everyone`, `thefork-reviews`, `thefork-shortlist`, TheFork onboarding (borrador), `monchis-drivers` y `elektra-otp`.

- **Por case cambia una sola variable:** `--brand` (fancymonas `#F2A6D0`, memorable `#9846FF`, sukupay `#0E6B4A`, sukupay-proto `#005043`, hotaru `#B9873B`, smartpass `#17A25D`, hugo `#0033A0`, everyone `#8B5CF6`, TheFork ×3 `#0B8457`, monchis-drivers `#E8143C`, elektra `#DA291C`).
- **Fondo de página a blanco** (como muv): los que usaban crema `#F5F4F0`/`#F6F4ED`/`#FAF7F6` pasan a `--bg:#FFFFFF; --bg2:#F5F5F7; --bg3:#E8E8ED`. **Excepción: hotaru** conserva su papel cálido `#F6F1E6` porque es parte de la identidad del case. El `.back-nav` en light pasa a `rgba(255,255,255,.82)`.
- **Degradés con `color-mix()`**, definidos en `body` (no en `:root`) para que sigan al `--bg` de dark mode: `--grad-hero` (14% → 5% de `--brand` fundido en `--bg`) en `.cover`, y `--grad-neutral` en las secciones con `style="background:var(--bg2)"` inline. Dos seguidas: la segunda vuelve a `--bg`. Se oculta el divisor `height:1px` debajo del cover. Callouts oscuros (`.callout`, `.quote-block`, `.accent-card`, `.panel-foot`) conservan su color y suman un brillo radial arriba a la izquierda (mismo efecto que `--grad-navy` de muv).
- **Grillas de "línea de 1px"** (`.decisions-grid`, `.dec-grid`, `.dd-grid`, `.metrics-bento`, `.impact-strip`, `.quotes-grid`, `.principles-row`) pasan a tarjetas separadas: gap 12–20px, fondo `--card` (blanco en light, `--bg3` en dark), radio 16px, `--sh-card`. Las variantes de color (`.mb-item.accent`, `.mb-item.dark`) se mantienen porque tienen más especificidad.
- **Bordes → sombra** en tarjetas (`.ins`, `.ui-label`, `.step-card`, `.direction-card`, `.pill-card`, `.audit-item`…) y en marcos (`.img-frame`, `.browser-shell`, `.shot-frame`…). Teléfonos (`.phone-shell`, `.otp-phone`, `.hugo-phone`…) con `--sh-ring` + `--sh-float`. **No se tocan** las piezas de diagramas donde el borde tiene significado (`.flow-node`, `.pipe-node`, chips, swatches).
- **Aire:** `.section` con `--sec` vertical (el padding horizontal y los breakpoints de cada case no cambian), cover más alto, grillas con `margin-top:var(--stack)`.
- **Motion:** `.reveal` pasa a 1s con `--ease-apple`, cambiando solo `transition-duration` y `transition-timing-function` (así se conservan los delays escalonados de hugo y TheFork).
- **Arreglos de dark mode de paso:** `.cover-title .dim` visible en dark, `.back-nav` dark basado en `--bg` (faltaba en los 3 cases de TheFork y en monchis-drivers) y la sección "Full Flow" de monchis-drivers, que degradaba a `#fff` también en dark.
- **Elektra:** el cover está encajonado en `.wrap`, así que el tinte va en el `body` (`no-repeat 0 0/100% 820px`) y no en `.cover`. No tiene dark mode ni dock.
- **Pendiente:** el texto de acento con degradé (`--grad-accent` de muv) no se aplicó porque en estos cases el acento del título es un `<span style="color:…">` inline; hace falta marcarlo con una clase por case. Tampoco hay escenas dibujadas todavía.

A partir de ahora, **todo case nuevo o revisado sigue estas reglas.** Son dos cosas:

1. **Cuatro ajustes visuales estilo Apple/Mac.** Van en un único bloque CSS que se copia igual en todos los cases.
2. **Escenas tipo dibujo** para contar las situaciones del caso: el problema, la causa, el principio y la resolución.

Referencias: las páginas de producto de apple.com (iPad Air, MacBook Air, Apple Upgrade). De ahí salen los tintes de fondo que se funden en blanco, las sombras amplias y el aire entre bloques. Para las escenas, la referencia es la lámina de boceto "One task. Two modes. Always in sync.", con lápiz sobre papel, acuarela puntual y rótulos a mano.

---

### Parte 1 — Los cuatro ajustes estilo Apple

Todo vive en un bloque marcado `/* v3 · Portfolio principles */`, al final del primer `<style>` del case. **No se reparte por el archivo**: se copia completo y en cada case se cambia solo lo que dice "por case".

#### 1 · Animaciones con pausa, nunca bruscas

Esto ya se venía haciendo; ahora queda como regla.

- Curva única: `--ease-apple: cubic-bezier(.28,.11,.32,1)`. Arranca lento y se asienta largo.
- Scroll-reveal (`.reveal`): `opacity` + `transform` en **1s** con `--ease-apple`. Antes era .7s.
- **Las animaciones en loop llevan pausa.** El movimiento ocupa ~55% del ciclo y el resto queda quieto. Ejemplo, el ripple de las escenas:

```css
@keyframes sk-ripple-rest{
  0%{opacity:0;transform:scale(.6);}
  10%{opacity:.9;}
  55%{opacity:0;transform:scale(1.35);}
  100%{opacity:0;transform:scale(1.35);}   /* hold: la pausa */
}
```

- Las flechas punteadas que "avanzan" van lentas (3s por ciclo) y lineales.
- Con `prefers-reduced-motion: reduce`, todo queda quieto y visible (sin `transition` ni `animation`).

#### 2 · Más espacio

| Token / regla | Antes | Ahora |
| --- | --- | --- |
| `--sec` (padding vertical de sección) | `clamp(64px,9vw,128px)` | `clamp(96px,12vw,176px)` |
| `--stack` (entre bloques dentro de una sección) | `clamp(40px,5vw,72px)` | `clamp(56px,7vw,112px)` |
| `.split` gap | `clamp(32px,5vw,96px)` | `clamp(40px,6vw,120px)` |
| `.decision` padding vertical | `clamp(40px,5vw,72px)` | `clamp(56px,7vw,112px)` |
| `.quotes`, `.learn`, `.principles` gap | `clamp(24px,3vw,48px)` | `clamp(32px,4vw,64px)` |
| Hero: `.meta` y `.hero-video` margin-top | `clamp(40px,5vw,72px)` | `clamp(56px,7vw,104px)` |
| `.prose + .prose` | — | `margin-top:1.25em` |

La regla es: **ante la duda, más aire.** Una sección tiene que poder respirar como una "página" de apple.com.

#### 3 · Sombras estilo Apple

**Bordes afuera, profundidad adentro.** Los paneles, tarjetas y wireframes dejan el `border:1px` y pasan a sombra. Las sombras son amplias, de muy baja opacidad y sin filo.

| Token | Light | Uso |
| --- | --- | --- |
| `--sh-card` | `0 1px 2px rgba(0,0,0,.03), 2px 4px 12px rgba(0,0,0,.08)` | Paneles, `.frame`, wireframes, `.decision .media`, imágenes de detalle, escenas |
| `--sh-float` | `0 2px 6px rgba(0,0,0,.04), 0 12px 24px rgba(0,0,0,.06), 0 32px 72px rgba(0,0,0,.10)` | Teléfonos y dispositivos (`.phone`, `.dev`, `.lottie-frame`), que tienen que parecer flotar |
| `--sh-ring` | `0 0 0 1px rgba(0,0,0,.04)` | Filo casi invisible, sumado a `--sh-float` en dispositivos |

**Dark mode:** una sombra oscura sobre fondo oscuro no se ve. En `body.dark-mode` los tokens pasan a un **filo claro** (`0 0 0 1px rgba(255,255,255,.06)`) más una sombra negra más densa. No hay que tocar nada por componente: se redefinen los tokens y listo.

**No lleva sombra:** `img.bare` (imágenes que ya traen su propio recorte o sombra, como los mockups PNG con alpha).

#### 4 · Degradés estilo Apple

**Un tinte arriba que se funde en el color de la página abajo.** Nunca un degradé de dos colores fuertes.

| Token | Light | Dark | Dónde |
| --- | --- | --- | --- |
| `--grad-warm` | `#FFEEE2 → #FFF7F1 → #FFF` | `#352822 → #2A2527 → #24242C` | Hero (`.hero`). **Por case:** se tiñe con el color de marca. |
| `--grad-neutral` | `#F5F5F7 → #FAFAFB → #FFF` | `#2C2C35 → #26262E → #24242C` | Todas las `.sec.tint` |
| `--grad-subtle` | `#F7F7F8 → #FBFBFC → #FFF` | `#29292F → #26262D → #24242C` | Secciones que piden un gris muy sutil (en muv: `#motion`) |
| `--grad-cool` | `#E9EDF8 → #F4F6FB → #FFF` | `#262B45 → #252838 → #24242C` | Disponible. En muv se probó en Motion y se cambió por `--grad-subtle`. |
| `--grad-navy` | radial `#22328A → #111C5C → #0B1445` | — | `.callout` (recuadro oscuro de marca) |
| `--grad-accent` | `#F05A00 → #E04F00 → #C94400` | `#FFA066 → #FF7A2E → #FF6200` | Texto de acento del título (`.h1 .accent`, con `background-clip:text`) |

**Reglas:**

- **Dos secciones con fondo seguidas: solo la primera lleva degradé.** La segunda sigue sobre el color de la página, así no hay corte. Queda resuelto en general con:
  ```css
  .sec.tint + .sec.tint{background:var(--bg);}
  ```
- **Texto con degradé: cada parada tiene que pasar el contraste por sí sola.** El `--grad-accent` de muv se oscureció (`#FF8A3D` daba 2.1:1). Ahora todas las paradas dan ≥3:1 sobre el hero cálido, que es el mínimo para texto grande. Se verifica con un script, no a ojo.
- El degradé cálido del hero y el del acento **son por case**: se reemplazan por el color de marca de cada uno. Los grises (`neutral`, `subtle`) son iguales en todos.

#### Para aplicarlo a otro case

1. Copiar el bloque `v3 · Portfolio principles` completo desde `muv-case.html`.
2. Cambiar `--grad-warm` y `--grad-accent` por el color de marca del case, light y dark.
3. Verificar el contraste de cada parada de `--grad-accent` (≥3:1 en título grande).
4. Revisar si hay selectores con `border:1px` propios del case (como `.decision .media` en muv) y pasarlos a `--sh-card`.
5. Mirar el case en light **y** dark.

---

### Parte 2 — Escenas dibujadas (storytelling)

#### Qué son y para qué

Son ilustraciones estilo boceto (lápiz, papel crema con grilla, acuarela puntual y rótulos a mano) que **cuentan el momento humano** que las pantallas solas no transmiten. Por ejemplo: esperar en la vereda, frustrarse con un "1 min" que son 10, o la calma de saber que el auto viene.

**Regla central: las escenas cuentan la historia, los wireframes son la evidencia.**

- Los wireframes lo-fi reales, los tests A/B y los screenshots del proceso **quedan como están**. Nunca se redibujan en estilo boceto, porque parecerían hechos a posteriori.
- Las escenas se usan para contexto, causa, principio y resolución. No reemplazan ninguna pantalla real.

#### Cuántas y dónde

- **Como máximo una escena por sección**, y como máximo cuatro por case.
- Juntas forman un arco: **frustración → causa → principio → resolución.** Acompañan el texto, no lo repiten.

Plan para muv, como modelo para los demás:

| # | Escena | Sección | Rótulo central | Estado |
| --- | --- | --- | --- | --- |
| 1 | "1 minuto" que son 10: la persona en la vereda mira "1 min" y al lado sigue esperando con el reloj en 10+ | Problem, antes de las citas | *THE APP SAYS ONE THING. THE STREET, ANOTHER.* | ⏳ |
| 2 | 21 pasos: una escalera donde la gente se va bajando | Funnel ("Two sources, two problems") | *21 STEPS. 25% MAKE IT.* | ⏳ |
| 3 | La pantalla dice lo que pasa: pasajera, teléfono y conductor conectados por el estado | Process, **antes del stepper de 5 estados** | *WHAT YOU SEE = WHAT'S HAPPENING* | ✅ |
| 4 | Cada espera tiene nombre y fin: espera tranquila, "Juan está en camino · ACG 546TY", el auto dobla la esquina | Decisions o Motion | *KNOWING IT'S COMING CHANGES THE WAIT.* | ⏳ |

#### Sistema visual (igual en todos los cases)

- **Paleta:** grafito más **dos acentos de la marca del case**. En muv son naranja `#FF6200` (ruta, pin, marca, "request") y navy `#0B1445` (acciones, UI, "status"). En otros cases se cambian **solo** esos dos.
- **Código de globos fijo:**
  - **Gris neutro:** lo que dice o piensa el usuario.
  - **Contorno del color de acción (navy en muv):** lo que dice la app o el sistema.
  - **Rótulo amarillo pálido con "rayitos":** la idea central de la escena, una por escena.
- **Mismo personaje en todo el case:** mismas proporciones y trazo, mujer con rodete. No cambiar de personaje entre escenas del mismo case.
- **Papel:** crema `#FBF9F4` con grilla suave de 28px. En dark mode, `#2A2A33` con grilla clara al 4.5%.
- **Tipografía:** 'Caveat' 500/600 (Google Fonts, se suma al `<link>` que ya existe), en mayúsculas para los rótulos inferiores.
- **Idioma:** los rótulos y globos van en el idioma de la página (inglés). **Los textos de la app van tal cual aparecen en el producto** ("Esperando confirmación del conductor…", "cancelación gratis"), igual que en el stepper.

#### Cómo se construyen (técnica)

**SVG inline en el HTML, sin imágenes.** Así son livianas, nítidas, accesibles y respetan dark mode.

- **Trazo de lápiz:** filtro `#sk-wobble` (`feTurbulence` baseFrequency .035 + `feDisplacementMap` scale 3) aplicado al grupo del dibujo.
- **Acuarela:** elipses del color de acento al 10–13% con el filtro `#sk-wash` (turbulencia + desplazamiento 18 + blur 3).
- **El texto va FUERA del filtro.** Si no, la letra tiembla y se ensucia. El texto es real (`<text>`), no dibujado, así que se lee, se edita y se traduce.
- **Colores por variables CSS** dentro de `.sketch` (`--sk-paper`, `--sk-ink`, `--sk-soft`, `--sk-o`, `--sk-n`, `--sk-user`, `--sk-app`, `--sk-idea`), redefinidas en `body.dark-mode .sketch`. En dark, el navy pasa a lavanda `#AFBBFF`, porque navy sobre oscuro no se ve.
- **Contenedor:** `<figure class="sketch-fig"><div class="sketch"><svg viewBox="0 0 1200 580">…</svg></div><figcaption>…</figcaption></figure>`, con `--sh-card` y radio `var(--r)`.
- **Mobile:** el SVG tiene `min-width:760px` y el contenedor `overflow-x:auto`, igual que la figura del flujo completo. Así el texto nunca se achica hasta ser ilegible.
- **Accesibilidad:** `role="img"` + `<title>` + `<desc>`. El `desc` **cuenta la escena** (quién, qué ve, qué dice cada globo), no "ilustración de…".
- **Movimiento:** como mucho uno o dos elementos (ripple, flechas). Siempre con pausa (ver Parte 1) y quietos con reduced motion.

#### Qué NO hacer

- Dibujar pantallas o flujos de la app que **no se diseñaron** como si fueran reales. En la escena 3 de muv, la tarjeta "Nuevo viaje" del conductor es ilustrativa (la app del conductor no es parte del case). Hay que confirmarla o reemplazarla por un globo del conductor.
- Poner datos en la escena que no estén en el case. Cada número tiene que salir del case: en muv, "5 min" es la cuenta regresiva de cancelación gratis.
- Redibujar wireframes o evidencia del proceso en estilo boceto.
- Usar más de dos acentos de color, o cambiar el código de globos.

#### Si en vez de SVG se usa una imagen generada

Se puede, pero con estas condiciones:

- Pedir los globos y rótulos **vacíos**, sin texto (los generadores escriben mal en español), y poner el texto encima en HTML o en Figma.
- Exportar en WebP a 1600px de ancho (entra en el protocolo de IMÁGENES) y en un `figure` con `figcaption` y un `alt` que cuente la escena.
- Preparar una variante oscura, o enmarcarla como lámina con radio y sombra, para que el papel crema no encandile en dark mode.

Prompt base (en inglés):

> Hand-drawn pencil sketch illustration, loose confident linework, light cream paper with a faint grid, minimal watercolor spot color only in [ACENTO 1 hex] and [ACENTO 2 hex], everything else graphite grey. Editorial storytelling style, wide 16:9 composition, generous white space. Speech bubbles and labels left EMPTY, no text anywhere. Scene: [escena]

#### Para agregar una escena a un case

1. Elegir el momento del arco (frustración / causa / principio / resolución) y la sección donde va. Como máximo una por sección.
2. Copiar el bloque CSS `/* ─── Sketch scenes ─── */` y la escena 3 de muv como plantilla.
3. Cambiar `--sk-o` / `--sk-n` (light y dark) por los acentos del case.
4. Escribir los globos con el código fijo y un solo rótulo amarillo.
5. Escribir el `desc` y el `figcaption`.
6. Mirarla en light, dark y mobile (tiene que desplazarse en horizontal, no achicarse).

---

### Escena de `monchis-case.html` — "A day with Monchis" (Septiembre 2026)

*✅ Dibujada · ✅ Integrada en `monchis-case.html`*

- **Dónde va:** en "Wireframes · Exploration", entre la intro ("Structure first, pixels much later.") y el label "The exploration · Time-of-day box". O sea, antes de los wireframes, que siguen siendo la evidencia. Se sumó Caveat al `<link>` de Google Fonts y el CSS `.sketch` al primer `<style>`.
- **Qué cuenta:** dos focos a la vez. Para la persona, *hacemos tu día mejor*: el antojo correcto aparece sin buscar. Para Monchis, *estar presentes en el día a día*: cada momento es una oportunidad de conversión.
- **Estructura:** la misma persona en 4 viñetas (mañana 8:40 con café, mediodía 12:30 con la laptop, tarde 17:10 con una porción de torta, noche 21:00 con la luna en la ventana). Arriba, un arco de sol que avanza del amanecer a la luna. Debajo de cada viñeta, la caja contextual (borde punteado rojo = voz de la app) con los textos reales del case: "¿Qué te tienta esta mañana?", "¿No almorzaste aún?", "Merienda con algo dulce", "Cena sin vueltas", y sus rails.
- **Rótulos:** gris "YOU: THE RIGHT CRAVING, NO SEARCHING" · amarillo "ONE BOX. FOUR MOMENTS A DAY." · rojo "MONCHIS: FOUR CHANCES TO CONVERT".
- **Acentos Monchis:** `--sk-n` rojo de acción `#E8143C` (texto `#C8102E`; dark `#FF5C7A`/`#FF7A93`) y `--sk-o` ámbar `#F5A623` para la luz del día (dark `#FFC15E`). Se suma `.sk-wash-night` (azul tenue) para la viñeta de la noche.
- **Técnica:** la persona es un `<symbol id="mc-person">` reutilizado con `<use>` 4 veces (mismo personaje garantizado), y el interior de la caja también (`#mc-box-inner`). `min-width:820px` en mobile.
- **Wireframes de la exploración recortados:** quedó solo la card "Where the box lives — after the user, before the catalogue", centrada a 760px (`.wf-explore--single`). Se eliminaron "Same component, four moments" (junto con su callout violeta "Why this mattered") y "One context engine, two surfaces": la escena ya cuenta los cuatro momentos.
- **Pensamientos en inglés** (idioma de la página); los textos de la app en español, tal cual el producto. Los pensamientos ("I skipped lunch again", etc.) son narrativos, no citas de research.

### Mobile — cómo armar imágenes y escenas (Septiembre 2026)

**Regla:** en mobile hay como mucho 1 o 2 teléfonos por pantalla, y el texto de una captura tiene que verse a 10–11 px o más. Para probarlo, en Figma se coloca la imagen a 342 px de ancho dentro de un frame de 390: si no se lee, hace falta versión mobile.

- **Pantallas sueltas (strips de flujo):** se exporta una pantalla por archivo, a 2x (≈780 px de ancho), en WebP, con sufijo `-01`, `-02`… Van dentro de `.shots`, que es una fila en desktop y un carrusel con scroll-snap en mobile (74% de ancho, con el siguiente asomando). Nunca se hace una sola imagen con 5 teléfonos.
- **Composiciones (abanicos, hero):** versión mobile aparte, vertical 4:5 (1080×1350), con 2–3 teléfonos como máximo y sin recortes en los bordes, con sufijo `-mobile`. Se sirve con `<picture><source media="(max-width:640px)">`. No se usa `min-width` + scroll horizontal: se ve cortado y nada indica que se puede deslizar.
- **Escenas dibujadas:** cada escena tiene dos SVG, `.sk-desktop` (horizontal) y `.sk-mobile` (vertical, con las mismas piezas reutilizadas y apiladas), y el cambio es automático a ≤640px. En muv: pasajera → teléfono → conductor, con las flechas request/live status por los márgenes y el rótulo amarillo al final. En Monchis: los 4 momentos en filas (viñeta + caja) y los 3 rótulos apilados. Los ids del SVG mobile llevan sufijo (`skm-`, `mcm-`) para no chocar con los del desktop.
- **Padding de secciones:** tiene que bajar en mobile. `monchis-case.html` tenía `.section{padding:5rem 4rem}` fijo (el contenido quedaba en 262 de 390 px); ahora es `3.5rem 1.25rem` a ≤640px.
- ⚠️ **Pendiente en `monchis-case.html`:** la página desborda en mobile (scrollWidth 726 px en un viewport de 390) por elementos de ancho fijo que ya estaban antes (`.cover-meta`, `.fc-slide`, `.phone-wrap`, `.search-phone-wrap`, `.mb-item`, `.matrix`). Hace falta una pasada mobile completa.
- En `muv-case.html` quedó comentado (`<!-- MOBILE (pending … -->`) el `<picture>` del abanico de Envío (`muv-envio-fan-mobile.webp`; desde el 6 de octubre de 2026 reemplaza al carrusel `.shots` de `muv-envio-01…05.webp`, que se quitó junto con la tira), a la espera de la imagen. El del flujo completo (`muv-full-flow-mobile.webp`) ya no aplica: esa figura se eliminó el mismo día.

### Cambios en `muv-case.html` en esta pasada (Septiembre 2026)

- Se implementó la **escena 3** en Process, antes del stepper de 5 estados.
- Se aplicó el bloque **v3 · Portfolio principles** completo.
- Hero con `--grad-warm` (durazno) y título con `--grad-accent`.
- `#motion` con `--grad-subtle`. `#decisions`, que viene justo después, queda sin fondo por la regla `.sec.tint + .sec.tint`.
- Se **eliminó la decisión "Navy for action, orange for the brand"**: el texto, el placeholder de la review screen y el TODO asociado. La sección pasó de "Four decisions…" a **"Three decisions that shaped the product"**.
- `.decision .media` y `.wf-strip .wf` pasaron de borde a sombra.
- Se eliminaron del cierre de Results el callout navy ("Every stakeholder wanted to add. Every user wanted less.") y la lista "If I had more time". Results ahora termina en "What I learned".

### Cambios en `vendor-tool-case.html` y `muv-case.html` (6 de octubre de 2026)

- **Vendor Tool, header transparente arriba.** Se agregó el bloque `#nav-glass` copiado de muv. Revisado arriba y con scroll, en light y dark.
- **Vendor Tool, fila Team en `.meta`.** Sexto dato del hero, a todo el ancho debajo de Role / Company / Scope / Timeline / Launch (`.meta-team{grid-column:1/-1}`): nombre en peso 500 y cargo en `--ash`. Lucia Giacomelli (Product Manager) y Fabian de la Cruz (Engineering Manager). En desktop van en una línea; en mobile, uno debajo del otro.
- **muv, Team completo.** Pasó de "Passengers: Nathalia (PM), engineering, data" a "Passengers: Nathalia Torres (PM), Gabriel Vargas (Engineering Manager), data". Sigue en su celda de `.meta`.
- **Pendiente:** los dos cases muestran el equipo con formatos distintos (fila propia en Vendor Tool, celda con texto corrido en muv). Falta elegir uno.
- **muv, imagen de Envío reemplazada.** En "The same flow, for sending a package" salió la tira de cinco teléfonos (`muv-assets/muv-envio-flow.webp`, 1600×691) y entró el abanico de cuatro pantallas (`muv-assets/muv-envio-fan.webp`, 2000×1342, 215 KB): home con el aviso de tarjeta, categorías, detalle del envío y calificación. El original es un PNG transparente de 2528×1696 (2,8 MB); se recortó el margen vacío y se pasó a WebP calidad 86. Como las pantallas son blancas y sin marco, sobre la página blanca no tenían borde: la imagen va dentro de `.frame.envio-stage` (fondo `--bg3`, padding propio, imagen a 960px como máximo y centrada). El epígrafe y el `alt` pasaron de cinco pasos a cuatro (la pantalla de direcciones ya no se muestra). `muv-envio-flow.webp` queda en la carpeta, sin uso. **Pendientes:** la versión mobile del abanico (`muv-envio-fan-mobile.webp`, vertical 4:5, 2–3 teléfonos; quedó el `<picture>` comentado) y el texto de las pantallas, que en este render sale deformado en varios lugares ("Categorio y precio", "Excelenta servicio", "Temé la ruta indicada").
- **muv, figura del flujo completo eliminada.** Se quitó de Process la imagen de los siete teléfonos (`muv-assets/muv-full-flow.webp`, "The whole passenger app, from home and categories to matching, driver assigned and review"), que estaba de más: la lista de los cinco estados pasa directo a "Home: photo or map?". Con ella salieron el comentario del `<picture>` mobile pendiente y las reglas `.panel.scroll` (ya no las usa nada). El archivo queda en la carpeta, sin uso.
- **muv, design system como board.** La "Component library" colapsada con capturas pasó a ser la sección `#system` con el board de componentes vivos. Detalle en "DESIGN SYSTEM COMO BOARD" → "Board de muv".

### Cambios en `vendor-tool-case.html` (7 de octubre de 2026)

- **Hero: abre con la foto de la laptop.** La primera imagen del caso pasó a ser `assets/vendor-tool-laptop.webp` (2000×1333), la misma foto que usa la card de Vendor Tool en la home: es el mismo archivo, no hay copia nueva. La composición de cinco pantallas (`vendor-tool-assets/vt-hero-showcase.webp`) bajó un lugar y queda justo debajo, también dentro del hero, con `--stack` de separación (`.hero-visual + .hero-visual`). Si se cambia la foto de la card de la home pisando el archivo, cambia también acá.
- **Mobile: las capturas ya no se cortan.** Las siete capturas de pantalla de escritorio (categorías, productos, editor, cola de órdenes, listado, detalle y roles) estaban en `.panel.scroll` con `min-width:760px` en pantallas de 760px o menos: se veía solo el lado izquierdo y había que deslizar de costado sin que nada lo indicara. Se quitó la regla y la clase `scroll`: ahora cada captura se achica en proporción hasta entrar entera en el ancho. Es la misma regla de mobile que ya valía para muv ("no se usa `min-width` + scroll horizontal").
- **Revisado:** hero y capturas a 1440, 768 y 390px, en light y dark, sin scroll horizontal ni imágenes que desborden.
- **Design system como board.** La "Component library" colapsada con capturas pasó a ser la sección `#system` con el board de componentes vivos. Detalle en "DESIGN SYSTEM COMO BOARD" → "Board de Vendor Tool".
- **Decisión 2 (órdenes): la captura de la cola se reemplazó por dos order cards en código.** Paula pidió achicarla y cambiarla porque no le gustaba la calidad. Se quitó `vendor-tool-assets/vt-orders-queue.webp` (1114×623, ya no se usa en el caso) y en su lugar van las dos cards del archivo de Figma `Gestor de Órdenes 2.0`: `preparando limite` (nodo `40000026:19631`, roja, "Transcurridos: 7 minutos") y `preparando` (nodo `40000026:19632`, blanca, "13:32 h I Transcurridos: 3 minutos").
  - **No son imágenes:** están construidas en HTML/CSS con los valores de Figma, así que se ven nítidas a cualquier tamaño. Figma solo entrega el render a 1x (1104px), que en pantallas retina se vería borroso otra vez.
  - **Presentación:** las dos cards apiladas (16px entre sí) sobre un fondo `--bg2` con `--r` (`.vt-stage`), centradas y con un ancho máximo de 920px (en Figma miden 1104): ocupan menos que la captura anterior y el contenido queda a tamaño real, 14px. El fondo sigue el tema; las cards quedan claras en dark mode, como el board.
  - **Mobile:** la card no se achica, se reacomoda. Con el contenedor en 640px o menos: orden y badge en una fila, el tiempo debajo, el botón principal a todo el ancho, "Detalle de la órden" bajo los productos e "Imprimir" bajo el comentario. Entre 640 y ~700px el tiempo y el botón bajan juntos a una segunda fila.
  - **Diferencias con Figma:** el cronómetro es un ícono SVG (Material `timer`) en vez del emoji ⏱, para que no cambie según el sistema; los chevrons y la impresora son los de Ant Design (`down`, `printer`). El texto se dejó tal cual está en Figma, incluidos "[Branch name]", "Detalle de la órden" (con tilde) y la "I" que separa la hora del tiempo transcurrido.
  - **Epígrafe nuevo:** "Two orders in "Preparando". Each card shows the time elapsed, and turns red once it runs past the limit: "Transcurridos: 7 minutos" Elapsed: 7 minutes." El anterior hablaba de la cuenta regresiva para aceptar ("Te quedan 05:00 min para aceptarla"), que ya no se ve en la figura.
  - **Pendiente de Paula:** el párrafo de la decisión sigue describiendo la pestaña Pendientes (cuenta regresiva, aceptar y rechazar con un toque) y las cards muestran Preparando (tiempo transcurrido, una sola acción). Falta decidir si se ajusta el texto o se suma una card de Pendientes.
  - **Clases:** `.vt-stage` (fondo y container query), `.vt-oc` (`.is-late` = pasada de límite), `.vt-oc-branch`, `.vt-oc-head`, `.vt-oc-id`, `.vt-oc-tag`, `.vt-oc-act`, `.vt-oc-time`, `.vt-oc-btn`, `.vt-oc-body`, `.vt-oc-prod`, `.vt-oc-more`, `.vt-oc-link`, `.vt-oc-note`, `.vt-oc-print`, `.vt-oc-foot`.
  - **Revisado:** contra el render de Figma (mismas alturas, 260 y 256) y a 1440, 1024, 768, 390 y 360px, en light y dark, sin scroll horizontal ni contenido que se salga de la card.

### Cambios en `vendor-tool-case.html` (8 de octubre de 2026)

- **Caption con una nota de trabajo.** En la decisión 3, debajo del modal de confirmación, el caption decía "The guarded second step, found in your source deck.". Era una nota interna que quedó publicada. Ahora dice "The second step before removing a user.".
- **Las 14 notas `<!-- TODO(Paula): … -->` del HTML, resueltas y borradas.** No se veían en la página, pero las leía cualquiera que abriera el código fuente. Se repasaron una por una con Paula y el caso quedó así:

| Tema | Antes | Ahora |
| --- | --- | --- |
| Rol en el cover | Product Designer, end to end | **Sr Product Designer, end to end** (igual que el header y que Experience) |
| Frase del problema | Cita en cursiva con filete rojo, sin autor | Texto común. La frase es de Paula, no una cita de otra persona |
| "37k" | Total users | **Monchis users** |
| Hallazgos → decisiones | Con la duda de si eran una reconstrucción | Confirmado por Paula: son hallazgos reales. Sin cambios |
| Revisión de fotos | "automated review", "no manual publishing step" | **La foto le llega al equipo de Monchis, que la revisa antes de que la vea el cliente.** El proceso es mixto: el vendor sube la foto y el equipo la aprueba o la rechaza. Corregido en la decisión 1, en "From finding to design decision" y en el aprendizaje de fotos |
| Módulo de facturación | Con la duda de si era de Vendor Tool | Confirmado: lo diseñó Paula y es parte de Vendor Tool. Sin cambios |
| Migración | "Beyond Vendor Tool: where the migration landed" | **"Where the migration landed"**. El 100% migrado y los 2 sistemas viejos dados de baja son resultados de Vendor Tool |
| Los dos "72 h" | "72h → 0 min · Turnaround on a catalog change" y, aparte, "72 h per week" como proyección de Vendors 2.0 | **Un solo dato:** "72 h → 0 · Manual hours spent on catalog changes, removed by the new self-service catalog." Se eliminó el bloque "A separate, still-open projection", que era el mismo número repetido |
| Meta de vendors | from 545 to 1,080 vendors | from 545 to 1,080 vendors **(+98%)**. El "+45%" de la fuente estaba mal calculado |
| Testing | Sin sección | Sin sección: hubo pruebas chicas durante el pulido, sin nada concreto para mostrar. "If I had more time" lo sigue diciendo |
| Order cards (HTML) | Detalle de la órden | Detalle de la **orden** |

- **Se cerraron sin cambios:** la nota del editor en mobile (el caption ya dice "the live preview up close: what the customer sees"), la del "7-minute problem" (ese titular ya no existe) y la de la animación (era un aviso para mirar el loop en el sitio real).
- **Sigue abierto:** (1) el período de las 72 h (¿por semana?), que hoy va sin unidad de tiempo; (2) el año de la meta de 1,080 vendors; (3) las dos order cards dicen "[Branch name]", falta un nombre de sucursal; (4) las capturas de historial y detalle tienen datos de ejemplo y typos ("Ódenes canceladas", "Motivo de cancelacion", el mismo número de orden repetido, "Gs. 160.000" para 40.000 órdenes): se corrigen en Figma y se vuelven a exportar; (5) si Multicomercio es un tipo de franquicia o un sistema viejo. El texto actual funciona en los dos casos.
- **Reglas:** un case se publica sin comentarios `TODO` ni notas de trabajo en el HTML. Y una frase propia no va con formato de cita.

### Cambios en `muv-case.html` (7 de octubre de 2026)

- **Pantallas 1 y 2 de "From destination to confirmation in four screens", corregidas.** Las que estaban tenían errores: Destination mostraba un menú hamburguesa fuera de lugar y Categories un header "Mis viajes" que no corresponde. Paula pasó los exports nuevos (780×1702 y 780×1704) y se armaron dos mockups nuevos: `muv-assets/muv-app-destination-v2.webp` (44 KB) y `muv-assets/muv-app-categories-v2.webp` (73 KB), los dos de 640×1256 con fondo transparente, igual que los anteriores. Llevan nombre nuevo para que no se sirva una copia vieja en caché; `muv-app-destination.webp` y `muv-app-categories.webp` quedan en la carpeta, sin uso.
- **Cómo se armó el marco del teléfono:** los assets originales no estaban a mano, así que el marco se redibujó midiendo el que se ve en la página (borde de titanio violeta, bisel negro, botones laterales, isla), y se comparó esquina por esquina con el anterior. Si alguna vez hay que rehacer las otras dos pantallas (`muv-app-searching.webp`, `muv-app-confirmed.webp`), conviene usar el mismo marco.
- **Ajustes al calzar las pantallas:** en Destination se recortaron 21px de blanco debajo del botón. El export de Categories traía su propia isla, más grande, sobre el mapa: se borró y va la isla del marco, para que los cuatro teléfonos sean iguales; además se ensanchó 1,4% para que entre completa con el indicador de inicio.
- **Home: photo or map?** El wireframe de la izquierda quedaba pegado al borde de la imagen. El panel ahora lleva `.inset-l` (`padding-left:7%`): el wireframe queda centrado en la mitad blanca y la mitad verde sigue llegando al borde derecho. La imagen (`muv-homes-ab.jpg`) no se tocó; `.panel.inset-l` sirve para cualquier imagen cuyo dibujo toque el borde izquierdo.

### Cambios en `sukupay-case.html` (8 de octubre de 2026)

- **UX audit en formato rojo de error.** En "Action · 03 UX audit of current home", los diez hallazgos (Space usage, Cognitive load, Repeat send?, FX rate?, Accessibility, Activity icon, Settings hierarchy, Support duplication, Withdraw / Send overlap, Trust) eran cards blancas con sombra en grilla de cuatro. Como son la parte negativa del análisis, Paula pidió mostrarlos como la lista de problemas de monchis: fondo rojo muy suave, barra roja de 3px a la izquierda, sin sombra y sin el efecto de levantarse en hover.
- **Color:** `--err`, el rojo de error del propio design system de SukuPay (`#9A0003` en light, `#FF8A8A` en dark). El fondo es ese rojo al 6% sobre `--bg` (10% en dark).
- **Layout:** dos columnas en desktop y una desde 900px. El texto de cada ítem pasó de `.75rem` a `.8125rem`. El copy no cambió.
- **Cómo está hecho:** un bloque `<style id="audit-error">` al final del `<head>`, que pisa a `.audit-item` (incluida la regla del bloque v3 que le daba fondo de card y sombra). No se tocó el HTML.
- **Regla para otros cases:** los hallazgos negativos de un análisis (problemas, fricciones, lo que falla hoy) van en este formato rojo, no en cards neutras. Las cards blancas quedan para lo neutro o lo positivo.
- **Revisado:** a 1440 y 390px, en light y dark.
- También recibió los bloques `#nav-glass` y `#nav-ink` (ver las secciones del header).

### Cambios en `sukupay-proto-case.html` (8 de octubre de 2026)

- **Genesis es trabajo de ingeniería, y es parte del proceso de Paula.** El caso daba a entender que el prototyper era de Paula. Ahora dice que la idea y la construcción son del equipo de ingeniería, y que Paula lo usa todos los días para ir rápido, explorar ideas y escribirles las ACRs a los devs a través de Ideate. El design system es lo que enlaza el proceso y hace que lo que sale de Genesis sea fiel a sus diseños.
- **Equipo, arriba.** El cover suma la fila "Team · Genesis was built by": Alejandro Alvarez (Engineering Manager), Joaquin Beceiro (Frontend), Illan Cohn (Backend). El bloque de Genesis los repite en una franja "Thought up and built by" (`.gen-credit`).
- **Bloque de Genesis.** Título: "Engineering built it. I design with it every day." (antes "This stopped being a diagram."). Los tres pasos pasaron de describir la herramienta (Describe → Shape → Prototype) a describir el uso diario de Paula (Explore → Ideate → Prototype), con el rótulo "How I use it, day to day".
- **Scope del cover:** "Tokens · Architecture · Components · Pipeline". Salieron "Agents" y "Prototyper", para que no se lean como algo construido por Paula.
- **"From design system to the Prototyper"** (bloque oscuro de más abajo): dice que Genesis es de ingeniería y que el design system aporta el enlace. El nodo central del diagrama pasó de "The agent / The Prototyper" a "Built by engineering / Genesis", y se sumó una fila de tres roles (Engineering, Design system, My day to day). La reflexión 03 también lo dice.
- **Nombre del caso: SukuPay · Prototyper** (antes "SukuPay · Design system"), en el header, el `<title>`, `og:title`, `twitter:title` y el footer.
- **Los dos verdes, animados (`.duo`).** Reemplaza a `.swatch-row`. Los círculos van centrados y casi tocándose (se pisan un 10%). Al entrar en pantalla, el verde viejo `#00C603` se divide en lima y teal; después se acercan y se separan en un loop de 9 segundos, con pausa en cada extremo. Los textos van debajo, centrados, en dos columnas (una en mobile). Sin JS o con `prefers-reduced-motion` se ve el par quieto.
- **Design system como board,** debajo de los círculos. Detalle en "DESIGN SYSTEM COMO BOARD" → "Board de SukuPay Prototyper".
- **Header:** bloques `#nav-glass` y `#nav-ink`. Ver las dos secciones del header dentro de CASE STUDIES.
- **Tres marcas, no cuatro partners (corrección de datos, 8 de octubre).** El caso decía "4 · Partners to skin on one skeleton" en los datos del problema y "4 · Partners themed" en el cierre. Son **tres marcas** sobre el mismo sistema: SukuPay (en varios países), Zigi y una tercera que todavía no se lanzó. Ahora dice "3 · Brands to skin on one skeleton" y "3 · Brands on one system". Se dice "brands" y no "partners" porque SukuPay es la marca propia. "On one system" no afirma que las tres estén tematizadas de punta a punta. La lista de archivos de tema (`sukupay · zigi · zigi-dark · partner`) no cambió: son archivos, no marcas. **Regla:** la marca sin lanzar no se nombra en el caso hasta que sea pública.
- **Pendiente de confirmar con Paula:** (1) "ACRs" quedó escrito tal cual, sin aclarar la sigla; (2) el caso ahora nombra "Ideate", cuando el 3 de octubre se habían quitado los nombres de los pasos para no exponer cómo está orquestado Genesis; (3) los SVG de wallet-check y de Zigi.

### Cambios en `vendor-tool-case.html` (Septiembre 2026)

- **Bloque v3 aplicado.** Colores por case: `--grad-warm` rosado Monchis (`#FFECEF → #FFF6F7 → #FFF`, dark `#36242A → #2A2429 → #24242C`) y `--grad-accent` rojo (`#F0284E → #E8143C → #C8102E`, dark `#FF7A93 → #FF5C7A → #FF3D63`). Todas las paradas dan ≥3.6:1 sobre el hero (verificado con script).
- Sombras en vez de borde en `.panel`, `.strip` y `.signals`. `.frame` (hero Lottie) pasa a `--sh-float`.
- *(Histórico: la Component library se reemplazó por el board el 7 de octubre de 2026; lo que sigue sobre `.comp` y sus grupos ya no está en el caso.)*
- Las tarjetas `.comp` del Component library pasan a ser blancas (`var(--panel-light)`) con `--sh-card` sobre el fondo gris, con la miniatura en `--bg2`: tarjeta blanca sobre gris, estilo Apple.
- No hay dos `.sec.tint` seguidas en este case, pero la regla queda puesta igual.
- **Component library, nuevo orden:** Status components → Order card → **Queue tabs** → **List rows** → **Category picker** → Stat card.
  - **Se eliminó "Page header pattern"** (`vt-comp-header-actions.webp` y `vt-comp-header-filters.webp` ya no se usan).
  - **Queue tabs** pasa a ser un grupo propio con dos imágenes nuevas: `vt-comp-queue-header.webp` (en contexto: búsqueda, orden, tabs, aviso y acciones) y `vt-comp-queue-tabs.webp` (primer plano: activo contra en reposo, en tarjeta angosta `.comp--narrow`). Reemplaza a `vt-comp-tabs.webp`.
  - **List rows** (nuevo): `vt-comp-list-rows.webp`, con producto sin foto, producto con foto y categoría programada apagada.
  - **Category picker** (nuevo): `vt-comp-category-picker.webp`, con "Agregar categoría" y búsqueda que va sugiriendo mientras se escribe.
  - "Small pieces" pasa a llamarse **Stat card** (queda solo la tarjeta de total).
  - El subtítulo del summary pasa a "Status, cards, lists, pickers and navigation…".
- **Hero:** se sumó `vt-hero-showcase.webp` (composición de 5 pantallas, 1536×795, 88 KB) como primera imagen, justo después de la fila de meta (Launch · May 2025), dentro de `.frame` con `--sh-float`. Se recortaron las franjas negras y el título "INSTANT SHOWCASE" de la plantilla original. La composición anterior, `vt-hero-composite.webp` (3 ventanas de navegador), se movió a Solution, debajo de "One dashboard for products, orders, status and team.", y reemplaza al collage de 6 pantallas `vt-toolkit-grid.webp`, que se eliminó junto con su TODO.
- Las cuatro imágenes nuevas venían en PNG con transparencia: se compusieron sobre blanco antes de exportarlas a WebP (si no, el fondo transparente queda negro) y se recortó el margen sobrante. Pesan entre 14 y 41 KB, dentro de protocolo.

---

## REGLAS DE JS — NO ROMPER

```js
// Script único — 1 <script> / 1 </script>
// Orden obligatorio:
1. HERO CTA (scroll a #gallery). Antes iba acá el cursor custom, eliminado en Octubre 2026
2. openCase() / closeCase()
   (+ wipeAndNavigate() y el listener `pageshow` del Wipe — ver "Volver con «atrás»")
2b. PROJECT CAROUSEL (DOMContentLoaded propio: auto-avance + arrastre) — va antes de TILE CLICKS
3. DOMContentLoaded (gallery clicks, keyboard, tile stagger, parallax)
4. switchView()
5. revealObserver
6. Panel scroll
7. Sticky header
8. filterProjects()
9. Loader (window load)
10. loadMuvImages() + openCase wrapper
11. MC phrase rotator (DOMContentLoaded)

```

**Regla crítica:** Ningún carácter especial (═ ─ — etc.) dentro del `<script>`. Solo ASCII básico en comentarios JS. *(Octubre 2026: los comentarios de los bloques nuevos — `pageshow` y carousel — se escribieron sin tildes para cumplir esta regla. Ojo: el script ya tenía comentarios con tildes anteriores a esta pasada, p. ej. en el handler de tap de los tiles; no se tocaron.)*

**Regla crítica:** No usar `opacity:0` en elementos del dashboard. Todo visible desde CSS puro.

---

## IMÁGENES — PROTOCOLO


| Peso           | Estrategia                                                    |
| -------------- | ------------------------------------------------------------- |
| < 300KB        | Embeber inline como base64                                    |
| 300KB–1MB      | Mover a `portfolio-images.js` con lazy load via `data-img-id` |
| > 1MB en tiles | Placeholder SVG gris hasta tener versión optimizada           |

**Excepción activa:** el `<video>` de `.tile-muv` pesa ~3.5MB embebido inline (ver "Covers de tiles animados" en PROJECTS VIEW) — no sigue esta tabla porque no hay placeholder de video implementado todavía y `portfolio-images.js` no está creado (ver decisión debajo). Es el único asset del sitio que rompe el protocolo a propósito.


**Lazy load system:**

- `portfolio-images.js` define `window.PORTFOLIO_IMAGES = {}`
- Los `<img>` tienen `data-img-id="portfolio_img_N"` como placeholder
- `IntersectionObserver` carga la imagen cuando entra al viewport

---

## MUV CASE STUDY — Design System Section (reemplazada el 6 de octubre de 2026)

*Julio 2026. **Ya no está en el caso:** el 6 de octubre de 2026 Paula pidió reemplazarla por el board con componentes vivos. Ver "DESIGN SYSTEM COMO BOARD" → "Board de muv" dentro de CASE STUDIES. Lo que sigue queda como historial de cómo era la sección de imágenes.*

### Estructura de la sección (orden)

1. **01 Driver Card · States** — 2 columnas lado a lado
2. **02 Category Card · States** — 2 columnas + listado completo debajo
3. **03 Push Notifications · Real-time States** — 2 columnas: texto izquierda, imágenes apiladas derecha
4. **04 Toast Alerts · Feedback System** — 2 columnas lado a lado
5. **DS Principles** — grid 3 columnas al final

### Tamaños de imágenes

- Driver cards: `max-width:50%` centrado en contenedor gris
- Category cards: `max-width:60%`
- Push notifications: `max-width:50%` (las 3 apiladas a la derecha)
- Toasts: `max-width:50%`

### Push Notifications — layout específico

```
[texto + 3 bullets]    |    [Searching img]
                       |    [In transit img]
                       |    [Permission img]

```

- CSS class: `.ds-pn-layout` → `grid-template-columns:1fr 1fr`
- Imágenes en `.ds-pn-img-area img` → `max-width:50%`
- Mobile: colapsa a 1 columna

### Componentes incluidos


| Componente        | Archivo fuente                | Estados                |
| ----------------- | ----------------------------- | ---------------------- |
| Driver Card       | `Conductor.png`               | Pre-trip (naranja)     |
| Driver Card       | `Conductor_en_viaje.png`      | In-trip (neutro)       |
| Category Card     | `Category_card.png`           | Selected / Recomendado |
| Category Card     | `Category_card_unelected.png` | Unselected             |
| Category Listing  | `false.png`                   | All options            |
| Push · Loading    | `loading.png`                 | Searching state        |
| Push · In transit | `en_caminp.png`               | ETA + driver name      |
| Push · Alert      | `alerts.png`                  | Permission request     |
| Toast · Success   | `Success.png`                 | Green                  |
| Toast · Error     | `Alert.png`                   | Red                    |


### CSS classes clave

```css
.ds-group          /* cada grupo de componentes */
.ds-group-label    /* número + título del grupo */
.ds-comp-grid.ds-2col  /* grid 2 columnas para componentes */
.ds-comp           /* card individual de componente */
.ds-comp-img       /* área de imagen — padding 1.25rem */
.ds-comp-img img   /* max-width:50% */
.ds-comp-img-wide img  /* max-width:60% */
.ds-tag            /* etiqueta de metadata */
.ds-tag-accent     /* etiqueta en verde lima */
.ds-tag-green      /* etiqueta verde success */
.ds-tag-red        /* etiqueta roja error */
.ds-principles     /* grid 3col de principios al final */
.ds-pn-layout      /* 2col específico para push notifications */
.ds-pn-img-area img /* max-width:50% */

```

---

## MONCHIS CASE STUDY — Reestructurado alrededor de los dos caminos (Agosto 2026)

### Qué cambió

El case pasó de ser "before/after + design system + métricas" a un caso de **proceso de decisión**. El eje ahora es: mandato abierto → research → hallazgos → wireframes → **dos caminos (V1 / V2)** → versión final → search dinámico → design system → métricas.

### Estructura (orden de secciones)

1. **Cover** — se sumó `Mandate: Open scope — asked to take the lead`.
2. **Context & Problem** — solo el *before* + card "The mandate". El *after* se movió a "The final version" para que el payoff llegue después de los caminos.
3. **Research · Discovery** — 4 métodos + datos de Amplitude + quotes de usuarios (absorbió la vieja sección "Active Listening").
4. **Findings** — 5 hallazgos (F01–F05), cada uno con su *Constraint*. Los caminos y la matriz de decisión referencian estos códigos.
5. **Wireframes · Exploration** — se eliminó el link externo. Ahora muestra la exploración real del *box del momento del día*: `1a` (dónde vive el box en la página + regla de dismiss), `1e` (mismo componente en 4 momentos + reglas y fallback) y `1c` (un solo motor de contexto: las sugerencias del search sheet son las del box — el antecesor directo del search dinámico). El `1b` (box como hero) se descartó del case. Debajo, el wireframe del sistema de banners personalizados (`monchis_case_013`) con su explicación de los 3 tipos. El wireframe 01 (`monchis_case_012`) se eliminó del case y del store de imágenes. Imágenes: `monchis_wf_1a`, `monchis_wf_1e`, `monchis_wf_1c`. Clases nuevas: `.wf-hero` `.wf-explore` `.wf-card` `.wf-code` `.wf-note` — el violeta `#5B3DF5` es el color de anotación de wireframe, no un token del portfolio.
6. **The two paths · V1 vs V2** ★ — el corazón del case. V1 brand-led / V2 task-led, wins & costs, bloque de estados de V1 (alerta de proximidad), bloque de scroll de V2, matriz de decisión y "The call". **Regla:** los dos caminos se muestran con el mismo formato — un teléfono hero al 58% de ancho en la card, y los estados en un bloque propio debajo. No mezclar composites de varios teléfonos dentro de la card.
7. **The final version** — V2 spine + V1 safeguards + capa de personalización.
8. **Feature Focus · Animated Dynamic Search** — con intro que lo conecta a la decisión entre caminos.
9. Design System → Full Flow → Metrics → Decisions & Learnings.

### Imágenes nuevas

`monchis_path_v1` (hero de V1, recortado del composite), `monchis_path_v1_states` (alerta de proximidad + skeleton/offline), `monchis_path_v2`, `monchis_path_v2b`, `monchis_wf_1a`, `monchis_wf_1e`, `monchis_wf_1c` — agregadas; además `monchis_case_001` fue reemplazada por el screenshot completo de la home vieja (780×2776, contenida a 560px con fade) al final de `monchis-case-images.js` (webp, alpha, ~74–210KB c/u). Vienen de los exports V1_2 / V2 / V2_2.

### CSS classes nuevas

`.rs-methods` `.rs-m` `.rs-split` (research) · `.find-list` `.find` `.find-imp` (hallazgos) · `.paths-grid` `.path` `.path-head` `.path-tag` `.path-img` `.path-body` `.pb-list` (caminos) · `.matrix` (matriz de decisión) · `.verdict` (la decisión final). Todas en un `<style>` local antes de la sección de Research, con breakpoint a 1 columna en ≤1000px.

### Regla de escritura del case

Cada hallazgo tiene código (F01–F05) y la matriz de decisión los cita. Si se agrega un hallazgo, hay que agregar su fila en la matriz — si no, el argumento se rompe.

---


### Octubre 2026 — pasada de revisión final

- **Escena "A day with Monchis":** al 70% de ancho, en escala de grises, papel liso (sin grilla) y versión minimal (sin sol/luna, manchas de acuarela, líneas de zoom ni placeholders dentro de las cajas).
- **Eliminado:** bloque "Personalized banners system" (wireframe de 3 banners) y la sección "Components built to convert." completa (tarjetas de carruseles, categorías, navbar, FAB, snackbar) → reemplazada por una foto a ancho completo (`assets/monchis_in_hand.webp`, 71KB).
- **Two paths:** las dos homes ya no van dentro de cada card. Una imagen hero central con los dos teléfonos (`assets/monchis_paths_hero.webp`, `.paths-hero`) y debajo las dos columnas de info. Reemplaza la regla de agosto ("teléfono hero al 58% en cada card").
- **What actually shipped:** el teléfono dibujado por código (`.phone-shell` + `monchis_case_002`) se reemplazó por el mockup inclinado `assets/monchis_final_home.webp`.
- **Decisions & Learnings:** rediseño a `.kd-*` — lista numerada de 7 decisiones (1 línea c/u + dato o etiqueta), franja "The result" con una sola frase (sin repetir métricas de la sección anterior) y 3 aprendizajes en vez de 4.
- **Mobile:** problemas del carrusel de 4 problemas (`#problem-list`, scroll-snap + dots), regla general "bloque de 2 columnas con imagen → 1 columna, imagen primero" vía selectores de atributo sobre los grids inline, nav reducido a "← Back to portfolio", cover/métricas/search-hero sin overflow. Verificado: `scrollWidth == 390`.
- **Assets que ya no se usan:** `monchis_path_v1/v2`, `monchis_case_002`, `monchis_case_005`–`010`, `monchis_case_013`.

### 8 de octubre de 2026 — los números de "What the numbers said" van escritos en el HTML

- **Problema:** los cuatro datos de la investigación (`#ri-stats`: 60%, 80%, 67%+, 27%) estaban escritos como "0" en el HTML y era el script el que los subía hasta el valor real. Sin JavaScript, en un lector, en un buscador o en cualquier herramienta que lea la página, el caso decía "0% of users engage with search".
- **Solución:** el HTML lleva ahora el valor final: el número, el `stroke-dasharray` de los tres donuts y el ancho de las cuatro barras. El script (bloque `Research Insights Animation`) los pone en cero recién cuando arranca y los anima al entrar en pantalla, igual que antes.
- **De paso:** con `prefers-reduced-motion` o sin `IntersectionObserver` el script no hace nada y los números quedan fijos en su valor.
- **Probado:** sin JS, con JS (antes y después del scroll) y con movimiento reducido. En los tres casos el valor final es el mismo.
- **Regla para todos los cases:** un número animado va escrito en el HTML con su valor real. La animación es un agregado que parte de cero por script; nunca al revés.

---

## HUGO CASE STUDY ✅ APROBADO

*Julio 2026 — armado en varias pasadas dentro de la misma sesión, documentado acá recién al final*

### Qué es

Case de **hugo** — agente de AI Customer Success (WhatsApp), armado en un hackathon en equipo (4 personas: Paula + Jerónimo Balestra, Ivo Spironello, Máximo Pacheco), con `from021.io` y `v0`. Fuentes usadas para armar el contenido: landing de Vercel (`hugo-psi-topaz.vercel.app`), demo de YouTube, post de LinkedIn del lanzamiento, y screenshots reales del producto (backoffice + WhatsApp + llamada de voz) que Paula fue subiendo a medida que se armaba el case.

### Estructura (orden de secciones)

1. Cover — "hugo / vibe coded"
2. **Watch It Work** — video embebido (ver "Video facade" abajo), a propósito ubicado casi al principio, no al final
3. Showcase — imagen real backoffice ↔ WhatsApp lado a lado
4. Overview & Context — el problema (56% churn, 73% espera <5min, 89% timing de mercado)
5. Process · Vibe Coded, Start to Finish — timeline en "Stage 01–05", sin horas específicas
6. Core Mechanic · The Loop — "Evals is our Moat", 6 pasos + slide real del deck + screenshot real de la llamada de voz
7. Product · How It Works — 4 feature cards (Onboarding, WhatsApp-native, Respuestas, Memoria)
8. Beyond the Demo · GTM & Business Model — mercado (+500K LATAM), pricing ($25→$299+), buyer segments
9. Results — +47%, −30%, 0 tickets
10. Learnings
11. **The Team** — créditos con links a LinkedIn de cada uno + herramientas usadas
12. Closing — imagen real de WhatsApp (con frame de smartphone propio) + links (demo, live, LinkedIn)

### Decisión — "Vibe coded", no "8 horas"

*Julio 2026 — ✅ APROBADO, no tocar sin pedido explícito*

La primera versión del case usaba "8 hours" como el hook principal (cover, timeline con horas, footer). A pedido explícito se reemplazó por **"vibe coded"** en todos lados — el timeline de proceso pasó de `Hour 0–1 / 1–3 / etc.` a `Stage 01–05` (mismo contenido, sin comprometerse con una cifra de horas). Motivo: Paula va a explicar el concepto de "vibe coding" con más precisión más adelante; mientras tanto el copy no debe afirmar una duración específica.

**Regla para el futuro:** si se agrega contenido nuevo al case, no reintroducir referencias a "N horas" — usar "vibe coded" / "the sprint" / "Stage NN" como vocabulario del proceso.

### Decisión — Equipo, no solo

*Julio 2026 — ✅ APROBADO*

El case se armó primero asumiendo que era un proyecto solista de Paula (así lo dio a entender el pedido inicial). Se corrigió después a pedido explícito: fue un hackathon en equipo de 4. Se ajustó todo el copy que decía "Solo Build" / "Solo — Product, Design..." / "1 Person team" (cover eyebrow, rol, accent-card stats, footer) y se agregó la sección **The Team** con los 3 nombres + links de LinkedIn.

**Regla para el futuro:** si se suma info nueva de otros proyectos en equipo, chequear que el copy no asuma "solista" por default solo porque el resto de los cases de Paula sí lo son.

### Paleta — reuso del token `--orange`

En vez de renombrar todas las clases compartidas con `muv-case.html` (que usan `var(--orange)` como color de acento), se dejó el nombre de variable `--orange` en el `:root` pero con el valor del azul de Hugo (`#0033A0`, sacado por muestreo de píxeles del logo). Comentario en el CSS lo aclara. **Ventaja:** permite copiar/pegar CSS entero de un case a otro sin tener que rebuscar cada clase que referencia el color de acento. **Para el próximo case con color de marca distinto:** repetir el mismo patrón (dejar `--orange` como alias interno, no renombrar).

### Patrón — Video facade (click-to-play)

*Julio 2026 — nuevo patrón, replicable en otros cases*

Embeber un `<iframe>` de YouTube directo rompe con error 153 cuando el HTML se abre como `file://` local (YouTube no valida el origen). Se resolvió con un **facade**: se muestra el thumbnail de YouTube (`img.youtube.com/vi/{ID}/hqdefault.jpg`) con un botón de play dibujado en CSS, y recién al hacer click se inyecta el `<iframe>` real vía JS (`id="hugo-video-wrap"` + listener). Ventajas: no rompe la vista inicial en local, es más liviano (no carga el player de YouTube hasta que hacen click), y funciona sin cambios una vez deployado a un dominio real. Se dejó además un link de texto de respaldo ("Watch it directly on YouTube ↗") por si el embed sigue sin andar.

**Para replicar en otro case:** copiar el bloque `#hugo-video-wrap` + su script asociado, cambiar el video ID y el color del triángulo de play (usa `var(--orange)`, se ajusta solo).

### Imágenes — todas reales, ninguna inventada

A diferencia de muv (que usa screenshots de Figma/producto real de una consultora), las imágenes de hugo son **screenshots reales que Paula fue subiendo durante la sesión**: backoffice de texto, backoffice de llamada de voz, WhatsApp con notas de voz, y el WhatsApp final con frame de smartphone. Ninguna es un mockup armado por Claude — se descartaron placeholders/recreaciones apenas hubo un screenshot real disponible para reemplazarlas. `hugo-case-images.js` pesa ~375KB por tener 5 imágenes reales comprimidas a JPG; sigue siendo lazy-load así que no bloquea el render inicial, pero es candidato a revisar si se agregan más.

### Fuente — código real del landing (`page.tsx` + config)

*Julio 2026*

Paula subió el repo real de la landing de hugo (Next.js 15 + React 19 + Tailwind + shadcn/ui, generado con v0.dev — confirma la historia de "vibe coded" con evidencia técnica, no solo de palabra). Sirvió para **corregir/enriquecer copy**, no para embeber código:

- El hook real de la landing ("Cada semana, millones de mensajes de clientes se pierden...") se sumó como pull-quote entre el hero visual y Overview — traducido al inglés para consistencia con el resto del case.
- La frase de visión de cierre ("Que cada empresa pueda brindar atención de primera...") se sumó al final de Closing.
- El azul `#0033A0` que se había sampleado a ojo del logo coincide exacto con `hugo-blue` en `tailwind.config.ts` — confirmado, no hace falta resamplear.
- Se agregó una mención al stack real (Next.js, Tailwind, shadcn/ui) en la sección The Team, sin dumpear código.

**Regla para el futuro:** si aparece código fuente de algún otro proyecto de Paula, tratarlo igual — como fuente de verdad para copy/paleta/stack, nunca para mostrar el código en sí en el portfolio.

---

### "Beyond the work" — cards compactadas + emoji hover fix

*Agosto 2026 — ✅ APROBADO*

**Problema:** las 5 tarjetas de intereses (Travel, Food & Culture, AI, Photography, Cultures) se dividían en 2 filas (3+3 cols y 2+2+2 cols) y ocupaban demasiado espacio vertical. Los emojis al hacer hover usaban `transform: scale(1.15)` que causaba un desplazamiento visual (se corrían de posición).

**Solución:**

- Grid pasa de `repeat(6,1fr)` a `repeat(5,1fr)`.
- Las 5 celdas ahora usan `grid-column: span 1` (todas iguales, una sola fila).
- Feature card (superpower) sigue `span 5` (ocupa toda la fila).
- Padding reducido de `1.75rem` a `1.25rem`.
- Tipografía ligeramente más compacta: `.hs-cell-name` baja a `.875rem`, `.hs-cell-icon` baja a `1.25rem`.
- **Emoji hover fix:** se eliminó `transform: scale(1.15)` del hover — ahora solo cambia `filter: grayscale(40%) → grayscale(0%)`. Se agregó `line-height: 1` para evitar espacio extra.
- También se eliminó el `transform: translateY(-4px)` del hover de la celda (causaba salto).
- Fix aplicado tanto en `.hs-cell-icon` (bento) como en `.hc-icon` (human-cards viejo).

**Responsive:**

- 768px: grid baja a `repeat(3,1fr)`, las celdas se acomodan en 2 filas.
- 480px: grid baja a `1fr` (stack vertical).

### Core Strengths — chips unificados, fondo removido

*Agosto 2026 — ✅ APROBADO*

**Problema:** la sección Core Strengths tenía dos estilos de chips: los base (fondo gris, borde gris, texto gris) parecían deshabilitados al lado de los accent (borde y texto verde). La sección también tenía un fondo gris que pesaba.

**Solución:**

- Todos los chips usan `color: var(--accent)`, `border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent)`, `background: transparent`.
- Las clases `-g` / `-accent` quedan vacías.
- El fondo de `.dv-bg`, `.about-strengths`, `.db-strengths` pasa a `transparent`.

### Dock — rediseño de visibilidad

*Agosto 2026 — ✅ APROBADO*

**Dark mode:** textos en `var(--accent)`, activo `font-weight: 700` + `opacity: 1`, inactivos `500` + `opacity: .7`. **Light mode:** fondo `rgba(255,255,255,0.9)` con sombra, textos en `var(--paper)`, activo bold + opacity 1, inactivos medium + `.45`.

### Link a LinkedIn en el hero

*Agosto 2026 — ✅ APROBADO*

Link "Go to LinkedIn ↗" debajo de la bajada en `hello-hero`. Clase `.hello-linkedin`, `var(--accent)`, Muli 400 `.9375rem`.

> **Reemplazado en Octubre 2026:** el CTA del hero es ahora `.hello-cta` "See my work" (ver "Ajustes rápidos post-review").

### Filtros de categoría removidos

*Agosto 2026 — ✅ APROBADO*

Se eliminó la barra de filtros. JS y CSS quedan como código muerto — candidato a limpieza.

---

- [ ] Limpieza de CSS/JS muerto: filtros, clases vacías (`.dv-pill-g`, `.sp-accent`, `.db-pill-accent`)
- [ ] Imágenes reales para: monchis drivers, smartpass, everyone (optimizadas <300KB)
- [ ] Subir los 6 case studies para revisar/ajustar su mobile (`muv-case.html`, `monchis-case.html`, `everyone-case.html`, `smartpass-case.html`, `sukupay-case.html`, `vendor-tool-case.html`)
- [ ] Probar tap-to-reveal en un dispositivo touch real (hoy solo verificado por lógica/CSS, no en pantalla)
- [ ] Revisar `portfolio-images.js` cuando haya 3-4+ tiles con imagen real (ver decisión "¿Creamos portfolio-images.js?")
- [ ] Pasar `muv-teal.gif` a `.mp4` (video loop mudo) y confirmar que el resultado se banca 0.5x de Jitter free
- [ ] Si el cover animado de muv convence, replicar en monchis, smartpass, sukupay
- [x] ~~Decidir si "Coming soon" en placeholders también pasa a hover-only~~ — resuelto: el arrow quedó siempre visible para todos los tiles por igual (ver "Texto de tiles — solo View case study visible")
- [x] ~~Resolver bug de `.tile-drivers` con `data-case="suku"` duplicado~~ — resuelto originalmente reutilizando el slot para hugo; **Agosto 2026:** hugo se movió de nuevo (ahora usa `.tile-monchis-home`, ver PROJECTS VIEW), así que `.tile-drivers` quedó sin ningún tile usándola — CSS muerto, candidato a limpieza
- [ ] Crear una posición de grid propia para `.tile-vendor` (hoy cae al tamaño default de `.tile`, no tiene regla en el grid) — ver tabla de tiles en PROJECTS VIEW
- [ ] Agregar tile para Vendor Tool (`data-case="vendor"`) al gallery
- [ ] Borrar `<template id="tpl-smart">` y `<template id="tpl-suku">` huérfanos del portfolio
- [ ] Resolver overlap de `#section-label` (vertical, fixed top:50%) con contenido que cae a media pantalla — hoy pisa el marquee en algunos scrolls
- [ ] Limpieza general de reglas CSS duplicadas (`.ph-title`, `.tile-category`, `.ph-marquee`/`.ph-mitem` tienen versiones viejas sin usar dando vueltas en el archivo)
- [ ] AutoCloud, TheFork como case studies nuevos (con Wipe Transition desde el vamos)
- [ ] hugo: si aparece la imagen del splash (fondo azul, logo blanco) que se subió al principio de la sesión, sumarla al cierre junto a la del WhatsApp con frame
- [ ] hugo: revisar peso de `hugo-case-images.js` (~375KB) si se agregan más screenshots reales
- [ ] hugo: replicar el patrón de "Video facade" (click-to-play) en muv si en algún momento se agrega un video de demo ahí
- [ ] CV/resume PDF descargable (link placeholder en top-nav, falta el archivo real)
- [ ] Deploy (Netlify / Vercel / GitHub Pages)
- [ ] Meta tags OG para preview en redes
- [x] ~~Formulario de contacto o link a email/LinkedIn~~ — resuelto: link a LinkedIn en dock + link "Go to LinkedIn ↗" en hero (`https://www.linkedin.com/in/paula-elffman/`)

---

### Intro animation: solo en primera visita de la sesión

*Agosto 2026 — ✅ APROBADO*

**Problema:** la animación "Hi, I'm Pau 👊" (mask reveal) se replayeaba cada vez que el usuario volvía del case study a la home. La experiencia se sentía repetitiva y rompía el flow.

**Solución:** se usa `sessionStorage` con la key `pe-intro-played` para trackear si la animación ya corrió en esta sesión del browser.

**Comportamiento:**

- **Primera visita** (tab nuevo, refresh, nueva sesión): la animación se reproduce normalmente con delay y mask reveal.
- **Volviendo de un caso** (o switching views): el nombre aparece inmediatamente, sin animación. La clase `dv-name-in` se aplica sin reflow, así que no hay "flash" ni delay.

**Archivos tocados:**

- `index.html` — función `switchView('dashboard')` y el listener `DOMContentLoaded`.

**Key de sessionStorage:** `pe-intro-played` — se setea a `'1'` tras la primera animación. Se borra automáticamente cuando el usuario cierra el tab (sessionStorage es per-tab).

**Notas técnicas:**

- Se usa `sessionStorage` (no `localStorage`) porque queremos que la animación corra una vez por tab/sesión, no una vez para siempre. Si el usuario vuelve al portfolio mañana, la ve de nuevo.
- El `try/catch` protege contra browsers con storage deshabilitado (modo privado en algunos browsers).

> **Actualización Agosto 2026:** el texto animado de `#dv-name-anim` ya **no** es "Hi, I'm Pau 👊" — pasó a **"About me"** (ver sección Avatar más arriba). El mecanismo de `pe-intro-played` sigue igual, solo cambió el copy.

---

### Page loader "Hi! 👊": solo en la primera visita a la home (no confundir con la anterior)

> **Octubre 2026:** el contenido del loader ya no es "Hi! 👊". Hoy es el loader pixel "PAU" → carita (ver "Loader: pixel" en "Ajustes rápidos post-review"). La lógica de `pe-hi-shown` descrita abajo sigue igual.

*Agosto 2026 — ✅ corregido a pedido*

**No es el mismo elemento que la entrada anterior.** Este es `#page-loader` (`.loader-word` = "Hi! 👊"), un **overlay full-screen** (`z-index:9000`, fondo `var(--void)`) que tapa toda la pantalla al cargar `index.html` — no tiene relación con `#dv-name-anim` del About Me.

**Problema:** `#page-loader` se disparaba en **todo** `window.addEventListener('load', ...)`, sin ningún chequeo de sesión. Como los case studies son páginas HTML separadas, volver de un caso a la home (`index.html`) es una navegación de página completa → dispara `load` de nuevo → el overlay negro con "Hi! 👊" tapaba la pantalla otra vez, encima incluso de la wipe transition (`#wipe-overlay`, ver "Wipe Transition" arriba), tapándola por completo mientras el loader estaba visible.

**Solución:** mismo patrón que `pe-intro-played`, pero con su propia key de `sessionStorage`: `pe-hi-shown`.

- Se agregó un `<script>` inline **inmediatamente después** del `<div id="page-loader">` (primer elemento del `<body>`), que corre de forma síncrona antes de que el resto de la página pinte: 
  ```html
  <div id="page-loader"><div class="loader-word">Hi! 👊</div></div><script>(function(){  var l=document.getElementById('page-loader');  if(!l) return;  if(sessionStorage.getItem('pe-hi-shown')){    l.style.display='none';  } else {    sessionStorage.setItem('pe-hi-shown','1');  }})();</script>

  ```
- Si la key ya existe (volviendo de un caso, o refresh dentro de la misma sesión), el loader se oculta con `display:none` **al instante**, sin flash de negro ni animación. Si no existe, se deja visible y se marca la key — el `window.load` listener existente sigue encargándose del fade-out (`opacity:0` a los 900ms) y de removerlo del DOM (a los 1500ms), sin cambios ahí.

**Comportamiento resultante:**

- **Primera visita** (tab nuevo / nueva sesión): se ve "Hi! 👊" con su animación normal.
- **Volviendo de un case study a la home:** no se ve el loader — se ve directamente la wipe transition circular (la que ya existía) revelando la home. Antes quedaba tapada por el overlay negro del loader.

**Archivos tocados:** `index.html` únicamente (el loader "Hi! 👊" no existe en los `*-case.html`, solo en la home).

**Key de sessionStorage:** `pe-hi-shown` (independiente de `pe-intro-played`, son dos animaciones distintas con dos keys distintas).

**Regla para el futuro:** cualquier overlay full-screen nuevo que se dispare en `window.load` debe chequear su propia key de `sessionStorage` **antes** de mostrarse (idealmente en un script inline apenas después del elemento, no esperar al `load` event), para no repetirse en navegaciones de vuelta a la home.

---

### CTA "View case study" — Shiny Text sweep (reemplaza el gradiente teal)

*Agosto 2026 — ✅ APROBADO · ✅ IMPLEMENTADO en `index.html` (9 tiles reales envueltos en `.tile-arrow-label`; los 2 `coming-soon` sin efecto)*

**Problema:** el "View case study ↗" tenía un gradiente sobre el texto que iba de teal claro → teal oscuro (`#005043`). El extremo oscuro perdía contraste justo en la parte baja de las tarjetas, donde el fondo del tile ya cae a casi negro — sobre todo en SmartPass (verde). Legibilidad comprometida: teal oscuro sobre fondo oscuro se apaga.

**Solución:** efecto **Shiny Text** — base sólida legible + un highlight claro que barre. Los dos stops del gradiente son claros (mint sobre mint), así que **nunca** baja de contraste, a diferencia del gradiente viejo. El movimiento le da vida sin arriesgar legibilidad.

**Origen y por qué vanilla:** el efecto viene de **react-bits** (`Shiny Text`), que es una librería **React**. El portfolio es un monolito **vanilla JS** — no vale meter React entero por un CTA de texto. El efecto es en el fondo una animación CSS, así que se portó a vanilla en pocas líneas y queda idéntico. Regla para el futuro: cualquier cosa que se quiera "traer de react-bits" hay que portarla a CSS/JS vanilla, no importar el componente.

**⚠️ Dónde se aplica — no en** `.tile-arrow`**:** el shiny va en el elemento de **texto dentro** del pill, NO en `.tile-arrow`. `.tile-arrow` es el botón pill y tiene su propio `background:rgba(0,0,0,.55)` + blur (ver "Texto de tiles — solo View case study visible"). Si le aplicás `background-clip:text` al pill, le clippeás **su** fondo a la forma del texto y le borrás el pill. Hay que envolver el label en un `.tile-arrow-label` (o el span que ya exista adentro) y aplicar el efecto ahí. La flecha `↗` puede ir en el mismo span para que barra junto al texto.

**Excepción justificada a la regla de tokens:** este CTA **no** usa `var(--accent)`, y es a propósito. El pill es siempre oscuro (`rgba(0,0,0,.55)`, hardcodeado, igual en light y dark), así que el texto vive siempre sobre fondo oscuro. Si usara `var(--accent)`, en **light mode** el texto sería `#009D71` (Emerald Dark) sobre el pill negro → contraste pobre. Por eso la base se fija en **Emerald Bright** `#22F0A4` (= `--accent` de dark) en ambos modos. Es la única excepción aprobada a "siempre `var(--accent)`", y existe porque el fondo del elemento no cambia entre modos.

```css
/* reposo: sólido y legible en ambos modos (el pill es siempre oscuro) */
.tile-arrow-label{
  color:#22F0A4;
  display:inline-block;
}
/* hover / tap: gradiente + barrido se montan enteros solo acá (no en loop) */
.tile:hover .tile-arrow-label,
.tile.tile-tapped .tile-arrow-label{
  background:linear-gradient(110deg,#22F0A4 0%,#22F0A4 45%,#CFFBEA 50%,#22F0A4 55%,#22F0A4 100%);
  background-size:200% 100%;
  -webkit-background-clip:text; background-clip:text;
  -webkit-text-fill-color:transparent; color:transparent;
  animation:tileShine 2.4s linear infinite;
}
@keyframes tileShine{ 0%{background-position:200% 0} 100%{background-position:-200% 0} }
/* reduced-motion: sólido, sin barrido */
@media (prefers-reduced-motion:reduce){
  .tile:hover .tile-arrow-label,
  .tile.tile-tapped .tile-arrow-label{
    animation:none; background:none;
    -webkit-text-fill-color:#22F0A4; color:#22F0A4;
  }
}

```

**Loop vs hover — se eligió hover:** el shimmer se dispara en `:hover` (y en `.tile-tapped` para touch, ver "Tap-to-reveal en tiles") en lugar de correr en loop infinito. Razón: en la grilla hay hasta **5 tiles visibles a la vez**, y 5 shimmers barriendo en loop simultáneo se sentía inquieto y "auto-generado" (menos es más). En reposo el label queda en base sólida `#22F0A4` — perfectamente legible; el brillo solo aparece cuando el tile está activo. Engancha limpio con el `.tile:hover .tile-arrow` que ya existía.

**Colores:** base `#22F0A4` (Emerald Bright, el `--accent` de dark) para matchear el resto de los tiles en el home; highlight `#CFFBEA` (mint muy claro). Esto reemplaza el placeholder `#3FE0A8` del demo comparador (`cta-teal-comparador.html`) — se alineó al token real del sistema.

**Diferencia con el borrador inicial:** en vez de aplicar el gradiente siempre y solo animar en hover, el reposo quedó **sólido `#22F0A4`** y el gradiente + animación se montan **enteros** solo en hover/tap. Evita cualquier sliver de brillo estático en reposo y deja la grilla limpia sin interacción.

**Markup:** el label se envolvió en `<span class="tile-arrow-label">` dentro de cada `<div class="tile-arrow">` (antes era nodo de texto suelto). 9 tiles reales; los `coming-soon` no se tocaron.

**Pendiente — lime hardcodeado de SukuPay:** el tile de SukuPay DS tiene `<div class="tile-arrow" style="color:#61FF61;">`. Con el span, ese inline queda override-eado (el label usa `#22F0A4`), así que SukuPay ahora muestra el mismo teal que el resto → CTA uniforme en toda la grilla. El `style="color:#61FF61"` quedó como código muerto. Si se quiere que SukuPay conserve su lime de marca, pasar la base del label a un token por-tile (ej. `--cta`) en vez de fijar `#22F0A4`.

**Posición en el archivo:** al final del `<style>`, junto al bloque de `.tile-arrow`, misma lógica de ganar por cascada sin tocar las reglas viejas.

---

### Tiles simplificados — sin categoría, solo título + descripción + CTA

*Agosto 2026 — ✅ APROBADO · ✅ IMPLEMENTADO*

**Decisión:** se removió la línea `.tile-category` (el label teal monospace tipo "FOOD DELIVERY · 2025") de los 10 tiles. Cada tile queda con: **título** (`.tile-name`, ej. "monchis") + **descripción** (`.tile-headline`, ej. "Food delivery redesign. 44.6% CVR.") + **CTA** (`.tile-arrow`).

**Razón:** simplificar. Menos texto por tile y un solo elemento teal por tile (el CTA) en vez de dos (categoría + CTA). El año/rubro no aportaba lo suficiente para justificar el peso visual.

**Qué se tocó:** solo el markup — se borraron los 10 `<div class="tile-category">…</div>` de `index.html`. No hay JS que dependa de `.tile-category` (verificado: las únicas referencias eran reglas CSS). La categoría vivía dentro de `.tile-info`, así que su remoción no afecta a los demás elementos.

**Código muerto resultante:** las reglas CSS de `.tile-category` (reveal en hover, color accent) quedan sin uso — candidatas a limpieza junto al resto de reglas viejas (aparecen 3 veces en el `<style>`).

---

### Tile Spotlight Glow + título/categoría en hover + bg neutro unificado

*Agosto 2026 — ✅ APROBADO · ✅ IMPLEMENTADO*

**Origen:** pedido explícito de sumar un efecto de "spotlight card" (inspirado en react-bits, ver la sección de CTA Shiny más arriba para el precedente de "portar a vanilla, no importar el componente"). Se armó primero como demo standalone y después se aplicó directo a las 11 tiles reales del `#gallery`.

**1) Spotlight Glow — halo que sigue el mouse**

Nueva capa `.tile-glow` por tile, entre la imagen (`z-index:1`) y el texto (`z-index:3`):

```css
.tile:hover {
  transform:translateY(-6px);
  box-shadow:0 0 0 1px var(--accent), 0 24px 64px rgba(0,0,0,.4), 0 0 48px -14px var(--accent);
}
.tile-glow{
  position:absolute; inset:0; z-index:2; pointer-events:none;
  border-radius:inherit;
  background:radial-gradient(440px circle at var(--mx,50%) var(--my,50%), color-mix(in srgb, var(--accent) 30%, transparent), transparent 62%);
  opacity:0;
  transition:opacity .35s var(--ease);
}
.tile:hover .tile-glow{ opacity:1; }
@media (prefers-reduced-motion:reduce){ .tile-glow{ display:none; } }

```

- `<div class="tile-glow"></div>` se agregó como hijo de cada `.tile`, inmediatamente después de `.tile-bg`.
- No se agregó un listener nuevo: se reutilizó el `mousemove` que ya existía para el parallax de `.tile-bg`/`.tile-cover`, sumándole `tile.style.setProperty('--mx', ...)` / `--my` con la posición del cursor en %. Así el glow queda sincronizado con el parallax sin duplicar lógica.
- Usa `var(--accent)`, así que en dark es `#22F0A4` y en light `#009D71` automáticamente.
- Respeta `prefers-reduced-motion` (se oculta directo).

**2) Título y categoría — reveal en hover, sin chip**

Antes `.tile-name`/`.tile-category` estaban siempre visibles con un chip oscuro (`background:rgba(6,6,10,.6)` + `backdrop-filter:blur`) detrás para asegurar legibilidad sobre cualquier imagen de fondo. Se sacó ese chip y se les aplicó el mismo patrón de reveal que ya tenía `.tile-headline`:

```css
.tile-category, .tile-name {
  opacity:0; transform:translateY(6px);
  transition:opacity .3s, transform .3s;
  /* + text-shadow en vez de chip, para legibilidad sin tapar */
}
.tile:hover .tile-name,
.tile:hover .tile-category { opacity:1; transform:translateY(0); }

```

**Resultado:** en reposo la tile queda limpia — solo se ve el pill "View case study" (siempre visible, no está gateado por hover). Al hacer hover aparecen juntos: glow + título + categoría + descripción. Este era el look de sukupay-ds ("el que quedó bien") — ahora es el default de las 11 tiles, no una excepción.

**3) Fondos de tile — se sacaron los colores hardcodeados por tile**

Se quitó el `style="background:..."` inline de `.tile-bg` en las 11 tiles (`#EDE8E0`, `#F5F5F5`, `#0B1B3D`, `#38B47D`, `#1A1A1F`, `#1A0A28`, `#0D1F16`, `#1a1a22`, `#1C1C22` ×2, más el gradient de 3 stops que tenía sukupay-ds). Todas caen ahora al mismo `background:var(--ghost)` de la regla base `.tile{}` — consistencia total en vez de que cada tile tuviera su propio color de marca de fondo. Las tiles con imagen real (muv, monchis-home, hugo, monchis-drivers) no se ven afectadas en la práctica porque la imagen cubre el 100% del tile.

**4) Color del título de sukupay-ds — mode-aware, excepción con hex fijo**

`.tile-name` en general hereda `color:var(--paper)` (blanco en dark, oscuro en light — funciona bien para tiles con foto de fondo oscura). Para **sukupay-ds** se pidió lo inverso a lo que daría `var(--accent)`: **verde en dark, blanco en light** (no el verde oscuro `#009D71` que tendría `var(--accent)` en light).

```css
.tile-sukupay-ds .tile-name {
  font-size:2.25rem;
  color:#22F0A4;               /* dark (default) */
}
body.light-mode .tile-sukupay-ds .tile-name {
  color:#FFFFFF;                /* light */
}

```

**Excepción aprobada a "siempre `var(--accent)`":** ya existía un precedente idéntico con el CTA shiny (ver más arriba, "no usa `var(--accent)` a propósito"). Esta es la segunda excepción registrada — mismo criterio: cuando el resultado deseado no matchea 1:1 los dos valores del token, se fija el hex por modo vía `body.light-mode`, no se inventa un token nuevo de un solo uso.

**También se sacó** el `color:#f6faf6` que estaba inline en el HTML del `.tile-name` de sukupay-ds — ahora el color lo controla el CSS, no el markup.

---

### Fix — Spotlight Glow invisible en light mode (tercera excepción a `var(--accent)`)

*Agosto 2026 — ✅ APROBADO · ✅ IMPLEMENTADO*

**Problema detectado por captura de pantalla:** el glow (sección anterior) usaba `var(--accent)` como se documentó al implementarlo. En dark se ve perfecto (`#22F0A4`, brillante). En light, `var(--accent)` pasa a `#009D71` (verde oscuro) — pero el interior de la tile **no** se aclara en light mode: el scrim `.tile-ui` (`rgba(8,8,12,...)`) está hardcodeado oscuro en ambos modos (ver "TILE UI LAYER"), así que el borde y el spotlight quedaban verde oscuro sobre fondo casi negro → prácticamente invisibles.

**Solución:** el glow (`box-shadow` del `.tile:hover` y el `radial-gradient` de `.tile-glow`) pasa de `var(--accent)` a un hex fijo `#22F0A4` / `rgba(34,240,164,...)`, igual en los dos modos.

**Por qué es una excepción válida:** mismo criterio que las dos anteriores (CTA shiny y título de sukupay-ds) — la regla "siempre `var(--accent)`" asume que el elemento vive sobre una superficie que sí cambia entre modos. Acá la superficie (el scrim oscuro de la tile) es fija, así que el color que se le monta encima también debe serlo. **Tercera excepción registrada.**

---

### Fix — Título y categoría de tile invisibles en light mode (cuarta excepción)

*Agosto 2026 — ✅ APROBADO · ✅ IMPLEMENTADO*

**Mismo problema, mismo origen que el glow:** `.tile-name` usaba `color:var(--paper)` y `.tile-category` usaba `color:var(--accent)`. En light mode, `var(--paper)` cae a `#1A1A22` (casi negro) — pero el scrim de la tile (`.tile-ui`) sigue siendo `rgba(8,8,12,...)` fijo oscuro en los dos modos. Resultado: texto casi negro sobre fondo casi negro, ilegible en light.

**Solución:** `.tile-name` pasa a `#F4F4F6` fijo (blanco) y `.tile-category` a `#22F0A4` fijo (verde), en vez de `var(--paper)`/`var(--accent)`. El override de sukupay-ds (verde dark / blanco light) sigue funcionando igual porque solo pisa `.tile-name`, no toca `.tile-category`.

**Cuarta excepción registrada** — mismo criterio que las tres anteriores: la superficie no cambia entre modos, así que el color que va encima tampoco debería.

---

## AJUSTES RÁPIDOS POST-REVIEW (Octubre 2026)

*A partir del feedback de un dev sobre el sitio online. Tocan `index.html`, los 17 HTML de cases y `assets/og/`.*

### Hero: CTA "See my work"

- `.hello-linkedin` ("Go to LinkedIn ↗") se reemplazó por `<a class="hello-cta" href="#gallery">See my work</a>`. La primera acción del hero ya no saca del sitio.
- Mismo lenguaje que antes (Muli 400 `.9375rem`, `var(--accent)`) más subrayado de 1px, porque sin flecha necesita otra señal de link.
- JS: bloque `HERO CTA` al inicio del script. Hace `scrollIntoView` a `#gallery` con `preventDefault` (no ensucia la URL con el hash) y respeta `prefers-reduced-motion`. `#gallery` tiene `scroll-margin-top:1.5rem`.

### LinkedIn: solo en el About

- Fuera del dock de `index.html` y del dock de todos los cases (`.pd-link`). El separador queda antes del theme toggle.
- En el About: `<a class="dv-linkedin">Find me on LinkedIn</a>` dentro de `.dv-intro`, debajo del `<h1>`.
- **Regla:** links externos (LinkedIn, mail, CV) van en el About, no en la navegación.

### Deep link `index.html#about`

Los docks de los cases apuntaban a `index.html#about`, pero `index.html` no leía el hash y caía en Home. Ahora un `DOMContentLoaded` (antes de `SCROLL REVEAL`) llama a `switchView('dashboard')` si `location.hash==='#about'`.

### Cursor custom: eliminado

Se sacó `cursor:none` del `body`, el CSS de `#cur` / `#cur-ring`, los dos `<div>` y el bloque JS `CURSOR`. El sitio usa el cursor nativo. **Regla:** no reemplazar el cursor del sistema.

### Flecha ↗: eliminada de los CTAs internos

Los 14 `.tile-arrow-label` dicen "View case study" sin flecha (↗ significa link externo y esos links son internos). Las ↗ que quedan están dentro de mockups de producto (`.suku-btn-primary`) o en links realmente externos del case de hugo.

### Em dash: fuera del copy visible de la home

- Fechas de experiencia: en dash (`Mar 2026 – Present`).
- Copy: las oraciones con em dash se partieron en dos o pasaron a coma / dos puntos.
- Tags de experiencia y side label: separador `·` (igual que el resto de los tags).
- Alts y titles: coma en vez de em dash.
- **Regla:** no usar em dash en copy visible. El copy de los cases todavía tiene muchos; se limpian en la revisión de cada case.

### Loader: pixel "PAU" → carita (4 de octubre)

*Decidido por Paula. Reemplaza al loader de la P con el punto verde. Referencia: el inicio de oriol.design, donde las piezas del nombre se reacomodan en un dibujo.*

- **Qué pasa:** 48 cuadraditos escriben "PAU" (aparecen de izquierda a derecha, en seco), cada uno viaja a su lugar en un smiley pixelado, la carita guiña un ojo y el overlay se va con un fade. Debajo queda "Hi, I'm Pau.".
- **El punto verde se sacó de toda la identidad** (loader, pestaña y link previews): remitía a la marca de SukuPay.
- **Markup:** `<div id="page-loader"><div class="loader-px snap" id="loader-px">`. Los cuadraditos (`<i>`) los crea el script inline que está justo después.
- **Datos:** `FONT` (tres letras de 5×7) y `FACE` (smiley de 13×13) son mapas de texto dentro del script. Son 48 pixeles y 47 lugares: los dos últimos comparten uno. Para cambiar el dibujo se editan esos mapas.
- **Tiempos:** aparecen 80–460ms · viajan a los 800ms (`.62s` + demora por pixel) · guiño a los 1750ms (220ms) · fade a los ~2250ms (`hold` en el bloque `LOADER` del script principal) · se remueve 700ms después. Total ~2.3s.
- **Guiño:** el pixel de arriba del ojo derecho baja al lado del de abajo y vuelve.
- **Clase `snap`:** sin easing (aparición y guiño). Se quita solo durante el viaje.
- **Tamaño de celda:** `--c` lo calcula el script en pixeles enteros (10 a 20px según el ancho) para que no queden líneas finas entre cuadrados.
- **z-index 9800:** por encima del dock (9700), que antes se veía sobre el loader.
- **Tema:** el mismo script inline aplica el modo oscuro guardado antes de pintar, así el loader no arranca en claro.
- `pe-hi-shown` (solo en la primera visita de la sesión) y `prefers-reduced-motion` (no se muestra) siguen igual.
- Se probó también una variante "Línea" (Pau dibujado en trazo, los círculos de la P y la a pasan a ser ojos y la u la boca). Quedó para la pestaña.

### Pestaña: carita pixelada que guiña (5 de octubre)

*Decidido por Paula: la carita de trazo sobre cuadrado oscuro (4 de octubre) no le gustó; prefiere el pixel, como el loader.*

- **Icono:** `assets/favicon.svg` es un **círculo pixelado con una carita adentro** (dos ojos de 2×3 y una sonrisa ancha), dibujado en una grilla de **16×16**. Cada celda de la grilla es un píxel real de la pestaña (dos en pantallas retina), por eso se ve nítido y no borroso. Lleva `shape-rendering="crispEdges"`. Ya no hay cuadrado de fondo.
- **Color:** círculo `#24242C` con cara `#F4F4F6`. Si el navegador está en modo oscuro se invierte solo (círculo claro, cara oscura) con un `@media (prefers-color-scheme:dark)` dentro del SVG, para que no desaparezca sobre la barra de pestañas oscura. Sin verde.
- **`assets/tab.js`:** al abrir cualquier página pinta la carita, guiña a los 900ms (el ojo derecho pasa a ser una raya de 4×1) y vuelve a los 1250ms. Con reduced motion queda fija. La parte 2 (color de la barra del navegador) no cambió. El archivo es ASCII puro.
- **PNG:** `assets/favicon-32.png` (32×32, transparente, círculo oscuro) y `assets/apple-touch-icon.png` (180×180, fondo pleno `#24242C` con el círculo claro) regenerados con el mismo dibujo.
- **Link previews:** las 17 imágenes de `assets/og/` se regeneraron con la carita pixelada (círculo claro) en vez de la de trazo.
- **Regla:** si se retoca el dibujo, mantener la grilla de 16×16 y trazos de celdas enteras. Una grilla más fina (como la de 13×13 del loader) se ve borrosa a 16px.
- **Historial:** P con punto verde → carita de trazo sobre cuadrado oscuro (4 de octubre) → carita pixelada (5 de octubre).

### Hero: roles que ruedan a "lo que quedó" (4 de octubre)

*Decidido por Paula. Los títulos tachados del hero ya no son solo texto: cada uno rueda, letra por letra, hacia lo que le quedó de esa etapa.*

| Título | Rueda a |
| --- | --- |
| ~~Graphic~~ | Craft |
| ~~Web~~ | Systems |
| ~~UI~~ | Clarity |
| ~~UX~~ | Empathy |
| Product Designer. | All of the above. |

- **Dónde están las palabras:** en el atributo `data-kept` de cada `.role` dentro de `#hello-roles`. Para cambiar una, se edita ahí; no hay que tocar el JS.
- **Desktop:** al pasar el mouse, el título rueda a su palabra, se le va el tachado y pasa a color de texto; al salir, vuelve. Un momento después de cargar, "UX" gira solo una vez (teaser) para que se descubra.
- **Celular (sin hover):** se mueve solo. Cuando el hero entra en pantalla recorre los cinco, de a uno (≈1.25s cada palabra, 1.9s por paso, unos 10s en total), y se detiene. Vuelve a recorrerlos cada vez que el hero vuelve a entrar en pantalla. Un toque sobre una palabra la gira a mano y corta el recorrido.
- **No es un loop infinito** a propósito: movimiento automático que no para distrae y no cumple accesibilidad.
- **Reducir movimiento:** las palabras cambian sin rodar y nada se mueve solo.
- **Primera visita:** el teaser y el recorrido esperan a que termine el loader.
- **Animación:** cada letra es un `.slot` con un `.reel` de cuatro pasos (letra vieja, dos al azar, letra nueva) que sube con `var(--ease)` en .42s, con 28ms de demora por letra. El ancho de cada slot también transiciona. Al terminar se vuelve a texto plano.
- **Tachado:** ya no es `text-decoration`; es una línea (`::before`) que se retrae al girar y se vuelve a dibujar al volver.
- **Zona de hover:** `::after` con el ancho original de la palabra (`--w0`), para que una palabra más corta no se escape de abajo del cursor.
- **Código:** CSS junto a `.hello-roles`; JS en el bloque `HERO ROLES`, justo antes de `HERO CTA`.
- Se evaluó un set de chistes de diseño ("Make the logo bigger", "It depends"…) y se descartó: las frases largas empujan la oración y en celular la parten en dos renglones.

### Ribbon de rubros: siempre claro en modo claro (4 de octubre)

- **Problema:** en celular (y también en desktop) la franja "Fintech ✦ Mobility ✦ …" se veía negra en modo claro cuando tocaba el borde de la pantalla, y se aclaraba al seguir scrolleando.
- **Causa:** un resto del header sticky viejo. Un `IntersectionObserver` le ponía la clase `.stuck` a `#proj-header` cada vez que no estaba entero en pantalla, y `.stuck` tenía un fondo oscuro fijo (`rgba(36,36,44,.96)`) sin versión para modo claro. Además `.stuck` le cambiaba el alto (107 → 74px en desktop, 95 → 70px en celular), así que la página pegaba un salto al pasar por ahí.
- **Solución:** se quitó el observer (la franja ya no es sticky, no hacía falta) y el fondo de `.stuck` pasó a `var(--void)` por si alguna vez se vuelve a usar. Ahora el ribbon tiene siempre el fondo de la página y el mismo alto.
- **Regla:** nada de colores fijos en superficies que cambian con el tema; siempre tokens (`var(--void)`, `var(--paper)`…). Las excepciones documentadas son las de tiles/cards que son oscuras en los dos modos.

### About: limpieza y datos de experiencia (5 de octubre)

**Dos textos eliminados** (feedback del dev):
- El tagline bajo el statement: *Product Designer · AI-native workflows · FinTech · B2B SaaS* (`.dv-statement-tags`, HTML y CSS borrados).
- En "AI in my workflow", el segundo párrafo del intro: *"My primary tools are Figma & Claude, which I use across the whole product design lifecycle. A few of the ways:"*. Las herramientas ya están en la sección Toolkit; el intro queda en un solo párrafo y de ahí pasa directo al carrusel.

**Experience: de chips a datos.** Los 21 chips verdes (`.dv-tags` > `.dv-tag`, píldora con relleno y borde de acento) se reemplazaron por una fila de tres datos por empleo:

```html
<ul class="dv-facts">
  <li class="dv-fact"><b>2.2M+</b><span>Muv trips in Q4</span></li>
  <li class="dv-fact"><b>44.6%</b><span>Favorite Places CVR</span></li>
  <li class="dv-fact"><b>Smart Pass</b><span>Flagship launch</span></li>
</ul>
```

- **Por qué:** la píldora verde se leía como etiqueta de LinkedIn. El dato suelto, con el número grande, se lee como prueba. Es el mismo patrón del Toolkit (nombre + uso).
- **Estilo:** valor en `<b>` (Geist 600, 1.125rem, `--paper`), etiqueta en `<span>` (Geist .8125rem, `--ash`), filete izquierdo `1px var(--line-md)`. Sin relleno, sin borde redondeado, sin verde. Grilla de 3 columnas (`minmax(0,13rem)`).
- **Mobile (≤768px):** una columna; valor y etiqueta en la misma línea, con un solo filete izquierdo continuo para los tres.
- **Contenido (valor / etiqueta):**

| Empleo | Dato 1 | Dato 2 | Dato 3 |
|---|---|---|---|
| SukuPay | Web3 / Fintech | Remittances / US to Latin America | USDC / Blockchain |
| itti | 2.2M+ / Muv trips in Q4 | 44.6% / Favorite Places CVR (antes "Monchis CVR", corregido el 8 de octubre de 2026) | Smart Pass / Flagship launch |
| Beyond Art Group | 0 → 1 / Marketplace | Tibetpass / Ticketing vertical | Agile / Practices introduced |
| AutoCloud | −30% / Design time | +10% / Engagement | −15% / Onboarding time |
| TheFork · TripAdvisor | +6% / CVR | B2B · B2C / Products | 100% / Native flows |
| Hotaru App | 0 → 1 / Co-founder | 3rd of 12 / La Nave Madrid | End-to-end / UX |
| Restorando | +25% / Retention | Acquired / By TheFork | First / Design system |

- **Regla:** siempre tres datos por empleo. El valor es lo más corto y fuerte (un número si lo hay); la etiqueta, dos o tres palabras en sentence case. No volver a usar `.dv-tag` ni píldoras en el timeline.

**Alineado a la regla Editorial** (se habían escapado): `.dv-period` (fechas) y `.dv-job-loc` (ciudad) pasaron de JetBrains Mono 8–9px con tracking a Geist `.8125rem` sin tracking; `.hs-eyebrow-lg` ("My superpower") pasó de 700 con tracking `.14em` a `.9375rem` / 500 / `letter-spacing:0`.

**Pendiente, sin decidir:** Core strengths sigue con sus 13 pills. El dev sugirió sacarlas o buscar otro enfoque, y linkear "I bridge the gap" a un case. Hay una propuesta dibujada (fortaleza + una línea de evidencia + link al case), todavía no aplicada.

### Metadata y Open Graph

- `index.html`: `<title>Paula Elffman · Product Designer</title>`, `description`, `canonical`, `og:*`, `twitter:card` y JSON-LD `Person`.
- Cada case: `title` sin em dash, `description`, `canonical`, `og:*` y `twitter:card` propios.
- Imágenes en `assets/og/<slug>.jpg`, 1200×630, JPG (LinkedIn y WhatsApp no siempre leen WebP). El slug es el mismo `data-case` de la home; `home.jpg` para el index.
- Dominio canónico: `https://www.paulaelffman.com/`.
- **Descripción de `index.html` (8 de octubre de 2026):** "Senior Product Designer in Buenos Aires. 10 years designing fintech, mobility and food-tech apps for teams across Latin America, Europe and the US." Va igual en `description`, `og:description` y `twitter:description`. **Regla:** la descripción de la home dice lo mismo que el hero; si cambia uno, cambia el otro.
- **Para un case nuevo:** copiar el bloque de metas de cualquier case, cambiar título, descripción (hasta ~155 caracteres), URL e imagen, y sumar su `assets/og/<slug>.jpg`.

### Copy

- "Vendoor Tool" → "Vendor Tool". "My primary tool is" → "My primary tools are".
- El `<title>` ya no dice "Product Design OS"; el side label dice "Paula Elffman · Portfolio OS" / "· Projects" / "· About" (antes "Dashboard").
- Headlines de tiles: sukupay → "A remittance home built for repeat transfers."; hotaru → "Wellness app, from mentorship to startup."
- La línea de sukupay home volvió a cambiar el 8 de octubre de 2026 (ver "Copy de la home: hero y Selected work").

### Home: grilla de casos — ESTADO ACTUAL (4 de octubre de 2026)

*Fuente de verdad de la grilla de la home. Decidido por Paula. Reemplaza la grilla de 14 tiles (`.gallery` / `.tile`) y las dos versiones intermedias de esta misma sección (ver "Historial de decisiones" al final).*

**Orden de la home:** hero → carrusel → ribbon → **Selected work** → **More work**.

#### Selected work (`#work`, `.work-grid--feat`) — 5 casos

| # | Card | Línea | Rubro | Cover | Encuadre |
| --- | --- | --- | --- | --- | --- |
| 1 | muv | Ride-hailing in Paraguay. Onboarding cut from 21 steps to 6. | Mobility | `assets/muv-cover-home.mp4` / `.webm` (poster `muv-assets/muv-cover-poster.jpg`) | video |
| 2 | sukupay *prototyper* | The design system that lets AI prototype with SukuPay's real components. | Design system · AI | demo animada en CSS (`.wc-cover--demo`, `#tp-sukuds-demo`) | sin imagen |
| 3 | sukupay *home* | US-to-Guatemala remittances. The audit and two directions behind the new home, now going live. | Fintech | `assets/suku.jpg` | `center 18%` |
| 4 | monchis *home experience* | Food delivery home redesign. Favorite Places converts at 44.6%. | Food tech | `assets/monchis_in_hand.webp` | `38% center` |
| 5 | vendor tool | Restaurants edit their own menu. 72 h of manual catalog work, down to zero. | B2B · Food tech | `assets/vendor-tool-laptop.webp` | `42% center` |

- **Líneas:** son las del 8 de octubre de 2026. El porqué de cada una y la regla para escribir una nueva están en "Copy de la home: hero y Selected work".
- **Layout:** grid de 6 columnas. Las dos primeras cards `span 3` (fila 1, grandes, cover 16:10); las tres siguientes `span 2` (fila 2, cover 4:3, nombre a 1.5rem).
- **Bajo 1000px:** todas `span 3` (dos por fila) con cover 16:10. **Bajo 768px:** una por fila.
- El CTA del hero ("See my work") baja a `#work`.

#### More work (`#more-work`, `.work-grid--more`) — 10 casos

| # | Card | Línea | Rubro | Cover | Encuadre |
| --- | --- | --- | --- | --- | --- |
| 1 | smartpass | Digital ticketing & access. | Access control | `assets/smartpass-accreditations.webp` | `center 14%` |
| 2 | hugo | AI Customer Success agent, vibe coded. | AI agent | `assets/hugo.webm` | `center 4%` |
| 3 | monchis *drivers* | Shift management for 1,200+ drivers. | Delivery ops | `assets/drivers.webp` | centro |
| 4 | fancy monas | NFT collection marketplace onboarding. | NFT marketplace | `assets/fancymonas.jpg` | centro |
| 5 | thefork *shortlist* | Personalized restaurant recommendations. | Onboarding | `assets/thefork-shortlist.jpg` | centro |
| 6 | memorable | AI-powered creative pretest dashboard. | Ad tech | `assets/memorable.jpg` | centro |
| 7 | foody | Recipe discovery app with AI-personalized suggestions. | Design challenge | `assets/foody-home.webp` (solo home) | centro |
| 8 | thefork *reviews* | Reviews that actually convince. | Food tech | `assets/thefork-reviews.jpg` | centro |
| 9 | hotaru | Wellness app, from mentorship to startup. | Wellness | `assets/hotaru.jpg` | centro |
| 10 | everyone | E-commerce for a global fashion platform. | E-commerce | `assets/everyone.jpg` | `left top` |

- **Layout:** tres por fila, cover 4:3, mismo tamaño de texto que la fila 2 de Selected work. **Bajo 1000px:** dos por fila. **Bajo 768px:** una por fila.
- El contador `.work-count` dice "10 cases": hay que actualizarlo a mano al sumar o sacar un caso.
- **Elektra está fuera de la home por ahora.** `elektra-otp.html` sigue existiendo, pero nada lo linkea.

En las tablas, la palabra en *cursiva* es la que va dentro de `<span>` (se ve atenuada).

#### Notas de covers

- **muv:** `muv-cover-home` es una copia del video original recortada para que arranque con los teléfonos en cuadro. El original (`assets/muv-cover.mp4`) abre con ~0.7s de fondo vacío y la primera card de la home se veía en blanco. El original no se tocó y lo sigue usando el caso.
- **sukupay prototyper:** no tiene captura. Usa la demo animada del tile original (se tipea el prompt, se enciende `/prototype`, aparece la pantalla). Siempre oscura, en light y en dark.
- **monchis:** foto de la chica con el teléfono. Se probó el mockup de dos teléfonos inclinados (`assets/monchis_paths_hero.webp`) y Paula volvió a la foto. El archivo `monchis_in_hand.webp` se reemplazó el 4 de octubre por una versión nueva de la misma foto (1872×1248); **el caso de Monchis usa el mismo archivo**, así que cambió ahí también.
- **vendor tool:** foto del editor de menú en una laptop. Hace par con la de monchis: las dos son fotos de uso real.
- **smartpass:** teléfono inclinado con la pantalla de acreditaciones ("Paraguay vs Chile · 2000 acreditaciones totales"), archivo `assets/smartpass-accreditations.webp` (6 de octubre de 2026; original PNG 1248×1872 de 3,9 MB, pasado a WebP calidad 82, 111 KB). Reemplaza al teléfono con el login, que era provisorio. La imagen es vertical y la card apaisada (4:3): con `center 14%` entran el borde de arriba del teléfono con aire, el logo, el titular, los badges, "Solicitar validación", las pestañas y el buscador. `assets/smartpass-phone.webp` (el del login) y `assets/smart.webp` (la captura de desktop) siguen en la carpeta, sin uso en la home.
- **foody:** teléfono inclinado sobre fondo negro con la home de la app. Es un archivo nuevo (`assets/foody-home.webp`) que usa solo la card de la home; el caso y el link preview siguen con `assets/foody.jpg`.
- **Carrusel:** sin cambios (suku, monchis, vendor, muv, con sus imágenes de siempre). Los cuatro se repiten en Selected work justo debajo; queda pendiente decidir si se le suma prototyper o se saca.

#### Componente `.work-card` (uno solo, dos tamaños)

- Es un `<a href>` real, no un `div role="button"`: funciona el foco por teclado, abrir en pestaña nueva y el clic derecho.
- Anatomía: `.wc-cover` (imagen o video) y debajo `.wc-body` con `.wc-cat` (rubro, mono), `.wc-name` (h3, minúsculas) y `.wc-line` (una línea de resultado).
- **Nombre y línea siempre visibles. No hay hover reveal ni botón "View case study".** En touch un tap navega.
- Hover: el cover sube 4px, gana `var(--shadow-card)` y la imagen escala 1.035, con `var(--ease)` lento (movimiento con pausa).
- Entrada: fade + rise al entrar al viewport (clase `wc-pre`, la pone y la saca el JS). Sin JS o con reduced motion las cards quedan visibles.
- Texto secundario con `--wc-muted` (`#5E5E6C` en light, `#A9A9BC` en dark) para cumplir contraste AA; `var(--ash)` no llegaba en dark.
- Clic normal: `wipeAndNavigate(href,x,y)`. Con Cmd/Ctrl/Shift o botón del medio no se intercepta.
- El encuadre de cada cover se ajusta con `style="object-position:…"` en el `<img>` o `<video>`.

#### Reglas

- **Tamaño:** More work va de a tres por fila como máximo. De a cuatro los casos quedan muy chicos (se probó y se descartó).
- **Nombres de archivo:** un cover nuevo lleva nombre nuevo (`vendor-tool-laptop.webp`, `smartpass-phone.webp`). Solo se pisa un archivo cuando se quiere cambiar la imagen en todos los lugares donde se usa.
- **Formato:** covers en WebP (o JPG), con `width` y `height` en el `<img>` para reservar el espacio.
- **Al copiar archivos a la carpeta del sitio en Mac:** no arrastrar una carpeta `assets` encima de la otra ("Reemplazar" borra todo lo que había). Copiar archivos sueltos, o usar `ditto <origen> ~/Desktop/"Porfolio html"`, que combina sin borrar.

#### Para agregar, mover o sacar un caso

1. Copiar un `<a class="work-card">` dentro de `.work-grid--more` (o `--feat`) y cambiar `href`, cover, rubro, nombre y línea.
2. El orden en el HTML es el orden en pantalla. En Selected work, las dos primeras son las grandes.
3. Actualizar `.work-count`.
4. Si Selected work deja de tener 5 casos, revisar los `nth-child` de `.work-grid--feat` (hoy: 2 grandes + 3 medianas).

#### Código que quedó sin uso (candidato a limpieza)

Todo el CSS de `.gallery` / `.tile*`, el handler de clics de `#gallery`, el parallax de tiles, `PROJECT REVEAL` y `filterProjects()`. Todos tienen guardas, no dan error. La demo `#tp-sukuds-demo` **sí** se usa (cover de prototyper). La home ya no carga `sukupay-home-prototype.html` (1.4 MB) en un iframe.

#### Historial de decisiones

1. **3 de octubre, primera versión:** 4 destacados (los del carrusel) + 12 casos en grilla de cuatro por fila. Prototyper iba en la grilla chica con un thumbnail fijo.
2. **4 de octubre, revisión de Paula:** la grilla chica quedaba muy chica y prototyper tenía que ser destacado. Se evaluaron dos alternativas sin "Selected work" (grilla pareja de a tres, y bento con texto sobre la imagen) y se descartaron: se mantiene Selected work + More work.
3. **4 de octubre, estado actual:** prototyper pasa a destacado #2 con su demo animada; Elektra sale de la home; More work pasa a tres por fila; covers nuevos en monchis, vendor tool y smartpass; la card de monchis pasa a llamarse "monchis home experience".

### Copy de la home: hero y Selected work (8 de octubre de 2026)

*Decidido por Paula. Sale de una revisión del sitio contra los criterios que publica Aneta Kmiecik (newsletter Be Your Own Design Team), que asesora sobre portfolios de diseño. Toca solo `index.html`. No se sacó ni se movió ningún caso: Paula no quiere sacar casos por ahora.*

**Qué decía la revisión, en dos líneas:** el hero prometía algo que podría firmar cualquier diseñadora, y dos cards mostraban un número atado a algo que el caso no dice. Las dos cosas se arreglan con copy, sin tocar layout.

#### Hero (`.hello-sub`)

| | Texto |
| --- | --- |
| Antes | Based in Buenos Aires. I think, tinker, and push past boundaries to design products people actually love using. |
| Ahora | Based in Buenos Aires. I design fintech, mobility and food-tech apps for teams across Latin America, Europe and the US. 10 years in, now leading design at SukuPay. |

- "Hi, I'm Pau." y la línea de roles tachados no se tocaron.
- **Por qué:** quien llega tiene que saber en una lectura qué diseña Paula y para quién. El texto nuevo nombra rubros, regiones, años y el puesto actual.
- Se evaluaron otras dos versiones y se descartaron: una que cerraba con un resultado ("a ride-hailing onboarding cut from 21 steps to 6") y otra centrada en AI (design system primero, prototipos con AI encima). Paula eligió la de audiencia. El 21 → 6 pasó a la card de muv.
- **En el HTML:** `the&nbsp;US` y `10&nbsp;years` llevan espacio duro para que no queden "US." ni "10" solos al cortar la línea.
- **Alto:** tres líneas en desktop (1440px) y cinco en celular (390px); antes eran dos y tres. Medido en una copia local sin las fuentes web ni las imágenes: conviene mirarlo una vez en el sitio real.

#### Selected work (`.wc-line`)

| Card | Antes | Ahora | De dónde sale |
| --- | --- | --- | --- |
| muv | Ride-hailing for 2M+ trips in Paraguay. | Ride-hailing in Paraguay. Onboarding cut from 21 steps to 6. | Results del caso: 21 → 6 pasos. Los 2M+ viajes son del negocio, no del rediseño. |
| sukupay *prototyper* | From zero to prototype, super fast. | The design system that lets AI prototype with SukuPay's real components. | Es la idea del caso: Genesis arma el prototipo con los tokens y componentes del design system. |
| sukupay *home* | A remittance home built for repeat transfers. | US-to-Guatemala remittances. The audit and two directions behind the new home, now going live. | El caso publicado muestra la auditoría y las dos direcciones, no la versión que sale a producción. |
| monchis *home experience* | Food delivery redesign. 44.6% CVR. | Food delivery home redesign. Favorite Places converts at 44.6%. | El 44.6% es el CVR del carrusel Favorite Places, no el del rediseño completo. |
| vendor tool | Restaurants self-manage everything. −72 h of manual work. | Restaurants edit their own menu. 72 h of manual catalog work, down to zero. | Results del caso: las 72 h son horas de trabajo manual que se dejaron de hacer con el catálogo nuevo. Primero se había puesto "Catalog changes: 72 hours → instant", leyendo el 72 como tiempo de espera; Paula aclaró el mismo día que es trabajo manual y se corrigió en la card y en el caso. |

- **Línea provisoria:** la de sukupay home. La versión nueva de la home de SukuPay sale a producción ahora y todavía no está en el portfolio. Cuando el caso se actualice, la línea pasa a hablar de lo que salió y de lo que pasó después.
- **Alto:** en desktop, muv va en una línea y las otras cuatro en dos, así que la fila de las tres cards medianas queda pareja. En celular todas van en dos líneas, salvo sukupay home, que va en tres. Misma salvedad que el hero: medido sin las fuentes web.
- More work no se tocó.

#### Reglas de copy para la home

1. **El hero dice qué, para quién, hace cuánto y dónde hoy.** Nada que otra diseñadora pueda firmar sin cambiar una palabra.
2. **Cada línea de card es "qué producto + un dato".** El dato tiene que estar en el caso, con el mismo significado.
3. **Un número va siempre con lo que mide.** "Favorite Places converts at 44.6%", no "44.6% CVR" suelto.
4. **La línea no promete lo que el caso no muestra.** Si el caso cuenta una propuesta o un proceso, la línea dice eso.
5. **Largo:** hasta dos líneas en desktop y tres en celular. Probar a 1440 y a 390px.
6. **Sin em dash** (regla general de la home). La flecha → se usa para antes → después.
7. **La meta description acompaña al hero** (ver "Metadata y Open Graph").

#### Pendiente de la misma revisión, sin aplicar

Anotado para la revisión de cada caso. Nada de esto se tocó en esta pasada.

| Dónde | Qué |
| --- | --- |
| `vendor-tool-case.html` | ✅ **Hecho el 8 de octubre:** el caption de la decisión 3 pasó a "The second step before removing a user." Las 14 notas `TODO(Paula)` del código fuente se repasaron con Paula y se borraron. **Sigue pendiente:** el período de las 72 h, el año de la meta de vendors, el nombre de sucursal de las order cards y las capturas con typos (ver "Cambios en `vendor-tool-case.html` (8 de octubre de 2026)"). |
| `index.html`, Experience (itti) | ✅ **Hecho el 8 de octubre.** El dato decía "44.6% / Monchis CVR" y tenía el mismo problema que la card: el número es de Favorite Places. Ahora dice "44.6% / Favorite Places CVR". |
| `sukupay-proto-case.html` | ✅ **Hecho el 8 de octubre:** el "4 Partners" pasó a "3 Brands" en los dos lugares (ver "Cambios en `sukupay-proto-case.html` (8 de octubre de 2026)"). **Sigue pendiente:** los resultados son proyectados; conviene abrir con lo ya medido (contraste 1.31:1 → AAA, pipeline funcionando). |
| `monchis-case.html` | ✅ **Hecho el 8 de octubre:** los contadores llevan el valor real en el HTML (ver "8 de octubre de 2026 — los números de "What the numbers said" van escritos en el HTML"). **Sigue pendiente:** falta un "antes"; varios números de impacto son los mismos de la investigación. |
| `sukupay-case.html` | Termina en "Expected impact". Se rehace cuando entre la versión que sale a producción. |
| `hugo-case.html` | "+47% engagement" y "−30% response time" no tienen fuente. Falta decir qué parte del código hizo Paula. |
| `muv-case.html` | El resultado propio es el del onboarding, y el caso casi no muestra el onboarding. |
| Todos los cases | Terminan en Home / About: no hay "siguiente caso" ni contacto. |
| About | Los seis bloques de "AI in my workflow" son prompts de ejemplo. Falta un caso real: algo que la AI dio y se conservó, algo que se cortó, y por qué. Core strengths sigue pendiente (ver "About: limpieza y datos de experiencia"). |
| Titulares de los cases | Varios suenan a plantilla ("Five findings. Five non-negotiables.", "A system without a system."). Misma limpieza que se hizo con las etiquetas. |

**Para el caso nuevo de SukuPay Home:** anotar antes del lanzamiento la apuesta, la métrica que se va a mirar y qué número contaría como que no funcionó. Después no se puede reconstruir. Vale la regla de "Elektra: sin datos de la base de SukuPay": los resultados se cuentan en términos relativos.

### Imágenes de link preview: prefijo `og-`

Las imágenes de `assets/og/` se llamaban igual que 10 covers de `assets/` (`muv.jpg`, `suku.jpg`, `vendor.jpg`, etc.). Al copiarlas sueltas dentro de `assets/` pisaron los covers y la home mostraba las tarjetas oscuras de link preview en el carrusel y en las grillas. Ahora se llaman `og-<slug>.jpg` y todas las metas apuntan a esos nombres. **Regla:** ningún archivo generado comparte nombre con un asset existente.

### Limpieza

Se quitó `<script src="portfolio-images.js">`: el archivo no existe y daba 404 en cada carga.

### Idioma: todo el sitio en inglés

- `fancymonas-case.html`, `hotaru-case.html` y `elektra-otp.html` se pasaron de español a inglés (copy, alts, `<html lang="en">`, title, description y `og:locale`).
- **Regla:** todos los cases van en inglés. Los strings de UI del producto se dejan en su idioma original cuando son el objeto del caso, con la traducción entre paréntesis la primera vez. En Elektra, "Enviar código" (Send code) y "Verificar código" (Verify code) siguen en español, igual que los mockups de las pantallas.
- Las citas de usuarios y tickets se tradujeron y el texto lo aclara ("translated from Spanish").
- Las capturas con UI en español no se tocaron.
- Hotaru: el label de Final UI dice "5 key moments" (lista cinco).

### Mobile: scroll horizontal en Hotaru y Fancy Monas

Causas, las mismas en los dos archivos (template viejo `.section` / `.cover`):

1. `.section-label` es una fila flex con `.sl-text` en `white-space:nowrap`: en celular es más ancha que la pantalla.
2. El bloque Learnings + callout era un grid de dos columnas con estilos inline, que el media query no podía pisar.
3. En Fancy Monas, `.dd-grid` tenía `grid-template-columns:repeat(4,1fr)` inline.

Solución: bloque `MOBILE: no horizontal scroll` al final del segundo `<style>` del head. Los inline pasaron a clases (`.split-2`, `.dd-grid-4`) y en `max-width:768px` la fila de labels se apila, los grids colapsan a una columna, las secciones con padding inline usan 20px y se oculta `.back-nav-right`. Probado en 320, 390 y 768px.

**Segunda pasada (mismo día): los otros 10 cases.** everyone, foody, hugo, memorable, monchis drivers, smartpass, sukupay, sukupay proto, thefork reviews y thefork shortlist tenían el mismo problema. Todos llevan ahora un bloque `MOBILE: no horizontal scroll` (entre los comentarios `MOBILE` y `/MOBILE`) al final del último `<style>` del head. Sin scroll horizontal en 320, 360, 390 y 768px; el layout de desktop (1280px) quedó idéntico.

Reglas comunes del bloque (`max-width:768px`):

- **Padding:** `.section`, `.cover`, `.footer` y `.back-nav` pasan a `1.25rem` a los lados (antes `4rem`: el contenido quedaba en 262 de 390px).
- **Cover:** una sola columna.
- **Barra superior:** se oculta el label derecho, el nombre del case se corta con puntos suspensivos y "Back to portfolio" no se parte.
- **Fila de labels (`.section-label`):** se apila y se oculta la línea.
- **Grids inline:** `[style*="grid-template-columns"]` colapsa a `minmax(0,1fr)`. Es un selector por atributo porque los estilos inline no se pueden pisar de otra forma. `minmax(0,1fr)` evita que el contenido ensanche la columna.
- **Footer:** apilado.

Excepciones por case (van al final del mismo bloque):

| Case | Qué se hizo |
| --- | --- |
| everyone | El par de wireframes y su fila de captions siguen en dos columnas, para que cada caption quede debajo de su imagen. |
| foody | Wireframe → flecha → wireframe y el par de teléfonos siguen en fila. `.comp-grid` en una columna. |
| monchis drivers | Los dos teléfonos de cada `.feat-grid` ya no tienen 220px fijos: se achican. Las 4 métricas van de a dos. |
| smartpass | Título del cover más chico (`clamp(2.75rem,15vw,5rem)`). Escala tipográfica: muestra arriba, spec abajo, tamaños reducidos. `.process-grid` de a dos bajo 420px. |
| sukupay | El prototipo embebido es un teléfono de 390px y se recortaba a los lados. Un script (`PROTOTYPE EMBED FIT`) escala el iframe al ancho del frame. |
| thefork reviews | `.metrics-bento` de a dos; `.impact-strip`, `.dec-grid` y `.explore-grid` en una columna. |
| thefork shortlist | `.dec-grid` en una columna. La tabla before/after mantiene sus tres columnas, con menos padding. |

No se tocó: el journey de thefork reviews (`.journey2`) sigue con scroll horizontal propio dentro de su contenedor, y los carruseles (`.oldxp-track`, `.hifi-carousel-track`) también.

**Regla:** nada de `grid-template-columns` inline en cases nuevos; siempre una clase que el media query pueda colapsar. Para verificar un case: abrirlo a 390px y comprobar que `document.documentElement.scrollWidth` sea igual al ancho de la ventana.

De paso, en `foody-case.html` se tradujo al inglés la sección del prototipo animado, que seguía en español.

### Elektra: sin datos de la base de SukuPay

Se sacaron los tamaños de muestra, porcentajes de segmento y monto mensual (las cifras no se anotan acá a propósito: este archivo se publica junto con el sitio). Los segmentos quedan descritos de forma cualitativa. Los puntajes del panel (confianza, probabilidad de completar) se mantienen. **Regla:** ningún case publica métricas internas de la base de usuarios de SukuPay.

### Hotaru: La Nave Madrid

En Experience decía incubadora "La Nube". Es **La Nave Madrid** (programa de aceleración), como en el case. Corregido en la descripción y en el tag (`3rd / 12 · La Nave Madrid`).

---

*Este documento es la fuente de verdad del portfolio. Cualquier cambio aprobado debe reflejarse aquí.*
