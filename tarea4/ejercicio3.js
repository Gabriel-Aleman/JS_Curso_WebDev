const vocales =["a","i","u","e","o"];

function verificarString(str) { //Verificar que no contenga números ni caracteres especiales

    if (str=="ñ"){  //Caso especial de la ñ
        return true; 
    }

    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(str)) {
        return false;
    }
    return true;
}

function verificarLetra(str){ //Verificar si es una única letra
    if(str.length!=1){
        return false;
    }
    return true;
}

// Función para almacenar 20 letras en un arreglo
function ingresarElementos() {
    let N = 1;
    let arreglo = [];
    while (N < 21) {
        let elementoActual = prompt("Ingrese el elemento #"+N+" :");
        let esUnString      =   verificarString(elementoActual);
        let esUnCaracter    =   verificarLetra(elementoActual);

        if(!esUnString){
            alert("Solo está permitido ingresar letras");
            continue;
        }
        else if(!esUnCaracter){
            alert("Ingrese una única letra");
            continue;
        }
        else{
            arreglo.unshift(elementoActual);
            N++;
        }
    }
    return arreglo;
}

//Función para determinar cantidad de letras vocales y consonantes almacenadas
function vocalesYconsonantes(arreglo){
    let num_vocales     = 0;
    let num_consonantes = 0;

    for (let elementoActual of arreglo){
        elementoActual=elementoActual.toLowerCase()
            
        if(vocales.includes(elementoActual)){
            num_vocales++;
        }
        
        else{
            num_consonantes++;
        }
    }
   
    return {num_vocales, num_consonantes}
}

//Función para mostrar el contenido del arreglo junto con las cantidades.
function main(){
    arreglo=ingresarElementos()
    document.getElementById("resultado").style.display="block";

    document.getElementById("arreglo").innerHTML=arreglo;
    
    tipoLetra=vocalesYconsonantes(arreglo);


    document.getElementById("vocales").innerHTML        = tipoLetra.num_vocales;
    document.getElementById("consonantes").innerHTML    = tipoLetra.num_consonantes;
}
