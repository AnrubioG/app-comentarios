/*
REQUERIMIENTOS PARA LA APP

- utilizar el formulario para captar el texto ingresado --Ok

- implementar el evento "submit", utilizarlo para guardar el comentario en un array --Ok

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico) --Ok

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/

//----------------------- Variales globales -----------------------//

const formulario = document.querySelector("form");
const inputComentario = document.querySelector("#comentario");
const areaComentarios = document.querySelector(".comentarios");
let comentarios = [];

//----------------------- Normalizar entrada -----------------------//

const normalizar = (input) => {
  return input.value.trim();
};

function eliminarComentario(comentario){
  comentarios = comentarios.filter((c)=> c !== comentario)
  renderizarComentarios(comentarios)
  guardarComentarios(comentarios)
}

//----------------------- Renderizar comentarios -----------------------//

const renderizarComentarios = (lista) => {
  areaComentarios.innerHTML = "";
  lista.forEach((comentario) => {
    areaComentarios.innerHTML += `<div class="eliminar">
      <p>${comentario}</p>
      <button onclick="eliminarComentario('${comentario}')"> X </button>
    </div>`;
  });
};

//----------------------- Guardar comentarios -----------------------//

let guardarComentarios = (lista) => {
  let datos = JSON.stringify(lista);
  localStorage.setItem("comentarios-app", datos);
};

//----------------------- Leer en el local storage comentarios -----------------------//

let leerComentarios = () => {
  comentarios = JSON.parse(localStorage.getItem("comentarios-app")) ?? [];
};
leerComentarios();
renderizarComentarios(comentarios);

//----------------------- Captar el evento del formulario -----------------------//

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let comentario = normalizar(inputComentario);
  if (comentario === "") {
    inputComentario.classList.add("error");
  } else {
    inputComentario.classList.remove("error");
    comentarios.unshift(comentario);
    inputComentario.value = "";
    renderizarComentarios(comentarios);
    guardarComentarios(comentarios);
  }
  console.log(comentarios);
});
