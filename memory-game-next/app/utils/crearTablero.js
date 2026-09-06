export function crearTablero(pares = 8) {
  const valores = Array.from({ length: pares }, (_, i) => i + 1);
  const valoresDuplicados = [...valores, ...valores];

  const mezclados = valoresDuplicados
    .map((valor) => ({ valor, orden: Math.random() }))
    .sort((a, b) => a.orden - b.orden)
    .map((item) => item.valor);

  return mezclados.map((valor, index) => ({
    id: index,
    valor,
    dadaVuelta: false,
    encontrada: false,
  }));
}

export function formatearTiempo(segundosTotales) {
  const minutos = Math.floor(segundosTotales / 60);
  const segundos = segundosTotales % 60;
  return `${minutos}:${String(segundos).padStart(2, "0")}`;
}
