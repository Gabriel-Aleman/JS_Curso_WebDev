// Función para determinar el tipo de triángulo
function determinarTipoTriangulo(angulos) {
    const [a, b, c] = angulos;

    if (a + b + c !== 180) {
        let warning = "¡Los ángulos no suman 180 grados!";
        alert(warning);
        return false;
    }

    if (a === 90 || b === 90 || c === 90) {
        return "Rectángulo";
    } else if (a < 90 && b < 90 && c < 90) {
        return "Acutángulo";
    } else {
        return "Obtusángulo";
    }
}





// Función principal para procesar 10 triángulos
function procesarTriangulos() {
    let angulos = [];

    for (let i = 1; i < 4; i++) {
        ang = parseFloat(document.getElementById("ang" + i).value);
        angulos.push(ang);
    }
    mess = determinarTipoTriangulo(angulos);

    if (mess != false) {
        document.getElementById("mess").innerText = mess;
        document.getElementById("resultado").style.display = "block"
        //dibujarTriangulo(angulos);
    }
}

