import { formatearTiempo } from "../utils/crearTablero";

export default function Marcador({ segundos, movimientos }) {
  return (
    <footer className="marcador">
      <div className="marcador__tarjeta">
        <span className="marcador__label">Tiempo</span>
        <span className="marcador__valor">{formatearTiempo(segundos)}</span>
      </div>
      <div className="marcador__tarjeta">
        <span className="marcador__label">Movimientos</span>
        <span className="marcador__valor">{movimientos}</span>
      </div>
    </footer>
  );
}
