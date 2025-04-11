function obtenerTotal() {
    let producto    = document.getElementById("producto").value;
    let cantidad    = parseInt(document.getElementById("cantidad").value);
    let precio      = parseFloat(document.getElementById("precio").value);
    
    if (!producto || isNaN(cantidad) || isNaN(precio) || cantidad <= 0 || precio < 0) {
        alert( "Por favor Ingrese valores válidos.");
        return 0;
    }
    
    let total = cantidad * precio;
    document.getElementById("resultado").innerHTML 
    = `Producto "${producto}" con Precio ${precio} y ${cantidad} unidades - Total a pagar: $${total.toFixed(2)}`;
}