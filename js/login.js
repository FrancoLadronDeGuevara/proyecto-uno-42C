const usuarioLogueado =
  JSON.parse(localStorage.getItem("usuarioLogueado")) || false; //Si existe usuarioLogueado en localStorage, la guardamos en la variable usuarioLogueado de lo contrario la inicializamos false
const adminLogueado =
  JSON.parse(localStorage.getItem("adminLogueado")) || false; //Si existe adminLogueado en localStorage, la guardamos en la variable adminLogueado de lo contrario la inicializamos false

if (usuarioLogueado || adminLogueado) {
  // Si el usuario esta logueado o el admin esta logueado
  Swal.fire({
    //Mostramos una alerta
    icon: "warning",
    text: "Ya estas logueado",
    toast: true,
    position: "bottom-start",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  setTimeout(() => {
    window.location.href = "../../index.html"; //Redirigimos a la pagina principal despues de 3 segundos
  }, 3000);
}

const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")); //Recuperamos la lista de usuarios de localStorage

const formulario = document.getElementById("formulario"); //Recuperamos el formulario
const btnIniciarSesion = document.getElementById("btnIniciarSesion"); //Recuperamos el boton de iniciar sesion

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
    Swal.fire({
      // Mostramos una alerta de error
      icon: "error",
      text: "El correo o la contraseña son incorrectos",
      toast: true,
      position: "bottom-start",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    return; //Retornamos
  }

  //Si el usuario es valido
  guardarSesion("usuarioLogueado", inputCheckbox.checked); //Guardamos en localStorage que el usuario esta logueado
  mensajeBienvenido(); //Mostramos un mensaje de bienvenida
});

function mensajeBienvenido() {
  Swal.fire({
    icon: "success",
    text: "Bienvenido",
    toast: true,
    position: "bottom-start",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  setTimeout(() => {
    window.location.href = "../../index.html";
  }, 3000);
}

function guardarSesion(tipoUsuario, checked) {
  return checked
    ? localStorage.setItem(tipoUsuario, JSON.stringify(true)) //Se ejecuta si el checkbox esta checked (true)
    : sessionStorage.setItem(tipoUsuario, JSON.stringify(true)); //Se ejecuta si el checkbox no esta checked (false)
}
