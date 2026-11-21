// Datos de prueba con las 19 tablas de la base de datos AguaAlerta.
// Son los mismos registros del script SQL. En el ordinario solo cambia el interior
// de cada función por una llamada con fetch; las páginas no tienen que cambiar.
// Los nombres de los campos coinciden con las columnas (sin la contraseña).

const roles = [
    { id: 10, nombre_rol: 'Administrador', descripcion: 'Asigna técnicos, consulta estadísticas y revisa alertas', estado: 'Activo' },
    { id: 11, nombre_rol: 'Técnico', descripcion: 'Atiende reportes y registra reparaciones y mantenimientos', estado: 'Activo' },
    { id: 12, nombre_rol: 'Ciudadano', descripcion: 'Registra reportes y consulta el abastecimiento de su colonia', estado: 'Activo' },
]

const usuarios = [
    { id: 10, nombre_usuario: 'admin01', correo: 'admin@aguaalerta.com', telefono: '2221110001', fecha_registro: '2026-01-10', estado: 'Activo', id_rol: 10 },
    { id: 11, nombre_usuario: 'tecnico01', correo: 'luis.tec@aguaalerta.com', telefono: '2221110002', fecha_registro: '2026-01-15', estado: 'Activo', id_rol: 11 },
    { id: 12, nombre_usuario: 'tecnico02', correo: 'ana.tec@aguaalerta.com', telefono: '2221110003', fecha_registro: '2026-02-01', estado: 'Activo', id_rol: 11 },
    { id: 13, nombre_usuario: 'mariap', correo: 'maria.perez@gmail.com', telefono: '2221110004', fecha_registro: '2026-03-05', estado: 'Activo', id_rol: 12 },
    { id: 14, nombre_usuario: 'jorgeh', correo: 'jorge.hdz@gmail.com', telefono: '2221110005', fecha_registro: '2026-03-12', estado: 'Activo', id_rol: 12 },
]

const ciudadanos = [
    { id: 10, id_usuario: 13, nombre: 'Maria', apellido_paterno: 'Perez', apellido_materno: 'Lopez' },
    { id: 11, id_usuario: 14, nombre: 'Jorge', apellido_paterno: 'Hernandez', apellido_materno: 'Ruiz' },
]

const colonias = [
    { id: 10, nombre_colonia: 'Centro', municipio: 'San Pedro Cholula', codigo_postal: '72760', descripcion: 'Zona centro con alta demanda', latitud: 19.0628, longitud: -98.3064, estado: 'Activo' },
    { id: 11, nombre_colonia: 'La Paz', municipio: 'Puebla', codigo_postal: '72160', descripcion: 'Zona residencial', latitud: 19.051, longitud: -98.23, estado: 'Activo' },
    { id: 12, nombre_colonia: 'San Manuel', municipio: 'Puebla', codigo_postal: '72570', descripcion: 'Zona con fugas frecuentes', latitud: 19.004, longitud: -98.2, estado: 'Activo' },
]

const viviendas = [
    { id: 10, id_colonia: 10, calle: '5 de Mayo', numero_exterior: '120', numero_interior: 'A', referencia: 'Frente al parque', numero_habitantes: 4, tipo_vivienda: 'Casa' },
    { id: 11, id_colonia: 12, calle: 'Av. San Claudio', numero_exterior: '45', numero_interior: '3', referencia: 'Junto a la tienda', numero_habitantes: 3, tipo_vivienda: 'Departamento' },
    { id: 12, id_colonia: 10, calle: '5 de Mayo', numero_exterior: '124', numero_interior: 'B', referencia: 'Junto a la farmacia', numero_habitantes: 5, tipo_vivienda: 'Casa' },
]

const tecnicos = [
    { id: 10, nombre: 'Luis', apellido_paterno: 'Ramirez', apellido_materno: 'Soto', telefono: '2221110002', correo: 'luis.tec@aguaalerta.com', especialidad: 'Fontanería', fecha_contratacion: '2026-01-15', disponibilidad: 'Disponible' },
    { id: 11, nombre: 'Ana', apellido_paterno: 'Torres', apellido_materno: 'Diaz', telefono: '2221110003', correo: 'ana.tec@aguaalerta.com', especialidad: 'Sensores IoT', fecha_contratacion: '2026-02-01', disponibilidad: 'Ocupado' },
]

