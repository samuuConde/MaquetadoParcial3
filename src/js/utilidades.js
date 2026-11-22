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

// ---------- Para las pantallas con tablas de la base de datos ----------

// Llena un <tbody>. Cada fila es una lista de textos (o de elementos, como un enlace)
export function llenarTabla(idCuerpo, filas, columnas) {
    const cuerpo = document.getElementById(idCuerpo)
    cuerpo.replaceChildren()

    if (filas.length === 0) {
        const vacia = celda('Sin registros.')
        vacia.colSpan = columnas
        const fila = document.createElement('tr')
        fila.append(vacia)
        cuerpo.append(fila)
        return
    }

    for (const datos of filas) {
        const fila = document.createElement('tr')
        for (const dato of datos) {
            if (dato instanceof Node) {
                const td = document.createElement('td')
                td.append(dato)
                fila.append(td)
            } else {
                fila.append(celda(dato ?? ''))
            }
        }
        cuerpo.append(fila)
    }
}

export function litros(cantidad) {
    return Number(cantidad).toLocaleString('es-MX')
}

export function dinero(cantidad) {
    return Number(cantidad).toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })
}

const colores = {
    ok: ['Activo', 'Disponible', 'Resuelto', 'Terminado', 'Leída', 'Buen estado', 'Reparada'],
    aviso: ['En proceso', 'Ocupado', 'Mantenimiento', 'Pendiente'],
    mal: ['Desconectado', 'No leída', 'Inactivo'],
}

// Estado con color: verde, amarillo o rojo
export function etiquetaEstado(texto) {
    const span = document.createElement('span')
    span.className = 'etiqueta ' + (Object.keys(colores).find((tipo) => colores[tipo].includes(texto)) ?? '')
    span.textContent = texto
    return span
}

// Los dos enlaces "Ver" y "Editar" de una fila
export function accionesFila(hrefVer, hrefEditar) {
    const caja = document.createElement('span')
    caja.append(enlace('Ver', hrefVer), ' ', enlace('Editar', hrefEditar))
    return caja
}