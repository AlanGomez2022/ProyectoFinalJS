//------------------------------------------------------------------------
// compra2.html
Toastify({
    text: "SE HA GENERADO TU RESERVA...",
    duration: 3000,
    className:"tostada",
    destination: "",
    newWindow: true,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "background-image: linear-gradient(105deg, #cf536a 0, #cb4a6f 7.14%, #c54074 14.29%, #bd357a 21.43%, #b22a7f 28.57%, #a41e85 35.71%, #93128a 42.86%, #7e098f 50%, #640994 57.14%, #401199 64.29%, #001a9e 71.43%, #0021a3 78.57%, #0026a6 85.71%, #0029a7 92.86%, #002ba7 100%);",
    },
    onClick: function(){} // Callback after click
  }).showToast();



let form2 = document.getElementById("form2")
form2.style.display="none"
let asignar = document.getElementById("asignarNombres")


asignar.onclick= () =>{
    Toastify({
        text: "ASIGNANDO DATOS...",
        duration: 3000,
        className:"tostada",
        destination: "",
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "background-image: linear-gradient(105deg, #cf536a 0, #cb4a6f 7.14%, #c54074 14.29%, #bd357a 21.43%, #b22a7f 28.57%, #a41e85 35.71%, #93128a 42.86%, #7e098f 50%, #640994 57.14%, #401199 64.29%, #001a9e 71.43%, #0021a3 78.57%, #0026a6 85.71%, #0029a7 92.86%, #002ba7 100%);",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    form2.style.display=""
    asignar.style.display="none"
    
    // me guardo todos los label y los elementos del formulario
    // porque solo estoy interesado en habilitar lo que necesito completar
    // en base a la cantidad de entradas que pedi en la pagina anterior
    let labelNombres = document.getElementsByClassName("form-label")
    let cajaspersonas = document.getElementsByClassName("persona")
    let nombres = document.getElementsByClassName("form-control")
    let labelDni= document.getElementsByClassName("form-label2")
    let dni = document.getElementsByClassName ("form-control1")
    let cantidadEntradas =parseInt(localStorage.getItem("cantidad"))
    for(let i=cantidadEntradas; i<nombres.length;i++){
        labelNombres[i].style.display="none"
        nombres[i].style.display="none"
        labelDni[i].style.display="none"
        dni[i].style.display="none"
        cajaspersonas[i].style.display="none"
    }
}

