function verificarString(str) {
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(str)) {
        throw new Error('El string contiene caracteres no permitidos (números o caracteres especiales).');
    }
    return true;
}

function determinar_TipoLetra(letra){
    try{
        verificarString(letra);
    }

    catch (err){
       alert(err.message)
        return 1;  
    }
    letra = letra.toLowerCase();

    let vocales=["a","i","u","e","o"];
   
    
    if (letra.length!=1){
        alert("Solo debe ingresar una única letra");
        return 1;
    }
 
    if (vocales.includes(letra)){
        return "La letra ingresada es una vocal";
    }
    
    else{
        return "La letra ingresada es una consonante";
    }
        
}

function tipo_letra(){
    let letra = document.getElementById("letra").value;
    let mess=determinar_TipoLetra(letra);
    if(mess!=1){ //Todos los valores se ingresaron bien
        document.getElementById("resultado").style.display="block";
        document.getElementById("mess").innerHTML=mess;
    }
    else{
        document.getElementById("resultado").style.display="none";

    }
}