const fuentes = [
    { id: 10, nombre_fuente: 'Pozo Cholula 1', tipo_fuente: 'Pozo', ubicacion: 'Cholula', capacidad_suministro_litros: 500000, descripcion: 'Pozo profundo principal', estado: 'Activo' },
    { id: 11, nombre_fuente: 'Manantial Atlixco', tipo_fuente: 'Manantial', ubicacion: 'Atlixco', capacidad_suministro_litros: 300000, descripcion: 'Manantial natural', estado: 'Activo' },
    { id: 12, nombre_fuente: 'Sistema Municipal Puebla', tipo_fuente: 'Sistema municipal', ubicacion: 'Puebla', capacidad_suministro_litros: 1000000, descripcion: 'Red municipal', estado: 'Activo' },
]

const depositos = [
    { id: 10, id_colonia: 10, nombre_deposito: 'Tanque Centro', capacidad_litros: 100000, nivel_actual_litros: 65000, tipo_deposito: 'Tanque elevado', ubicacion: 'Cholula Centro', fecha_instalacion: '2026-01-20', estado: 'Activo' },
    { id: 11, id_colonia: 11, nombre_deposito: 'Cisterna La Paz', capacidad_litros: 50000, nivel_actual_litros: 8000, tipo_deposito: 'Cisterna', ubicacion: 'Puebla La Paz', fecha_instalacion: '2026-02-10', estado: 'Activo' },
    { id: 12, id_colonia: 12, nombre_deposito: 'Tanque San Manuel', capacidad_litros: 80000, nivel_actual_litros: 30000, tipo_deposito: 'Tanque elevado', ubicacion: 'Puebla San Manuel', fecha_instalacion: '2026-02-15', estado: 'Activo' },
]

const sensores = [
    { id: 10, id_deposito: 10, tipo_sensor: 'Nivel ultrasónico', marca: 'Siemens', modelo: 'SITRANS LU150', fecha_instalacion: '2026-01-25', ultima_conexion: '2026-11-19', estado: 'Activo' },
    { id: 11, id_deposito: 11, tipo_sensor: 'Nivel ultrasónico', marca: 'Siemens', modelo: 'SITRANS LU150', fecha_instalacion: '2026-02-12', ultima_conexion: '2026-11-10', estado: 'Desconectado' },
    { id: 12, id_deposito: 12, tipo_sensor: 'Nivel ultrasónico', marca: 'Honeywell', modelo: 'LLE101', fecha_instalacion: '2026-02-20', ultima_conexion: '2026-11-19', estado: 'Activo' },
]

const lecturas = [
    { id: 10, id_sensor: 10, fecha: '2026-11-19', hora: '08:00', nivel_agua_litros: 65000, porcentaje_llenado: 65, temperatura: 18.5, observaciones: 'Nivel normal' },
    { id: 11, id_sensor: 11, fecha: '2026-11-10', hora: '08:00', nivel_agua_litros: 8000, porcentaje_llenado: 16, temperatura: 19, observaciones: 'Nivel crítico, menos del 20%' },
    { id: 12, id_sensor: 12, fecha: '2026-11-18', hora: '08:00', nivel_agua_litros: 60000, porcentaje_llenado: 75, temperatura: 17.5, observaciones: 'Nivel normal' },
    { id: 13, id_sensor: 12, fecha: '2026-11-19', hora: '08:00', nivel_agua_litros: 30000, porcentaje_llenado: 37.5, temperatura: 17.8, observaciones: 'Bajada repentina, posible fuga' },
]

const redes = [
    { id: 10, nombre_red: 'Red Centro Cholula', tipo_red: 'Primaria', longitud_metros: 2500, fecha_instalacion: '2020-05-10', estado: 'Activo', descripcion: 'Red principal del centro' },
    { id: 11, nombre_red: 'Red San Manuel', tipo_red: 'Secundaria', longitud_metros: 1800, fecha_instalacion: '2018-08-15', estado: 'Mantenimiento', descripcion: 'Red con fugas recurrentes' },
]

const tuberias = [
    { id: 10, id_red: 10, codigo_tuberia: 'TUB-001', material: 'PVC', diametro: 4, longitud_metros: 300, fecha_instalacion: '2020-05-10', estado: 'Buen estado', ubicacion: 'Calle 5 de Mayo' },
    { id: 11, id_red: 11, codigo_tuberia: 'TUB-002', material: 'Cobre', diametro: 2, longitud_metros: 150, fecha_instalacion: '2018-08-15', estado: 'Reparada', ubicacion: 'Av. San Claudio' },
]

