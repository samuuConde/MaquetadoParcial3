import './paginas.js'
import { obtenerRoles, obtenerUsuarios } from './datos.js'
import { accionesFila, etiquetaEstado, llenarTabla } from './utilidades.js'

const mensaje = document.getElementById('mensaje-usuarios')

async function cargar() {
    const [usuarios, roles] = await Promise.all([obtenerUsuarios(), obtenerRoles()])

    llenarTabla(
        'body-usuarios',
        usuarios.map((usuario) => [
            usuario.nombre_usuario,
            usuario.nombre_completo,
            usuario.correo,
            usuario.telefono,
            usuario.rol,
            etiquetaEstado(usuario.estado),
            accionesFila(`usuario.html?id=${usuario.id}`, `usuario-form.html?id=${usuario.id}`),
        ]),
        7,
    )

    llenarTabla(
        'body-roles',
        roles.map((rol) => [rol.nombre_rol, rol.descripcion, etiquetaEstado(rol.estado)]),
        3,
    )

    mensaje.hidden = true
    document.getElementById('contenido').hidden = false
}

cargar().catch((error) => {
    console.error('Error al cargar los usuarios:', error)
    mensaje.textContent = 'No se pudieron cargar los usuarios.'
})