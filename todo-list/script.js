
const inputTarea = document.querySelector("#input-tarea");
const btnAgregar = document.querySelector("#btn-agregar");
const listaTareas = document.querySelector("#lista-tareas");
const contador = document.querySelector("#contador");

function actualizarContador() {
  const todasLasTareas = listaTareas.querySelectorAll("li");

  const pendientes = listaTareas.querySelectorAll("li:not(.hecha)");

  contador.textContent = pendientes.length;
}

function agregarTarea() {
  const texto = inputTarea.value.trim(); 

  if (texto === "") {
    return; 
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = texto; 
  li.appendChild(span);

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "X";
  btnEliminar.classList.add("btn-eliminar");

  btnEliminar.addEventListener("click", function (evento) {
    evento.stopPropagation();
    li.remove(); 
    actualizarContador();
  });

  li.appendChild(btnEliminar);

  li.addEventListener("click", function () {
    li.classList.toggle("hecha");
    actualizarContador();
  });

  listaTareas.appendChild(li);

  inputTarea.value = "";
  inputTarea.focus();

  actualizarContador();
}

btnAgregar.addEventListener("click", agregarTarea);

inputTarea.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    agregarTarea();
  }
});