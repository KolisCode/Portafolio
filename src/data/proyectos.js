import lotesrb1 from '../assets/proyectos/lotesrb-1.png'
import lotesrb2 from '../assets/proyectos/lotesrb-2.png'
import lotesrb3 from '../assets/proyectos/lotesrb-3.png'
import lotesrb4 from '../assets/proyectos/lotesrb-4.png'

import biodont1 from '../assets/proyectos/biodont-1.png'
import biodont2 from '../assets/proyectos/biodont-2.png'
import biodont3 from '../assets/proyectos/biodont-3.png'
import biodont4 from '../assets/proyectos/biodont-4.png'

export const proyectos = [
    {
        id: 1,
        nombre: 'TiendaKit',
        descripcion: 'Tienda en línea genérica con catálogo, carrito y checkout real con MercadoPago. Panel admin para gestionar inventario, productos y órdenes.',
        stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'MercadoPago'],
        estado: 'En desarrollo',
        imagenes: [],
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
        demo: 'https://lotesrb.kolisevm.online',
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
