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

import geoagent1 from '../assets/proyectos/geoagent-1.webp'
import geoagent2 from '../assets/proyectos/geoagent-2.webp'
import geoagent3 from '../assets/proyectos/geoagent-3.webp'

/**
 * Fuente de verdad de proyectos.
 *
 * Campos de card (home): id, slug, nombre, tagline, descripcion, stack[], estado,
 *   imagenes[], github, demo, destacado
 * Campo de caso de estudio (página /proyectos/:slug): `caso`
 *   { rol, periodo, resumen, problema, solucion, arquitectura[], decisiones[], resultados[] }
 *   - arquitectura: array de strings (bullets del diseño técnico)
 *   - decisiones:   array de { titulo, detalle } (por qué de cada decisión clave)
 *   - resultados:   array de strings (impacto / logros)
 *   Todo `caso` es opcional; la página degrada con gracia si falta un bloque.
 */
export const proyectos = [
    {
        id: 4,
        slug: 'koliskit',
        nombre: 'KolisKit',
        tagline: 'Toolbox de utilidades en línea con API pública.',
        descripcion: 'Toolbox de utilidades en línea: acortador de enlaces con analytics, códigos QR, contraseñas seguras, conversor de monedas y unidades. Landing pública + API REST con API keys, rate limiting por plan y documentación OpenAPI.',
        stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Tailwind', 'Scalar'],
        estado: 'Lanzado',
        imagenes: [koliskit1, koliskit2, koliskit3, koliskit4],
        github: '',
        demo: 'https://api.koliscode.com',
        destacado: true,
        caso: {
            rol: 'Diseño, backend y frontend (full-stack)',
            periodo: '2025',
            resumen: 'Un conjunto de micro-utilidades que la gente usa a diario, empaquetadas como producto: landing pública gratuita por encima de una API REST monetizable con planes y llaves.',
            problema: 'Las utilidades sueltas (acortadores, generadores de QR, conversores) están dispersas en sitios llenos de anuncios y sin API confiable. Quería un solo lugar con UX limpia y, debajo, una API que otros desarrolladores pudieran consumir con límites por plan.',
            solucion: 'Construí un monolito NestJS que expone cada utilidad como módulo independiente, con una capa de autenticación por API key y rate limiting configurable por plan. La landing en Tailwind consume la misma API que los clientes externos — misma superficie, sin caminos privilegiados.',
            arquitectura: [
                'NestJS modular: un módulo por utilidad (links, qr, password, currency, units) desacoplado del resto.',
                'Prisma + PostgreSQL para llaves de API, planes, y analítica de clicks del acortador.',
                'Guard de API key + interceptor de rate limiting que lee el plan asociado a la llave.',
                'Documentación OpenAPI servida con Scalar (referencia interactiva en /docs).',
            ],
            decisiones: [
                { titulo: 'API primero, landing como cliente', detalle: 'La web pública consume exactamente la misma API que un tercero. Evita divergencia y prueba la API en producción con cada visita.' },
                { titulo: 'Rate limiting por plan, no global', detalle: 'El límite vive atado a la llave y su plan, lo que permite planes gratuitos y de pago sin cambiar código, solo datos.' },
                { titulo: 'Scalar sobre Swagger UI', detalle: 'Referencia OpenAPI más legible y moderna, con "try it" incluido, para que integrar la API sea autoservicio.' },
            ],
            resultados: [
                'API pública en producción en api.koliscode.com con documentación autoservicio.',
                'Base extensible: agregar una utilidad nueva es agregar un módulo, no tocar el núcleo.',
            ],
        },
    },
    {
        id: 1,
        slug: 'tiendakit',
        nombre: 'TiendaKit',
        tagline: 'E-commerce llave en mano con checkout real.',
        descripcion: 'Tienda en línea genérica con catálogo, carrito y checkout real con MercadoPago. Panel admin para gestionar inventario, productos y órdenes.',
        stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'MercadoPago'],
        estado: 'Lanzado',
        imagenes: [tiendakit1, tiendakit2, tiendakit3, tiendakit4],
        github: '',
        demo: 'https://tiendakit.koliscode.com',
        destacado: true,
        caso: {
            rol: 'Full-stack (storefront + API + panel admin)',
            periodo: '2025',
            resumen: 'Una base de e-commerce reutilizable: catálogo, carrito y pago real con MercadoPago, más un panel de administración para que el dueño de la tienda opere sin tocar código.',
            problema: 'Cada cliente pequeño que quiere vender en línea necesita lo mismo — catálogo, carrito, pago, gestión de órdenes — pero rehacerlo desde cero cada vez no escala. Necesitaba una plantilla sólida que se pudiera personalizar por tienda.',
            solucion: 'Separé el storefront (Next.js) del backend (NestJS) para poder desplegar y marcar cada tienda de forma independiente. El checkout usa el flujo real de MercadoPago con webhooks para confirmar pagos, y el panel admin cubre inventario, productos y órdenes.',
            arquitectura: [
                'Storefront Next.js con renderizado del catálogo y carrito persistente.',
                'API NestJS + Prisma/PostgreSQL como fuente de verdad de productos, stock y órdenes.',
                'Integración MercadoPago con webhooks para confirmar el pago antes de marcar la orden como pagada.',
                'Panel admin protegido para CRUD de inventario y seguimiento de órdenes.',
            ],
            decisiones: [
                { titulo: 'Storefront y API desacoplados', detalle: 'Permite reusar el mismo backend para varias tiendas y personalizar el frente por cliente sin bifurcar la lógica de negocio.' },
                { titulo: 'Confirmar pago por webhook, no por redirect', detalle: 'El estado de la orden depende del webhook de MercadoPago, no de que el usuario vuelva a la página — evita órdenes "pagadas" que nunca se cobraron.' },
            ],
            resultados: [
                'Demo pública operativa en tiendakit.koliscode.com con checkout real.',
                'Plantilla reutilizable: una tienda nueva es configuración + branding, no reescritura.',
            ],
        },
    },
    {
        id: 2,
        slug: 'lotesrb',
        nombre: 'LotesRB',
        tagline: 'Portal inmobiliario para venta de lotes.',
        descripcion: 'Portal inmobiliario para la venta de lotes. Catálogo con filtros, detalle de lote con galería de imágenes y panel de administración completo.',
        stack: ['Angular 21', 'NestJS', 'PostgreSQL', 'Prisma', 'JWT'],
        estado: 'Lanzado',
        imagenes: [lotesrb1, lotesrb2, lotesrb3, lotesrb4],
        github: 'https://github.com/KolisCode/lotesRB',
        demo: 'https://lotesrb.koliscode.com',
        caso: {
            rol: 'Full-stack (frontend Angular + API NestJS)',
            periodo: '2025',
            resumen: 'Portal para una inmobiliaria: catálogo de lotes con filtros, fichas con galería, y un panel de administración para publicar y mantener el inventario.',
            problema: 'La venta de lotes se manejaba por canales informales, sin un catálogo navegable ni un lugar donde el equipo pudiera actualizar disponibilidad y precios por su cuenta.',
            solucion: 'Un frontend Angular con catálogo filtrable y fichas de lote con galería, respaldado por una API NestJS con autenticación JWT y un panel de administración completo para el CRUD del inventario.',
            arquitectura: [
                'Frontend Angular con catálogo filtrable y detalle de lote con galería.',
                'API NestJS + Prisma/PostgreSQL para lotes, imágenes y usuarios.',
                'Autenticación JWT que separa el catálogo público del panel de administración.',
            ],
            decisiones: [
                { titulo: 'Panel de administración propio', detalle: 'El cliente mantiene el inventario sin depender del desarrollador — publicar un lote es una operación de negocio, no un deploy.' },
            ],
            resultados: [
                'Portal en producción en lotesrb.koliscode.com.',
                'Código abierto en GitHub como referencia.',
            ],
        },
    },
    {
        id: 3,
        slug: 'biodont',
        nombre: 'Biodont',
        tagline: 'Sistema de gestión para consultorio odontológico.',
        descripcion: 'Sistema de gestión para consultorio odontológico. Odontograma digital interactivo, historia clínica, agenda de citas y módulo de finanzas.',
        stack: ['Angular', 'Node.js', 'Express', 'Prisma', 'SQLite'],
        estado: 'Lanzado',
        imagenes: [biodont1, biodont2, biodont3, biodont4],
        github: 'https://github.com/KolisCode/Biodont',
        demo: '',
        caso: {
            rol: 'Full-stack (frontend + API + componente odontograma)',
            periodo: '2024 – 2025',
            resumen: 'Sistema de gestión clínica para odontología: odontograma digital interactivo, historia clínica, agenda de citas y finanzas — un consultorio operando sobre software propio.',
            problema: 'Los consultorios pequeños llevan la historia clínica y el odontograma en papel o en hojas de cálculo. El odontograma en particular es difícil de digitalizar: es una representación visual de cada diente y sus tratamientos.',
            solucion: 'Construí un odontograma digital interactivo como componente reusable, integrado a una historia clínica, agenda y módulo de finanzas. El sistema corre en el consultorio como herramienta clínica real, por lo que no lleva demo pública.',
            arquitectura: [
                'Odontograma como componente Angular independiente (repo propio) reutilizable.',
                'API Node/Express + Prisma para historia clínica, citas y finanzas.',
                'SQLite como base embebida, apropiada para el despliegue en un consultorio.',
            ],
            decisiones: [
                { titulo: 'Odontograma como componente aparte', detalle: 'Aislar la pieza más compleja del sistema en su propio repositorio permite versionarla y reusarla sin arrastrar todo Biodont.' },
                { titulo: 'Sin demo pública, por diseño', detalle: 'Es un sistema clínico con datos reales de pacientes; se muestra por capturas, no con un entorno abierto.' },
            ],
            resultados: [
                'Sistema clínico en uso real.',
                'Componente odontograma reutilizable, publicado como repositorio propio.',
            ],
        },
    },
    {
        id: 5,
        slug: 'coreframe',
        nombre: 'CoreFrame',
        tagline: 'Sitio del estudio de desarrollo CoreFrame.',
        descripcion: 'Sitio del estudio de desarrollo CoreFrame: presentación del equipo, portafolio de proyectos con carrusel y formulario de contacto directo. Renderizado en servidor con Next.js.',
        stack: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
        estado: 'Lanzado',
        imagenes: [coreframe1, coreframe2, coreframe3, coreframe4],
        github: '',
        demo: 'https://coreframe.koliscode.com',
        caso: {
            rol: 'Diseño y desarrollo del sitio',
            periodo: '2025',
            resumen: 'Sitio institucional de CoreFrame, un estudio de desarrollo: presentación del equipo, portafolio con carrusel y contacto directo, renderizado en servidor para SEO.',
            problema: 'Un estudio necesita una presencia que transmita solidez y facilite el primer contacto, con buen posicionamiento en buscadores desde el día uno.',
            solucion: 'Sitio en Next.js con renderizado en servidor, tipado en TypeScript y estilos con Tailwind, enfocado en carga rápida, SEO y un formulario de contacto que llega directo al estudio.',
            arquitectura: [
                'Next.js con SSR para que el contenido sea indexable y cargue rápido.',
                'TypeScript en todo el proyecto para seguridad de tipos.',
                'Tailwind para un sistema visual consistente.',
            ],
            decisiones: [
                { titulo: 'SSR para SEO', detalle: 'Un sitio de estudio vive de ser encontrado; el renderizado en servidor asegura que los buscadores vean el contenido completo.' },
            ],
            resultados: [
                'Sitio en producción en coreframe.koliscode.com.',
            ],
        },
    },
    {
        id: 6,
        slug: 'geoagent',
        nombre: 'GeoAgent',
        tagline: 'Copiloto geoestadístico con IA sobre datos espaciales.',
        descripcion: 'Copiloto de análisis geoestadístico: traduce preguntas en lenguaje natural a operaciones sobre datos espaciales (PostGIS/ArcGIS) mediante un agente de IA con herramientas (MCP) y una API en FastAPI.',
        stack: ['Python', 'FastAPI', 'MCP', 'PostGIS', 'ArcGIS'],
        estado: 'En desarrollo',
        imagenes: [geoagent1, geoagent2, geoagent3],
        github: '',
        demo: '',
        destacado: true,
        caso: {
            rol: 'Arquitectura y desarrollo (proyecto propio)',
            periodo: '2025 – actual',
            resumen: 'Un copiloto que deja hacer análisis geoestadístico conversando: el usuario pregunta en lenguaje natural y un agente de IA orquesta herramientas sobre datos espaciales reales (PostGIS, ArcGIS) para responder con datos, no con texto genérico.',
            problema: 'El análisis geoespacial exige dominar SQL espacial, PostGIS y herramientas GIS. Mucha gente sabe qué pregunta hacerle a los datos, pero no cómo traducirla a operaciones espaciales. Quería cerrar esa brecha con lenguaje natural, sin sacrificar rigor.',
            solucion: 'Diseñé un orquestador que conecta un modelo de lenguaje con un conjunto de herramientas (MCP) que ejecutan operaciones espaciales reales sobre PostGIS y ArcGIS. El modelo no inventa resultados: elige y encadena herramientas, y cada respuesta se apoya en datos consultados de verdad.',
            arquitectura: [
                'API en FastAPI como punto de entrada del copiloto.',
                'Orquestador que coordina el modelo de lenguaje con herramientas expuestas vía MCP (Model Context Protocol).',
                'Herramientas que ejecutan consultas espaciales reales sobre PostGIS y ArcGIS.',
                'Separación estricta entre razonamiento del modelo y ejecución de operaciones — el modelo decide, las herramientas hacen.',
            ],
            decisiones: [
                { titulo: 'Herramientas (MCP) en vez de generación libre de SQL', detalle: 'Exponer operaciones espaciales acotadas como herramientas hace las respuestas verificables y seguras, en lugar de dejar que el modelo escriba SQL arbitrario.' },
                { titulo: 'El modelo razona, las herramientas ejecutan', detalle: 'Cada dato que devuelve el copiloto proviene de una consulta real, no de la memoria del modelo — clave para confiar en el análisis.' },
            ],
            resultados: [
                'Núcleo del copiloto funcional (FastAPI + orquestador + herramientas MCP sobre PostGIS/ArcGIS).',
                'En desarrollo activo; sin entorno público todavía.',
            ],
        },
    },
    {
        id: 7,
        slug: 'metriboard',
        nombre: 'Metriboard',
        tagline: 'Dashboard de métricas sobre una API NestJS.',
        descripcion: 'Panel de métricas: agrega datos de negocio y los expone como indicadores y visualizaciones a través de una API NestJS con Prisma.',
        stack: ['NestJS', 'Prisma', 'PostgreSQL', 'React'],
        estado: 'En desarrollo',
        imagenes: [],
        github: 'https://github.com/KolisCode/metriboard',
        demo: '',
        caso: {
            rol: 'Full-stack (API de métricas + dashboard)',
            periodo: '2025 – actual',
            resumen: 'Un tablero para ver la salud de un negocio de un vistazo: la API agrega datos crudos en indicadores y los sirve a un dashboard con visualizaciones.',
            problema: 'Los datos de negocio suelen estar dispersos y sin una vista unificada. Sin un tablero, decidir se vuelve anecdótico en lugar de estar respaldado por métricas.',
            solucion: 'Una API NestJS que centraliza y agrega los datos en métricas, expuestas a un frontend que las presenta como indicadores y gráficos legibles.',
            arquitectura: [
                'API NestJS (metriboard-api) + Prisma para modelar y agregar métricas.',
                'Endpoints por indicador, pensados para alimentar visualizaciones.',
                'Frontend de dashboard que consume la API y renderiza KPIs y gráficos.',
            ],
            decisiones: [
                { titulo: 'Agregación en el backend', detalle: 'Las métricas se calculan del lado del servidor para que el frontend solo pinte — resultados consistentes sin importar el cliente.' },
            ],
            resultados: [
                'API de métricas en desarrollo, código en GitHub.',
            ],
        },
    },
    {
        id: 8,
        slug: 'dentalsaas',
        nombre: 'DentalSaaS',
        tagline: 'La versión SaaS multi-consultorio de la gestión dental.',
        descripcion: 'Plataforma SaaS de gestión odontológica pensada para múltiples consultorios: evoluciona la idea de Biodont hacia un producto multi-tenant.',
        stack: ['Prisma', 'PostgreSQL', 'Node.js', 'React'],
        estado: 'En desarrollo',
        imagenes: [],
        github: '',
        demo: '',
        caso: {
            rol: 'Arquitectura y desarrollo',
            periodo: '2025 – actual',
            resumen: 'El salto de Biodont (un consultorio) a producto: una plataforma SaaS donde varios consultorios operan aislados sobre la misma base, cada uno con sus datos y usuarios.',
            problema: 'Biodont resuelve un consultorio, pero replicarlo por cliente no escala. Un producto SaaS necesita servir a muchos consultorios desde un solo despliegue, sin que los datos de uno se crucen con los de otro.',
            solucion: 'Rediseñé el modelo de datos alrededor de multi-tenancy: cada consultorio es un tenant con sus pacientes, agenda y finanzas aislados, sobre una base y un despliegue compartidos.',
            arquitectura: [
                'Modelo de datos multi-tenant (Prisma/PostgreSQL) con aislamiento por consultorio.',
                'Núcleo de dominio heredado de la experiencia con Biodont (historia clínica, agenda, finanzas).',
                'Frontend de gestión pensado para operar varios consultorios.',
            ],
            decisiones: [
                { titulo: 'Multi-tenant desde el modelo de datos', detalle: 'El aislamiento entre consultorios se diseña en el esquema, no como parche posterior — es la decisión que define un SaaS.' },
                { titulo: 'Aprovechar el dominio de Biodont', detalle: 'La lógica clínica ya validada en Biodont se reusa; el trabajo nuevo es la capa de tenancy y producto.' },
            ],
            resultados: [
                'Producto SaaS en desarrollo; evolución directa de Biodont.',
            ],
        },
    },
]

export const getProyecto = (slug) => proyectos.find((p) => p.slug === slug)
