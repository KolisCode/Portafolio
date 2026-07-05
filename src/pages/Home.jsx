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
      <div data-reveal="fade"><Servicios /></div>
      <div data-reveal="fade"><Proyectos /></div>
      <div data-reveal data-delay="100"><Stack /></div>
      <div data-reveal><SobreMi /></div>
      <div data-reveal><NotasPreview /></div>
      <div data-reveal><Cotizacion /></div>
      <div data-reveal data-delay="100"><Contacto /></div>
    </>
  )
}

export default Home
