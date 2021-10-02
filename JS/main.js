let carrito = [];
if (localStorage.carrito !=null){
    carrito = carrito = JSON.parse(localStorage.carrito);
    document.getElementById("contador-carrito").innerHTML = carrito.length;
}



const producto_uno = new Producto("Tazas", 800, "Taza de Cerámica Premium personalizada", "https://raw.githubusercontent.com/DanielaSEscudero/tiendaTola-Tola/main/multimedia/Productos/taza%201.JPG", "tazas",  );
const producto_dos = new Producto("Chopp", 1200, "Chopp de vidrio Esmerilado personalizado", "https://raw.githubusercontent.com/DanielaSEscudero/tiendaTola-Tola/main/multimedia/Productos/chop%201.JPG", "tazas", );
const producto_tres = new Producto("llaveros", 250, "Llaveros acrílicos con código Spotify Con una canción o una playlist","https://raw.githubusercontent.com/DanielaSEscudero/tiendaTola-Tola/main/multimedia/Productos/llavero%201.JPG", "llaveros", );
const producto_cuatro = new Producto("llaveros", 250, "Llaveros acrílicos redondo con la incripcion personalizada","https://raw.githubusercontent.com/DanielaSEscudero/tiendaTola-Tola/main/multimedia/Productos/llavero%20redondo%201.jpg", "llaveros", );
const producto_cinco = new Producto("Body Bebe", 500, "Body bebé estampado personalizado ", "https://raw.githubusercontent.com/DanielaSEscudero/tiendaTola-Tola/main/multimedia/Productos/body%20bebe.JPG", "remeras",);
const producto_seis = new Producto("Buzo Canguro", 2000, "Buzo friza cuello canguro estampado", "https://raw.githubusercontent.com/DanielaSEscudero/tiendaTola-Tola/main/multimedia/Productos/buzo%20canguro1.JPG", "remeras",);
const producto_siete = new Producto("Buzo redondo", 2000, "Buzo friza cuello redondo estampado ", "https://raw.githubusercontent.com/DanielaSEscudero/tiendaTola-Tola/main/multimedia/Productos/buzo%20redondo1.jpg","remeras",);
const producto_ocho = new Producto("Remeras", 1700, "Remera algodón Premium estampada", "https://raw.githubusercontent.com/DanielaSEscudero/tiendaTola-Tola/main/multimedia/Productos/reme%203.jpeg","remeras",);


const todosLosProductos = [producto_uno, producto_dos, producto_tres, producto_cuatro, producto_cinco, producto_seis, producto_siete, producto_ocho];


//creando cards y filtro
filtrarProductos();

function filtrarProductos(filtro = 'default'){
    let nuevosProductos = (filtro !== "default") ?
    todosLosProductos.filter(producto => producto.category == filtro):
    todosLosProductos;
   
    let acumulador = ``;
    nuevosProductos.forEach((producto) => {
    acumulador += `<div class="col mb-5 cajas" id="${producto.title}">
            <div class="card h-100">
                <img class="card-img-top" id="btn${producto.title}" onclick="verDetalle('${producto.title}')"src="${producto.img}" alt="..." />
                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">${producto.title}</h5>
                        <p>${producto.description}</p>
                        $${producto.price}
                    </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto"                    
                    onclick="agregarAlCarrito('${producto.title}')">Agregar al carrito</a>
                    </div>
                </div>
            </div>
            </div>`
    });
    $("#productos").html(acumulador)
}






// funcionalidad del carrito

function agregarAlCarrito(title){
    const productoEncontrado = todosLosProductos.find(producto => producto.title === title);
    if(productoEncontrado != undefined){
        carrito.push(productoEncontrado);
    }else{
        alert("algo falló");
    }
    localStorage.carrito = JSON.stringify(carrito);
    document.getElementById("contador-carrito").innerHTML = carrito.length;  
}



//**************************************************************************** */
//nueva pag carrito

listaCarrito();