const categorias = [
    { id: 10, nombre_categoria: 'Fuga de agua', descripcion: 'Salida de agua en tubería o depósito', nivel_gravedad: 'Alta', estado: 'Activo' },
    { id: 11, nombre_categoria: 'Tubería dañada', descripcion: 'Tubería rota o en mal estado', nivel_gravedad: 'Alta', estado: 'Activo' },
    { id: 12, nombre_categoria: 'Falta de suministro', descripcion: 'No llega agua a la vivienda', nivel_gravedad: 'Media', estado: 'Activo' },
    { id: 13, nombre_categoria: 'Depósito vacío', descripcion: 'Depósito sin agua disponible', nivel_gravedad: 'Alta', estado: 'Activo' },
    { id: 14, nombre_categoria: 'Baja presión', descripcion: 'El agua llega con poca fuerza', nivel_gravedad: 'Baja', estado: 'Activo' },
    { id: 15, nombre_categoria: 'Problemas de infraestructura', descripcion: 'Fallas en redes, válvulas o instalaciones', nivel_gravedad: 'Media', estado: 'Activo' },
]

const reportes = [
    { id: 10, id_usuario: 14, id_categoria: 10, id_tuberia: 11, titulo: 'Fuga en la calle', descripcion: 'Sale agua de la tubería frente a mi casa', fecha_reporte: '2026-11-15', hora_reporte: '09:30', ubicacion: 'Av. San Claudio 45', fotografia: 'fotos/reporte10.jpg', nivel_prioridad: 'Alta', estado: 'Resuelto' },
    { id: 11, id_usuario: 13, id_categoria: 12, id_tuberia: null, titulo: 'Sin agua', descripcion: 'No ha llegado agua en dos días', fecha_reporte: '2026-11-18', hora_reporte: '07:15', ubicacion: '5 de Mayo 120', fotografia: 'fotos/reporte11.jpg', nivel_prioridad: 'Media', estado: 'En proceso' },
    { id: 12, id_usuario: 13, id_categoria: 14, id_tuberia: 10, titulo: 'Poca presión', descripcion: 'El agua llega con muy poca fuerza', fecha_reporte: '2026-11-19', hora_reporte: '10:40', ubicacion: '5 de Mayo 120', fotografia: 'fotos/reporte12.jpg', nivel_prioridad: 'Baja', estado: 'Pendiente' },
]

const reporteVivienda = [
    { id: 10, id_reporte: 10, id_vivienda: 11 },
    { id: 11, id_reporte: 11, id_vivienda: 10 },
    { id: 12, id_reporte: 11, id_vivienda: 12 },
    { id: 13, id_reporte: 12, id_vivienda: 10 },
]

const asignaciones = [
    { id: 10, id_reporte: 10, id_tecnico: 10, fecha_asignacion: '2026-11-15', fecha_inicio: '2026-11-16', fecha_termino: '2026-11-17', observaciones: 'Se cambió un tramo de tubería', estado: 'Terminado', resultado_atencion: 'Fuga reparada' },
    { id: 11, id_reporte: 11, id_tecnico: 11, fecha_asignacion: '2026-11-18', fecha_inicio: '2026-11-19', fecha_termino: null, observaciones: 'Se está revisando el depósito', estado: 'En proceso', resultado_atencion: 'Sin resultado aún' },
]

const abastecimientos = [
    { id: 10, id_deposito: 10, id_fuente: 10, responsable: 'Carlos Mendez', fecha: '2026-11-01', hora: '06:00', litros_recibidos: 40000 },
    { id: 11, id_deposito: 11, id_fuente: 12, responsable: 'Carlos Mendez', fecha: '2026-11-05', hora: '06:30', litros_recibidos: 20000 },
    { id: 12, id_deposito: 12, id_fuente: 11, responsable: 'Rosa Jimenez', fecha: '2026-11-10', hora: '07:00', litros_recibidos: 30000 },
]

const mantenimientos = [
    { id: 10, id_tecnico: 10, tipo_elemento: 'Tubería', id_elemento: 11, tipo_mantenimiento: 'Correctivo', fecha: '2026-11-17', costo: 1500, observaciones: 'Cambio de tramo de tubería' },
    { id: 11, id_tecnico: 11, tipo_elemento: 'Sensor', id_elemento: 11, tipo_mantenimiento: 'Preventivo', fecha: '2026-11-19', costo: 800, observaciones: 'Revisión de sensor desconectado' },
]

