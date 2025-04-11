function calc_NumeroMayor(num1, num2) {
    let mess="";
    if(num1==num2){
        mess="Ambos números son iguales";
    }
    else if(num1>num2){
        mess=`El num ${num1} es mayor al num ${num2}`;
    }
    else{
        mess=`El num ${num2} es mayor al num ${num1}`;
    }

    return mess;
}





// Función principal para procesar 10 triángulos
function obtenerNumeroMayor() {
    let num1, num2;
    num1 =document.getElementById("num1").value;
    num2 =document.getElementById("num2").value;
    resultado=calc_NumeroMayor(num1, num2);

    document.getElementById("resultado").style.display="block";
    document.getElementById("mess").innerHTML=resultado;
    alert(resultado);
}

