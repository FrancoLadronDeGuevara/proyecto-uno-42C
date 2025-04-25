function mostrarPassword(id, idIcono) {
  const inputPassword = document.getElementById(id);
  const icono = document.getElementById(idIcono);

  inputPassword.type === "password"
    ? (inputPassword.type = "text")
    : (inputPassword.type = "password");

  icono.classList.toggle("bi-eye-fill");
  icono.classList.toggle("bi-eye-slash-fill");
}

function verificarUsuarioLogueado() {
  const usuarioLogueado =
    JSON.parse(localStorage.getItem("usuarioLogueado")) ||
    JSON.parse(sessionStorage.getItem("usuarioLogueado")) ||
    false; //Si existe usuarioLogueado en localStorage, la guardamos en la variable usuarioLogueado de lo contrario la inicializamos false
  const adminLogueado =
    JSON.parse(localStorage.getItem("adminLogueado")) ||
    JSON.parse(sessionStorage.getItem("adminLogueado")) ||
    false; //Si existe adminLogueado en localStorage, la guardamos en la variable adminLogueado de lo contrario la inicializamos false

  if (usuarioLogueado || adminLogueado) {
    // Si el usuario esta logueado o el admin esta logueado
    alertaAviso("Ya estas logueado");

    setTimeout(() => {
      window.location.href = "../../index.html"; //Redirigimos a la pagina principal despues de 3 segundos
    }, 1500);
  }
}
