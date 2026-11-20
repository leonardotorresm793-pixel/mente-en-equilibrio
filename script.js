
function iniciarRespiracion() {
  const mensaje = document.getElementById("mensaje");

  if (!mensaje) {
    return;
  }

  const pasos = [
    "Inhala lentamente por la nariz durante 4 segundos...",
    "Mantén el aire durante 4 segundos...",
    "Exhala suavemente durante 4 segundos...",
    "Muy bien. Has completado un ciclo de respiración."
  ];

  let paso = 0;

  mensaje.textContent = pasos[paso];

  const intervalo = setInterval(function () {
    paso++;

    if (paso < pasos.length) {
      mensaje.textContent = pasos[paso];
    } else {
      clearInterval(intervalo);
      mensaje.textContent =
        "¡Excelente! Tómate un momento para continuar con calma.";
    }
  }, 4000);
}
