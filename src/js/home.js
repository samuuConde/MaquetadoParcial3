const sesionActiva = sessionStorage.getItem("sesionActiva");

// Si no ha iniciado sesión, regresa al login
if (sesionActiva !== "true") {
    window.location.href = "login.html";
}

// Obtener el botón de cerrar sesión
const botonCerrarSesion = document.getElementById("cerrar-sesion");

// Cerrar sesión
botonCerrarSesion.addEventListener("click", function () {

    // Eliminar los datos de la sesión
    sessionStorage.removeItem("sesionActiva");
    sessionStorage.removeItem("correoUsuario");

    // Regresar al login
    window.location.href = "login.html";

});