import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Proyectos.css';
import { proyectos } from '../../data/proyectos.js';
import Lightbox from '../../components/Lightbox/Lightbox.jsx';
import Carrusel from '../../components/Carrusel/Carrusel.jsx';

const estadoSlug = (estado) => estado.toLowerCase().replace(/\s+/g, '-');

function Proyectos() {
  const [lightbox, setLightbox] = useState(null); // { imagenes, idx, alt }

  return (
    <section id="proyectos" className="section proyectos">
      <p className="section__label">proyectos</p>
      <h2 className="section__title">Cosas que construí</h2>

      <div className="proyectos__grid">
        {proyectos.map((p) => (
          <article key={p.id} className="proyecto__card">

            {p.imagenes.length > 0 ? (
              <Carrusel
                imagenes={p.imagenes}
                nombre={p.nombre}
                onOpen={(imgs, idx, alt) => setLightbox({ imagenes: imgs, initialIdx: idx, alt })}
              />
            ) : (
              <div className="proyecto__imagen proyecto__imagen--placeholder">
                <PlaceholderIcon />
              </div>
            )}

            <div className="proyecto__body">
              <div className="proyecto__card-header">
                <h3 className="proyecto__nombre">
                  <Link to={`/proyectos/${p.slug}`} className="proyecto__nombre-link">{p.nombre}</Link>
                </h3>
                <span className={`proyecto__badge proyecto__badge--${estadoSlug(p.estado)}`}>
                  {p.estado}
                </span>
              </div>

              <p className="proyecto__descripcion">{p.descripcion}</p>

              <div className="proyecto__stack">
                {p.stack.map((tech) => (
                  <span key={tech} className="proyecto__tech">{tech}</span>
                ))}
              </div>

              <div className="proyecto__links">
                <Link to={`/proyectos/${p.slug}`} className="proyecto__link proyecto__link--caso">
                  Ver caso <span aria-hidden="true">→</span>
                </Link>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="proyecto__link">
                    <GithubIcon /> Código
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="proyecto__link">
                    <ExternalIcon /> Demo
                  </a>
                )}
              </div>
            </div>

          </article>
        ))}
      </div>

      {lightbox && (
        <Lightbox
          imagenes={lightbox.imagenes}
          initialIdx={lightbox.initialIdx}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}

function PlaceholderIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default Proyectos;
