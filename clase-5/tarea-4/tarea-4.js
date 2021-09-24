/* TAREA: En otro archivo distinto,
Crear una lista de <ol> y <li> que contengan sólo números.
Convertir esos números a un array y:
1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..." */

let $botonCalcular = document.querySelector("#boton-calcular");
let $logo = document.querySelector('img');

$botonCalcular.onclick = function () {
    const items = document.querySelectorAll("li");
    const numeros = extraerNumeros(items);
    const promedios = calcularPromedio(numeros);
    const minimo = buscarMinimo(numeros);
    const maximo = buscarMaximo(numeros);
    const numeroMasFrecuente = buscarNumeroMasFrecuente(numeros);
    cargarResultados(promedios, minimo, maximo, numeroMasFrecuente);
}

function extraerNumeros (items) {
    const numeros = [];
    for (let i = 0; i < items.length; i++) {
        numeros.push(Number(items[i].innerHTML));
    }
    return numeros; 
}

function calcularPromedio (numeros) {
    let promedios = 0;

    for (let item of numeros) {
        promedios += item;
    }
    promedios /= numeros.length;

    return promedios;
}

function buscarMinimo (numeros) {
    let minimo = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] <= minimo) {
            minimo = numeros[i]
        }
    }
    
    return minimo;
}

function buscarMaximo (numeros) {
    let maximo = numeros[0];

    for(let i = 0; i < numeros.length; i++) {
        if (numeros[i] >= maximo) {
          maximo = numeros[i];
        }
    }

    return maximo;
}


function buscarNumeroMasFrecuente(numeros) {
    let numeroMasFrecuente = 0;
    
    for (let i = 0; i < numeros.length; i++) {
        let contador = 0
        let frecuenciaDeRepeticion = 0;

        for (let j = 0; j < numeros.length; j++) {
            if (i !== j) {
                if (numeros[i] === numeros[j]) {
                    contador++;
                }
            }
        }

        if (contador > frecuenciaDeRepeticion) {
            numeroMasFrecuente = numeros[i];
            frecuenciaDeRepeticion = contador;
        }
    }

    return numeroMasFrecuente;
}

function cargarResultados (promedios, minimo, maximo, numeroMasFrecuente) {
    document.querySelector("#promedio").textContent = `El promedio es ${promedios}`;
    document.querySelector("#numero-mas-pequenio").textContent = `El numero mas pequeño es ${minimo}`;
    document.querySelector("#numero-mas-grande").textContent = `El numero mas grande es ${maximo}`;
    document.querySelector("#numero-mas-frecuente").textContent = `El numero mas frecuente es ${numeroMasFrecuente}`;
}

$logo.onclick = function () {
    location.reload();
}