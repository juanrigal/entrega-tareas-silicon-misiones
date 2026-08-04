const LIMITE = 280;

const area = document.querySelector("#texto");
const spanCaracteres = document.querySelector("#caracteres");
const spanPalabras = document.querySelector("#palabras");
const spanSinEspacios = document.querySelector("#sin-espacios");
const spanRestan = document.querySelector("#restan");
const btnLimpiar = document.querySelector("#btn-limpiar");

function actualizarContadores() {
  const texto = area.value;

  const cantCaracteres = texto.length;
  spanCaracteres.textContent = cantCaracteres;

  const cantSinEspacios = texto.replaceAll(" ", "").length;
  spanSinEspacios.textContent = cantSinEspacios;

  const textoLimpio = texto.trim();
  const cantPalabras = textoLimpio === "" ? 0 : textoLimpio.split(/\s+/).length;
  spanPalabras.textContent = cantPalabras;

  const restan = LIMITE - cantCaracteres;
  spanRestan.textContent = restan;

  if (cantCaracteres > LIMITE) {
    area.classList.add("excedido");
    spanRestan.classList.add("excedido");
  } else {
    area.classList.remove("excedido");
    spanRestan.classList.remove("excedido");
  }
}

area.addEventListener("input", actualizarContadores);

btnLimpiar.addEventListener("click", function () {
  area.value = "";
  actualizarContadores();
  area.focus();
});

actualizarContadores();