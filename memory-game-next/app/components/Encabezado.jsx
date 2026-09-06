export default function Encabezado({ onNuevaPartida }) {
  return (
    <header className="encabezado">
      <h1>memory</h1>
      <button type="button" onClick={onNuevaPartida} className="btn-secundario">
        Nueva partida
      </button>
    </header>
  );
}
