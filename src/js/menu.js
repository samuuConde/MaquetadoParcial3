import { cerrarSesion, obtenerUsuario } from './sesion.js'

function iniciales(nombre) {
    return nombre
        .split(' ')
        .slice(0, 2)
        .map((palabra) => palabra[0])
        .join('')
        .toUpperCase()
}

const usuario = obtenerUsuario()

// Con sesión: oculta Ingresar y muestra el nombre y el botón de cerrar sesión
if (usuario) {
    document.querySelector('.menu-ingresar').hidden = true
    document.getElementById('sesion-usuario').hidden = false
    document.getElementById('nombre-usuario').textContent = usuario.name
    document.getElementById('avatar-usuario').textContent = iniciales(usuario.name)
    document.getElementById('cerrar-sesion').addEventListener('click', cerrarSesion)
}