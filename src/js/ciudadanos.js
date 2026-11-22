import './paginas.js'
import { obtenerCatalogoColonias, obtenerCiudadanos, obtenerViviendas } from './datos.js'
import { etiquetaEstado, llenarTabla } from './utilidades.js'

const mensaje = document.getElementById('mensaje-ciudadanos')

async function cargar() {
    const [ciudadanos, viviendas, colonias] = await Promise.all([
        obtenerCiudadanos(),
        obtenerViviendas(),
        obtenerCatalogoColonias(),
    ])

    llenarTabla(
        'body-ciudadanos',
        ciudadanos.map((ciudadano) => [
            ciudadano.nombre_completo,
            ciudadano.nombre_usuario,
            ciudadano.correo,
            ciudadano.reportes_enviados,
            ciudadano.viviendas.join(', ') || '—',
        ]),
        5,
    )

    llenarTabla(
        'body-viviendas',
        viviendas.map((vivienda) => [
            vivienda.direccion,
            vivienda.colonia,
            vivienda.tipo_vivienda,
            vivienda.numero_habitantes,
            vivienda.referencia,
        ]),
        5,
    )

    llenarTabla(
        'body-colonias',
        colonias.map((colonia) => [
            colonia.nombre_colonia,
            colonia.municipio,
            colonia.codigo_postal,
            colonia.descripcion,
            colonia.latitud,
            colonia.longitud,
            etiquetaEstado(colonia.estado),
        ]),
        7,
    )

    mensaje.hidden = true
    document.getElementById('contenido').hidden = false
}

cargar().catch((error) => {
    console.error('Error al cargar los ciudadanos:', error)
    mensaje.textContent = 'No se pudieron cargar los ciudadanos.'
})