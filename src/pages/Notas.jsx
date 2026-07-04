import { Link } from 'react-router-dom'
import './Notas.css'
import { notas } from '../data/notas.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

function Notas() {
  useScrollReveal()

  return (
    <section className="section notas">
      <p className="section__label">notas</p>
      <h2 className="section__title">Notas técnicas</h2>
      <p className="notas__intro">
        Decisiones de ingeniería detrás de los proyectos: por qué elegí lo que elegí,
        y qué aprendí en el camino.
      </p>

      <ul className="notas__lista">
        {notas.map((n) => (
          <li key={n.slug} data-reveal>
            <Link to={`/notas/${n.slug}`} className="nota__card">
              <div className="nota__meta">
                {n.fechaLegible && <time>{n.fechaLegible}</time>}
                <span className="nota__sep">·</span>
                <span>{n.lectura} min de lectura</span>
              </div>
              <h3 className="nota__titulo">{n.title}</h3>
              <p className="nota__desc">{n.description}</p>
              {n.tags.length > 0 && (
                <div className="nota__tags">
                  {n.tags.map((t) => (
                    <span key={t} className="nota__tag">{t}</span>
                  ))}
                </div>
              )}
              <span className="nota__leer">Leer <span aria-hidden="true">→</span></span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Notas
