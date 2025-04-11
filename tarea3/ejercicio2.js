// Función que lee N letras y cuenta las vocales y consonantes
function contarVocalesYConsonantes(N) {

    N = parseInt(N); // Convertir el valor ingresado a número

    // Inicializar contadores
    let vocales = 0;
    let consonantes = 0;
    let i = 0;

    // Usar ciclo while para leer N letras
    while (i < N) {
        // Leer una letra
        let letra = prompt(`Ingresa la letra ${i + 1}:`).toLowerCase(); // Convertir a minúsculas

        if (letra.length === 1 && /^[a-zA-Z]$/.test(letra)) { // Verificar si la letra es válida (una sola letra)
            // Comprobar si la letra es una vocal
            if (['a', 'e', 'i', 'o', 'u'].includes(letra)) {
                vocales++;
            }
            // Si no es vocal, es consonante (considerando solo letras)
            else {
                consonantes++;
            }

            i++; // Incrementar el contador

        } 
        
        else {
            alert("Por favor, ingresa solo una letra válida.");
            continue; // Saltar a la siguiente iteración si la entrada no es válida
        }

    }

    // Mostrar los resultados
    alert(`Cantidad de vocales: ${vocales}`);
    alert(`Cantidad de consonantes: ${consonantes}`);
    return {vocales, consonantes}
}


function vocYCons(){
    let N=parseInt(numeroDeLetras=document.getElementById("numLetras").value);
    resultados=contarVocalesYConsonantes(N)

    document.getElementById("resultado").style.display  = "block";
    document.getElementById("consonantes").innerHTML    = resultados.consonantes
    document.getElementById("vocales").innerHTML        = resultados.vocales

}