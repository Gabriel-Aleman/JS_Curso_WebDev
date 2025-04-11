//Función para llenar un arreglo de 10 posiciones con número
function ingresarNumeros(){
    let N=1;
    let arreglo=[];

    while (N<11){
        let miNumero =parseFloat(prompt("Ingrese el número #"+N+":"));
        
        if (isNaN(miNumero)){
            alert("Ingrese un número valido");
        }

        else{
            arreglo.push(miNumero);
            N++;
        }
    }
    return arreglo;
}


//Función que lee un número en el arreglo. Si lo encuentra, lo reemplaza por su doble
function reemplazarElemento(arreglo, numASustituir, numXSustituir) {
    // Verifica si el arreglo contiene el valor a sustituir
    if (arreglo.includes(numASustituir)) {
        
        return arreglo.map(element => element === numASustituir ? numXSustituir : element);
    } else {
        alert("El valor ingresado " + numASustituir + " no está contenido en el arreglo");
        return false;
    }
}


let arreglo=[];
function main(){
   
    document.getElementById("resultado").style.display      = "none";
    document.getElementById("resultado_0").style.display    = "none";

    arreglo=ingresarNumeros();
    document.getElementById("resultado").style.display  = "block";
    document.getElementById("arreglo").innerHTML        = arreglo;  

}

//Arreglo antes y después del reemplazo
function realizarCambio(){
    let nuevoArreglo=[];
    
    let numASustituir = parseFloat(document.getElementById("numOriginal").value);
    let numXSustituir = numASustituir*2; //Doble del original

    nuevoArreglo=reemplazarElemento(arreglo, numASustituir, numXSustituir);  
    
    if(nuevoArreglo!=false){
        document.getElementById("resultado_0").style.display     = "block";
        document.getElementById("nuevoArreglo").innerHTML        = nuevoArreglo; 
    }

}

