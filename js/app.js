const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenerdoCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
let articulosCarrito = [];

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
    const cursoEscogido = e.target.parentElement.parentElement;
    leerDatos(cursoEscogido);
  }
}

function leerDatos(curso) {
  console.log(curso);

  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
  };

  console.log(infoCurso);
}
