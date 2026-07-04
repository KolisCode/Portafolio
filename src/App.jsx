import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './pages/Home.jsx'
import ProyectoDetalle from './pages/ProyectoDetalle.jsx'
import Notas from './pages/Notas.jsx'
import NotaDetalle from './pages/NotaDetalle.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="proyectos/:slug" element={<ProyectoDetalle />} />
        <Route path="notas" element={<Notas />} />
        <Route path="notas/:slug" element={<NotaDetalle />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
