verificarUsuarioLogueado()

const btnMostrar = document.getElementById("btnMostrar"); //Recuperamos el boton de mostrar

btnMostrar.addEventListener("click", () => {
  //Evento click del boton de mostrar
  mostrarPassword("inputPassword", "btnIcono"); //Llamamos a la funcion mostrarPassword
});

const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")); //Recuperamos la lista de usuarios de localStorage

const formulario = document.getElementById("formulario"); //Recuperamos el formulario

formulario.addEventListener("submit", (e) => {
  //Evento submit del formulario
  e.preventDefault(); //Evitamos el envio del formulario

  const inputEmail = document.getElementById("inputEmail").value; //Recuperamos el valor del input email
  const inputPassword = document.getElementById("inputPassword").value; //Recuperamos el valor del input password
  const inputCheckbox = document.getElementById("inputCheckbox"); //Recuperamos el boton de checkbox

  if (inputEmail === "administrador@gmail.com" && inputPassword === "admin") {
    //Si el email es administrador@gmail.com y la contraseña es admin
    mensajeBienvenido(); //Mostramos un mensaje de bienvenida
    guardarSesion("adminLogueado", inputCheckbox.checked); //Guardamos en localStorage que el admin esta logueado
    return; //Retornamos
  }

  const usuarioValido = listaUsuarios.find(
    //Buscamos el usuario en la lista
    (usuario) =>
      usuario.email === inputEmail && usuario.password === inputPassword //Si el email y la contraseña son correctos retornamos true
  );

  if (!usuarioValido) {
    //Si el usuario no es valido
    alertaError("El email o la contraseña son incorrectos");
    return; //Retornamos
  }

  //Si el usuario es valido
  guardarSesion("usuarioLogueado", inputCheckbox.checked); //Guardamos en localStorage que el usuario esta logueado
  mensajeBienvenido(); //Mostramos un mensaje de bienvenida
});

function mensajeBienvenido() {
  alertaExitosa("Bienvenido!");

  setTimeout(() => {
    window.location.href = "../../index.html";
  }, 3000);
}

function guardarSesion(tipoUsuario, checked) {
  return checked
    ? localStorage.setItem(tipoUsuario, JSON.stringify(true)) //Se ejecuta si el checkbox esta checked (true)
    : sessionStorage.setItem(tipoUsuario, JSON.stringify(true)); //Se ejecuta si el checkbox no esta checked (false)
}
