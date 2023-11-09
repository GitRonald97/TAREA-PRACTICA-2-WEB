// Obtenemos el botón y el elemento de destino por sus IDs
const boton = document.getElementById("cambiarEstiloBtn");
const elementoDestino = document.getElementById("elementoDestino");

// Función para cambiar el estilo del elemento de destino al hacer clic en el botón
function cambiarEstilo() {
  // Cambiamos el color de fondo del elemento de destino
  elementoDestino.style.backgroundColor = "lightgreen";
  // Podemos agregar más estilos según sea necesario
}

// Asociamos la función al evento de clic en el botón
boton.addEventListener("click", cambiarEstilo);

let operacion = '';
let operando = '';

function agregarNumero(numero) {
  operando += numero;
  actualizarResultado();
}

function agregarOperador(op) {
  operacion = op;
  operando += operacion;
  actualizarResultado();
}

function borrar() {
  operando = '';
  operacion = '';
  actualizarResultado();
}

function calcular() {
  try {
    operando = eval(operando);
    operacion = '';
    actualizarResultado();
  } catch (error) {
    operando = '';
    operacion = '';
    actualizarResultado();
  }
}

function actualizarResultado() {
  document.getElementById('resultado').value = operando;
}
// Obtenemos la referencia a la imagen por su ID
const miImagen = document.getElementById("miImagen");

// Función para cambiar la imagen al pasar el ratón sobre ella
function cambiarImagen() {
  miImagen.src = "imagen2.jpg"; // Ruta de la segunda imagen que se mostrará
}

// Asociamos la función al evento de pasar el ratón sobre la imagen
miImagen.addEventListener("mouseover", cambiarImagen);

function actualizarReloj() {
  const hora = document.getElementById("hora");
  const minuto = document.getElementById("minuto");
  const segundo = document.getElementById("segundo");

  const ahora = new Date();
  const segundos = ahora.getSeconds();
  const minutos = ahora.getMinutes();
  const horas = ahora.getHours();

  const gradoSegundo = (segundos / 60) * 360;
  const gradoMinuto = ((minutos + segundos / 60) / 60) * 360;
  const gradoHora = ((horas % 12 + minutos / 60) / 12) * 360;

  segundo.style.transform = `rotate(${gradoSegundo}deg)`;
  minuto.style.transform = `rotate(${gradoMinuto}deg)`;
  hora.style.transform = `rotate(${gradoHora}deg)`;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);


function setup() {
    noCanvas();
    frameRate(1);

    let html = `
        <circle 
            cx="150" 
            cy="150" 
            r="5" 
            stroke="transparent" 
            fill="black" 
        />
    `;
    for (let i = 0; i < 60; i++) {
        html += `
            <circle 
                cx="${(120 * cos(2 * PI * i / 60)) + 150}" 
                cy="${(120 * sin(2 * PI * i / 60)) + 150}" 
                r="${i % 15 == 0 ? 4 : i % 5 == 0 ? 2 : 1}" 
                stroke="transparent" 
                fill="black" 
                stroke-width="1"
            />
        `;
    }
    select("#puntos").html(html);
}

function draw() {
    let hora = hour() % 12;
    let minuto = minute();
    let segundo = second();
    select("#texto-hora-digital").html(`
        ${(hora + "").padStart(2, 0)}:${(minuto + "").padStart(2, 0)}:${(segundo + "").padStart(2, 0)}
    `);
    select("#horas").style("transform", `rotate(${360 * hora / 12}deg)`);
    select("#minutos").style("transform", `rotate(${360 * minuto / 60}deg)`);
    select("#segundos").style("transform", `rotate(${360 * segundo / 60}deg)`);
}


<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulario de Registro</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<form id="registroForm">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" required><br>

  <label for="email">Correo Electrónico:</label>
  <input type="email" id="email" name="email" required><br>

  <label for="password">Contraseña:</label>
  <input type="password" id="password" name="password" required><br>

  <input type="submit" value="Enviar">
</form>

