let numero1, numero2, contadorPreguntas, puntaje;

function mostrarTabla() {
  const tabla = parseInt(document.getElementById("numeroTabla").value.trim());

  if (isNaN(tabla) || tabla < 1 || tabla > 10) {
    alert("Por favor, ingresa un número válido entre 1 y 10.");
    return;
  }

  let resultado = `Tabla del ${tabla}:\n`;
  for (let i = 1; i <= 10; i++) {
    resultado += `${tabla} x ${i} = ${tabla * i}\n`;
  }

  const tablaResultado = document.getElementById("tablaResultado");
  tablaResultado.textContent = resultado;
  tablaResultado.style.whiteSpace = "pre-line";
}

function practicar() {
  contadorPreguntas = 0;
  puntaje = 0;
  generarNuevaPregunta();
}

function generarNuevaPregunta() {
  if (contadorPreguntas >= 5) {
    mostrarResultadoFinal();
    return;
  }

  numero1 = Math.floor(Math.random() * 10) + 1;
  numero2 = Math.floor(Math.random() * 10) + 1;

  const tablaResultado = document.getElementById("tablaResultado");
  tablaResultado.textContent = `Pregunta ${contadorPreguntas + 1}: ¿Cuánto es ${numero1} x ${numero2}?`;
}

function verificarPractica() {
  const respuestaUsuario = parseInt(
    document.getElementById("respuestaPractica").value.trim()
  );

  if (isNaN(respuestaUsuario)) {
    alert("Por favor, ingresa una respuesta válida.");
    return;
  }

  if (respuestaUsuario === numero1 * numero2) {
    puntaje++;
    alert("¡Correcto!");
  } else {
    alert(`Incorrecto. La respuesta era ${numero1 * numero2}`);
  }

  contadorPreguntas++;
  document.getElementById("respuestaPractica").value = "";
  generarNuevaPregunta();
}

function mostrarResultadoFinal() {
  const tablaResultado = document.getElementById("tablaResultado");
  tablaResultado.textContent = `¡Has terminado! Obtuviste ${puntaje} de 5 respuestas correctas.`;

  if (confirm("¿Quieres volver a practicar?")) {
    practicar();
  } else {
    tablaResultado.textContent += "\n¡Gracias por jugar! 😊";
  }
}

function borrar() {
  document.getElementById("numeroTabla").value = "";
  document.getElementById("respuestaPractica").value = "";
  document.getElementById("tablaResultado").textContent = "";
}

function salir() {
  document.getElementById("tablaResultado").innerHTML =
    "<h2>¡Gracias por practicar! 😊</h2>";
}
