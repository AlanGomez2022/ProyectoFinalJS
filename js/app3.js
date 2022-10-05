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

const tiempo = document.getElementById("reloj")
const date = document.createElement("p")
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
      
      tiempo.append(date)
      tiempo.append(diaSemana)
      tiempo.append(hora)
    })
},1000)


