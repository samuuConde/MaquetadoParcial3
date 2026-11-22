import './paginas.js'
import { obtenerReporte } from './datos.js'
import { etiquetaEstado, idDeLaDireccion, llenarTabla, ponerTexto } from './utilidades.js'

const mensaje = document.getElementById('mensaje-reporte')
const detalle = document.getElementById('detalle-reporte')

async function cargar() {
    // El id llega de la dirección (reporte.html?id=11) como texto
    const reporte = await obtenerReporte(Number(idDeLaDireccion()))

    if (!reporte) {
        mensaje.textContent = 'Reporte no encontrado.'
        return
    }

    ponerTexto('titulo-reporte', reporte.titulo)
    ponerTexto('descripcion-reporte', reporte.descripcion ?? '')
    ponerTexto('categoria-reporte', reporte.categoria)
    ponerTexto('gravedad-reporte', reporte.nivel_gravedad)
    ponerTexto('usuario-reporte', reporte.usuario)
    ponerTexto('colonia-reporte', reporte.colonia)
    ponerTexto('ubicacion-reporte', reporte.ubicacion ?? '')
    ponerTexto('fecha-reporte', reporte.fecha_reporte)
    ponerTexto('hora-reporte', reporte.hora_reporte)
    ponerTexto('tuberia-reporte', reporte.tuberia || 'Sin tubería asociada')
    ponerTexto('foto-reporte', reporte.fotografia ?? '')
    ponerTexto('prioridad-reporte', reporte.nivel_prioridad ?? '')
    ponerTexto('estado-reporte', reporte.estado)
    document.getElementById('enlace-editar').href = 'reporte-form.html?id=' + reporte.id

    llenarTabla(
        'body-viviendas',
        reporte.viviendas.map((vivienda) => [
            vivienda.direccion,
            vivienda.colonia,
            vivienda.tipo_vivienda,
            vivienda.numero_habitantes,
            vivienda.referencia,
        ]),
        5,
    )

    llenarTabla(
        'body-asignaciones',
        reporte.asignaciones.map((asignacion) => [
            asignacion.tecnico,
            asignacion.fecha_asignacion,
            asignacion.fecha_inicio ?? '—',
            asignacion.fecha_termino ?? '—',
            etiquetaEstado(asignacion.estado),
            asignacion.resultado_atencion,
            asignacion.observaciones,
        ]),
        7,
    )

    mensaje.hidden = true
    detalle.hidden = false
    document.getElementById('extra-reporte').hidden = false
}

cargar().catch((error) => {
    console.error('Error al cargar el reporte:', error)
    mensaje.textContent = 'No se pudo cargar la información del reporte.'
})