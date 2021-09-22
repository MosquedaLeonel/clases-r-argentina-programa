/* TAREA: En otro archivo distinto,
Crear una lista de <ol> y <li> que contengan sólo números.
Convertir esos números a un array y:
1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..." */

let $botonCalcular = document.querySelector("#boton-calcular");
const ARRAY = [];
let tamanioArray;
const RESULTADOS = [];
let $logo = document.querySelector('img');

$botonCalcular.onclick = function () {
    let lista = document.querySelector("#lista-de-numeros");
    let items = lista.querySelectorAll("li");
    cargarDatosEnUnArray(items);
    calcularPromedio()
    buscarMinimo();
    buscarMaximo();
    buscarNumerosFrecuentes(ARRAY);
    cargarResultados();
}

function cargarDatosEnUnArray (items) {
    for (let i = 0; i < items.length; i++) {
        ARRAY.push(Number(items[i].innerHTML));
    }
    tamanioArray = ARRAY.length;
    return ARRAY;
}

function calcularPromedio () {
    let resultadoPromedio = 0;

    for (let item of ARRAY) {
        resultadoPromedio += item;
    }
    resultadoPromedio /= tamanioArray;

    return RESULTADOS.push(resultadoPromedio);
}

function buscarMinimo () {
    let min = ARRAY[0];

    for (let i = 0; i < tamanioArray; i++) {
        if (ARRAY[i] <= min) {
            min = ARRAY[i]
        }
    }
    
    return RESULTADOS.push(min);
}

function buscarMaximo () {
    let max = ARRAY[0];

    for(let i = 0; i < tamanioArray; i++) {
        if (ARRAY[i] >= max) {
          max = ARRAY[i];
        }
    }

    return RESULTADOS.push(max);
}


function buscarNumerosFrecuentes(ARRAY) {
    let numeroFrecuente;
    

    for (let i = 0; i < tamanioArray; i++) {

        for (let j = 0; j < tamanioArray; j++) {
            if (i !== j) {
                if (ARRAY[i] == ARRAY[j]) {
                    numeroFrecuente = ARRAY[i];
                }
            }
        }
       }

    RESULTADOS.push(numeroFrecuente);
}

function cargarResultados (){
    document.querySelector("#promedio").textContent = `El promedio es ${RESULTADOS[0]}`;
    document.querySelector("#numero-mas-pequenio").textContent = `El numero mas pequeño es ${RESULTADOS[1]}`;
    document.querySelector("#numero-mas-grande").textContent = `El numero mas grande es ${RESULTADOS[2]}`;
    document.querySelector("#numero-mas-frecuente").textContent = `El numero mas frecuente es ${RESULTADOS[3]}`;
}

$logo.onclick = function () {
    location.reload();
}