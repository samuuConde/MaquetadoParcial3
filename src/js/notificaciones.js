import './paginas.js'
import { obtenerNotificaciones } from './datos.js'
import { etiquetaEstado, llenarTabla } from './utilidades.js'

const mensaje = document.getElementById('mensaje-notificaciones')

async function cargar() {
    const notificaciones = await obtenerNotificaciones()

    document.getElementById('total-sin-leer').textContent = notificaciones.filter(
        (alerta) => alerta.estado === 'No leída',
    ).length

    llenarTabla(
        'body-notificaciones',
        notificaciones.map((alerta) => [
            alerta.fecha,
            alerta.hora,
            alerta.tipo_alerta,
            alerta.mensaje,
            `${alerta.tipo_origen}: ${alerta.origen}`,
            alerta.usuario,
            etiquetaEstado(alerta.estado),
        ]),
        7,
    )

    mensaje.hidden = true
    document.getElementById('contenido').hidden = false
}

cargar().catch((error) => {
    console.error('Error al cargar las notificaciones:', error)
    mensaje.textContent = 'No se pudieron cargar las notificaciones.'
})