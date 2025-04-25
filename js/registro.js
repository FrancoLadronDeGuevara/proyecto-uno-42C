verificarUsuarioLogueado()

const formulario = document.getElementById("formulario");
const inputCheckbox = document.getElementById("inputCheckbox");
const btnMostrar = document.getElementById("btnMostrar");
const btnMostrar2 = document.getElementById("btnMostrar2");

const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];

btnMostrar.addEventListener("click", () => {
  mostrarPassword("inputPassword", "btnIcono");
});

btnMostrar2.addEventListener("click", () => {
  mostrarPassword("inputPassword2", "btnIcono2");
});

const regCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regPassword = /^.{8,20}$/;

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputEmail = document.getElementById("inputEmail").value;
  const inputPassword = document.getElementById("inputPassword").value;
  const inputPassword2 = document.getElementById("inputPassword2").value;

  if (!regCorreo.test(inputEmail)) {
    return alertaError("Por favor, introduce un correo válido");
  }

  if (!regPassword.test(inputPassword)) {
    return alertaError(
      "La contraseña debe ser mayor a 8 caracteres y menor a 20"
    );
  }

  if (inputPassword !== inputPassword2) {
    return alertaAviso("Las contraseñas no coinciden");
  }

  if (!inputCheckbox.checked) {
    return alertaAviso("Por favor, acepta los terminos y condiciones");
  }

  if (inputEmail === "administrador@gmail.com") {
    return alertaError("El email ya se encuentra registrado");
  }

  const usuarioExiste =
    listaUsuarios.find((usuario) => usuario.email === inputEmail) || false;

  if (usuarioExiste) {
    return alertaError("El email ya se encuentra registrado");
  }

  const nuevoUsuario = {
    email: inputEmail,
    password: inputPassword,
  };

  listaUsuarios.push(nuevoUsuario);

  localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));

  alertaExitosa("El usuario se ha registrado correctamente");

  setTimeout(() => {
    window.location.href = "../Login/index.html";
  }, 3000);
});
