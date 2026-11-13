import { obtenerColonias, obtenerReporte } from './datos.js'

const idParam = new URLSearchParams(window.location.search).get('id')
const esEdicion = idParam !== null
const formulario = document.getElementById('form-reporte')
const titulo = document.getElementById('titulo-form')
const mensajeForm = document.getElementById('mensaje-form')
const CAMPOS = [
    'titulo',
    'descripcion',
    'categoria',
    'colonia',
    'ubicacion',
    'fecha_reporte',
    'nivel_prioridad',
]

function valor(nombre) {
    return document.getElementById(nombre).value.trim()
}

function validar() {
    const errores = {}

    if (valor('titulo').length < 5) {
        errores.titulo = 'Escribe al menos 5 caracteres.'
    }
    if (valor('descripcion').length < 10) {
        errores.descripcion = 'Describe el problema con al menos 10 caracteres.'
    }
    if (valor('categoria') === '') {
        errores.categoria = 'Selecciona una categoría.'
    }
    if (valor('colonia') === '') {
        errores.colonia = 'Selecciona la colonia.'
    }
    if (valor('ubicacion') === '') {
        errores.ubicacion = 'Escribe la ubicación.'
    }
    if (valor('fecha_reporte') === '') {
        errores.fecha_reporte = 'Selecciona la fecha.'
    }
    if (valor('nivel_prioridad') === '') {
        errores.nivel_prioridad = 'Selecciona la prioridad.'
    }

    for (const campo of CAMPOS) {
        document.getElementById(`error-${campo}`).textContent = errores[campo] ?? ''
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
    const reporte = await obtenerReporte(Number(idParam))

    if (!reporte) {
        formulario.hidden = true
        titulo.textContent = 'Reporte no encontrado'
        return
    }

    titulo.textContent = 'Editar reporte'
    document.getElementById('titulo').value = reporte.titulo
    document.getElementById('descripcion').value = reporte.descripcion ?? ''
    document.getElementById('categoria').value = reporte.categoria ?? ''
    document.getElementById('colonia').value = reporte.colonia
    document.getElementById('ubicacion').value = reporte.ubicacion ?? ''
    document.getElementById('fecha_reporte').value = reporte.fecha_reporte ?? ''
    document.getElementById('nivel_prioridad').value = reporte.nivel_prioridad ?? ''
    document.getElementById('estado').value = reporte.estado
}

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    mensajeForm.textContent = ''

    if (!validar()) return

    // Maquetado: todavía no se guarda en ningún lado (en el ordinario será la API)
    mensajeForm.textContent = 'Reporte guardado correctamente.'
    setTimeout(() => {
        window.location.href = 'reportes.html'
    }, 1000)
})

async function iniciar() {
    // Las colonias se cargan primero para poder seleccionar la del registro al editar
    await cargarColonias()
    if (esEdicion) await cargarEdicion()
}

iniciar().catch((error) => {
    console.error('Error al cargar el reporte:', error)
    mensajeForm.textContent = 'No se pudo cargar la información del reporte.'
})