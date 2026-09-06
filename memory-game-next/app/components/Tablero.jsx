import Ficha from "./Ficha";

export default function Tablero({ fichas, columnas, onVoltear }) {
  return (
    <section
      className="tablero"
      style={{ gridTemplateColumns: `repeat(${columnas}, 1fr)` }}
    >
      {fichas.map((ficha) => (
        <Ficha key={ficha.id} ficha={ficha} onClick={() => onVoltear(ficha.id)} />
      ))}
    </section>
  );
}
