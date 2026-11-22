import './paginas.js'
import { obtenerAsignaciones, obtenerMantenimientos, obtenerTecnicos } from './datos.js'
import { dinero, etiquetaEstado, llenarTabla } from './utilidades.js'

const mensaje = document.getElementById('mensaje-tecnicos')

async function cargar() {
    const [tecnicos, asignaciones, mantenimientos] = await Promise.all([
        obtenerTecnicos(),
        obtenerAsignaciones(),
        obtenerMantenimientos(),
    ])

    llenarTabla(
        'body-tecnicos',
        tecnicos.map((tecnico) => [
            tecnico.nombre_completo,
            tecnico.especialidad,
            tecnico.telefono,
            tecnico.correo,
            tecnico.fecha_contratacion,
            etiquetaEstado(tecnico.disponibilidad),
            tecnico.reportes_asignados,
        ]),
        7,
    )

    llenarTabla(
        'body-asignaciones',
        asignaciones.map((asignacion) => [
            asignacion.reporte,
            asignacion.tecnico,
            asignacion.fecha_asignacion,
            asignacion.fecha_inicio ?? '—',
            asignacion.fecha_termino ?? '—',
            etiquetaEstado(asignacion.estado),
            asignacion.resultado_atencion,
        ]),
        7,
    )

    llenarTabla(
        'body-mantenimientos',
        mantenimientos.map((mantenimiento) => [
            mantenimiento.fecha,
            mantenimiento.tecnico,
            mantenimiento.tipo_mantenimiento,
            `${mantenimiento.tipo_elemento}: ${mantenimiento.elemento}`,
            dinero(mantenimiento.costo),
            mantenimiento.observaciones,
        ]),
        6,
    )

    mensaje.hidden = true
    document.getElementById('contenido').hidden = false
}

cargar().catch((error) => {
    console.error('Error al cargar los técnicos:', error)
    mensaje.textContent = 'No se pudieron cargar los técnicos.'
})