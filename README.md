# AguaAlerta

Maquetado del sistema AguaAlerta: una plataforma para monitorear, reportar y dar seguimiento
al abastecimiento de agua potable en colonias y comunidades (reportes de fugas, niveles de
depósitos y atención de técnicos). Proyecto del Parcial 3 de Plataformas Abiertas I.

Esta versión es solo el maquetado: los datos de prueba viven en src/js/datos.js y se
consultan con funciones async. En el ordinario se conectarán a la API.

## Integrantes

- Samuel Cuatzo Conde
- Hagen Gael Tellez Herrera

## Sitio publicado

https://maquetado-parcial3.vercel.app

## Pantallas

| Pantalla | Archivo |
|---|---|
| Portada | index.html |
| Inicio de sesión | login.html |
| Inicio del sistema (dashboard) | home.html |
| Lista de usuarios | usuarios.html |
| Detalle de usuario | usuario.html?id= |
| Formulario de usuario | usuario-form.html |
| Lista de reportes | reportes.html |
| Detalle de reporte | reporte.html?id= |
| Formulario de reporte | reporte-form.html |
| Lista de depósitos | depositos.html |
| Detalle de depósito | deposito.html?id= |
| Formulario de depósito | deposito-form.html |
| Contacto | contact.html |

## Cómo correrlo

bash
npm install
npm run dev


Para generar la versión de producción:

bash
npm run build


## Tecnologías

HTML, CSS y JavaScript con Vite.