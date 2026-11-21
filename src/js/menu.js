import { cerrarSesion, obtenerUsuario } from './sesion.js'

// Páginas que se pueden ver sin iniciar sesión
const paginasPublicas = ['index', 'contact', 'login']

function iniciales(nombre) {
    return nombre
        .split(' ')
        .slice(0, 2)
        .map((palabra) => palabra[0])
        .join('')
        .toUpperCase()
}

const usuario = obtenerUsuario()

if (usuario) {
    // Con sesión: oculta Ingresar y muestra el nombre y el botón de cerrar sesión
    document.querySelector('.menu-ingresar').hidden = true
    document.getElementById('sesion-usuario').hidden = false
    document.getElementById('nombre-usuario').textContent = usuario.name
    document.getElementById('avatar-usuario').textContent = iniciales(usuario.name)
    document.getElementById('cerrar-sesion').addEventListener('click', cerrarSesion)
} else {
    // Sin sesión: quita del menú las páginas que piden iniciar sesión
    for (const enlace of document.querySelectorAll('.menu a')) {
        const pagina = enlace.getAttribute('href').split('/').pop().replace('.html', '')
        if (!paginasPublicas.includes(pagina)) enlace.remove()
    }
}