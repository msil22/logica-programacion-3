function esNumero(valor) {
    return !isNaN(valor);
}

function obtenerNumero() {
    let input = prompt("Ingrese un número para conocer su factorial: ");

    while (!esNumero(input)) {
    input = prompt("Ingrese un número válido: ");
    }
    return parseInt(input);
}

function factorial(n) {
    let total = 1;
    for (let i = 1; i <= n; i++) {
      total = total * i;
    }
    return total;
}

let numero = obtenerNumero();
let resultado = factorial(numero);

document.write(`El factorial es: ${resultado}`);