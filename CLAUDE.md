# Portafolio personal — Jhohan Bustamante

Portafolio personal como desarrollador freelance. Vite 8 + React 19 + TypeScript.
Solo local — sin deploy ni dominio configurado aún.

**Instrucción:** Mantén este archivo actualizado de forma proactiva.

---

## Stack

| Capa | Tecnología |
|---|---|
| Bundler | Vite 8 |
| UI | React 19 |
| Lenguaje | JavaScript (JSX) — sin TypeScript todavía |
| Estilos | CSS modules (App.css, index.css) |
| Linting | ESLint 10 + react-hooks + react-refresh |

## Estructura

```
src/
├── App.jsx             ← layout principal: Navbar + 5 secciones
├── main.jsx            ← entry point
├── components/
│   └── Navbar/
│       └── Navbar.jsx
└── sections/
    └── Hero/
        └── Hero.jsx
```

**Secciones definidas en App.jsx:** `#hero`, `#proyectos`, `#stack`, `#sobre-mi`, `#contacto`
Solo Hero y Navbar tienen implementación; el resto son placeholders.

## Comandos

```bash
npm run dev       # → http://localhost:5173
npm run build     # dist/
npm run preview   # sirve dist/ localmente
```

## Estado actual

- Hero y Navbar: implementados
- Proyectos, Stack, Sobre mí, Contacto: placeholders vacíos
- Sin deploy, sin dominio, sin analytics
- Sin datos en `src/data/` — proyectos hardcodeados o pendientes
- Diferente al coreframe (Next.js) — este es el portafolio personal, aquel es el portfolio del equipo freelance

## Pendientes

- Migrar a TypeScript
- Implementar secciones vacías
- Definir si se desplegará en el droplet o en otra plataforma (Vercel, GitHub Pages)
- Si va al droplet: agregar `portafolio` al `PROJECTS` dict de `droplet.py`
