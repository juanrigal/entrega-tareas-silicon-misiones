export default function Ficha({ ficha, onClick }) {
  const visible = ficha.dadaVuelta || ficha.encontrada;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`ficha ${visible ? "ficha--volteada" : ""} ${
        ficha.encontrada ? "ficha--encontrada" : ""
      }`}
      aria-label={visible ? `Ficha ${ficha.valor}` : "Ficha oculta"}
    >
      {visible ? ficha.valor : ""}
    </button>
  );
}
