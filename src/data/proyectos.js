import lotesrbImg from '../assets/proyectos/lotesrb.png'
import biodontImg from '../assets/proyectos/biodont.png'

export const proyectos = [
    {
        id: 1,
        nombre: 'TiendaKit',
        descripcion: 'Tienda en línea genérica con catálogo, carrito y checkout real con MercadoPago. Panel admin para gestionar inventario, productos y órdenes.',
        stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'MercadoPago'],
        estado: 'En desarrollo',
        imagen: null,
        github: '',
        demo: '',
    },
    {
        id: 2,
        nombre: 'LotesRB',
        descripcion: 'Portal inmobiliario para la venta de lotes. Catálogo con filtros, detalle de lote con galería de imágenes y panel de administración completo.',
        stack: ['Angular 21', 'NestJS', 'PostgreSQL', 'Prisma', 'JWT'],
        estado: 'Lanzado',
        imagen: lotesrbImg,
        github: 'https://github.com/KolisCode/lotesRB',
        demo: 'https://lotesrb.kolisevm.online',
    },
    {
        id: 3,
        nombre: 'Biodont',
        descripcion: 'Sistema de gestión para consultorio odontológico. Odontograma digital interactivo, historia clínica, agenda de citas y módulo de finanzas.',
        stack: ['Angular', 'Node.js', 'Express', 'Prisma', 'SQLite'],
        estado: 'Lanzado',
        imagen: biodontImg,
        github: 'https://github.com/KolisCode/Biodont',
        demo: '',
    },
]
