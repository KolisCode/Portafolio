import tiendakit1 from '../assets/proyectos/tiendakit-1.png'
import tiendakit2 from '../assets/proyectos/tiendakit-2.png'
import tiendakit3 from '../assets/proyectos/tiendakit-3.png'
import tiendakit4 from '../assets/proyectos/tiendakit-4.png'

import lotesrb1 from '../assets/proyectos/lotesrb-1.png'
import lotesrb2 from '../assets/proyectos/lotesrb-2.png'
import lotesrb3 from '../assets/proyectos/lotesrb-3.png'
import lotesrb4 from '../assets/proyectos/lotesrb-4.png'

import biodont1 from '../assets/proyectos/biodont-1.png'
import biodont2 from '../assets/proyectos/biodont-2.png'
import biodont3 from '../assets/proyectos/biodont-3.png'
import biodont4 from '../assets/proyectos/biodont-4.png'

import koliskit1 from '../assets/proyectos/koliskit-1.png'
import koliskit2 from '../assets/proyectos/koliskit-2.png'
import koliskit3 from '../assets/proyectos/koliskit-3.png'
import koliskit4 from '../assets/proyectos/koliskit-4.png'

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
        estado: 'En desarrollo',
        imagenes: [tiendakit1, tiendakit2, tiendakit3, tiendakit4],
        github: '',
        demo: '',
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
]
