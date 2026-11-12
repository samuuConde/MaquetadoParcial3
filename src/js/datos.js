// Datos de prueba con la misma forma que devolverá la API.
// En el ordinario solo cambia el interior de cada función por una llamada con fetch;
// las páginas que las usan no tienen que cambiar.
// Los nombres de los campos coinciden con las columnas del modelo de base de datos.

const colonias = ['Centro', 'Las Flores', 'San José', 'La Paz', 'Loma Bella']

const usuarios = [
    { id: 1, nombre_usuario: 'admin_agua', correo: 'admin@aguaalerta.mx', telefono: '222 100 2000', rol: 'Administrador', fecha_registro: '2026-09-01', estado: 'Activo' },
    { id: 2, nombre_usuario: 'tecnico_luis', correo: 'luis@aguaalerta.mx', telefono: '222 100 2001', rol: 'Técnico', fecha_registro: '2026-09-03', estado: 'Activo' },
    { id: 3, nombre_usuario: 'tecnica_ana', correo: 'ana@aguaalerta.mx', telefono: '222 100 2002', rol: 'Técnico', fecha_registro: '2026-09-10', estado: 'Activo' },
    { id: 4, nombre_usuario: 'maria_lopez', correo: 'maria@correo.com', telefono: '222 100 2003', rol: 'Ciudadano', fecha_registro: '2026-10-05', estado: 'Activo' },
    { id: 5, nombre_usuario: 'jorge_ruiz', correo: 'jorge@correo.com', telefono: '222 100 2004', rol: 'Ciudadano', fecha_registro: '2026-10-12', estado: 'Inactivo' },
]

const reportes = [
    { id: 1, titulo: 'Fuga en calle 5 de Mayo', descripcion: 'Sale agua del pavimento desde hace dos días.', categoria: 'Fuga de agua', colonia: 'Centro', ubicacion: 'Calle 5 de Mayo 120', fecha_reporte: '2026-10-28', nivel_prioridad: 'Alta', estado: 'Pendiente' },
    { id: 2, titulo: 'Sin agua desde ayer', descripcion: 'Toda la calle sin suministro desde la tarde.', categoria: 'Falta de suministro', colonia: 'Las Flores', ubicacion: 'Av. Primavera 45', fecha_reporte: '2026-10-30', nivel_prioridad: 'Alta', estado: 'En proceso' },
    { id: 3, titulo: 'Agua turbia', descripcion: 'El agua sale de color café por las mañanas.', categoria: 'Tubería dañada', colonia: 'San José', ubicacion: 'Calle Hidalgo 8', fecha_reporte: '2026-11-02', nivel_prioridad: 'Media', estado: 'Atendido' },
    { id: 4, titulo: 'Baja presión', descripcion: 'La presión es muy baja en las casas altas.', categoria: 'Baja presión', colonia: 'La Paz', ubicacion: 'Privada Los Pinos 3', fecha_reporte: '2026-11-04', nivel_prioridad: 'Baja', estado: 'Pendiente' },
    { id: 5, titulo: 'Cisterna vacía', descripcion: 'La cisterna comunitaria no se ha llenado.', categoria: 'Depósito vacío', colonia: 'Loma Bella', ubicacion: 'Cisterna Loma Bella', fecha_reporte: '2026-11-06', nivel_prioridad: 'Media', estado: 'En proceso' },
]

const depositos = [
    { id: 1, nombre_deposito: 'Cisterna Centro', tipo_deposito: 'Cisterna', colonia: 'Centro', ubicacion: 'Calle Reforma 10', capacidad_litros: 50000, nivel_actual_litros: 38000, fecha_instalacion: '2022-03-15', estado: 'Activo' },
    { id: 2, nombre_deposito: 'Tanque Las Flores', tipo_deposito: 'Tanque elevado', colonia: 'Las Flores', ubicacion: 'Av. Primavera s/n', capacidad_litros: 20000, nivel_actual_litros: 3000, fecha_instalacion: '2021-07-01', estado: 'Activo' },
    { id: 3, nombre_deposito: 'Tanque San José', tipo_deposito: 'Tanque elevado', colonia: 'San José', ubicacion: 'Calle Hidalgo 50', capacidad_litros: 15000, nivel_actual_litros: 9000, fecha_instalacion: '2023-01-20', estado: 'Activo' },
    { id: 4, nombre_deposito: 'Cisterna La Paz', tipo_deposito: 'Cisterna', colonia: 'La Paz', ubicacion: 'Calle Paz 22', capacidad_litros: 40000, nivel_actual_litros: 6000, fecha_instalacion: '2020-11-11', estado: 'Mantenimiento' },
    { id: 5, nombre_deposito: 'Tanque Loma Bella', tipo_deposito: 'Tanque comunitario', colonia: 'Loma Bella', ubicacion: 'Cima de la loma', capacidad_litros: 10000, nivel_actual_litros: 500, fecha_instalacion: '2024-05-30', estado: 'Activo' },
]

export async function obtenerColonias() {
    return colonias
}

export async function obtenerUsuarios() {
    return usuarios
}

export async function obtenerUsuario(id) {
    return usuarios.find((usuario) => usuario.id === id)
}

export async function obtenerReportes() {
    return reportes
}

export async function obtenerReporte(id) {
    return reportes.find((reporte) => reporte.id === id)
}

export async function obtenerDepositos() {
    return depositos
}

export async function obtenerDeposito(id) {
    return depositos.find((deposito) => deposito.id === id)
}
