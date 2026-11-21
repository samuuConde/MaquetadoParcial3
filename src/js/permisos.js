// La llave es el nombre del archivo sin .html (usuarios.html -> usuarios).
// Las páginas que no aparecen son para cualquier usuario con sesión.
export const permisos = {
    usuarios: ['admin'],
    usuario: ['admin'],
    'usuario-form': ['admin'],
    depositos: ['admin', 'tecnico'],
    deposito: ['admin', 'tecnico'],
    'deposito-form': ['admin', 'tecnico'],
}

export function puedeEntrar(pagina, rol) {
    const roles = permisos[pagina]
    return !roles || roles.includes(rol)
}