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
  carrito.addEventListener("click", eliminarCurso);
  vaciarCarrito.addEventListener("click", () => {
    articulosCarrito = [];
    limpiarHTML();
  });
}

function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoEscogido = e.target.parentElement.parentElement;
    leerDatos(cursoEscogido);
  }
}

function eliminarCurso(e) {
  if (e.target.classList.contains("borrar-curso")) {
    const cursoID = e.target.getAttribute("data-id");
    console.log(cursoID);
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoID);
    console.log(articulosCarrito);
    carritoHTML();
  }
}

function leerDatos(curso) {
  //console.log(curso);

  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  //console.log(infoCurso);
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    });
    articulosCarrito = [...cursos];
  } else {
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  //console.log(articulosCarrito);

  carritoHTML();

  console.log(articulosCarrito);
}

function carritoHTML() {
  articulosCarrito.forEach((curso) => {
    limpiarHTML();
    console.log(curso);
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <img src="${curso.imagen}" width=100 />
      </td>
      <td>
        ${curso.titulo}
      </td>
      <td>
        ${curso.precio}
      </td>
      <td>
        ${curso.cantidad}
      </td>
      <td>
        <a class="borrar-curso" data-id="${curso.id}"> X </a>
      </td>
    `;

    contenerdoCarrito.appendChild(row);
  });
}

function limpiarHTML() {
  contenerdoCarrito.innerHTML = "";
}
