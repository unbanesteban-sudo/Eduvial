var situaciones = [
  {
    texto: "Llegás a una esquina sin semáforo ni carteles. Un auto viene por tu derecha.",
    respuesta: "cedo",
    explicacion: "El que viene por la derecha tiene prioridad (art. 41)."
  },
  {
    texto: "Doblás a la derecha y hay un peatón cruzando por la senda peatonal.",
    respuesta: "cedo",
    explicacion: "El peatón en la senda tiene prioridad (art. 41 inc. e)."
  },
  {
    texto: "Tenés un cartel de PARE. El otro auto viene por tu izquierda.",
    respuesta: "cedo",
    explicacion: "Con PARE perdés la prioridad, aunque el otro venga por la izquierda (art. 41 inc. a)."
  },
  {
    texto: "Llegás a una esquina sin señales y el otro auto viene por tu izquierda.",
    respuesta: "yo",
    explicacion: "Vos venís por la derecha del otro: tenés prioridad (art. 41). Igual, pasá con cuidado."
  },
  {
    texto: "Querés entrar a una rotonda y un auto ya está girando adentro.",
    respuesta: "cedo",
    explicacion: "El que circula por la rotonda tiene prioridad sobre el que entra (art. 43)."
  },
  {
    texto: "Tenés luz verde, pero del otro lado de la esquina está todo trabado.",
    respuesta: "cedo",
    explicacion: "Aunque esté en verde, no podés entrar si no hay lugar del otro lado (art. 44)."
  },
  {
    texto: "Viene una ambulancia con la sirena prendida por tu izquierda.",
    respuesta: "cedo",
    explicacion: "Los vehículos de emergencia en servicio tienen prioridad (art. 41 inc. c)."
  },
  {
    texto: "Salís de un camino de tierra a una calle asfaltada. Un auto viene por el asfalto, por tu izquierda.",
    respuesta: "cedo",
    explicacion: "Al salir de un camino de tierra a uno pavimentado perdés la prioridad (art. 41 inc. g)."
  }
];

var actual = 0;
var aciertos = 0;
var respondidas = 0;

var numero = document.getElementById("numero");
var texto = document.getElementById("texto");
var resultado = document.getElementById("resultado");
var puntaje = document.getElementById("puntaje");
var siguiente = document.getElementById("siguiente");
var pasoYo = document.getElementById("pasoYo");
var cedo = document.getElementById("cedo");

function mostrarSituacion() {
  numero.textContent = "Situación " + (actual + 1) + " de " + situaciones.length;
  texto.textContent = situaciones[actual].texto;
  resultado.textContent = "";
  resultado.className = "resultado";
  pasoYo.disabled = false;
  cedo.disabled = false;
  siguiente.hidden = true;
}

function responder(eleccion) {
  var situacion = situaciones[actual];
  respondidas++;

  if (eleccion === situacion.respuesta) {
    aciertos++;
    resultado.textContent = "Correcto. " + situacion.explicacion;
    resultado.className = "resultado bien";
  } else {
    resultado.textContent = "No. " + situacion.explicacion;
    resultado.className = "resultado mal";
  }

  puntaje.textContent = aciertos + " de " + respondidas;
  pasoYo.disabled = true;
  cedo.disabled = true;
  siguiente.hidden = false;

  if (actual === situaciones.length - 1) {
    siguiente.textContent = "Empezar de nuevo";
  }
}

pasoYo.onclick = function () {
  responder("yo");
};

cedo.onclick = function () {
  responder("cedo");
};

siguiente.onclick = function () {
  if (actual === situaciones.length - 1) {
    actual = 0;
    aciertos = 0;
    respondidas = 0;
    puntaje.textContent = "0 de 0";
    siguiente.textContent = "Siguiente situación";
  } else {
    actual++;
  }
  mostrarSituacion();
};

mostrarSituacion();
