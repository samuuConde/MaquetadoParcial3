import './paginas.js'
import { api } from './api.js'
import { obtenerDepositos, obtenerReportes, obtenerUsuarios } from './datos.js'
import { puedeEntrar } from './permisos.js'
import { obtenerUsuario } from './sesion.js'

const mensaje = document.getElementById('mensaje-resumen')
const estadisticas = document.getElementById('estadisticas')

// Quita las tarjetas de los módulos que el rol no puede ver
for (const tarjeta of document.querySelectorAll('.modulos a')) {
    const pagina = tarjeta.getAttribute('href').replace('.html', '')
    if (!puedeEntrar(pagina, obtenerUsuario().role)) tarjeta.remove()
}

// Pregunta al API quién es el usuario, enviando el token
async function cargarSaludo() {
    const yo = await api.get('/api/auth/yo')
    document.getElementById('saludo-nombre').textContent = yo.name.split(' ')[0]
}

async function cargarResumen() {
    const [usuarios, reportes, depositos] = await Promise.all([
        obtenerUsuarios(),
        obtenerReportes(),
        obtenerDepositos(),
    ])

    const pendientes = reportes.filter((reporte) => reporte.estado === 'Pendiente')
    const bajos = depositos.filter(
        (deposito) => deposito.nivel_actual_litros / deposito.capacidad_litros < 0.2,
    )

    document.getElementById('total-usuarios').textContent = usuarios.length
    document.getElementById('reportes-pendientes').textContent = pendientes.length
    document.getElementById('total-depositos').textContent = depositos.length
    document.getElementById('depositos-bajos').textContent = bajos.length

    mensaje.hidden = true
    estadisticas.hidden = false
}

cargarSaludo().catch((error) => {
    console.error('Error al validar la sesión:', error)
    document.getElementById('saludo-nombre').textContent = obtenerUsuario().name.split(' ')[0]
})

cargarResumen().catch((error) => {
    console.error('Error al cargar el resumen:', error)
    mensaje.textContent = 'No se pudo cargar el resumen.'
})
