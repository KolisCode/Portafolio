import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ProyectoDetalle.css'
import { proyectos, getProyecto } from '../data/proyectos.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import Carrusel from '../components/Carrusel/Carrusel.jsx'
import Lightbox from '../components/Lightbox/Lightbox.jsx'

const estadoSlug = (estado) => estado.toLowerCase().replace(/\s+/g, '-')

function ProyectoDetalle() {
  const { slug } = useParams()
  const proyecto = getProyecto(slug)
  const [lightbox, setLightbox] = useState(null)

  useScrollReveal()

  if (!proyecto) {
    return (
      <section className="section detalle__notfound">
        <p className="section__label">404</p>
        <h1 className="section__title">Ese proyecto no existe</h1>
        <Link to="/#proyectos" className="detalle__back">← Volver a proyectos</Link>
      </section>
    )
  }

  const { nombre, tagline, descripcion, estado, stack, github, demo, imagenes, caso } = proyecto

  // Navegación prev/siguiente en el orden del array
  const idx = proyectos.findIndex((p) => p.slug === slug)
  const prev = proyectos[(idx - 1 + proyectos.length) % proyectos.length]
  const next = proyectos[(idx + 1) % proyectos.length]

  return (
    <article className="detalle">
      <div className="detalle__inner">
        <Link to="/#proyectos" className="detalle__back">← Proyectos</Link>

        {/* ── Encabezado ── */}
        <header className="detalle__header">
          <div className="detalle__titlerow">
            <h1 className="detalle__title">{nombre}</h1>
            <span className={`detalle__badge detalle__badge--${estadoSlug(estado)}`}>{estado}</span>
          </div>
          <p className="detalle__tagline">{tagline || descripcion}</p>

          <div className="detalle__stack">
            {stack.map((tech) => (
              <span key={tech} className="detalle__tech">{tech}</span>
            ))}
          </div>

          {(github || demo) && (
            <div className="detalle__links">
              {demo && (
                <a href={demo} target="_blank" rel="noopener noreferrer" className="detalle__link detalle__link--primary">
                  Ver demo ↗
                </a>
              )}
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="detalle__link">
                  Código en GitHub ↗
                </a>
              )}
            </div>
          )}
        </header>

        {/* ── Galería ── */}
        {imagenes.length > 0 ? (
          <div className="detalle__galeria" data-reveal>
            <Carrusel
              imagenes={imagenes}
              nombre={nombre}
              onOpen={(imgs, i, alt) => setLightbox({ imagenes: imgs, initialIdx: i, alt })}
            />
          </div>
        ) : (
          <div className="detalle__galeria detalle__galeria--placeholder" data-reveal>
            <span>{nombre}</span>
            <p>Capturas próximamente</p>
          </div>
        )}

        {/* ── Meta + resumen ── */}
        {caso && (
          <div className="detalle__grid">
            <aside className="detalle__meta" data-reveal="left">
              {caso.rol && (
                <div className="detalle__metaitem">
                  <span className="detalle__metalabel">Rol</span>
                  <span className="detalle__metavalue">{caso.rol}</span>
                </div>
              )}
              {caso.periodo && (
                <div className="detalle__metaitem">
                  <span className="detalle__metalabel">Periodo</span>
                  <span className="detalle__metavalue">{caso.periodo}</span>
                </div>
              )}
              <div className="detalle__metaitem">
                <span className="detalle__metalabel">Estado</span>
                <span className="detalle__metavalue">{estado}</span>
              </div>
            </aside>

            <div className="detalle__body">
              {caso.resumen && <p className="detalle__resumen" data-reveal>{caso.resumen}</p>}

              {caso.problema && (
                <section className="detalle__bloque" data-reveal>
                  <h2 className="detalle__h2">El problema</h2>
                  <p>{caso.problema}</p>
                </section>
              )}

              {caso.solucion && (
                <section className="detalle__bloque" data-reveal>
                  <h2 className="detalle__h2">La solución</h2>
                  <p>{caso.solucion}</p>
                </section>
              )}

              {caso.arquitectura?.length > 0 && (
                <section className="detalle__bloque" data-reveal>
                  <h2 className="detalle__h2">Arquitectura</h2>
                  <ul className="detalle__lista">
                    {caso.arquitectura.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}

              {caso.decisiones?.length > 0 && (
                <section className="detalle__bloque" data-reveal>
                  <h2 className="detalle__h2">Decisiones técnicas</h2>
                  <div className="detalle__decisiones">
                    {caso.decisiones.map((d, i) => (
                      <div key={i} className="detalle__decision">
                        <h3 className="detalle__decision-titulo">{d.titulo}</h3>
                        <p className="detalle__decision-detalle">{d.detalle}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {caso.resultados?.length > 0 && (
                <section className="detalle__bloque" data-reveal>
                  <h2 className="detalle__h2">Resultados</h2>
                  <ul className="detalle__lista detalle__lista--check">
                    {caso.resultados.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>
        )}

        {/* ── Navegación entre proyectos ── */}
        <nav className="detalle__nav">
          <Link to={`/proyectos/${prev.slug}`} className="detalle__navlink detalle__navlink--prev">
            <span className="detalle__navdir">← Anterior</span>
            <span className="detalle__navnombre">{prev.nombre}</span>
          </Link>
          <Link to={`/proyectos/${next.slug}`} className="detalle__navlink detalle__navlink--next">
            <span className="detalle__navdir">Siguiente →</span>
            <span className="detalle__navnombre">{next.nombre}</span>
          </Link>
        </nav>
      </div>

      {lightbox && (
        <Lightbox
          imagenes={lightbox.imagenes}
          initialIdx={lightbox.initialIdx}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </article>
  )
}

export default ProyectoDetalle
