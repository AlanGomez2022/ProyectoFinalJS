let caja = document.getElementById("cajita")
let cajon = document.getElementById("cajota")
let compra = JSON.parse(localStorage.getItem("compraTicket"))

caja.innerText=` esto es lo que se trajo del LocalStorage \n
    ${compra.total}
}`


