function mostrarDescuento(){
    let ID_precio = document.getElementById("precio");
    precio = parseFloat(ID_precio.value);
     
    let descuento = 0;

    if (precio >= 10000 && precio <= 20000) {
        descuento = 5;
    }
    else if (precio > 20000 && precio <= 30000) {
        descuento = 10;
    }
    else if (precio > 30000) {
        descuento = 15;
    }
    console.log(descuento);
    document.getElementById("descuento").innerHTML= `Por el precio de ${precio}$ aplica un ${descuento}% de descuento`;
    document.getElementById("resultado").style.display="block";
}