import { obtenerColonias, obtenerDeposito } from './datos.js'

const idParam = new URLSearchParams(window.location.search).get('id')
const esEdicion = idParam !== null
const formulario = document.getElementById('form-deposito')
const titulo = document.getElementById('titulo-form')
const mensajeForm = document.getElementById('mensaje-form')
const CAMPOS = [
    'nombre_deposito',
    'tipo_deposito',
    'colonia',
    'ubicacion',
    'capacidad_litros',
    'nivel_actual_litros',
    'fecha_instalacion',
]

function valor(nombre) {
    return document.getElementById(nombre).value.trim()
}

function validar() {
    const errores = {}
    const capacidad = Number(valor('capacidad_litros'))
    const nivel = Number(valor('nivel_actual_litros'))

    if (valor('nombre_deposito').length < 3) {
        errores.nombre_deposito = 'Escribe al menos 3 caracteres.'
    }
    if (valor('tipo_deposito') === '') {
        errores.tipo_deposito = 'Selecciona el tipo.'
    }
    if (valor('colonia') === '') {
        errores.colonia = 'Selecciona la colonia.'
    }
    if (valor('ubicacion') === '') {
        errores.ubicacion = 'Escribe la ubicación.'
    }
    if (valor('capacidad_litros') === '' || capacidad <= 0) {
        errores.capacidad_litros = 'La capacidad debe ser mayor a 0.'
    }
    if (valor('nivel_actual_litros') === '' || nivel < 0) {
        errores.nivel_actual_litros = 'Escribe un nivel de 0 o más litros.'
    } else if (capacidad > 0 && nivel > capacidad) {
        errores.nivel_actual_litros = 'El nivel no puede ser mayor que la capacidad.'
    }
    if (valor('fecha_instalacion') === '') {
        errores.fecha_instalacion = 'Selecciona la fecha de instalación.'
    }

    for (const campo of CAMPOS) {
        document.getElementById(error-${campo}).textContent = errores[campo] ?? ''
    }
    return Object.keys(errores).length === 0
}

async function cargarColonias() {
    const select = document.getElementById('colonia')
    const colonias = await obtenerColonias()
    for (const colonia of colonias) {
        const opcion = document.createElement('option')
        opcion.value = colonia
        opcion.textContent = colonia
        select.append(opcion)
    }
}

async function cargarEdicion() {
    const deposito = await obtenerDeposito(Number(idParam))

    if (!deposito) {
        formulario.hidden = true
        titulo.textContent = 'Depósito no encontrado'
        return
    }

    titulo.textContent = 'Editar depósito'
    document.getElementById('nombre_deposito').value = deposito.nombre_deposito
    document.getElementById('tipo_deposito').value = deposito.tipo_deposito
    document.getElementById('colonia').value = deposito.colonia
    document.getElementById('ubicacion').value = deposito.ubicacion
    document.getElementById('capacidad_litros').value = deposito.capacidad_litros
    document.getElementById('nivel_actual_litros').value = deposito.nivel_actual_litros
    document.getElementById('fecha_instalacion').value = deposito.fecha_instalacion
    document.getElementById('estado').value = deposito.estado
}

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    mensajeForm.textContent = ''

    if (!validar()) return

    // Maquetado: todavía no se guarda en ningún lado (en el ordinario será la API)
    mensajeForm.textContent = 'Depósito guardado correctamente.'
    setTimeout(() => {
        window.location.href = 'depositos.html'
    }, 1000)
})

async function iniciar() {
    // Las colonias se cargan primero para poder seleccionar la del registro al editar
    await cargarColonias()
    if (esEdicion) await cargarEdicion()
}

iniciar().catch((error) => {
    console.error('Error al cargar el depósito:', error)
    mensajeForm.textContent = 'No se pudo cargar la información del depósito.'
})