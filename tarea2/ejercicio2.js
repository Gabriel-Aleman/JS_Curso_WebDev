function numeroEnteroContra10() {
    let miNumero = parseFloat(document.getElementById("miNumero").value);
    let mess = "";
    let promedio, res = "", suma = 0, elementos = 0;
    esPar = (miNumero % 2 == 0); //Verdadero si es par, falso si es impar
    noMayorA10 = !(miNumero > 10);
    
    document.getElementById("miResultado").innerHTML=miNumero;  

    if (miNumero == 10) {
        mess = "El número ingresado fue 10, el cual es un numero par";
    }

    else if (noMayorA10) {
        mess = esPar ? "El numero ingresado es menor a 10 y par" : "El numero ingresado es menor a 10 e impar";
    }

    else {
        mess = esPar ? "El numero ingresado es mayor a 10 y par" : "El numero ingresado es mayor a 10 e impar";


        for (let i = miNumero; i > 10; i--) {
            suma += i;
            elementos++;
            res = res + "+" + i;
        }
        res = res.slice(1);
        promedio = suma / elementos;
    }

    document.getElementById("resultado").style.display = "block";
    document.getElementById("miResultado").innerHTML=mess;  
    let prom=document.getElementById("promedio");
    if (!noMayorA10){
        alert(`El promedio de los números mayores a 10 es ${promedio}`)
        prom.innerHTML = `\\(PROMEDIO = \\frac{${res}}{${elementos}} = ${promedio}\\)`;
        prom.style.display="block";
        // Llamar a MathJax para procesar el contenido de LaTeX
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, prom]);

    }
    else{
        prom.style.display="none";

    }
}