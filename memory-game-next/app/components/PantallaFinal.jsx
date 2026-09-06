import { formatearTiempo } from "../utils/crearTablero";

export default function PantallaFinal({ segundos, movimientos, onJugarDeNuevo }) {
  return (
    <div className="pantalla-final">
      <div className="pantalla-final__tarjeta">
        <h2>¡Lo lograste!</h2>
        <p className="pantalla-final__resumen">
          Tiempo: {formatearTiempo(segundos)} · Movimientos: {movimientos}
        </p>
        <button type="button" onClick={onJugarDeNuevo} className="btn-primario">
          Jugar de nuevo
        </button>
      </div>
    </div>
  );
}
