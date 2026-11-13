import './sesion.js'
import { obtenerReportes } from './datos.js'
import { celda, enlace } from './utilidades.js'

const mensaje = document.getElementById('mensaje-reportes')
const tabla = document.getElementById('tabla-reportes')
const cuerpo = document.getElementById('body-reportes')

async function cargar() {
    const reportes = await obtenerReportes()

    if (reportes.length === 0) {
        mensaje.textContent = 'No hay reportes registrados.'
        return
    }

    for (const reporte of reportes) {
        const celdaTitulo = document.createElement('td')
        celdaTitulo.append(enlace(reporte.titulo, 'reporte.html?id=' + reporte.id))

        const acciones = document.createElement('td')
        acciones.append(
            enlace('Ver', 'reporte.html?id=' + reporte.id),
            ' ',
            enlace('Editar', 'reporte-form.html?id=' + reporte.id),
        )

        const fila = document.createElement('tr')
        fila.append(
            celdaTitulo,
            celda(reporte.colonia),
            celda(reporte.estado),
            celda(reporte.fecha_reporte ?? ''),
            acciones,
        )
        cuerpo.append(fila)
    }

    mensaje.hidden = true
    tabla.hidden = false
}

cargar().catch((error) => {
    console.error('Error al cargar los reportes:', error)
    mensaje.textContent = 'No se pudieron cargar los reportes.'
})