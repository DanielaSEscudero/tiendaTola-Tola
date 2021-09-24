let carrito = [];
if (localStorage.carrito !=null){
    carrito = carrito = JSON.parse(localStorage.carrito);
    document.getElementById("contador-carrito").innerHTML = carrito.length;
}


const producto_uno = new Producto("Tazas", 800, "Taza de Cerámica Premium personalizada", "../multimedia/Productos/taza 1.JPG" );
const producto_dos = new Producto("Chopp", 1200, "Chopp de vidrio Esmerilado personalizado", "../multimedia/Productos/chop 1.JPG");
const producto_tres = new Producto("llaveros", 250, "Llaveros acrílicos con código Spotify Con una canción o una playlist","../multimedia/Productos/llavero 1.JPG");
const producto_cuatro = new Producto("llaveros", 250, "Llaveros acrílicos redondo con la incripcion personalizada","../multimedia/Productos/llavero redondo 1.jpg");
const producto_cinco = new Producto("Body Bebe", 500, "Body bebé estampado personalizado ", "../multimedia/Productos/body bebe.JPG");
const producto_seis = new Producto("Buzo Canguro", 2000, "Buzo friza cuello canguro estampado", "../multimedia/Productos/buzo canguro1.JPG");
const producto_siete = new Producto("Buzo redondo", 2000, "Buzo friza cuello redondo estampado ", "../multimedia/Productos/buzo redondo1.JPG");
const producto_ocho = new Producto("Remeras", 1700, "Remera algodón Premium estampada", "../multimedia/Productos/reme 3.jpeg");


const todosLosProductos = [producto_uno, producto_dos, producto_tres, producto_cuatro, producto_cinco, producto_seis, producto_siete, producto_ocho];


let acumulador = ``;
todosLosProductos.forEach((producto) => {
    acumulador += `<div class="col mb-5 cajas" id="${producto.title}">
    <div class="card h-100">
        <img class="card-img-top" src="${producto.img}" alt="..." />
        <div class="card-body p-4">
            <div class="text-center">
                <h5 class="fw-bolder">${producto.title}</h5>
                <p>${producto.description}</p>
                $${producto.price}
            </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" 
            onclick="agregarAlCarrito('${producto.title}')">Agregar al carrito</a>
            </div>
        </div>
    </div>
</div>`
});

document.getElementById("productos").innerHTML = acumulador;

function borrarDelCarrito(title){
    const productoEncontrado = todosLosProductos.find(producto => producto.title === title);
    
    const card = document.getElementById(title);
    card.parentNode.removeChild(card);
}

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



//animacion logo
$(document).ready(function(){
    $("#logoCentral").click(function(){
        $("#logoCentral").slideUp(2000).slideDown(2000);
    });
});