# Portafolio personal — KolisCode / Jhohan Bustamante

Portfolio personal como desarrollador freelance. Vite 8 + React 19 + JSX.

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
├── index.css                      ← variables CSS, reset, grid body, scroll-reveal
├── assets/
│   ├── mark.svg                   ← logo KolisCode (también en /public/favicon.svg)
│   └── proyectos/
│       ├── lotesrb.png
│       └── biodont.png
├── components/
│   ├── Navbar/                    ← logo + links desktop + hamburger mobile + active section
│   └── Footer/                    ← marca + copyright + íconos sociales
├── hooks/
│   ├── useScrollReveal.js         ← IntersectionObserver para animaciones fade-in
│   └── useActiveSection.js        ← detecta sección visible → ilumina nav link
├── sections/
│   ├── Hero/                      ← terminal macOS, cursor parpadeante, CTA, scroll arrow
│   ├── Proyectos/                 ← cards con screenshot, badge estado, tech chips, links
│   ├── Stack/                     ← 4 columnas por categoría con SVG icons
│   ├── SobreMi/                   ← bio + koliscode.json + stats
│   └── Contacto/                  ← LinkedIn, GitHub, Email, WhatsApp
└── data/
    └── proyectos.js               ← fuente de verdad de proyectos (importa imágenes)
```

## Secciones

| ID | Componente | Estado |
|---|---|---|
| `#hero` | Hero | ✅ Completo |
| `#proyectos` | Proyectos | ✅ 3 proyectos (TiendaKit, LotesRB, Biodont) |
| `#stack` | Stack | ✅ 14 tecnologías con íconos SVG |
| `#sobre-mi` | SobreMi | ✅ Completo |
| `#contacto` | Contacto | ✅ LinkedIn, GitHub, Email, WhatsApp |

## Proyectos en data/proyectos.js

Agregar proyectos nuevos ahí. Campos:
- `id`, `nombre`, `descripcion`, `stack[]`, `estado` (`'Lanzado'` | `'En desarrollo'`)
- `imagen` — importar desde `../assets/proyectos/nombre.png` (o `null` para placeholder)
- `github`, `demo` — URLs o `''`

## Comandos

```bash
npm run dev       # → http://localhost:5173
npm run build     # dist/ (verificar antes de deploy)
npm run preview   # sirve dist/ localmente
```

## Deploy

Clave registrada en droplet MCP: `portafolio` → `/var/www/portafolio` (nginx estático).

```
mcp__droplet__deploy_static({ key: 'portafolio' })
```

## Pendientes

- Migrar a TypeScript
- og:image con URL absoluta tras definir dominio final
- Más proyectos: Nordik, Coreframe (cuando estén listos)
- Screenshots reales de TiendaKit cuando avance el proyecto
