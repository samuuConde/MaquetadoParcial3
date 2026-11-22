import './paginas.js'
import { obtenerCategorias, obtenerReportes } from './datos.js'
import { accionesFila, enlace, etiquetaEstado, llenarTabla } from './utilidades.js'

const mensaje = document.getElementById('mensaje-reportes')

async function cargar() {
    const [reportes, categorias] = await Promise.all([obtenerReportes(), obtenerCategorias()])

    llenarTabla(
        'body-reportes',
        reportes.map((reporte) => [
            enlace(reporte.titulo, 'reporte.html?id=' + reporte.id),
            reporte.categoria,
            reporte.colonia,
            reporte.nivel_prioridad,
            etiquetaEstado(reporte.estado),
            reporte.fecha_reporte,
            accionesFila('reporte.html?id=' + reporte.id, 'reporte-form.html?id=' + reporte.id),
        ]),
        7,
    )

    llenarTabla(
        'body-categorias',
        categorias.map((categoria) => [
            categoria.nombre_categoria,
            categoria.descripcion,
            categoria.nivel_gravedad,
            etiquetaEstado(categoria.estado),
        ]),
        4,
    )

    mensaje.hidden = true
    document.getElementById('contenido').hidden = false
}

cargar().catch((error) => {
    console.error('Error al cargar los reportes:', error)
    mensaje.textContent = 'No se pudieron cargar los reportes.'
})