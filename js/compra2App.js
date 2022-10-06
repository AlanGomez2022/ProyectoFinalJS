class CompraTicket{
  constructor(sector,precio,costosExtra,descuento){
    this.personas=[];
    this.sector = sector;
    this.precioSector= precio;
    this.descuento=descuento;
    this.costosAdmin=costosExtra;
    this.total = 0;
  }
  agregarPersona(persona){
    this.personas.push(persona);
}
  calcularTotal(){
      let subtotal= (this.precioSector*(this.personas.length)+this.costosAdmin*(this.personas.length))
      this.total=subtotal-(subtotal*this.descuento)

  }
}

class Persona{
  constructor (nombre,dni){
    this.nombre=nombre;
    this.dni=dni;
  }
}

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

let botonCompra = document.getElementById("botonCompra");

botonCompra.onclick = () =>{
  //me traigo todos los datos del localStorage
  let sector = localStorage.getItem("sector");
  let precio = localStorage.getItem("precio");
  let costos = localStorage.getItem("costosExtra");
  let descuento = localStorage.getItem("descuento");
  //creo la compra y comienzo a asignarle todos los datos que me importan
  let compra = new CompraTicket(sector, precio, costos, descuento);
  //tengo que traerme los datos de, solamente, los inputs que estaban activos
  //por eso me los vuelvo a traer pero esta vez recorro los que estan activos
  // el "required" dentro de las etiquetas del HTML obliga a que esten los datos completos. 
  //no pude manejarlo con el evento submit ya que hay elementos del DOM que hice dinamicos y 
  //como no estan visibles se me complico poder controlarlos mediante el preventDefault
    let nombres = document.getElementsByClassName("form-control")
    let dni = document.getElementsByClassName ("form-control1")
    let cantidadEntradas =parseInt(localStorage.getItem("cantidad"))
    for(let i=0; i<cantidadEntradas;i++){
        let personita = new Persona(nombres[i].value , dni[i].value)
        compra.agregarPersona(personita)
    }
    compra.calcularTotal();
    localStorage.setItem("compraTicket",JSON.stringify(compra))
    swal({
      title:"¿Estas seguro que quieres continuar al metodo de pago?",
      icon:"info",
      buttons:{
          cancel:"No, Debo revisar datos nuevamente",
          continuar:"SI, deseo continuar",
      }
    })
    .then((value) => {
      switch (value) {
     
          case "continuar":
              swal(window.location="../pages/pago.html");
              break;
          
          case "cancel":
          swal("continuando");
          break;
  
          default:
          swal("Por favor vuelve a revisar los datos de las personas");
          break;
      }
    });    
}
