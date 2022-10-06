let reloj = document.getElementById ("reloj")
const diaSemana = document.createElement("p")
const hora = document.createElement("p")
//primero me guardo la fecha y la hora del comprobante
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

  reloj.append(diaSemana)
  reloj.append(hora)
})
//me traigo desde el LOCALSTORAGE todos los valores que voy a mosrtar en el comprobante
const compraTicket = JSON.parse(localStorage.getItem("compraTicket"))
const datosPago = JSON.parse(localStorage.getItem("datosPago"))

//hago el destructiring para trabajar mas comodo con variables
const {personas,sector,precioSector,descuento,costosAdmin,total} = compraTicket;
const {mail,nameTitularTarjeta,numberCreditCard,tipoTarjeta} = datosPago;


let correo = document.getElementById("mail")
correo.innerText = `${mail} (es el correo registrado)`


let empresa = document.getElementById("tipoTarjeta")
//reviso empresa de la tarjeta
switch (tipoTarjeta) {
    case "1":
        empresa.innerText=`Tarjeta de tipo: VISA`
    break;
    case "2":
        empresa.innerText=`Tarjeta de tipo: MASTER CARD`
    break;
    case "3":
        empresa.innerText=`Tarjeta de tipo: AMERICAN EXPRESS`
    break;

    default:
        break;
}
let nroCard = document.getElementById("nroCard")
let elemento = "";
//obtengo solo los ultimos 4 numeros de la tarjeta
for (let index = 12; index < numberCreditCard.length; index++) {
    elemento += numberCreditCard[index]; 
}

nroCard.innerText=` XXXX XXXX XXXX ${elemento}`

let cantidad = document.getElementById("cantidad")

cantidad.innerText=`${personas.length} -  personas asistiran al evento `

let lugar = document.getElementById("lugar")
lugar.innerText= `${sector} - Precio $ ${precioSector}`

//aca voy obteniendo un texto donde acumulo cada persona
//del array en un grupo
let people = document.getElementById("personas")
let grupo="";
let contador=1;
personas.forEach(element => {
    grupo += `${contador} - Nombre: ${element.nombre} - \nDNI: ${element.dni}\n`
    contador++
});
people.innerHTML=`<p class="texto">  ${grupo}<p>`

// saco subtotal
//y finalmente digo si hay descuento
//y muestro el total de la compra

let subtotal = document.getElementById("subtotal")
subtotal.innerText=`Subtotal de la compra - $ ${(precioSector*personas.length)+parseInt(costosAdmin)}`

let totalCompra = document.getElementById("total")
if (descuento==0){
    totalCompra.innerText=`TOTAL: $ ${total} (Sin descuentos aplicados) `
}else{
    totalCompra.innerText=`TOTAL: $ ${total} con descuento Club personal(mostrar Club Personal en la entrada)`
}
