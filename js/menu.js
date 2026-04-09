// js/menu.js
async function cargarMenu() {
    try {
        const respuesta = await fetch('/js/menu.html'); // ruta desde la raíz
        if (!respuesta.ok) throw new Error("No se pudo cargar el menú");
        const html = await respuesta.text();
        document.getElementById('menu-contenedor').innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

// Ejecutar al cargar la página
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cargarMenu);
} else {
    cargarMenu();
}
