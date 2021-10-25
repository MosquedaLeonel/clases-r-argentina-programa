function hallarMaximo (array) {
    let maximo = Number(array[0]);

    for (let numero of array) {
        if (Number(numero) > maximo) {
            maximo = Number(numero);
        }
    }

    return maximo;
}

function hallarMinimo(array) {
    let minimo = Number(array[0]);

    for (let numero of array) {
        if (Number(numero) < minimo) {
            minimo = Number(numero);
        }
    }

    return minimo;
}

function hallarPromedio(array) {
    let promedio;
    let suma = 0;
    for (let numero of array) {
        suma += Number(numero);
    }

    return promedio = suma / array.length;
}