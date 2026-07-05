import { useScrollReveal } from '../hooks/useScrollReveal.js'
import Hero from '../sections/Hero/Hero.jsx'
import Servicios from '../sections/Servicios/Servicios.jsx'
import Proyectos from '../sections/Proyectos/Proyectos.jsx'
import Stack from '../sections/Stack/Stack.jsx'
import SobreMi from '../sections/SobreMi/SobreMi.jsx'
import NotasPreview from '../sections/NotasPreview/NotasPreview.jsx'
import Cotizacion from '../sections/Cotizacion/Cotizacion.jsx'
import Contacto from '../sections/Contacto/Contacto.jsx'

function Home() {
  useScrollReveal()

  return (
    <>
      <Hero />
      <div data-reveal="fade" className="band band--dots"><Servicios /></div>
      <div data-reveal="fade" className="band band--tint band--diagonal"><Proyectos /></div>
      <div data-reveal data-delay="100" className="band band--grid"><Stack /></div>
      <div data-reveal className="band band--tint band--glow"><SobreMi /></div>
      <div data-reveal className="band band--dots"><NotasPreview /></div>
      <div data-reveal className="band band--tint band--diagonal"><Cotizacion /></div>
      <div data-reveal data-delay="100" className="band band--glow-top"><Contacto /></div>
    </>
  )
}

export default Home
