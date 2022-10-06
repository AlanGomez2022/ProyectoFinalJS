//me traigo los inputs para el onchange
let nroTarjeta = document.getElementById("nroTarjeta")
let nameTitular = document.getElementById("nameTitular")
let selectEmpresa = document.getElementById("select")

//me traigo los carteles que se van a actualizar mientras  se escriba el FORM
let numeroTarjeta = document.getElementById("creditCardNumber")
let titularTarjeta = document.getElementById("creditCardOwner")
let empresaTarjeta = document.getElementById("empresaTarjeta")

nroTarjeta.onkeyup = () => {
    //voy actualizando la tarjeta al instante con el numero y el nombre
    numeroTarjeta.innerText=`${nroTarjeta.value}`
}
nameTitular.onkeyup = () => {
    titularTarjeta.innerText=`${nameTitular.value}`
}
selectEmpresa.onchange = () =>{
    //controlo la empresa elegida en el select del formulario para 
    // volcarlo en la tarjeta
    switch (selectEmpresa.value) {
        case "1":
            console.log(selectEmpresa.value)
            empresaTarjeta.innerText = "VISA"
            break;
        case "2":
            console.log(selectEmpresa.value)
            empresaTarjeta.innerText = "MASTER CARD"
        break;
        case "3":
            console.log(selectEmpresa.value)
            empresaTarjeta.innerText = "AMERICAN EXPRESS"
            break;
        default:
            break;
    }
    
}





//--------------------------------------------------------------------------------------
// RELOJ CON FECHA QUE UTILIZA UNA API
//--------------------------------------------------------------------------------------

const tiempo = document.getElementById("reloj")
const diaSemana = document.createElement("p")
const hora = document.createElement("p")
setInterval(() => {
      fetch("http://worldtimeapi.org/api//America/Argentina/Buenos_Aires")
    .then((res) => res.json())
    .then ((resultado) =>{
      let fecha="";
      let dia=[0,"Lunes","Martes","Miercoles", "Jueves","Viernes","Sabado","Domingo"];
      for (let i=0;i<10;i++ ) {
        fecha+=resultado.datetime[i];
      }
    
      diaSemana.innerHTML=`
      <p>${dia[resultado.day_of_week]}  ${fecha}</p>
      `
      let time="";
      for (let i=11;i<19;i++){
        time+=resultado.datetime[i];
    
      }
      hora.innerHTML=`
        <p>Horario: ${time}</p>
      `
      
   
      tiempo.append(diaSemana)
      tiempo.append(hora)
    })
},1000)


let form = document.getElementById("form");

const pago = {
  mail:"",
  numberCreditCard:0,
  nameTitularTarjeta:"",
  tipoTarjeta:"" 
  //dejo fuera el resto de los datos como vencimiento y CVV
  //para una futura validacion
}
form.addEventListener ("submit",datosForm)

function datosForm (e){
  e.preventDefault();
  let datos = e.target
  pago.mail=datos.children[0].children[1].value;//saco el nombre del mail
  pago.numberCreditCard=datos.children[1].children[1].value;//el numero de la tarjeta
  pago.nameTitularTarjeta=datos.children[2].children[1].value;//nombre del titular de la tarjeta
  //DEJO TODOS ESTOS DATOS COMENTADOS PORQUE NO LOS NECESITO
  //QUIZAS PARA UNA FUTURA VALIDACION DE TARJETAS CON API DE TARJETAS DE CREDITO
  //datos.children[3].children[1].children[0].value; //mes vencimiento
  //datos.children[3].children[1].children[1].value); //año vencimiento
  //datos.children[4].children[1].children[0].value); //CVV de la tarjeta
  pago.tipoTarjeta=datos.children[4].children[1].children[1].value;//empresa tarjeta

  localStorage.setItem("datosPago",JSON.stringify(pago));
  swal({
    title:"Esta por debitarse el pago por la reserva del evento, ¿Desea continuar?",
    icon:"info",
    buttons:{
        cancel:"No, Debo revisar datos nuevamente",
        continuar:"SI, deseo continuar",
    }
  })
  .then((value) => {
    switch (value) {
   
        case "continuar":
            swal(window.location="../pages/comprobante.html");
            break;
        
        case "cancel":
        swal("continuando");
        break;

        default:
        swal("Por favor vuelve a revisar los datos de la compra");
        break;
    }
  });    
}
