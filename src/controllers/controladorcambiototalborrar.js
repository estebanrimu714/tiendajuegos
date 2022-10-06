let precio=document.createElement("h3")
precio.textContent=producto.precio
// precio.textContent="Precio Und: "+precioProducto
// let subtotalEtiqueta = document.createElement("h5")
// subtotalEtiqueta.textContent='subtotal: ' + '$' + (Number(cantidad.textContent.split('Cantidad: ')[1])*Number(precio.textContent.split('$')[1]))

//let totalEtiqueta = document.getElementById("total")
//totalEtiqueta.textContent=total


//recorro el carrito de compras

 let total=0
 /carrito.forEach(function(producto){
      total=total+(Number(producto.precio.split("$")[1])*Number(producto.cantidad))
      console.log(total)

      let cambioDolar=document.getElementById("cambioMoneda")
      let totalf=document.getElementById("total")
      cambioDolar.addEventListener("click",function(evento){
          let coptousd=total/4378.27 
         totalf.innerHTML=coptousd+("usd")
      })

      pintarResumenCompra(producto.foto,producto.nombre,false,true,producto.precio,true,producto.cantidad,total)
  })



//RUTINA PARA LIMPIAR EL RESUMEN DE LA COMPRA
let botonLimpiar=document.getElementById("botonLimpiar")
botonLimpiar.addEventListener("click",function(evento){
  localStorage.removeItem("carrito")

 let contenedor=document.getElementById("contenedor")
  contenedor.innerHTML=""

 let cambioDolar=document.getElementById("cambioMoneda")
 cambioDolar.classList.add("invisible")
  
})


let botonLimpiar = document.getElementById('botonLimpiar')
botonLimpiar.addEventListener("click", function () {
Storage.removeItem("carrito")
Storage.removeItem('contadorProducto')
let contenedor = document.getElementById('contenedor')
contenedor.innerHTML = ""
document.getElementById('cambioMoneda').innerHTML=''
pintarResumenCompra('../../assets/img/carrovacio.jpg','../../assets/img/carrovacio.jpg','Carrito Vacio', true, false,false ,null, false, null, false)
document.getElementById('numeroProducto').innerHTML = 0
document.getElementById('total').innerHTML = ''

})