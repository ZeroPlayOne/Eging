// js/footer.js
function inyectarFooter() {
    const footerHTML = `
    <footer>
      <p>
        <a href="/legal/aviso-legal.html">Aviso legal</a> | 
        <a href="/legal/privacidad.html">Privacidad</a>
      </p>
      <p>© 2026 Egis Low Cost - Participamos en el programa de afiliados de AliExpress. Al comprar a través de nuestros enlaces, nos ayudas a mantener este proyecto sin coste extra para ti.</p>
    </footer>
    `;

    const contenedor = document.getElementById("footer-contenedor");
    contenedor.insertAdjacentHTML('beforeend', footerHTML);

    // Cargar cookies.js dinámicamente
    const scriptCookies = document.createElement("script");
    scriptCookies.src = "/js/cookies.js";
    document.body.appendChild(scriptCookies);
}
