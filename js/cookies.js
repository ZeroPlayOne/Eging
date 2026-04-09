function inyectarBanner() {
    if (localStorage.getItem("cookies-aceptadas") === null) {
        const bannerHTML = `
        <div id="cookie-banner" style="position:fixed;bottom:0;left:0;width:100%;background:#222;color:#fff;padding:15px;text-align:center;z-index:9999;">
          Usamos cookies para analizar el tráfico. 
          <a href="/legal/privacidad.html" style="color:#4da6ff;">Más info</a><br><br>
          <button id="btn-aceptar" style="margin:5px;padding:8px 15px;cursor:pointer;">Aceptar</button>
          <button id="btn-rechazar" style="margin:5px;padding:8px 15px;cursor:pointer;">Rechazar</button>
        </div>`;
        
        document.body.insertAdjacentHTML('beforeend', bannerHTML);

        document.getElementById("btn-aceptar").onclick = function() {
            localStorage.setItem("cookies-aceptadas", "true");
            document.getElementById("cookie-banner").remove();
            iniciarAnalytics();
        };

        document.getElementById("btn-rechazar").onclick = function() {
            localStorage.setItem("cookies-aceptadas", "false");
            document.getElementById("cookie-banner").remove();
        };
    }
}

function iniciarAnalytics() {
    var script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-TFX11RL5QP";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'G-TFX11RL5QP');
}

if (localStorage.getItem("cookies-aceptadas") === "true") {
    iniciarAnalytics();
} else {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inyectarBanner);
    } else {
        inyectarBanner();
    }
}