function listaCarrito(){
    let acumulador = ``;
    carrito.forEach((producto) => {
    acumulador += `<tr>
    <td> <img src="${producto.img}" width=100</td>
    <td>${producto.title}</td>
    <td>$ ${producto.price}</td>
    <td> 1 </td>
    <td>
        <a href="#" class="borrar-producto bi bi-x-square" style="font-size: 30px" data-id="${producto.title}" onclick="borrarProducto('${producto.title}')"></a>
    </td>
    </tr>`
    });
    $("#listado").html(acumulador)
}




//borrar productos del carrito
function borrarProducto(title){
    const productoEncontrado = carrito.filter(producto => producto.title != title);
    if (productoEncontrado.length > 0 ){
        carrito =  productoEncontrado
    }else{
        carrito = []
    }
    
    localStorage.carrito = JSON.stringify(carrito);
    document.getElementById("contador-carrito").innerHTML = carrito.length;
    listaCarrito();
    
}

//calcular total a pagar
let precioTotal = 0

carrito.forEach(producto => { precioTotal  +=  producto.price });
$("#total").html("TOTAL:    " + precioTotal);


// verDetalle();
// function verDetalle(){
//     let acumulador = ``;
//     todosLosProductos.forEach((producto) => {
//     acumulador += `<div class="container px-4 px-lg-5 my-5">
//     <div class="row gx-4 gx-lg-5 align-items-center">
//         <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="${producto.img}" alt="..." /></div>
//         <div class="col-md-6">
//             <h1 class="display-5 fw-bolder">${producto.title}</h1>
//             <div class="fs-5 mb-5">
//             <p class="lead">${producto.description}</p>
//             </div>
//             <span>$ ${producto.price}</span>
//             <div class="d-flex">
//                 <button class="btn btn-outline-dark flex-shrink-0" type="button">
//                 <a class="btn btn-outline-dark mt-auto"                    
//                 onclick="agregarAlCarrito('${producto.title}')">Agregar al carrito</a>
//                 </button>
//             </div>
//         </div>
//         </div>
//     </div>`
//     });
//     $("#Productos").html(acumulador)
// }








//*********************************************************************************** */

//url base     https://api.mercadopago.com
// edpoint     /checkout/preferences
const  producto1 = {
    name: 'compra Tola-Tola',
    price: precioTotal,
    stock: 9999,
    img: 'null',
    offer: null
}

const carro = [producto1,];

const elementosMercadopago = carro.map(producto => {
    return {
        "title": producto.name,
        "description": "",
        "picture_url": producto.img,
        "category_id": "",
        "quantity": 1,
        "currency_id": "ARS",
        "unit_price": producto.price
    }
})
const elemento = { "items": elementosMercadopago }



$.ajaxSetup({
    headers : {
        'Authorization': 'Bearer TEST-2126268000141506-092522-168d7240ca77684a5987f0bd5c377b9c-830672308',
        'Content-Type': 'application/json'
    }
});


    
    $.post("https://api.mercadopago.com/checkout/preferences", JSON.stringify(elemento), (respuesta, status) => {
    urlPago = respuesta.init_point
    window.open(`${urlPago}`);
});


//"https://sandbox.mercadopago.com.ar/checkout/v1/redirect?pref_id=830672308-4a1d98ef-5101-46fc-b6ed-bfe1aae3e813"







//*****************************************************************************


//animacion logo
$(document).ready(function(){
    $("#logoCentral").click(function(){
        $("#logoCentral").slideUp(2000).slideDown(2000);
    });
});


//datos de formulario
function mostrarDatos() {
    let nombre = document.getElementById("nombre").value;
    let mail = document.getElementById("mail").value;
    let mensaje = document.getElementById("mensaje").value;
  
    console.log(nombre, mail, mensaje)
  
    let valores = {
      nombre: nombre,
      mail: mail,
      mensaje: mensaje,
    }
    console.log(valores);

    swal({
        title: "Gracias!",
        text: "Nos pondremos en contacto!",
        icon: "success",
        button: "ok!",
      });
}

//////////////////////////////////////////////////////////////////////////////////

