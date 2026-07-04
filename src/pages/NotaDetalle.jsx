import { useParams, Link } from 'react-router-dom'
import './NotaDetalle.css'
import { notas, getNota } from '../data/notas.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

function NotaDetalle() {
  const { slug } = useParams()
  const nota = getNota(slug)

  useScrollReveal()

  if (!nota) {
    return (
      <section className="section" style={{ minHeight: '60vh', textAlign: 'center' }}>
        <p className="section__label">404</p>
        <h1 className="section__title">Esa nota no existe</h1>
        <Link to="/notas" className="nota-detalle__back">← Volver a notas</Link>
      </section>
    )
  }

  const idx = notas.findIndex((n) => n.slug === slug)
  const siguiente = notas[idx + 1] // más antigua

  return (
    <article className="nota-detalle">
      <div className="nota-detalle__inner">
        <Link to="/notas" className="nota-detalle__back">← Notas</Link>

        <header className="nota-detalle__header">
          <div className="nota-detalle__meta">
            {nota.fechaLegible && <time>{nota.fechaLegible}</time>}
            <span className="nota-detalle__sep">·</span>
            <span>{nota.lectura} min de lectura</span>
          </div>
          <h1 className="nota-detalle__title">{nota.title}</h1>
          {nota.tags.length > 0 && (
            <div className="nota-detalle__tags">
              {nota.tags.map((t) => (
                <span key={t} className="nota-detalle__tag">{t}</span>
              ))}
            </div>
          )}
        </header>

        {/* Contenido Markdown (autoría propia, confiable). */}
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: nota.html }}
        />

        {siguiente && (
          <nav className="nota-detalle__nav">
            <span className="nota-detalle__navlabel">Siguiente nota</span>
            <Link to={`/notas/${siguiente.slug}`} className="nota-detalle__navlink">
              {siguiente.title} <span aria-hidden="true">→</span>
            </Link>
          </nav>
        )}
      </div>
    </article>
  )
}

export default NotaDetalle
