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
| Linting | ESLint 10 + react-hooks + react-refresh |

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
├── App.jsx                        ← layout raíz: Navbar + secciones + Footer
├── main.jsx
├── App.css                        ← utilidades de sección (.section, .section__label)
├── index.css                      ← variables CSS, reset, grid body, scroll-reveal classes
├── assets/
│   ├── mark.svg                   ← logo KolisCode (también en /public/favicon.svg)
│   └── proyectos/                 ← TODAS las capturas en WebP q82 (convención: nombre-{1-4}.webp)
│       ├── tiendakit-{1-4}.webp
│       ├── lotesrb-{1-4}.webp
│       ├── biodont-{1-4}.webp
│       ├── koliskit-{1-4}.webp    ← ⚠️ muestran la landing vieja (kolisevm) — recapturar tras
│       │                             el próximo deploy de KolisKit con las tools nuevas
│       └── coreframe-{1-4}.webp   ← tomadas con Playwright de coreframe.koliscode.com (1440×900)
├── components/
│   ├── Navbar/                    ← logo + links desktop + hamburger mobile + active section
│   ├── Footer/                    ← marca + copyright + íconos sociales
│   ├── Carrusel/                  ← carrusel de imágenes: slide, dots, flechas, counter
│   └── Lightbox/                  ← overlay fullscreen con portal (createPortal → document.body)
├── hooks/
│   ├── useScrollReveal.js         ← IntersectionObserver fade-in al entrar al viewport
│   ├── useActiveSection.js        ← detecta sección visible → ilumina nav link activo
│   └── useTypewriter.js           ← efecto typewriter que rota frases en el Hero
├── sections/
│   ├── Hero/                      ← terminal macOS, badge disponible, typewriter, scroll arrow
│   ├── Proyectos/                 ← grid de cards con Carrusel + Lightbox
│   ├── Stack/                     ← 4 columnas por categoría con íconos SVG inline
│   ├── SobreMi/                   ← bio + koliscode.json + stats (3+ años, 5+ proyectos)
│   └── Contacto/                  ← LinkedIn, GitHub, Email, WhatsApp
└── data/
    └── proyectos.js               ← fuente de verdad: imports de imágenes + metadata
```

## Secciones

| ID | Componente | Estado |
|---|---|---|
| `#hero` | Hero | ✅ Terminal, badge verde, typewriter 3 frases, scroll arrow |
| `#proyectos` | Proyectos | ✅ 5 proyectos con carrusel 4 imágenes + lightbox (KolisKit primero, CoreFrame último) |
| `#stack` | Stack | ✅ 14 tecnologías con íconos SVG |
| `#sobre-mi` | SobreMi | ✅ Bio + JSON panel + stats |
| `#contacto` | Contacto | ✅ LinkedIn, GitHub, Email, WhatsApp |

## Proyectos en data/proyectos.js

Campos por proyecto:
- `id`, `nombre`, `descripcion`, `stack[]`
- `estado`: `'Lanzado'` | `'En desarrollo'`
- `imagenes`: array de imports desde `../assets/proyectos/` (vacío → muestra placeholder)
- `github`, `demo`: URLs o `''`

Para agregar un proyecto nuevo:
1. Copiar capturas a `src/assets/proyectos/nombre-{1-4}.png`
2. Importar en `proyectos.js`
3. Agregar objeto al array

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

# 2. Deploy via MCP droplet
mcp__droplet__deploy_static({
  local_path: '/Users/Jhohan/Documents/portafolio/dist/',
  remote_path: '/var/www/portafolio'
})
```

Nginx config en droplet: `/etc/nginx/sites-enabled/portafolio`
Dominio: `koliscode.com` con SSL Certbot.

## Pendientes

- Recapturar `koliskit-{1-4}.webp` (muestran el dominio viejo kolisevm en la UI) tras el
  próximo deploy de KolisKit con las tools nuevas
- Más proyectos candidatos: Nordik, MetriBoard, GeoAgent — pendiente decisión + capturas
  (sin deploy público: levantar local o placeholder de marca)
- Analytics: decidir umami/Plausible self-host vs GoatCounter vs posponer (solo falta el tag)
- Migrar a TypeScript
- Biodont va sin link de demo a propósito (sistema clínico real en el droplet)
- KolisKit va sin link de GitHub: el repo `KolisCode/api` es privado

### Hecho 2026-07-02 (sesión orquestada)
- SEO: og/twitter image absolutas + og:url + canonical + theme-color + JSON-LD Person;
  robots.txt + sitemap.xml; verificación Search Console movida a `public/`
- Imágenes PNG→WebP q82 (3.8 MB → 652 KB) + lazy loading en carrusel
- `prefers-reduced-motion` (CSS global + typewriter congelado) y `:focus-visible` ámbar
- CoreFrame añadido (capturas Playwright); TiendaKit → "Lanzado" con demo
- Auditoría móvil 375/768 con Playwright: sin roturas, no hicieron falta media queries nuevas
