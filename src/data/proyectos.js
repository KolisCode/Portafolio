import tiendakit1 from '../assets/proyectos/tiendakit-1.webp'
import tiendakit2 from '../assets/proyectos/tiendakit-2.webp'
import tiendakit3 from '../assets/proyectos/tiendakit-3.webp'
import tiendakit4 from '../assets/proyectos/tiendakit-4.webp'

import lotesrb1 from '../assets/proyectos/lotesrb-1.webp'
import lotesrb2 from '../assets/proyectos/lotesrb-2.webp'
import lotesrb3 from '../assets/proyectos/lotesrb-3.webp'
import lotesrb4 from '../assets/proyectos/lotesrb-4.webp'

import biodont1 from '../assets/proyectos/biodont-1.webp'
import biodont2 from '../assets/proyectos/biodont-2.webp'
import biodont3 from '../assets/proyectos/biodont-3.webp'
import biodont4 from '../assets/proyectos/biodont-4.webp'

import koliskit1 from '../assets/proyectos/koliskit-1.webp'
import koliskit2 from '../assets/proyectos/koliskit-2.webp'
import koliskit3 from '../assets/proyectos/koliskit-3.webp'
import koliskit4 from '../assets/proyectos/koliskit-4.webp'

import coreframe1 from '../assets/proyectos/coreframe-1.webp'
import coreframe2 from '../assets/proyectos/coreframe-2.webp'
import coreframe3 from '../assets/proyectos/coreframe-3.webp'
import coreframe4 from '../assets/proyectos/coreframe-4.webp'

export const proyectos = [
    {
        id: 4,
        nombre: 'KolisKit',
        descripcion: 'Toolbox de utilidades en línea: acortador de enlaces con analytics, códigos QR, contraseñas seguras, conversor de monedas y unidades. Landing pública + API REST con API keys, rate limiting por plan y documentación OpenAPI.',
        stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Tailwind', 'Scalar'],
        estado: 'Lanzado',
        imagenes: [koliskit1, koliskit2, koliskit3, koliskit4],
        github: '',
        demo: 'https://api.koliscode.com',
    },
    {
        id: 1,
        nombre: 'TiendaKit',
        descripcion: 'Tienda en línea genérica con catálogo, carrito y checkout real con MercadoPago. Panel admin para gestionar inventario, productos y órdenes.',
        stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'MercadoPago'],
        estado: 'Lanzado',
        imagenes: [tiendakit1, tiendakit2, tiendakit3, tiendakit4],
        github: '',
        demo: 'https://tiendakit.koliscode.com',
    },
    {
        id: 2,
        nombre: 'LotesRB',
        descripcion: 'Portal inmobiliario para la venta de lotes. Catálogo con filtros, detalle de lote con galería de imágenes y panel de administración completo.',
        stack: ['Angular 21', 'NestJS', 'PostgreSQL', 'Prisma', 'JWT'],
        estado: 'Lanzado',
        imagenes: [lotesrb1, lotesrb2, lotesrb3, lotesrb4],
        github: 'https://github.com/KolisCode/lotesRB',
        demo: 'https://lotesrb.koliscode.com',
    },
    {
        id: 3,
        nombre: 'Biodont',
        descripcion: 'Sistema de gestión para consultorio odontológico. Odontograma digital interactivo, historia clínica, agenda de citas y módulo de finanzas.',
        stack: ['Angular', 'Node.js', 'Express', 'Prisma', 'SQLite'],
        estado: 'Lanzado',
        imagenes: [biodont1, biodont2, biodont3, biodont4],
        github: 'https://github.com/KolisCode/Biodont',
        demo: '',
    },
    {
        id: 5,
        nombre: 'CoreFrame',
        descripcion: 'Sitio del estudio de desarrollo CoreFrame: presentación del equipo, portafolio de proyectos con carrusel y formulario de contacto directo. Renderizado en servidor con Next.js.',
        stack: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
        estado: 'Lanzado',
        imagenes: [coreframe1, coreframe2, coreframe3, coreframe4],
        github: '',
        demo: 'https://coreframe.koliscode.com',
    },
]
