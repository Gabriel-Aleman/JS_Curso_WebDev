function ingresarElmentos(escribirADoc=true) {
    let N=0;
    let arreglo=[];
    while (N < 10) {
        numero = parseFloat(prompt(`Ingrese el elemento #${N+1} del arreglo`))
        if (Number.isInteger(numero)) {
            arreglo.push(numero);
            N++;
        }

        else {
            alert("Por favor ingrese un valor valido")
        }
    }
    let arreglo_Asc = arreglo.slice();
    let arreglo_Des = arreglo.slice();

    arreglo_Asc.sort((a,b)=>a-b)
    arreglo_Des.sort((a,b)=>b-a)

    if(escribirADoc){
        document.getElementById("resultado").style.display="block";
        document.getElementById("arreglo").innerHTML=arreglo;
        document.getElementById("ascendente").innerHTML  = arreglo_Asc;
        document.getElementById("descendente").innerHTML = arreglo_Des;

    }
    return  {arreglo, arreglo_Asc, arreglo_Des}


}
