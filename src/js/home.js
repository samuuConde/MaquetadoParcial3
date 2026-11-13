import { obtenerDepositos, obtenerReportes, obtenerUsuarios } from './datos.js'

// Si no ha iniciado sesión, regresa al login
if (sessionStorage.getItem('sesionActiva') !== 'true') {
    window.location.href = 'login.html'
}

// Cerrar sesión
document.getElementById('cerrar-sesion').addEventListener('click', () => {
    sessionStorage.removeItem('sesionActiva')
    sessionStorage.removeItem('correoUsuario')
    window.location.href = 'login.html'
})

const mensaje = document.getElementById('mensaje-resumen')
const estadisticas = document.getElementById('estadisticas')

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

cargarResumen().catch((error) => {
    console.error('Error al cargar el resumen:', error)
    mensaje.textContent = 'No se pudo cargar el resumen.'
})