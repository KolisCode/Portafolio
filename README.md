# Portafolio — Jhohan Bustamante

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)

Portafolio personal como desarrollador freelance. SPA **multi-página** con React Router:
home por secciones, caso de estudio por proyecto y blog de notas técnicas en Markdown.

🔗 **Ver en vivo:** https://koliscode.com

## Rutas

| Ruta | Página |
|---|---|
| `/` | Home: Hero (terminal con typewriter) → Servicios → Proyectos → Stack → Sobre mí → Notas → Contacto |
| `/proyectos/:slug` | Caso de estudio: problema · solución · arquitectura · decisiones · resultados |
| `/notas` | Índice del blog |
| `/notas/:slug` | Nota individual (Markdown renderizado con `marked`) |
| `*` | 404 |

## Stack

- React 19 + Vite 8 (JSX, sin TypeScript)
- React Router 7 — al servir en nginx se requiere fallback SPA (`try_files … /index.html`)
- CSS plano por componente (variables de marca en `src/index.css`)
- Blog en Markdown: posts con frontmatter en `src/content/notas/*.md`
- ESLint 10 (flat config)
- Imágenes de proyectos en WebP (q82) con lazy loading
- Accesibilidad: `prefers-reduced-motion` y `:focus-visible` globales

## Desarrollo local

```bash
npm ci           # ⚠️ obligatorio tras un pull — el revamp jul-2026 añadió react-router-dom y marked
npm run dev      # → http://localhost:5173
npm run lint     # debe salir limpio
npm run build    # genera dist/
npm run preview  # sirve dist/ localmente
```

## Proyectos incluidos (8)

KolisKit · TiendaKit · LotesRB · Biodont · CoreFrame · GeoAgent · DentalSaaS (Raíz) · Metriboard.
La fuente de verdad es `src/data/proyectos.js` (metadata + caso de estudio por slug).

**Agregar un proyecto:** capturas WebP en `src/assets/proyectos/nombre-{1..4}.webp`,
objeto en `src/data/proyectos.js` **y su URL en `public/sitemap.xml`** (convención en `CLAUDE.md`).

**Publicar una nota:** `.md` con frontmatter en `src/content/notas/` **y su URL en
`public/sitemap.xml`** (formato del frontmatter en `CLAUDE.md`).

## Deploy

Flujo canónico: `./deploy.sh` — exige rama `master` y working tree limpio; hace push →
build → rsync de `dist/` al droplet → `nginx -t` + reload → healthcheck HTTPS.
Correr `npm ci` antes si hubo pull (el build falla con `node_modules` viejo).
Alternativa manual vía MCP droplet documentada en `CLAUDE.md`.
