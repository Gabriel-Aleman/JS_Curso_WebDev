function pesoDelAve(){
    let pesoAve = parseFloat(document.getElementById("peso").value);
    let mess = "No se puede procesar el peso ingresado";

    if (0 <= pesoAve && pesoAve <= 2) {
        mess = "Peso bajo";
    }
    else if (2 < pesoAve && pesoAve <= 2.75) {
        mess = "Peso medio";
    }

    else if (pesoAve > 2.75) {
        mess = "Peso alto"
    }

    console.log(mess)
    document.getElementById("mess").innerHTML=mess;
    document.getElementById("resultado").style.display="block";
    
}