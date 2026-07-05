# Portafolio personal — KolisCode / Jhohan Bustamante

Portfolio personal como desarrollador freelance. Vite 8 + React 19 + JSX.
Live en: **https://koliscode.com**

**Instrucción:** Mantén este archivo actualizado de forma proactiva.

---

## Stack

| Capa | Tecnología |
|---|---|
| Bundler | Vite 8 |
| UI | React 19 |
| Lenguaje | JavaScript (JSX) — sin TypeScript todavía |
| Estilos | CSS modules por componente |
| Fuentes | Inter (cuerpo) + JetBrains Mono (headings, código) |
| Routing | React Router 7 (SPA: `/` · `/proyectos/:slug` · `/notas` · `/notas/:slug`) |
| Contenido | Markdown (`marked`) para el blog — posts en `src/content/notas/*.md` |
| Linting | ESLint 10 + react-hooks + react-refresh |

> **Arquitectura (desde jul-2026):** dejó de ser one-page. Es una SPA con React Router.
> `main.jsx` monta `<BrowserRouter>`; `App.jsx` define las `<Routes>` bajo un `Layout`
> (Navbar + `<Outlet>` + Footer). El home vive en `pages/Home.jsx` (compone las secciones);
> cada proyecto tiene su **página de caso de estudio** en `pages/ProyectoDetalle.jsx`.
> ⚠️ Al desplegar en nginx hace falta fallback SPA: `try_files $uri $uri/ /index.html;`

## Paleta de marca (KolisCode)

| Variable | Valor | Uso |
|---|---|---|
| `--color-bg` | `#0f0800` | Fondo global |
| `--color-surface` | `#1a0c00` | Cards, Navbar, Footer |
| `--color-surface-2` | `#231400` | Terminal bars, chips |
| `--color-accent` | `#fbbf24` | Ámbar dorado — acento principal |
| `--color-text` | `#ffedd5` | Texto principal |
| `--color-text-muted` | `#9a7a5a` | Texto secundario |
| `--color-border` | `rgba(251,191,36,0.1)` | Bordes sutiles |

## Estructura

```
src/
├── App.jsx                        ← define <Routes> (Layout → Home / ProyectoDetalle / 404)
├── main.jsx                       ← monta <BrowserRouter>
├── App.css                        ← utilidades de sección (.section, .section__label)
├── index.css                      ← variables CSS (incl. --color-bg-2), reset, scroll-reveal + stagger + bandas de fondo (.band--*)
├── pages/
│   ├── Home.jsx                   ← compone las secciones del home + useScrollReveal
│   ├── ProyectoDetalle.jsx (.css) ← caso de estudio por proyecto (/proyectos/:slug)
│   ├── Notas.jsx (.css)           ← índice del blog (/notas)
│   ├── NotaDetalle.jsx (.css)     ← nota individual (/notas/:slug); .prose renderiza el MD
│   └── NotFound.jsx               ← 404
├── content/
│   └── notas/*.md                 ← posts del blog (frontmatter + Markdown); ver data/notas.js
├── assets/
│   ├── mark.svg                   ← logo KolisCode (también en /public/favicon.svg)
│   └── proyectos/                 ← TODAS las capturas en WebP q82 (convención: nombre-{1-4}.webp)
│       ├── tiendakit-{1-4}.webp
│       ├── lotesrb-{1-4}.webp
│       ├── biodont-{1-4}.webp
│       ├── koliskit-{1-4}.webp    ← recapturadas 2026-07-02 de la landing live (tools nuevas visibles)
│       └── coreframe-{1-4}.webp   ← tomadas con Playwright de coreframe.koliscode.com (1440×900)
├── components/
│   ├── Layout/                    ← shell: Navbar + <Outlet> + Footer + scroll-a-hash/tope por ruta
│   ├── Navbar/                    ← route-aware: links van a `/#seccion`; active section solo en home
│   ├── Footer/                    ← marca + copyright + íconos sociales
│   ├── Carrusel/                  ← carrusel de imágenes: slide, dots, flechas, counter
│   └── Lightbox/                  ← overlay fullscreen con portal (createPortal → document.body)
├── hooks/
│   ├── useScrollReveal.js         ← IntersectionObserver fade-in al entrar al viewport
│   ├── useActiveSection.js        ← detecta sección visible → ilumina nav link activo
│   └── useTypewriter.js           ← efecto typewriter que rota frases en el Hero
├── sections/
│   ├── Hero/                      ← terminal macOS, badge disponible, typewriter, scroll arrow
│   ├── Servicios/                 ← 6 cards de oferta; cada una enlaza a un proyecto de ejemplo
│   ├── Proyectos/                 ← grid de cards con Carrusel + Lightbox
│   ├── Stack/                     ← 4 columnas por categoría con íconos SVG inline
│   ├── SobreMi/                   ← bio + koliscode.json + stats (3+ años, 5+ proyectos)
│   ├── NotasPreview/              ← teaser "Del blog": 2 notas recientes + "Ver todas →" a /notas
│   ├── Cotizacion/                ← form de cotización; compone mensaje y abre WhatsApp (fallback mailto). Sin backend.
│   └── Contacto/                  ← LinkedIn, GitHub, Email, WhatsApp
└── data/
    ├── proyectos.js               ← fuente de verdad: imports de imágenes + metadata + caso de estudio
    └── notas.js                   ← carga los .md (import.meta.glob ?raw), parsea frontmatter, ordena por fecha
