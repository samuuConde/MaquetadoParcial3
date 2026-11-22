import './paginas.js'

import { obtenerUsuario } from './datos.js'

const mensaje = document.getElementById('mensaje-usuario')
const detalle = document.getElementById('detalle-usuario')

async function cargar() {
    // El id llega de la dirección (usuario.html?id=13) como texto
    const id = Number(new URLSearchParams(window.location.search).get('id'))
    const usuario = await obtenerUsuario(id)

    if (!usuario) {
        mensaje.textContent = 'Usuario no encontrado.'
        return
    }

    document.getElementById('titulo-usuario').textContent = usuario.nombre_usuario
    document.getElementById('nombre-completo-usuario').textContent = usuario.nombre_completo || '—'
    document.getElementById('correo-usuario').textContent = usuario.correo
    document.getElementById('telefono-usuario').textContent = usuario.telefono
    document.getElementById('rol-usuario').textContent = usuario.rol
    document.getElementById('descripcion-rol-usuario').textContent = usuario.descripcion_rol
    document.getElementById('fecha-usuario').textContent = usuario.fecha_registro
    document.getElementById('estado-usuario').textContent = usuario.estado
    document.getElementById('enlace-editar').href = `usuario-form.html?id=${usuario.id}`

    mensaje.hidden = true
    detalle.hidden = false
}

cargar().catch((error) => {
    console.error('Error al cargar el usuario:', error)
    mensaje.textContent = 'No se pudo cargar la información del usuario.'
})