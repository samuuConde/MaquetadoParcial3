
import { obtenerUsuarios } from './datos.js'

const mensaje = document.getElementById('mensaje-usuarios')
const tabla = document.getElementById('tabla-usuarios')
const cuerpo = document.getElementById('body-usuarios')

function celda(texto) {
    const td = document.createElement('td')
    td.textContent = texto
    return td
}

function enlace(texto, href) {
    const a = document.createElement('a')
    a.textContent = texto
    a.href = href
    return a
}

async function cargar() {
    const usuarios = await obtenerUsuarios()

    if (usuarios.length === 0) {
        mensaje.textContent = 'No hay usuarios registrados.'
        return
    }

    for (const usuario of usuarios) {
        const fila = document.createElement('tr')
        fila.append(
            celda(usuario.nombre_usuario),
            celda(usuario.correo),
            celda(usuario.telefono),
            celda(usuario.rol),
            celda(usuario.estado),
        )

        const acciones = document.createElement('td')
        acciones.append(
            enlace('Ver', `usuario.html?id=${usuario.id}`),
            ' ',
            enlace('Editar', `usuario-form.html?id=${usuario.id}`),
        )
        fila.append(acciones)
        cuerpo.append(fila)
    }

    mensaje.hidden = true
    tabla.hidden = false
}

cargar().catch(error => {
    console.error('Error al cargar los usuarios:', error)
    mensaje.textContent = 'No se pudieron cargar los usuarios.'
})
