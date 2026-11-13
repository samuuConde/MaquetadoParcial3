import './sesion.js'
import { obtenerDepositos } from './datos.js'

const mensaje = document.getElementById('mensaje-depositos')
const tabla = document.getElementById('tabla-depositos')
const cuerpo = document.getElementById('body-depositos')

function celda(texto) {
    const td = document.createElement('td')
    td.textContent = texto
    return td
}

function enlace(texto, href) {
    const a = document.createElement('a')
    a.textContent = texto
    a.href = href
    return a
}

async function cargar() {
    const depositos = await obtenerDepositos()

    if (depositos.length === 0) {
        mensaje.textContent = 'No hay depósitos registrados.'
        return
    }

    for (const deposito of depositos) {
        const porcentaje = Math.round((deposito.nivel_actual_litros / deposito.capacidad_litros) * 100)

        const celdaPorcentaje = celda(`${porcentaje}%`)
        if (porcentaje < 20) celdaPorcentaje.className = 'alerta'

        const fila = document.createElement('tr')
        fila.append(
            celda(deposito.nombre_deposito),
            celda(deposito.capacidad_litros.toLocaleString('es-MX')),
            celda(deposito.nivel_actual_litros.toLocaleString('es-MX')),
            celdaPorcentaje,
            celda(deposito.estado),
        )

        const acciones = document.createElement('td')
        acciones.append(
            enlace('Ver', `deposito.html?id=${deposito.id}`),
            ' ',
            enlace('Editar', `deposito-form.html?id=${deposito.id}`),
        )
        fila.append(acciones)
        cuerpo.append(fila)
    }

    mensaje.hidden = true
    tabla.hidden = false
}

try {
    await cargar()
} catch (error) {
    console.error('Error al cargar los depósitos:', error)
    mensaje.textContent = 'No se pudieron cargar los depósitos.'
}