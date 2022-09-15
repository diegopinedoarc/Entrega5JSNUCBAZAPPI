let login = [];
let sesiones = [];

window.addEventListener("load", () => {
  recuperarLocalStorage();
  pintarHTML();
});

function recuperarLocalStorage() {
  if (localStorage.getItem("login")) {
    login = JSON.parse(localStorage.getItem("login"));
  }
  if (localStorage.getItem("sesiones")) {
    sesiones = JSON.parse(localStorage.getItem("sesiones"));
  }
}

const bienvenido = document.getElementById("bienvenido");
const saldo = document.getElementById("saldo");

function pintarHTML() {
  bienvenido.innerHTML = `Bienvenido ${login.nombre}`;
  saldo.innerHTML = `Saldo: ${login.saldo}`;
}

const btnAgregar = document.getElementById("agregar-btn");
const cantidadAgregar = document.getElementById("agregar");

btnAgregar.addEventListener("click", () => {
  login.saldo += parseInt(cantidadAgregar.value);
  localStorage.setItem("login", JSON.stringify(login));
  pintarHTML();
});

const cerrarSesion = document.getElementById("cerrar-sesion");

cerrarSesion.addEventListener("click", () => {
  for (let i in sesiones) {
    if (sesiones[i].mail === login.mail) {
      sesiones[i].saldo = login.saldo;
      localStorage.setItem("sesiones", JSON.stringify(sesiones));
    }
  }
  window.location.href = "login.html";
});
