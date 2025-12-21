// Determinar la profundidad de la página
let depth = window.location.pathname.split("/").length - 2;
let prefix = "../".repeat(depth);

// Cargar menú
fetch(prefix + "partials/menu.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("menu").innerHTML = html;
  })
  .catch(err => console.error("Error cargando menú:", err));