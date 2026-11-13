import './sesion.js'
import { obtenerColonias, obtenerReporte } from './datos.js'
import {
    agregarOpciones,
    guardarYVolver,
    idDeLaDireccion,
    mostrarErrores,
    valor,
} from './utilidades.js'

const idParam = idDeLaDireccion()
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

    return mostrarErrores(CAMPOS, errores)
}

async function cargarEdicion() {
    const reporte = await obtenerReporte(Number(idParam))

    if (!reporte) {
        formulario.hidden = true
        titulo.textContent = 'Reporte no encontrado'
        return
    }

    titulo.textContent = 'Editar reporte'
    for (const campo of [...CAMPOS, 'estado']) {
        document.getElementById(campo).value = reporte[campo] ?? ''
    }
}

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    mensajeForm.textContent = ''

    if (!validar()) return

    guardarYVolver(mensajeForm, 'Reporte guardado correctamente.', 'reportes.html')
})

async function iniciar() {
    // Las colonias se cargan primero para poder seleccionar la del registro al editar
    agregarOpciones('colonia', await obtenerColonias())
    if (esEdicion) await cargarEdicion()
}

iniciar().catch((error) => {
    console.error('Error al cargar el reporte:', error)
    mensajeForm.textContent = 'No se pudo cargar la información del reporte.'
})