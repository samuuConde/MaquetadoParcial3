// Si ya inició sesión, oculta el botón Ingresar del menú
if (sessionStorage.getItem('sesionActiva') === 'true') {
    const ingresar = document.querySelector('.menu-ingresar')
    if (ingresar) ingresar.hidden = true
}