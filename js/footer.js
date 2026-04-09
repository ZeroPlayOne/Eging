// js/footer.js
function inyectarFooter() {
    const footerHTML = `
    <footer style="text-align:center; padding:20px; border-top:1px solid #eee; margin-top:40px;">
      <p>
        <a href="/legal/aviso-legal.html">Aviso legal</a> | 
        <a href="/legal/privacidad.html">Privacidad</a> |
        <a href="#" id="abrir-config-cookies">Configuración de cookies</a>
      </p>
      <p>© 2026 Egis Low Cost - Participamos en el programa de afiliados de AliExpress. Al comprar a través de nuestros enlaces, nos ayudas a mantener este proyecto sin coste extra para ti.</p>
    </footer>
    `;

    const contenedor = document.getElementById("footer-contenedor");
    if (contenedor) {
        contenedor.innerHTML = footerHTML;
        
        // Hacer que el enlace de cookies funcione
        document.getElementById("abrir-config-cookies").onclick = function(e) {
            e.preventDefault();
            localStorage.removeItem("cookies-aceptadas");
            location.reload();
        };
    }

    // CARGAR EL BANNER DE COOKIES (Asegúrate de que el archivo existe)
    const scriptCookies = document.createElement("script");
    scriptCookies.src = "/js/cookies.js"; // Usamos el nombre que definimos antes
    document.body.appendChild(scriptCookies);
}

// ESTA LÍNEA ES LA QUE FALTA: Ejecuta la función al cargar
window.addEventListener('DOMContentLoaded', inyectarFooter);