```

## Blog / Notas (`/notas`)

Posts en `src/content/notas/*.md`. **Publicar una nota = crear un `.md`** con frontmatter:

```markdown
---
title: Título de la nota
date: 2026-06-20            # YYYY-MM-DD (se formatea como fecha local, sin desfase UTC)
description: Resumen de una línea (índice + SEO).
tags: MCP, arquitectura, IA # lista separada por comas
---
Cuerpo en Markdown…
```

`data/notas.js` los carga en build (`import.meta.glob` con `?raw`), parsea el frontmatter,
calcula el tiempo de lectura, ordena por fecha desc y renderiza con `marked`. El slug sale del
nombre del archivo. El HTML va por `dangerouslySetInnerHTML` (contenido propio, confiable) y se
estiliza con `.prose` en `NotaDetalle.css`. Hay 3 notas de ejemplo (MCP/GeoAgent, webhooks/
TiendaKit, multi-tenant/DentalSaaS).

## Secciones

| ID | Componente | Estado |
|---|---|---|
| `#hero` | Hero | ✅ Terminal, badge verde, typewriter 3 frases, scroll arrow |
| `#servicios` | Servicios | ✅ 6 servicios (web, e-commerce, APIs, SaaS, IA, dashboards); cada card enlaza a un proyecto de ejemplo |
| `#proyectos` | Proyectos | ✅ 8 proyectos; cada card enlaza a su caso de estudio (`Ver caso →`) |
| `#stack` | Stack | ✅ 14 tecnologías con íconos SVG |
| `#sobre-mi` | SobreMi | ✅ Bio + JSON panel + stats |
| `#notas-preview` | NotasPreview | ✅ Teaser "Del blog": 2 notas recientes + enlace a `/notas` |
| `#cotizacion` | Cotizacion | ✅ Formulario de solicitud de cotización → prefill WhatsApp (+ fallback mailto) |
| `#contacto` | Contacto | ✅ LinkedIn, GitHub, Email, WhatsApp |

### Cotización (`#cotizacion`)

Sección de captación de leads (entre NotasPreview y Contacto en el home). Es un `<form>`
con estética terminal (`nueva-solicitud.txt`): campos nombre*, email, tipo de proyecto,
presupuesto, plazo y descripción*. **No hay backend** (el portafolio es estático en nginx):
al enviar, `componerMensaje()` arma un texto estructurado y el botón primario abre
`https://wa.me/573208146176?text=…` (WhatsApp prellenado); el botón fantasma "Enviar por
correo" hace lo mismo vía `mailto:jhohantma@gmail.com`, reusando la validación nativa del
form (`reportValidity()`). Cero dependencias de terceros. Para cambiar el destino: constantes
`WHATSAPP`/`EMAIL` en `sections/Cotizacion/Cotizacion.jsx`.

Cada `/proyectos/:slug` es una página de caso de estudio (`pages/ProyectoDetalle.jsx`):
encabezado + galería/placeholder + meta sticky (rol/periodo/estado) + problema · solución ·
arquitectura · decisiones · resultados + nav anterior/siguiente.

## Proyectos en data/proyectos.js

8 proyectos (orden = orden en el home). Campos de card:
- `id`, `slug`, `nombre`, `tagline`, `descripcion`, `stack[]`
- `estado`: `'Lanzado'` | `'En desarrollo'`
- `imagenes`: imports desde `../assets/proyectos/` (vacío → placeholder de marca)
- `github`, `demo`: URLs o `''`; `destacado`: bool (opcional)

Campo `caso` (caso de estudio, opcional pero presente en los 8):
`{ rol, periodo, resumen, problema, solucion, arquitectura[], decisiones[{titulo,detalle}], resultados[] }`
La página degrada con gracia si falta cualquier bloque. Helper `getProyecto(slug)`.

**Los 8:** KolisKit, TiendaKit, LotesRB, Biodont, CoreFrame, **GeoAgent**, **DentalSaaS**
(con capturas) · Metriboard (placeholder de marca). ⚠️ **GeoAgent es proyecto propio de
KolisCode** — nunca atribuirlo a GeoGeeks/semillero/Esri. Sus capturas (`geoagent-1..3`) se
tomaron del frontend local **recortando la franja superior** que muestra "GeoGeeks · Esri
Colombia" (branding a revisar en la propia app).

**DentalSaaS** (`dentalsaas-1..3`): capturadas del frontend Angular local (marca "Raíz") tras
`db:up` + migrate + seed (`admin@demo.dentalsaas.co` / `Demo123456!`): dashboard, odontograma FDI
de un paciente, y lista de pacientes. Stack real confirmado: NestJS + Angular + Prisma + PostgreSQL
+ Redis. **Metriboard** sigue con placeholder: su frontend es un esqueleto (dashboard con KPIs
hardcodeados en "—", sin fetch a la API; otras rutas 404), así que no hay UI real que capturar
todavía aunque su API+seed sí funcionen.

Para agregar un proyecto nuevo:
1. (Opcional) capturas en `src/assets/proyectos/nombre-{1-4}.webp` + imports en `proyectos.js`
2. Agregar objeto al array con `slug` único y su `caso`

## Componentes clave

**Carrusel** — slide con CSS transform. Props: `imagenes[]`, `nombre`, `onOpen(imagenes, idx, nombre)`.
Al hacer click llama `onOpen` con el array completo + índice actual para que el Lightbox arranque en la imagen correcta.

**Lightbox** — Props: `imagenes[]`, `initialIdx`, `alt`, `onClose`.
- Usa `createPortal(…, document.body)` — CRÍTICO: sin esto, `position:fixed` queda roto porque los `[data-reveal]` tienen CSS `transform` que crea un nuevo containing block.
- Navegación interna: flechas `‹ ›` clickeables, teclado `←` `→` para pasar, `Esc` para cerrar.
- Dots en la parte inferior + counter `n / total` en la barra superior.
- Cada cambio de imagen hace fade-in con `key={idx}` en el `<img>`.

**useTypewriter** — maneja estado con `useRef` para evitar re-renders. Frases en `Hero.jsx`.

## Comandos

```bash
npm run dev       # → http://localhost:5173
npm run build     # dist/ — verificar antes de deploy
npm run preview   # sirve dist/ localmente
```

## Deploy

```bash
# 1. Build
npm run build

# 2. Deploy via MCP droplet (desde esta Ubuntu WSL; el path del Mac sería otro)
mcp__droplet__deploy_static({
  local_path: '/home/jhohan/projects/portafolio/dist/',
  remote_path: '/var/www/portafolio'
})
```

Flujo completo (rama-por-máquina): `git push origin developer-ubuntu` → PR a `master`
(el merge lo hace el usuario; el clasificador bloquea auto-aprobar tu propio PR) →
`npm run build` → `deploy_static`. El deploy sirve el `dist/`, no depende del merge.

Nginx config en droplet: `/etc/nginx/sites-enabled/portafolio` (con fallback SPA
`try_files $uri $uri/ /index.html`). Dominio: `koliscode.com` con SSL Certbot.

> ⚠️ **Cuidado con el fallback SPA y los archivos ausentes:** cualquier ruta que no exista
> como archivo devuelve `index.html` (HTML, 200). Por eso los íconos raster (`favicon.ico`,
> `apple-touch-icon.png`) **deben existir** en `public/` — si faltan, el navegador/buscador
> pide `/favicon.ico`, recibe HTML y no muestra ícono. Ver "Favicon / íconos" abajo.

## Favicon / íconos

En `public/`: `favicon.svg` (fuente, pixel-art del logo), `favicon.ico` (16/32/48, PNG
embebido, ~1 KB), `favicon-16/32/48.png`, `apple-touch-icon.png` (180×180). Declarados en
`index.html` (`.ico` con `sizes="any"` + SVG + PNG 32 + apple-touch). Regenerar desde el SVG:
rasterizar con chromium headless por CDP (fondo transparente) y ensamblar el `.ico` con un
script node que embebe los PNG (no usar `png-to-ico`: mete una entrada 256px y sube a ~285 KB).
Verificar tras deploy que `curl -sI …/favicon.ico` responda `image/x-icon`, **no** `text/html`.

## Pendientes

- **Revamp en curso (jul-2026):** Fase 1 hecha (router + páginas de caso de estudio + 3
  proyectos nuevos). Secciones **Servicios** ✅, **Blog/Notas** ✅ y **teaser de notas** ✅.
  **Transiciones de página** ✅ (fade en `route-fade`, `components/Layout/Layout.css`).
  **Capturas GeoAgent** ✅ (3) y **DentalSaaS** ✅ (3, del frontend Angular local). Pendiente:
  capturas de Metriboard (bloqueadas: su frontend es un esqueleto sin datos) y migrar a TS.
  **Orden home:** Hero → Servicios → Proyectos → Stack → SobreMi → NotasPreview →
  **Cotizacion** → Contacto.
- ✅ **Producción al día (2026-07-05):** desplegado desde esta Ubuntu con todo lo de la sesión
  (cotización, copy, animaciones, fondos, favicon) + el fix de `lotesrb-4`. Hash del bundle en
  vivo verificado = build local. **PR #4 (`developer-ubuntu` → `master`) queda abierto para que
  el usuario lo mergee** (el clasificador impide auto-aprobar el propio PR); producción no lo
  necesita.
- Otro proyecto candidato: Nordik — pendiente decisión + capturas (sin deploy público:
  levantar local o placeholder de marca)
- Analytics: decidir umami/Plausible self-host vs GoatCounter vs posponer (solo falta el tag)
- Migrar a TypeScript
- Biodont va sin link de demo a propósito (sistema clínico real en el droplet)
- KolisKit va sin link de GitHub: el repo `KolisCode/api` es privado

### Hecho 2026-07-05 (sesión larga — todo desplegado a koliscode.com)
- **Sección de cotización (`#cotizacion`)** entre NotasPreview y Contacto. Form terminal →
  prefill WhatsApp (`wa.me/573208146176`, confirmado por el usuario) + fallback `mailto`
  (`JhohanBustamante@koliscode.com`), sin backend. Presupuesto: casilla "A definir juntos" (por
  defecto) o monto libre con moneda (USD/COP/EUR). Adjuntos: por la vía nativa del chat/correo
  (wa.me y mailto no transportan archivos; se descartó Web3Forms/backend por seguridad). Link
  "cotización" en Navbar. Ver sección "Cotización" arriba.
- **Copy humanizado (anti-IA):** se bajó la densidad de antítesis pulidas repetidas ("X, no Y"),
  guiones largos como muletilla, cierres grandilocuentes y tríadas, en Hero, SobreMi, Servicios,
  `proyectos.js`, las 3 notas y la meta description. Sin tocar el contenido técnico.
- **Animaciones:** reveal con easing refinado (`cubic-bezier(0.22,1,0.36,1)`) + variante
  `[data-reveal="fade"]` y **stagger** (`[data-stagger]` en los grids → tarjetas en cascada);
  entrada escalonada del hero (`heroIn`); glow ámbar en hover de tarjetas; slide-down de los
  campos de presupuesto. Todo respeta `prefers-reduced-motion`.
- **Ritmo de fondos (bandas):** cada sección del home lleva una banda full-bleed opaca con tono
  alterno (`--color-bg` / nuevo `--color-bg-2 #160b01`) y una "forma" distinta: `.band--dots`,
  `.band--diagonal`, `.band--grid`, `.band--glow`, `.band--glow-top` (todas en `index.css`,
  asignadas en `Home.jsx`). El Hero conserva la rejilla fina del body como firma. Solo CSS.
- **Favicon / íconos:** el sitio solo tenía SVG → `/favicon.ico` y `/apple-touch-icon.png`
  caían al fallback SPA (HTML) y no se veía ícono en buscadores/pestañas. Se generaron desde el
  logo `favicon.ico` (16/32/48, PNG embebido, ~1 KB), `apple-touch-icon.png` (180) y
  `favicon-32.png`, en `public/`, declarados en `index.html`. Generación: PNGs con chromium
  headless (CDP, fondo transparente) + ensamblado del `.ico` con un script node (ICO admite PNG
  por entrada — evita el 256px que infla `png-to-ico` a ~285 KB). Google recrawlea el favicon
  en días/semanas; no se puede forzar.
- Deploy: `push developer-ubuntu` + PR #4 a master (sin mergear, lo hace el usuario) +
  `deploy_static` desde `/home/jhohan/projects/portafolio/dist/`. Verificado en vivo
  (content-types de íconos = imagen, hash del bundle = local, `lotesrb-4` recapturado).

### Hecho 2026-07-04
- **LotesRB `lotesrb-4` recapturada.** La captura anterior mostraba la página "El Proyecto"
  con literales sin rellenar (`[Nombre del Proyecto]`, `[X] min · [X] km`). Se arreglaron en la
  app real (`Robinson/lotes-rb`, commit en su `developer-ubuntu`) y se recapturó con Playwright.
  Encuadre 1100×593 (mismo aspecto que `lotesrb-1..3`, para que el carrusel no salte). Las otras
  3 de LotesRB ya estaban bien pobladas → se dejaron. Las de Biodont también quedaron intactas.
- Nota de tooling (capturas en esta Ubuntu WSL): el chromium headless no trae emoji a color →
  hubo que instalar `NotoColorEmoji.ttf` en `~/.local/share/fonts`; conversión a WebP con `sharp`
  (no hay `cwebp`/`convert` en el sistema). Ver memoria `playwright-captures-ubuntu`.

### Hecho 2026-07-02 (sesión orquestada)
- SEO: og/twitter image absolutas + og:url + canonical + theme-color + JSON-LD Person;
  robots.txt + sitemap.xml; verificación Search Console movida a `public/`
- Imágenes PNG→WebP q82 (3.8 MB → 652 KB) + lazy loading en carrusel
- `prefers-reduced-motion` (CSS global + typewriter congelado) y `:focus-visible` ámbar
- CoreFrame añadido (capturas Playwright); TiendaKit → "Lanzado" con demo
- Auditoría móvil 375/768 con Playwright: sin roturas, no hicieron falta media queries nuevas
- Capturas koliskit-* recapturadas de la landing nueva y **deployado a koliscode.com**
  (robots/sitemap/OG validados en vivo)
