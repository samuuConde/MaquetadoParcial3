
const formulario = document.getElementById("formulario-login");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const correo = document.getElementById("correo").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();
    const mensaje = document.getElementById("mensaje-login");

    if (correo === "" || contrasena === "") {
        mensaje.textContent = "Completa todos los campos.";
        return;
    }

    // Guardamos que el usuario inició sesión
    sessionStorage.setItem("sesionActiva", "true");
    sessionStorage.setItem("correoUsuario", correo);

    // Redirigimos al panel principal
    window.location.href = "home.html";
});
