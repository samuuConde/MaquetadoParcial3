import './paginas.js'
import { obtenerDeposito } from './datos.js'
import { etiquetaEstado, idDeLaDireccion, litros, llenarTabla, ponerTexto } from './utilidades.js'

const mensaje = document.getElementById('mensaje-deposito')
const detalle = document.getElementById('detalle-deposito')

async function cargar() {
    // El id llega de la dirección (deposito.html?id=11) como texto
    const deposito = await obtenerDeposito(Number(idDeLaDireccion()))

    if (!deposito) {
        mensaje.textContent = 'Depósito no encontrado.'
        return
    }

    const porcentaje = Math.round((deposito.nivel_actual_litros / deposito.capacidad_litros) * 100)

    ponerTexto('nombre-deposito', deposito.nombre_deposito)
    ponerTexto('tipo-deposito', deposito.tipo_deposito)
    ponerTexto('colonia-deposito', deposito.colonia)
    ponerTexto('ubicacion-deposito', deposito.ubicacion)
    ponerTexto('capacidad-deposito', litros(deposito.capacidad_litros))
    ponerTexto('nivel-deposito', litros(deposito.nivel_actual_litros))
    ponerTexto('porcentaje-deposito', porcentaje)
    document.getElementById('barra-nivel').value = porcentaje
    document.getElementById('alerta-nivel').hidden = porcentaje >= 20
    ponerTexto('fecha-deposito', deposito.fecha_instalacion)
    ponerTexto('estado-deposito', deposito.estado)
    document.getElementById('enlace-editar').href = `deposito-form.html?id=${deposito.id}`

    llenarTabla(
        'body-sensores',
        deposito.sensores.map((sensor) => [
            sensor.tipo_sensor,
            sensor.marca,
            sensor.modelo,
            sensor.fecha_instalacion,
            sensor.ultima_conexion,
            sensor.ultimo_nivel_litros === null ? '—' : litros(sensor.ultimo_nivel_litros),
            etiquetaEstado(sensor.estado),
        ]),
        7,
    )

    llenarTabla(
        'body-lecturas',
        deposito.lecturas.map((lectura) => [
            lectura.fecha,
            lectura.hora,
            `Sensor ${lectura.id_sensor}`,
            litros(lectura.nivel_agua_litros),
            `${lectura.porcentaje_llenado}%`,
            lectura.temperatura,
            lectura.observaciones,
        ]),
        7,
    )

    llenarTabla(
        'body-abastecimientos',
        deposito.abastecimientos.map((abastecimiento) => [
            abastecimiento.fecha,
            abastecimiento.hora,
            abastecimiento.fuente,
            abastecimiento.tipo_fuente,
            abastecimiento.responsable,
            litros(abastecimiento.litros_recibidos),
        ]),
        6,
    )

    mensaje.hidden = true
    detalle.hidden = false
    document.getElementById('extra-deposito').hidden = false
}

cargar().catch((error) => {
    console.error('Error al cargar el depósito:', error)
    mensaje.textContent = 'No se pudo cargar la información del depósito.'
})