const notificaciones = [
    { id: 10, id_usuario: 10, tipo_origen: 'Depósito', id_origen: 11, tipo_alerta: 'Nivel bajo', mensaje: 'Cisterna La Paz por debajo del 20%', fecha: '2026-11-10', hora: '08:05', estado: 'Leída' },
    { id: 11, id_usuario: 10, tipo_origen: 'Sensor', id_origen: 11, tipo_alerta: 'Sensor desconectado', mensaje: 'El sensor 11 no envía datos', fecha: '2026-11-12', hora: '08:00', estado: 'No leída' },
    { id: 12, id_usuario: 10, tipo_origen: 'Sensor', id_origen: 12, tipo_alerta: 'Fuga detectada', mensaje: 'Bajada repentina en Tanque San Manuel', fecha: '2026-11-19', hora: '08:05', estado: 'No leída' },
    { id: 13, id_usuario: 10, tipo_origen: 'Reporte', id_origen: 12, tipo_alerta: 'Reporte pendiente', mensaje: 'El reporte 12 no tiene técnico asignado', fecha: '2026-11-19', hora: '12:00', estado: 'No leída' },
]

// ---------- Funciones de ayuda: unen las tablas por sus llaves foráneas ----------

const buscar = (lista, id) => lista.find((fila) => fila.id === id)

function nombreCompleto(persona) {
    return `${persona.nombre} ${persona.apellido_paterno} ${persona.apellido_materno}`
}

// Mantenimientos y notificaciones guardan solo el tipo y el id del elemento
function nombreElemento(tipo, id) {
    if (tipo === 'Depósito') return buscar(depositos, id)?.nombre_deposito
    if (tipo === 'Red') return buscar(redes, id)?.nombre_red
    if (tipo === 'Reporte') return buscar(reportes, id)?.titulo
    if (tipo === 'Tubería') {
        const tuberia = buscar(tuberias, id)
        return tuberia && `${tuberia.codigo_tuberia} (${tuberia.ubicacion})`
    }
    if (tipo === 'Sensor') {
        const sensor = buscar(sensores, id)
        return sensor && `Sensor ${sensor.id} (${buscar(depositos, sensor.id_deposito).nombre_deposito})`
    }
    return undefined
}

function armarVivienda(vivienda) {
    const interior = vivienda.numero_interior ? ` int. ${vivienda.numero_interior}` : ''
    return {
        ...vivienda,
        colonia: buscar(colonias, vivienda.id_colonia).nombre_colonia,
        direccion: `${vivienda.calle} ${vivienda.numero_exterior}${interior}`,
    }
}

function armarUsuario(usuario) {
    const rol = buscar(roles, usuario.id_rol)
    const persona =
        ciudadanos.find((ciudadano) => ciudadano.id_usuario === usuario.id) ??
        tecnicos.find((tecnico) => tecnico.correo === usuario.correo)
    return {
        ...usuario,
        rol: rol.nombre_rol,
        descripcion_rol: rol.descripcion,
        nombre_completo: persona ? nombreCompleto(persona) : '',
    }
}

function armarReporte(reporte) {
    const categoria = buscar(categorias, reporte.id_categoria)
    const tuberia = reporte.id_tuberia ? buscar(tuberias, reporte.id_tuberia) : null
    const susViviendas = reporteVivienda
        .filter((fila) => fila.id_reporte === reporte.id)
        .map((fila) => armarVivienda(buscar(viviendas, fila.id_vivienda)))
    const susAsignaciones = asignaciones
        .filter((fila) => fila.id_reporte === reporte.id)
        .map((fila) => ({ ...fila, tecnico: nombreCompleto(buscar(tecnicos, fila.id_tecnico)) }))

    return {
        ...reporte,
        usuario: buscar(usuarios, reporte.id_usuario).nombre_usuario,
        categoria: categoria.nombre_categoria,
        nivel_gravedad: categoria.nivel_gravedad,
        tuberia: tuberia ? `${tuberia.codigo_tuberia} (${tuberia.ubicacion})` : '',
        colonia: susViviendas[0]?.colonia ?? '',
        viviendas: susViviendas,
        asignaciones: susAsignaciones,
    }
}

