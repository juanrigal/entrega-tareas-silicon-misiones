"use client";

import { useEffect, useState } from "react";
import Encabezado from "./components/Encabezado";
import Tablero from "./components/Tablero";
import Marcador from "./components/Marcador";
import PantallaFinal from "./components/PantallaFinal";
import { crearTablero } from "./utils/crearTablero";

export default function Home() {
  const [columnas, setColumnas] = useState(4);
  const [tablero, setTablero] = useState(() => crearTablero((4 * 4) / 2));
  const [movimientos, setMovimientos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [jugando, setJugando] = useState(false);
  const [ganado, setGanado] = useState(false);

  const voltadas = tablero.filter((f) => f.dadaVuelta && !f.encontrada);
  const evaluando = voltadas.length === 2;

  function reiniciar(nuevasColumnas = columnas) {
    setColumnas(nuevasColumnas);
    setTablero(crearTablero((nuevasColumnas * nuevasColumnas) / 2));
    setMovimientos(0);
    setSegundos(0);
    setJugando(false);
    setGanado(false);
  }

  function voltearFicha(id) {
    if (evaluando || ganado) return;

    const ficha = tablero.find((f) => f.id === id);
    if (!ficha || ficha.dadaVuelta || ficha.encontrada) return;

    if (!jugando) setJugando(true);

    setTablero((prev) =>
      prev.map((f) => (f.id === id ? { ...f, dadaVuelta: true } : f))
    );
  }

  useEffect(() => {
    const abiertas = tablero.filter((f) => f.dadaVuelta && !f.encontrada);
    if (abiertas.length !== 2) return;

    const [a, b] = abiertas;

    if (a.valor === b.valor) {
      setTablero((prev) =>
        prev.map((f) =>
          f.id === a.id || f.id === b.id ? { ...f, encontrada: true } : f
        )
      );
      setMovimientos((m) => m + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setTablero((prev) =>
        prev.map((f) =>
          f.id === a.id || f.id === b.id ? { ...f, dadaVuelta: false } : f
        )
      );
      setMovimientos((m) => m + 1);
    }, 800);

    return () => clearTimeout(timeout);
  }, [tablero]);

  useEffect(() => {
    if (tablero.length > 0 && tablero.every((f) => f.encontrada)) {
      setGanado(true);
      setJugando(false);
    }
  }, [tablero]);

  useEffect(() => {
    if (!jugando || ganado) return;

    const interval = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [jugando, ganado]);

  return (
    <main className="pagina">
      <Encabezado onNuevaPartida={() => reiniciar()} />

      <div className="selector-tamano">
        <button
          type="button"
          onClick={() => reiniciar(4)}
          className={columnas === 4 ? "chip chip--activo" : "chip"}
        >
          4×4
        </button>
        <button
          type="button"
          onClick={() => reiniciar(6)}
          className={columnas === 6 ? "chip chip--activo" : "chip"}
        >
          6×6
        </button>
      </div>

      <Tablero fichas={tablero} columnas={columnas} onVoltear={voltearFicha} />

      <Marcador segundos={segundos} movimientos={movimientos} />

      {ganado && (
        <PantallaFinal
          segundos={segundos}
          movimientos={movimientos}
          onJugarDeNuevo={() => reiniciar()}
        />
      )}
    </main>
  );
}
