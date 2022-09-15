const mailSignIn = document.getElementById("mail1");
const contraSignIn = document.getElementById("contra1");
const signIn = document.getElementById("signin");
let sesiones = [];

signIn.addEventListener("click", () => {
  if (localStorage.getItem("sesiones")) {
    sesiones = JSON.parse(localStorage.getItem("sesiones"));
    const puedeEntrar = revisarDatos();
    if (puedeEntrar) {
      for (let i in sesiones) {
        if (sesiones[i].mail === mailSignIn.value) {
          saldo = sesiones[i].saldo;
          nombre = sesiones[i].nombre;
        }
      }

      localStorage.removeItem("login");
      const login = {
        nombre: nombre,
        mail: mail1.value,
        contra: contra1.value,
        saldo: saldo,
      };
      localStorage.setItem("login", JSON.stringify(login));
      window.location.href = "inicio.html";
    } else {
      alert("El usuario o contraseña son incorrectos.");
    }
  }
});

function revisarDatos() {
  let entrar = false;
  for (let i in sesiones) {
    if (sesiones[i].mail === mailSignIn.value) {
      if (sesiones[i].contra === contraSignIn.value) {
        entrar = true;
      }
    }
  }
  return entrar;
}
