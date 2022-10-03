const CAMPOGRAL = 9000
const CAMPODELANTERO = 15000
const CLUB = 0.15
const COSTOS = 2000

const compraTicket = {
        sector:"",
        tipoEntrada:"",
        cantidad:0,
    }



//------------------------------------------------------------------
//compra.hmtl
let campoGral = document.getElementById("campoGeneral");
let campoDelantero =document.getElementById("campoDelantero");
let form= document.getElementById("form");
form.style.display="none" // ESTO HACE QUE DESAPAREZCA EL HTML del FORM


function evento (campo){
    form.style.display="" //vuelve a verse el formulario para seguir ingresando datos
    compraTicket.sector=campo;
    let tituloCampo = document.getElementById("tituloCampo");
    tituloCampo.innerText=` C A M P O    ---       ${campo} `
    let valorNormal = document.getElementById("valorNormal")
    let conDescuento=document.getElementById("conDescuento")

    if (campo=="Delantero"){
        Toastify({
            text: "SELECCIONASTE CAMPO DELANTERO...",
            duration: 4000,
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
        valorNormal.innerText=` NORMAL: $ ${CAMPODELANTERO} + $ ${COSTOS} (Costos de servicio) `
        conDescuento.innerText= `Con CLUB PERSONAL: $ ${CAMPODELANTERO-CAMPODELANTERO*CLUB} + $ ${COSTOS-COSTOS*CLUB} (Costos de servicio)`    
    }else{
        Toastify({
            text: "SELECCIONASTE CAMPO GENERAL...",
            duration: 4000,
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
        valorNormal.innerText=` NORMAL: $ ${CAMPOGRAL} + $ ${COSTOS} (Costos de servicio) `
        conDescuento.innerText= `Con CLUB PERSONAL: $ ${CAMPOGRAL-CAMPOGRAL*CLUB} + $ ${COSTOS-COSTOS*CLUB} (Costos de servicio)`
    
    }
}

campoDelantero.onclick = () => evento("Delantero")
campoGral.onclick = () => evento("General")

let boton = document.getElementById("botonReserva")



boton.onclick = () =>{
    
    let radio1 = document.getElementById("exampleRadios1");
    let radio2 = document.getElementById("exampleRadios2");
    compraTicket.tipoEntrada = radio1.checked ?  radio1.value  : radio2.value;
    compraTicket.cantidad = document.getElementById("select").value
    const {sector, tipoEntrada, cantidad} = compraTicket
    localStorage.setItem("sector",sector)
    localStorage.setItem("tipoEntrada", tipoEntrada)
    localStorage.setItem("cantidad",cantidad)
    
      swal({
        title:"¿Estas seguro que queres realizar la siguiente reserva?",
        text: `Sector: ${sector} \n
        Tipo de entrada: ${tipoEntrada} \n
        Cantidad de Entradas: ${cantidad}  `,
        icon:"info",
        buttons:{
            cancel:"No, Salir!",
            continuar:"Esta todo OK",
        }
      })
      .then((value) => {
        switch (value) {
       
            case "continuar":
                swal(window.location="../pages/compra2.html");
                break;
            
            case "cancel":
            swal("SALIENDO");
            break;
    
            default:
            swal("SALIENDO");
            break;
        }
      });    
    
}