function armarDeposito(deposito) {
    const susSensores = sensores.filter((sensor) => sensor.id_deposito === deposito.id)
    const susLecturas = lecturas
        .filter((lectura) => susSensores.some((sensor) => sensor.id === lectura.id_sensor))
        .sort((a, b) => (b.fecha + b.hora).localeCompare(a.fecha + a.hora))

    return {
        ...deposito,
        colonia: buscar(colonias, deposito.id_colonia).nombre_colonia,
        sensores: susSensores.map((sensor) => {
            const ultima = lecturas
                .filter((lectura) => lectura.id_sensor === sensor.id)
                .sort((a, b) => (b.fecha + b.hora).localeCompare(a.fecha + a.hora))[0]
            return { ...sensor, ultimo_nivel_litros: ultima?.nivel_agua_litros ?? null }
        }),
        lecturas: susLecturas,
        abastecimientos: abastecimientos
            .filter((fila) => fila.id_deposito === deposito.id)
            .map((fila) => {
                const fuente = buscar(fuentes, fila.id_fuente)
                return { ...fila, fuente: fuente.nombre_fuente, tipo_fuente: fuente.tipo_fuente }
            }),
    }
}

function armarCiudadano(ciudadano) {
    const usuario = buscar(usuarios, ciudadano.id_usuario)
    const susReportes = reportes.filter((reporte) => reporte.id_usuario === usuario.id)
    const direcciones = new Set()
    for (const reporte of susReportes) {
        for (const fila of reporteVivienda.filter((rv) => rv.id_reporte === reporte.id)) {
            direcciones.add(armarVivienda(buscar(viviendas, fila.id_vivienda)).direccion)
        }
    }
    return {
        ...ciudadano,
        nombre_completo: nombreCompleto(ciudadano),
        nombre_usuario: usuario.nombre_usuario,
        correo: usuario.correo,
        reportes_enviados: susReportes.length,
        viviendas: [...direcciones],
    }
}

function armarTecnico(tecnico) {
    return {
        ...tecnico,
        nombre_completo: nombreCompleto(tecnico),
        reportes_asignados: asignaciones.filter((fila) => fila.id_tecnico === tecnico.id).length,
    }
}

// ---------- Funciones que usan las pantallas ----------

// Solo los nombres, para los <select> de los formularios
export async function obtenerColonias() {
    return colonias.map((colonia) => colonia.nombre_colonia)
}

export async function obtenerCatalogoColonias() {
    return colonias
}

export async function obtenerRoles() {
    return roles
}

export async function obtenerUsuarios() {
    return usuarios.map(armarUsuario)
}

export async function obtenerUsuario(id) {
    const usuario = buscar(usuarios, id)
    return usuario && armarUsuario(usuario)
}

export async function obtenerCiudadanos() {
    return ciudadanos.map(armarCiudadano)
}

export async function obtenerViviendas() {
    return viviendas.map(armarVivienda)
}

export async function obtenerCategorias() {
    return categorias
}

export async function obtenerReportes() {
    return reportes.map(armarReporte)
}

export async function obtenerReporte(id) {
    const reporte = buscar(reportes, id)
    return reporte && armarReporte(reporte)
}

export async function obtenerTecnicos() {
    return tecnicos.map(armarTecnico)
}

export async function obtenerAsignaciones() {
    return asignaciones.map((fila) => ({
        ...fila,
        reporte: buscar(reportes, fila.id_reporte).titulo,
        tecnico: nombreCompleto(buscar(tecnicos, fila.id_tecnico)),
    }))
}

export async function obtenerMantenimientos() {
    return mantenimientos.map((fila) => ({
        ...fila,
        tecnico: nombreCompleto(buscar(tecnicos, fila.id_tecnico)),
        elemento: nombreElemento(fila.tipo_elemento, fila.id_elemento) ?? `${fila.tipo_elemento} ${fila.id_elemento}`,
    }))
}

export async function obtenerFuentes() {
    return fuentes
}

export async function obtenerDepositos() {
    return depositos.map(armarDeposito)
}

export async function obtenerDeposito(id) {
    const deposito = buscar(depositos, id)
    return deposito && armarDeposito(deposito)
}

export async function obtenerRedes() {
    return redes.map((red) => ({
        ...red,
        total_tuberias: tuberias.filter((tuberia) => tuberia.id_red === red.id).length,
    }))
}

export async function obtenerTuberias() {
    return tuberias.map((tuberia) => ({ ...tuberia, red: buscar(redes, tuberia.id_red).nombre_red }))
}

export async function obtenerNotificaciones() {
    return notificaciones.map((fila) => ({
        ...fila,
        usuario: buscar(usuarios, fila.id_usuario).nombre_usuario,
        origen: nombreElemento(fila.tipo_origen, fila.id_origen) ?? `${fila.tipo_origen} ${fila.id_origen}`,
    }))
}