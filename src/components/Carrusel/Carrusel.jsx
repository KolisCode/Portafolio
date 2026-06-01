import { useState } from 'react';
import './Carrusel.css';

function Carrusel({ imagenes, nombre, onOpen }) {
  const [idx, setIdx] = useState(0);
  const total = imagenes.length;

  const prev = (e) => {
    e.stopPropagation();
    setIdx((i) => (i - 1 + total) % total);
  };

  const next = (e) => {
    e.stopPropagation();
    setIdx((i) => (i + 1) % total);
  };

  const goTo = (e, i) => {
    e.stopPropagation();
    setIdx(i);
  };

  return (
    <div className="carrusel" onClick={() => onOpen(imagenes, idx, nombre)}>

      <div className="carrusel__viewport">
        <div
          className="carrusel__track"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {imagenes.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${nombre} — vista ${i + 1}`}
              className="carrusel__img"
              draggable={false}
            />
          ))}
        </div>
      </div>

      {total > 1 && (
        <>
          <button
            className="carrusel__btn carrusel__btn--prev"
            onClick={prev}
            aria-label="Imagen anterior"
          >
            ‹
          </button>
          <button
            className="carrusel__btn carrusel__btn--next"
            onClick={next}
            aria-label="Imagen siguiente"
          >
            ›
          </button>

          <div className="carrusel__dots">
            {imagenes.map((_, i) => (
              <button
                key={i}
                className={`carrusel__dot${i === idx ? ' carrusel__dot--active' : ''}`}
                onClick={(e) => goTo(e, i)}
                aria-label={`Ir a imagen ${i + 1}`}
              />
            ))}
          </div>

          <span className="carrusel__counter">{idx + 1} / {total}</span>
        </>
      )}

      <span className="carrusel__hint">
        <ZoomIcon /> Ver captura
      </span>

    </div>
  );
}

function ZoomIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
    </svg>
  );
}

export default Carrusel;
