import './Navbar.css'
import markSvg from '../../assets/mark.svg'

function Navbar() {
  return (
    <nav className='navbar'>
      <a href="#hero" className='navbar__brand'>
        <img src={markSvg} alt="KolisCode mark" className='navbar__mark' />
        <span className='navbar__name'>KolisCode</span>
      </a>

      <ul className='navbar__links'>
        <li><a href="#proyectos">proyectos</a></li>
        <li><a href="#stack">stack</a></li>
        <li><a href="#sobre-mi">sobre mí</a></li>
        <li><a href="#contacto">contacto</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
