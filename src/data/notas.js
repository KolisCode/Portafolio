import { marked } from 'marked'

/**
 * Blog / Notas técnicas.
 *
 * Fuente: archivos Markdown en `src/content/notas/*.md`, cargados en build por Vite
 * (`import.meta.glob` con `?raw`). Cada archivo lleva frontmatter:
 *
 *   ---
 *   title: Título de la nota
 *   date: 2026-06-15
 *   description: Resumen de una línea (aparece en el índice y en SEO).
 *   tags: MCP, arquitectura, IA
 *   ---
 *   Cuerpo en Markdown...
 *
 * El slug se deriva del nombre del archivo (`por-que-mcp.md` → `por-que-mcp`).
 * Para publicar una nota nueva: crear el `.md` con su frontmatter. Nada más.
 */

marked.setOptions({ gfm: true, breaks: false })

// Carga cruda de todos los .md en build.
const archivos = import.meta.glob('../content/notas/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

/** Parser mínimo de frontmatter (clave: valor; `tags` como lista separada por comas). */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { meta: {}, body: raw }

  const [, fm, body] = match
  const meta = {}
  for (const linea of fm.split(/\r?\n/)) {
    const i = linea.indexOf(':')
    if (i === -1) continue
    const clave = linea.slice(0, i).trim()
    const valor = linea.slice(i + 1).trim()
    if (clave === 'tags') {
      meta.tags = valor.split(',').map((t) => t.trim()).filter(Boolean)
    } else {
      meta[clave] = valor
    }
  }
  return { meta, body: body.trim() }
}

function slugDesdeRuta(ruta) {
  return ruta.split('/').pop().replace(/\.md$/, '')
}

function tiempoLectura(texto) {
  const palabras = texto.trim().split(/\s+/).length
  return Math.max(1, Math.round(palabras / 200))
}

const FMT_FECHA = new Intl.DateTimeFormat('es', { day: 'numeric', month: 'long', year: 'numeric' })

function formatearFecha(iso) {
  // Interpretar YYYY-MM-DD como fecha local (evita el desfase de un día por UTC).
  const partes = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso)
  const d = partes
    ? new Date(Number(partes[1]), Number(partes[2]) - 1, Number(partes[3]))
    : new Date(iso)
  return Number.isNaN(d.getTime()) ? iso : FMT_FECHA.format(d)
}

export const notas = Object.entries(archivos)
  .map(([ruta, raw]) => {
    const { meta, body } = parseFrontmatter(raw)
    return {
      slug: slugDesdeRuta(ruta),
      title: meta.title || slugDesdeRuta(ruta),
      description: meta.description || '',
      date: meta.date || '',
      fechaLegible: meta.date ? formatearFecha(meta.date) : '',
      tags: meta.tags || [],
      lectura: tiempoLectura(body),
      html: marked.parse(body),
    }
  })
  // Más recientes primero.
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))

export const getNota = (slug) => notas.find((n) => n.slug === slug)
