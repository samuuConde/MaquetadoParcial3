import { obtenerUsuario } from './datos.js'

const idParam = new URLSearchParams(window.location.search).get('id')
const esEdicion = idParam !== null
const formulario = document.getElementById('form-usuario')
const titulo = document.getElementById('titulo-form')
const mensajeForm = document.getElementById('mensaje-form')
const CAMPOS = ['nombre_usuario', 'correo', 'contrasena', 'telefono', 'rol']

function valor(nombre) {
    return document.getElementById(nombre).value.trim()
}

function validar() {
    const errores = {}

    if (valor('nombre_usuario').length < 3) {
        errores.nombre_usuario = 'Escribe al menos 3 caracteres.'
    }
    if (!/^\S+@\S+\.\S+$/.test(valor('correo'))) {
        errores.correo = 'Escribe un correo válido.'
    }
    if (!esEdicion && valor('contrasena').length < 6) {
        errores.contrasena = 'La contraseña debe tener al menos 6 caracteres.'
    }
    if (!/^\d{10}$/.test(valor('telefono').replace(/\s/g, ''))) {
        errores.telefono = 'Escribe un teléfono de 10 dígitos.'
    }
    if (valor('rol') === '') {
        errores.rol = 'Selecciona un rol.'
    }

    for (const campo of CAMPOS) {
        document.getElementById(`error-${campo}`).textContent = errores[campo] ?? ''
    }
    return Object.keys(errores).length === 0
}

async function cargarEdicion() {
    const usuario = await obtenerUsuario(Number(idParam))

    if (!usuario) {
        formulario.hidden = true
        titulo.textContent = 'Usuario no encontrado'
        return
    }

    titulo.textContent = 'Editar usuario'
    document.getElementById('nombre_usuario').value = usuario.nombre_usuario
    document.getElementById('correo').value = usuario.correo
    document.getElementById('telefono').value = usuario.telefono
    document.getElementById('rol').value = usuario.rol
    document.getElementById('estado').value = usuario.estado
    document.getElementById('contrasena').placeholder = 'Déjala vacía para no cambiarla'
}

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    mensajeForm.textContent = ''

    if (!validar()) return

    // Maquetado: todavía no se guarda en ningún lado (en el ordinario será la API)
    mensajeForm.textContent = 'Usuario guardado correctamente.'
    setTimeout(() => {
        window.location.href = 'usuarios.html'
    }, 1000)
})

if (esEdicion) cargarEdicion()