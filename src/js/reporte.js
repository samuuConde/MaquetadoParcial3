import { obtenerReporte } from './datos.js'

const mensaje = document.getElementById('mensaje-reporte')
const detalle = document.getElementById('detalle-reporte')

async function cargar() {
    // El id llega de la dirección (reporte.html?id=2) como texto
    const id = Number(new URLSearchParams(window.location.search).get('id'))
    const reporte = await obtenerReporte(id)

    if (!reporte) {
        mensaje.textContent = 'Reporte no encontrado.'
        return
    }

    document.getElementById('titulo-reporte').textContent = reporte.titulo
    document.getElementById('descripcion-reporte').textContent = reporte.descripcion ?? ''
    document.getElementById('categoria-reporte').textContent = reporte.categoria ?? ''
    document.getElementById('colonia-reporte').textContent = reporte.colonia
    document.getElementById('ubicacion-reporte').textContent = reporte.ubicacion ?? ''
    document.getElementById('fecha-reporte').textContent = reporte.fecha_reporte ?? ''
    document.getElementById('prioridad-reporte').textContent = reporte.nivel_prioridad ?? ''
    document.getElementById('estado-reporte').textContent = reporte.estado
    document.getElementById('enlace-editar').href = `reporte-form.html?id=${reporte.id}`

    mensaje.hidden = true
    detalle.hidden = false
}

cargar().catch((error) => {
    console.error('Error al cargar el reporte:', error)
    mensaje.textContent = 'No se pudo cargar la información del reporte.'
})