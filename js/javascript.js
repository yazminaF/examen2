
function alerta() {
    alert("Your Cart is empy!");
    console.log("Hizo click en el carrito");
}

// alerta boton//


// cambiar imagen//

function cambia_imagen(elemento_img) {
    elemento_img.src = "assets/cactus-s.jpg";
}

function regresa_imagen(elemento_img) {
    elemento_img.src = "assets/succulents-1.jpg"; 
}
// en la parte de abajo se pone la ruta de la img principal


// aceptar las cookies//

function eliminar_cookies() {
    var cookie = document.querySelector(".cookie");
    cookie.remove();
}
