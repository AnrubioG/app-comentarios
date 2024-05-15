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

//----------------------- Renderizar comentarios -----------------------//
const renderizarComentarios = (lista) => {
    areaComentarios.innerHTML = "";
    lista.forEach((comentario) => {
      areaComentarios.innerHTML += `<p>${comentario}</p>`;
    });
  }; 

//----------------------- Captar el evento del formulario -----------------------//

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let comentario = normalizar(inputComentario);
  if (comentario === "") {
    // inputComentario.classList.toggle("error");
    alert("Ingresa un comentario");
  } else {
    comentarios.unshift(comentario);
    inputComentario.value = "";
    renderizarComentarios(comentarios);
  }
  console.log(comentarios);
});


//----------------------- Guardar comentarios -----------------------//
//----------------------- Leer en el local storage comentarios -----------------------//