<script src="script.js"></script>
</body>
</html>
function agregarTarea() {
  const nuevaTarea = document.getElementById("nuevaTarea").value;
  if (nuevaTarea === "") {
    return; // Evitar agregar tarea vacía
  }

  const listaTareas = document.getElementById("listaTareas");
  const tareaElemento = document.createElement("li");
  tareaElemento.innerText = nuevaTarea;

  const botonEliminar = document.createElement("button");
  botonEliminar.innerText = "Eliminar";
  botonEliminar.onclick = function() {
    listaTareas.removeChild(tareaElemento);
  };

  tareaElemento.appendChild(botonEliminar);
  listaTareas.appendChild(tareaElemento);

  // Limpiar el campo de texto después de agregar la tarea
  document.getElementById("nuevaTarea").value = "";
}
document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll(".menuItem");

  items.forEach(function(item) {
    item.addEventListener("click", function() {
      const submenu = this.querySelector(".submenu");
      if (submenu) {
        submenu.style.display = submenu.style.display === "none" || submenu.style.display === "" ? "block" : "none";
      }
    });
  });
});
const carrusel = document.querySelector(".carrusel");
const slides = document.querySelectorAll(".slide");
const anteriorBtn = document.getElementById("anterior");
const siguienteBtn = document.getElementById("siguiente");
let currentIndex = 0;

function mostrarSlide(index) {
  carrusel.style.transform = `translateX(${-index * 300}px)`;
}

function mostrarSiguienteSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  mostrarSlide(currentIndex);
}

function mostrarSlideAnterior() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  mostrarSlide(currentIndex);
}

anteriorBtn.addEventListener("click", mostrarSlideAnterior);
siguienteBtn.addEventListener("click", mostrarSiguienteSlide);

// Cambiar automáticamente de imagen cada 3 segundos
setInterval(mostrarSiguienteSlide, 3000);
const fechaFinal = new Date("2023-12-31T23:59:59").getTime(); // Establece la fecha y hora final del temporizador

function actualizarTemporizador() {
  const ahora = new Date().getTime();
  const tiempoRestante = fechaFinal - ahora;

  const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

  document.getElementById("temporizador").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

  if (tiempoRestante <= 0) {
    document.getElementById("temporizador").innerHTML = "¡Tiempo agotado!";
  }
}

setInterval(actualizarTemporizador, 1000);
const preguntas = [
  {
    pregunta: "¿Cuál es la capital de Francia?",
    opciones: ["Londres", "París", "Madrid", "Berlín"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Cuál es el símbolo químico del oro?",
    opciones: ["Au", "Ag", "Fe", "Cu"],
    respuestaCorrecta: 0
  },
  // Agrega más preguntas según sea necesario
];

let preguntaActual = 0;
let puntuacion = 0;

function mostrarPregunta() {
  const preguntaElemento = document.getElementById("pregunta");
  const opcionesElemento = document.getElementById("opciones");
  const preguntaActualObj = preguntas[preguntaActual];

  preguntaElemento.textContent = preguntaActualObj.pregunta;
  opcionesElemento.innerHTML = "";

  preguntaActualObj.opciones.forEach((opcion, indice) => {
    const boton = document.createElement("button");
    boton.textContent = opcion;
    boton.addEventListener("click", function() {
      evaluarRespuesta(indice);
    });
    opcionesElemento.appendChild(boton);
  });
}

function evaluarRespuesta(indice) {
  const preguntaActualObj = preguntas[preguntaActual];
  if (indice === preguntaActualObj.respuestaCorrecta) {
    puntuacion++;
  }

  preguntaActual++;
  if (preguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarPuntuacion();
  }
}

function mostrarPuntuacion() {
  const juegoElemento = document.getElementById("juego");
  juegoElemento.innerHTML = `<h2>Puntuación final: ${puntuacion} / ${preguntas.length}</h2>`;
}
  
function siguientePregunta() {
  if (preguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarPuntuacion();
  }
}

mostrarPregunta();
