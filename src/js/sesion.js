// Si no hay sesión iniciada, manda al login antes de mostrar nada
if (sessionStorage.getItem('sesionActiva') !== 'true') {
    document.documentElement.hidden = true
    window.location.replace('login.html')
}