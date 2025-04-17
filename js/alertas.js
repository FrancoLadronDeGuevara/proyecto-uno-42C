function alertaError(texto){
    Swal.fire({
        icon: "error",
        text: texto,
        toast: true,
        position: "bottom-start",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
}

function alertaAviso(texto){
    Swal.fire({
        icon: "warning",
        text: texto,
        toast: true,
        position: "bottom-start",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
}

function alertaExitosa(texto){
    Swal.fire({
        icon: "success",
        text: texto,
        toast: true,
        position: "bottom-start",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
}