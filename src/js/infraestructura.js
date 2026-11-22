import './paginas.js'
import { obtenerRedes, obtenerTuberias } from './datos.js'
import { etiquetaEstado, litros, llenarTabla } from './utilidades.js'

const mensaje = document.getElementById('mensaje-infraestructura')

async function cargar() {
    const [redes, tuberias] = await Promise.all([obtenerRedes(), obtenerTuberias()])

    llenarTabla(
        'body-redes',
        redes.map((red) => [
            red.nombre_red,
            red.tipo_red,
            litros(red.longitud_metros),
            red.fecha_instalacion,
            red.total_tuberias,
            etiquetaEstado(red.estado),
            red.descripcion,
        ]),
        7,
    )

    llenarTabla(
        'body-tuberias',
        tuberias.map((tuberia) => [
            tuberia.codigo_tuberia,
            tuberia.red,
            tuberia.material,
            tuberia.diametro,
            litros(tuberia.longitud_metros),
            tuberia.fecha_instalacion,
            etiquetaEstado(tuberia.estado),
            tuberia.ubicacion,
        ]),
        8,
    )

    mensaje.hidden = true
    document.getElementById('contenido').hidden = false
}

cargar().catch((error) => {
    console.error('Error al cargar la infraestructura:', error)
    mensaje.textContent = 'No se pudo cargar la infraestructura.'
})