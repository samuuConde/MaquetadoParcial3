import { obtenerDeposito } from './datos.js'

const mensaje = document.getElementById('mensaje-deposito')
const detalle = document.getElementById('detalle-deposito')

async function cargar() {
    // El id llega de la dirección (deposito.html?id=2) como texto
    const id = Number(new URLSearchParams(globalThis.location.search).get('id'))
    const deposito = await obtenerDeposito(id)

    if (!deposito) {
        mensaje.textContent = 'Depósito no encontrado.'
        return
    }

    const porcentaje = Math.round((deposito.nivel_actual_litros / deposito.capacidad_litros) * 100)

    document.getElementById('nombre-deposito').textContent = deposito.nombre_deposito
    document.getElementById('tipo-deposito').textContent = deposito.tipo_deposito
    document.getElementById('colonia-deposito').textContent = deposito.colonia
    document.getElementById('ubicacion-deposito').textContent = deposito.ubicacion
    document.getElementById('capacidad-deposito').textContent = deposito.capacidad_litros.toLocaleString('es-MX')
    document.getElementById('nivel-deposito').textContent = deposito.nivel_actual_litros.toLocaleString('es-MX')
    document.getElementById('porcentaje-deposito').textContent = porcentaje
    document.getElementById('barra-nivel').value = porcentaje
    document.getElementById('alerta-nivel').hidden = porcentaje >= 20
    document.getElementById('fecha-deposito').textContent = deposito.fecha_instalacion
    document.getElementById('estado-deposito').textContent = deposito.estado
    document.getElementById('enlace-editar').href = `deposito-form.html?id=${deposito.id}`

    mensaje.hidden = true
    detalle.hidden = false
}

try {
    await cargar()
} catch (error) {
    console.error('Error al cargar el depósito:', error)
    mensaje.textContent = 'No se pudo cargar la información del depósito.'
}