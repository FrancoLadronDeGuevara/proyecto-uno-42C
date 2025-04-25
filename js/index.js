let listaUsuariosPredeterminada = [
  // Lista de usuarios predeterminada
  {
    email: "francoguevara@gmail.com",
    password: "123456789",
  },
  {
    email: "flaviaarmella@gmail.com",
    password: "987654321",
  },
  {
    email: "juanmedina@gmail.com",
    password: "123789456",
  },
];

const usuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || []; //Si existe listaUsuarios en localStorage, la guardamos en la variable usuarios de lo contrario la inicializamos []

if (usuarios.length === 0) {
  //Si la lista de usuarios esta vacia la inicializamos con la lista predeterminada
  localStorage.setItem(
    "listaUsuarios",
    JSON.stringify(listaUsuariosPredeterminada)
  );
}

const usuarioLogueado =
  JSON.parse(localStorage.getItem("usuarioLogueado")) ||
  JSON.parse(sessionStorage.getItem("usuarioLogueado")) ||
  false; //Si existe usuarioLogueado en localStorage, la guardamos en la variable usuarioLogueado de lo contrario la inicializamos false
const adminLogueado =
  JSON.parse(localStorage.getItem("adminLogueado")) ||
  JSON.parse(sessionStorage.getItem("adminLogueado")) ||
  false; //Si existe adminLogueado en localStorage, la guardamos en la variable adminLogueado de lo contrario la inicializamos false

//Recuperamos los botones
const btnIniciarSesion = document.getElementById("btnIniciarSesion");
const btnRegistrarse = document.getElementById("btnRegistrarse");
const btnPanelControl = document.getElementById("btnPanelControl");
const btnBienvenida = document.getElementById("btnBienvenida");
const btnCerrarSesion = document.getElementById("btnCerrarSesion");

if (usuarioLogueado) {
  //Si el usuario esta logueado
  btnIniciarSesion.classList.add("d-none"); //Ocultamos el boton de iniciar sesion
  btnRegistrarse.classList.add("d-none"); //Ocultamos el boton de registrarse
  btnBienvenida.classList.remove("d-none"); //Mostramos el boton de bienvenida
  btnCerrarSesion.classList.remove("d-none"); //Mostramos el boton de cerrar sesion
}

if (adminLogueado) {
  //Si el admin esta logueado
  btnIniciarSesion.classList.add("d-none"); //Ocultamos el boton de iniciar sesion
  btnRegistrarse.classList.add("d-none"); //Ocultamos el boton de registrarse
  btnPanelControl.classList.remove("d-none"); //Mostramos el boton de panel de control
  btnCerrarSesion.classList.remove("d-none"); //Mostramos el boton de cerrar sesion
}

btnCerrarSesion.addEventListener("click", () => {
  Swal.fire({
    title: "Cerrar sesión?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, cerrar!",
  }).then((result) => {
    if (result.isConfirmed) {
      //Si el usuario confirma
      Swal.fire({
        title: "Cerraste sesion con exito!",
        icon: "success",
      });
      localStorage.removeItem("adminLogueado"); //Eliminamos el adminLogueado de localStorage
      localStorage.removeItem("usuarioLogueado"); //Eliminamos el usuarioLogueado de localStorage
      sessionStorage.removeItem("adminLogueado"); //Eliminamos el adminLogueado de sessionStorage
      sessionStorage.removeItem("usuarioLogueado"); //Eliminamos el usuarioLogueado de sessionStorage
      setTimeout(() => {
        window.location.reload(); // Recargamos la pagina despues de 2 segundos
      }, 2000);
    }
  });
});
