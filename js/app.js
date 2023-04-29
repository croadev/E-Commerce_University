const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenerdoCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");

//console.log(carrito);
//console.log(listaCursos);
//console.log(contenerdoCarrito);
//console.log(vaciarCarrito);

cargarEvent();
function cargarEvent() {
  listaCursos.addEventListener("click", agregarCurso);
}

function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    console.log(e.target);
  }
}
