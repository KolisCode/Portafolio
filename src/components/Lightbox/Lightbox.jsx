import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './Lightbox.css';

function Lightbox({ imagenes, initialIdx = 0, alt, onClose }) {
  const [idx, setIdx] = useState(initialIdx);
  const total = imagenes.length;

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowLeft')  setIdx((i) => (i - 1 + total) % total);
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % total);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, total]);

  return createPortal(
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">

      <button className="lightbox__close" onClick={onClose} aria-label="Cerrar">✕</button>

      <div className="lightbox__frame" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox__bar">
          <span className="lightbox__dot" />
          <span className="lightbox__dot" />
          <span className="lightbox__dot" />
          <span className="lightbox__title">{alt}</span>
          {total > 1 && (
            <span className="lightbox__counter">{idx + 1} / {total}</span>
          )}
        </div>

        <div className="lightbox__img-wrapper">
          <img
            key={idx}
            src={imagenes[idx]}
            alt={`${alt} — ${idx + 1}`}
            className="lightbox__img"
          />
        </div>
      </div>

      {total > 1 && (
        <>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Imagen anterior"
          >
            ‹
          </button>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Imagen siguiente"
          >
            ›
          </button>

          <div className="lightbox__dots" onClick={(e) => e.stopPropagation()}>
            {imagenes.map((_, i) => (
              <button
                key={i}
                className={`lightbox__dot-nav${i === idx ? ' lightbox__dot-nav--active' : ''}`}
                onClick={() => setIdx(i)}
                aria-label={`Ir a imagen ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}

    </div>,
    document.body
  );
}

export default Lightbox;
