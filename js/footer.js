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

    <!-- Google Analytics / Cookies -->
    <script src="/js/cookies.js"></script>
    `;

    document.getElementById("footer-contenedor").insertAdjacentHTML('beforeend', footerHTML);
}

// Ejecutar al cargar la página
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inyectarFooter);
} else {
    inyectarFooter();
}