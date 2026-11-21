// Se importa en la primera línea de cada pantalla interna:
// revisa la sesión y el permiso del rol antes de mostrar nada.
import { obtenerUsuario } from './sesion.js'
import { puedeEntrar } from './permisos.js'

const usuario = obtenerUsuario()

if (!usuario) {
    location.replace('login.html')
    throw new Error('Sin sesión')
}

const paginaActual = location.pathname.split('/').pop().replace('.html', '')

if (!puedeEntrar(paginaActual, usuario.role)) {
    location.replace('home.html')
    throw new Error('Sin permiso para esta página')
}

// Quita del menú las páginas que el rol no puede ver
for (const enlace of document.querySelectorAll('.menu a')) {
    const pagina = enlace.getAttribute('href').split('/').pop().replace('.html', '')
    if (!puedeEntrar(pagina, usuario.role)) enlace.remove()
}