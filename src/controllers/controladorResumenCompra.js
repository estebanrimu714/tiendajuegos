//accedemos a la variable local del carrito
let carrito=JSON.parse(localStorage.getItem('carrito'))

//crear referencia para lamacenar contenedor
let contenedor=document.getElementById("contenedor")

let cantidaddecarrito=localStorage.getItem("cantidad")
console.log(localStorage.getItem("cantidad"))

let cantidadCarrito= document.getElementById("bolita")
//cantidadCarrito.textContent=cantidaddecarrito

//comparo o pregunto si el carrito esta vacio
if(carrito==null){

let fila=document.createElement("div")
    fila.classList.add("row")

    let columna1=document.createElement("div")
    columna1.classList.add("col-12","col-md-4","border-end")

    let columna2=document.createElement("div")
    columna2.classList.add("col-12","col-md-6","border-end")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid","w-100")
    foto.src="../../assets/img/Carro_Vacio1.png"

    let mensaje=document.createElement("h3")
    mensaje.classList.add("text-center")
    mensaje.textContent="tu carrito esta vacio"

    let boton=document.createElement("a")
    boton.classList.add("btn", "btn-primary","w-50","d-block", "mx-auto")
    boton.textContent="ir a la tienda"
    boton.setAttribute("href","../../index.html")

    //padre e hijos
    columna1.appendChild(foto)
    columna2.appendChild(mensaje)
    columna2.appendChild(boton)
    fila.appendChild(columna1)
    fila.appendChild(columna2)
    contenedor.appendChild(fila)

}else{//el carrito esta lleno

    //limpiar el contenedor

    //recorro el carrito de compras
    carrito.forEach(function(producto){

        let fila=document.createElement("div")
        fila.classList.add("row",)
    
        let columna1=document.createElement("div")
        columna1.classList.add("col-12","col-md-4","border-end")
    
        let columna2=document.createElement("div")
        columna2.classList.add("col-12","col-md-6","border-end")

        let foto=document.createElement("img")
        foto.classList.add("img-fluid","w-100")
        foto.src=producto.foto

        let nombre=document.createElement("h3")
        nombre.textContent=producto.nombre

        let boton=document.createElement("a")
        boton.classList.add("btn","btn-primary","w-50")
     

        let cantidad=document.createElement("h3")
        cantidad.textContent=producto.cantidad

        let precio=document.createElement("h3")
        precio.textContent=producto.precio
       // precio.textContent="Precio Und: "+precioProducto
      // let subtotalEtiqueta = document.createElement("h5")
      // subtotalEtiqueta.textContent='subtotal: ' + '$' + (Number(cantidad.textContent.split('Cantidad: ')[1])*Number(precio.textContent.split('$')[1]))
      
      //let totalEtiqueta = document.getElementById("total")
      //totalEtiqueta.textContent=total

        columna1.appendChild(foto)
        columna2.appendChild(nombre)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        contenedor.appendChild(fila)

    })
}