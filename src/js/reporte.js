import { obtenerReporte } from './datos.js'
import { idDeLaDireccion, ponerTexto } from './utilidades.js'

const mensaje = document.getElementById('mensaje-reporte')
const detalle = document.getElementById('detalle-reporte')

async function cargar() {
    // El id llega de la dirección (reporte.html?id=2) como texto
    const reporte = await obtenerReporte(Number(idDeLaDireccion()))

    if (!reporte) {
        mensaje.textContent = 'Reporte no encontrado.'
        return
    }

    ponerTexto('titulo-reporte', reporte.titulo)
    ponerTexto('descripcion-reporte', reporte.descripcion ?? '')
    ponerTexto('categoria-reporte', reporte.categoria ?? '')
    ponerTexto('colonia-reporte', reporte.colonia)
    ponerTexto('ubicacion-reporte', reporte.ubicacion ?? '')
    ponerTexto('fecha-reporte', reporte.fecha_reporte ?? '')
    ponerTexto('prioridad-reporte', reporte.nivel_prioridad ?? '')
    ponerTexto('estado-reporte', reporte.estado)
    document.getElementById('enlace-editar').href = 'reporte-form.html?id=' + reporte.id

    mensaje.hidden = true
    detalle.hidden = false
}

cargar().catch((error) => {
    console.error('Error al cargar el reporte:', error)
    mensaje.textContent = 'No se pudo cargar la información del reporte.'
})