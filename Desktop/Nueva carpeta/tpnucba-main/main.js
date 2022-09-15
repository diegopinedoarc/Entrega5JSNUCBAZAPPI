const nombre = document.getElementById("nombre");
const mail = document.getElementById("mail");
const contra = document.getElementById("contra");
const signUp = document.getElementById("signup");
const mensajes = document.getElementById("mensajes");
let sesiones = [];

signUp.addEventListener("click", () => {
  const esCorrecto = verificar();
  if (esCorrecto) {
    const sesion = {
      nombre: nombre.value,
      mail: mail.value,
      contra: contra.value,
      saldo: 10000,
    };
    sesiones.push(sesion);
    localStorage.setItem("sesiones", JSON.stringify(sesiones));
  }
});

function verificar() {
  let correcto = true;
  let mensaje = "";

  if (localStorage.getItem("sesiones")) {
    sesiones = JSON.parse(localStorage.getItem("sesiones"));
  }

  if (mail.value === "" || contra.value === "") {
    mensaje = "No pueden haber campos vacíos";
    correcto = false;
  }

  for (let i in sesiones) {
    if (sesiones[i].mail === mail.value) {
      mensaje = "El usuario ya existe";
      correcto = false;
    }
  }

  if (!correcto) {
    mensajes.innerText = mensaje;
  }

  return correcto;
}
