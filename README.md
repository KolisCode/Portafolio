# Portafolio — Jhohan Bustamante

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)

Sitio web de portafolio personal. SPA de una página con anclas: Hero (terminal con
typewriter), Proyectos (cards con carrusel + lightbox), Stack, Sobre mí y Contacto.

🔗 **Ver en vivo:** https://koliscode.com

## Stack

- React 19 + Vite 8 (JSX, sin TypeScript)
- CSS plano por componente (variables de marca en `src/index.css`)
- ESLint 10 (flat config)
- Imágenes de proyectos en WebP (q82) con lazy loading
- Accesibilidad: `prefers-reduced-motion` y `:focus-visible` globales

## Desarrollo local

```bash
npm install
npm run dev      # → http://localhost:5173
npm run lint     # debe salir limpio
npm run build    # genera dist/
npm run preview  # sirve dist/ localmente
```

## Proyectos incluidos

- **KolisKit** — toolbox API + landing (NestJS + Prisma + PostgreSQL) · [demo](https://api.koliscode.com)
- **TiendaKit** — e-commerce con MercadoPago (Next.js + NestJS + PostgreSQL) · [demo](https://tiendakit.koliscode.com)
- **LotesRB** — portal inmobiliario (Angular 21 + NestJS + PostgreSQL) · [demo](https://lotesrb.koliscode.com)
- **Biodont** — sistema odontológico (Angular + Node.js + SQLite)
- **CoreFrame** — sitio del estudio de desarrollo (Next.js + React + TS) · [demo](https://coreframe.koliscode.com)

Para agregar un proyecto: capturas WebP en `src/assets/proyectos/nombre-{1..4}.webp`,
importarlas y añadir el objeto en `src/data/proyectos.js` (ver convención en `CLAUDE.md`).

## Deploy

`./deploy.sh` — exige rama `master` y working tree limpio; hace push → build →
rsync de `dist/` al droplet → reload nginx → healthcheck HTTPS en koliscode.com.
