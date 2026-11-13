// Funciones compartidas por las pantallas, para no repetir código.

export function celda(texto) {
    const td = document.createElement('td')
    td.textContent = texto
    return td
}

export function enlace(texto, href) {
    const a = document.createElement('a')
    a.textContent = texto
    a.href = href
    return a
}

export function ponerTexto(id, texto) {
    document.getElementById(id).textContent = texto
}

export function idDeLaDireccion() {
    return new URLSearchParams(window.location.search).get('id')
}

export function valor(nombre) {
    return document.getElementById(nombre).value.trim()
}

// Muestra el error de cada campo y regresa true si no hubo errores
export function mostrarErrores(campos, errores) {
    for (const campo of campos) {
        ponerTexto('error-' + campo, errores[campo] ?? '')
    }
    return Object.keys(errores).length === 0
}

export function agregarOpciones(idSelect, opciones) {
    const select = document.getElementById(idSelect)
    for (const texto of opciones) {
        const opcion = document.createElement('option')
        opcion.value = texto
        opcion.textContent = texto
        select.append(opcion)
    }
}

// Maquetado: todavía no se guarda en ningún lado (en el ordinario será la API)
export function guardarYVolver(elementoMensaje, texto, destino) {
    elementoMensaje.textContent = texto
    setTimeout(() => {
        window.location.href = destino
    }, 1000)
}