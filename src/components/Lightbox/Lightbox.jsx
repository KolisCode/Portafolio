import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Lightbox.css';

function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lightbox__close" onClick={onClose} aria-label="Cerrar">✕</button>
      <div className="lightbox__frame" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox__bar">
          <span className="lightbox__dot" />
          <span className="lightbox__dot" />
          <span className="lightbox__dot" />
          <span className="lightbox__title">{alt}</span>
        </div>
        <img src={src} alt={alt} className="lightbox__img" />
      </div>
    </div>,
    document.body
  );
}

export default Lightbox;
