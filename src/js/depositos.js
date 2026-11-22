import './paginas.js'
import { obtenerDepositos, obtenerFuentes } from './datos.js'
import { accionesFila, etiquetaEstado, litros, llenarTabla } from './utilidades.js'

const mensaje = document.getElementById('mensaje-depositos')

function porcentajeDe(deposito) {
    const porcentaje = Math.round((deposito.nivel_actual_litros / deposito.capacidad_litros) * 100)
    const texto = document.createElement('span')
    texto.textContent = `${porcentaje}%`
    if (porcentaje < 20) texto.className = 'alerta'
    return texto
}

async function cargar() {
    const [depositos, fuentes] = await Promise.all([obtenerDepositos(), obtenerFuentes()])

    llenarTabla(
        'body-depositos',
        depositos.map((deposito) => [
            deposito.nombre_deposito,
            deposito.colonia,
            deposito.tipo_deposito,
            litros(deposito.capacidad_litros),
            litros(deposito.nivel_actual_litros),
            porcentajeDe(deposito),
            etiquetaEstado(deposito.estado),
            accionesFila(`deposito.html?id=${deposito.id}`, `deposito-form.html?id=${deposito.id}`),
        ]),
        8,
    )

    llenarTabla(
        'body-fuentes',
        fuentes.map((fuente) => [
            fuente.nombre_fuente,
            fuente.tipo_fuente,
            fuente.ubicacion,
            litros(fuente.capacidad_suministro_litros),
            fuente.descripcion,
            etiquetaEstado(fuente.estado),
        ]),
        6,
    )

    mensaje.hidden = true
    document.getElementById('contenido').hidden = false
}

cargar().catch((error) => {
    console.error('Error al cargar los depósitos:', error)
    mensaje.textContent = 'No se pudieron cargar los depósitos.'
})