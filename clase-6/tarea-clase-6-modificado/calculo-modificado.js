function hallarMaximo (array) {
    let maximo = array[0];

    for (let numero of array) {
        if (numero > maximo) {
            maximo = numero;
        }
    }

    return maximo;
}

function hallarMinimo(array) {
    let minimo = array[0];

    for (let numero of array) {
        if (numero < minimo) {
            minimo = numero;
        }
    }

    return minimo;
}

function hallarPromedio(array) {
    let promedio;
    let suma = 0;
    for (let numero of array) {
        suma += numero;
    }

    return promedio = suma / array.length;
}