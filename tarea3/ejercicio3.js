function ingresarElmentos() {
    let N = 0;
    let arreglo = [];
    while (N < 10) {
        numero = parseFloat(prompt(`Ingrese el elemento #${N + 1} del arreglo`))
        if (Number.isInteger(numero)) {
            arreglo.push(numero);
            N++;
        }

        else {
            alert("Por favor ingrese un valor valido")
        }
    }
    
    document.getElementById("resultado").style.display = "block";
    document.getElementById("arreglo").innerHTML=arreglo;

    let currElement, divContenido;
    
    divContenido = document.getElementById('asc');

    for (let i = 0; i < 10; i++) {
        currElement = arreglo[i];

        // Crear un nuevo elemento de párrafo
        const parrafo = document.createElement('p');

        // Asignar contenido al párrafo
        parrafo.textContent = `Elemento ${i}: ${currElement}`;

        // Añadir el párrafo al div
        divContenido.appendChild(parrafo);
    }
    
    divContenido = document.getElementById('des');

    for (let i = 9; i >= 0; i--) {
        console.log(i)
        currElement = arreglo[i];

        // Crear un nuevo elemento de párrafo
        const parrafo = document.createElement('p');

        // Asignar contenido al párrafo
        parrafo.textContent = `Elemento ${i}: ${currElement}`;

        // Añadir el párrafo al div
        divContenido.appendChild(parrafo);

    }
}
