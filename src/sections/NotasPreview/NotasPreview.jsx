import { Link } from 'react-router-dom'
import './NotasPreview.css'
import { notas } from '../../data/notas.js'

function NotasPreview() {
  const recientes = notas.slice(0, 2)
  if (recientes.length === 0) return null

  return (
    <section id="notas-preview" className="section notas-preview">
      <div className="notas-preview__head">
        <div>
          <p className="section__label">notas</p>
          <h2 className="section__title notas-preview__title">Del blog</h2>
        </div>
        <Link to="/notas" className="notas-preview__todas">
          Ver todas <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="notas-preview__grid">
        {recientes.map((n) => (
          <Link key={n.slug} to={`/notas/${n.slug}`} className="notas-preview__card">
            <div className="notas-preview__meta">
              {n.fechaLegible && <time>{n.fechaLegible}</time>}
              <span className="notas-preview__sep">·</span>
              <span>{n.lectura} min</span>
            </div>
            <h3 className="notas-preview__card-title">{n.title}</h3>
            <p className="notas-preview__desc">{n.description}</p>
            <span className="notas-preview__leer">Leer <span aria-hidden="true">→</span></span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default NotasPreview
