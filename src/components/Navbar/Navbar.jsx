import { useState } from 'react';
import './Navbar.css';
import markSvg from '../../assets/mark.svg';
import { useActiveSection } from '../../hooks/useActiveSection.js';

const NAV_LINKS = [
  { href: '#proyectos', label: 'proyectos', id: 'proyectos' },
  { href: '#stack',     label: 'stack',     id: 'stack'     },
  { href: '#sobre-mi',  label: 'sobre mí',  id: 'sobre-mi'  },
  { href: '#contacto',  label: 'contacto',  id: 'contacto'  },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.id));

  const close = () => setOpen(false);

  return (
    <nav className={`navbar${open ? ' navbar--open' : ''}`}>
      <a href="#hero" className="navbar__brand" onClick={close}>
        <img src={markSvg} alt="KolisCode mark" className="navbar__mark" />
        <span className="navbar__name">KolisCode</span>
      </a>

      <ul className="navbar__links">
        {NAV_LINKS.map(({ href, label, id }) => (
          <li key={id}>
            <a
              href={href}
              className={`navbar__link${activeId === id ? ' navbar__link--active' : ''}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="navbar__hamburger"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>

      {open && (
        <div className="navbar__mobile">
          {NAV_LINKS.map(({ href, label, id }) => (
            <a
              key={id}
              href={href}
              className={`navbar__mobile-link${activeId === id ? ' navbar__link--active' : ''}`}
              onClick={close}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
