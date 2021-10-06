/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

let grupoFamiliar = {
    parentesco: [],
    edad: []
};
let $botonIngresar = document.querySelector("#boton-ingresar");
let $botonResetear = document.querySelector("#boton-resetear");


$botonIngresar.onclick = function () {
    let cantidadGrupoFamiliar = document.querySelector("#cantidad-grupo-familiar").valueAsNumber;
    agregarGrupoFamiliar(cantidadGrupoFamiliar);
    let $botonCalcular = document.querySelector("#boton-calcular");

    $botonCalcular.onclick = function () {
        let edadesGrupoFamiliar = obtenerEdades();
        let parentescosGrupoFamiliar = obtenerParentescos();
        let mayorEdad = hallarEdadMaxima(edadesGrupoFamiliar);
        let menorEdad = hallarEdadMinima(edadesGrupoFamiliar);
        let promedioDeEdad = calcularPromedio(edadesGrupoFamiliar);
        mostrarResultadosEnPantalla(mayorEdad, menorEdad, promedioDeEdad, edadesGrupoFamiliar, parentescosGrupoFamiliar);
        return false;
    }
    return false;

}

$botonResetear.onclick = function () {
    let cantidadGrupoFamiliar = document.querySelector("#cantidad-grupo-familiar");

    let div = document.querySelectorAll("#inputs-labels");
    for (let elemento of div) {
        elemento.remove();
    }

    let botonCalcular = document.querySelectorAll("#boton-calcular")
    for (let elemento of botonCalcular) {
        elemento.remove();
    }

    let respuestas = document.querySelectorAll(".respuesta");
    for (let respuesta of respuestas) {
        respuesta.remove();
    }

    cantidadGrupoFamiliar.value = 0;

    return false;
}

function obtenerEdades () {
    let edades = document.querySelectorAll("#edad-grupo-familiar");
    let edadesGrupoFamiliar = [];
    for (let edad of edades) {
        edadesGrupoFamiliar.push(edad.valueAsNumber);
    }
    grupoFamiliar.edad = edadesGrupoFamiliar;
    return edadesGrupoFamiliar;
}


function obtenerParentescos() {
    let parentescos = document.querySelectorAll("#parentesco");
    let parentescosGrupoFamiliar = [];
    for (let parentesco of parentescos) {
        parentescosGrupoFamiliar.push(parentesco.value);
    }
    grupoFamiliar.parentesco = parentescosGrupoFamiliar;
    return parentescosGrupoFamiliar;
}


function agregarGrupoFamiliar (cantidad) {
    for (let i = 0; i < cantidad; i++) {
        if (i < cantidad) {
            agregarNuevosCampos(i);
        }
        if (i === Number(cantidad) - 1) {
            agregarBotonCalcular();
        }
    }
}

function agregarNuevosCampos (i) {

    let form = document.querySelector("#edades");

    let div = document.createElement("div");
    div.setAttribute("id", "inputs-labels");

    form.appendChild(div);

    let labelParentesco = document.createElement("label");
    labelParentesco.textContent = `Ingrese parentesco de persona ${i + 1}: `;
    let inputParentesco = document.createElement("input");
    inputParentesco.setAttribute("type", "text");
    inputParentesco.setAttribute("id", "parentesco");
    inputParentesco.setAttribute("placeholder", "por ejemplo, Madre");

    let labelEdad = document.createElement("label");
    labelEdad.textContent = `Ingrese edad de persona ${i + 1}: `;
    let inputEdad = document.createElement("input");
    inputEdad.setAttribute("type", "number");
    inputEdad.setAttribute("id", "edad-grupo-familiar");
    inputEdad.setAttribute("placeholder", "por ejemplo, 21");

    let br = document.createElement("br");
    
    div.appendChild(labelParentesco);
    labelParentesco.appendChild(inputParentesco);
    div.appendChild(labelEdad);
    labelEdad.appendChild(inputEdad);
    labelEdad.appendChild(br);

}

function agregarBotonCalcular () {
    let boton = document.querySelector("#boton");
    let botonCalcular = document.createElement("button");
    botonCalcular.textContent = 'Calcular';
    botonCalcular.setAttribute("type", "button");
    botonCalcular.setAttribute("id", "boton-calcular");
    boton.appendChild(botonCalcular);
}

function hallarEdadMaxima (edades) {
    let mayorEdad = edades[0];

    for (let edad of edades) {
        if (edad > mayorEdad) {
            mayorEdad = edad;        
        }
    }

    return mayorEdad;
}

function hallarEdadMinima (edades) {
    let menorEdad = edades[0];

    for (let edad of edades) {
        if (edad < menorEdad) {
            menorEdad = edad;
        }
    }

    return menorEdad;
}

function calcularPromedio(array) {
    let promedio;
    let suma = 0;

    for (let elemento of array) {
        suma += elemento;
    }

    return promedio = suma / array.length;
}

function mostrarResultadosEnPantalla(mayorEdad, menorEdad, promedioDeEdad, edadesGrupoFamiliar, parentescosGrupoFamiliar) {
    let indiceMayorEdad = edadesGrupoFamiliar.indexOf(mayorEdad);
    let indiceMenorEdad = edadesGrupoFamiliar.indexOf(menorEdad);

    let respuestas = document.querySelector("#respuestas");

    let respuestaMayorEdad = document.createElement("label");
    respuestaMayorEdad.textContent = `Tu ${parentescosGrupoFamiliar[indiceMayorEdad].toLowerCase()} tiene la mayor edad de tu grupo familiar con ${mayorEdad} años.`;
    respuestaMayorEdad.setAttribute("class", "respuesta");
    respuestas.appendChild(respuestaMayorEdad);

    let respuestaMenorEdad = document.createElement("label");
    respuestaMenorEdad.textContent = `Tu ${parentescosGrupoFamiliar[indiceMenorEdad].toLowerCase()} tiene la menor edad de tu grupo familiar con ${menorEdad} años.`;
    respuestaMenorEdad.setAttribute("class", "respuesta");
    respuestas.appendChild(respuestaMenorEdad);

    let respuestaPromedio = document.createElement("label");
    respuestaPromedio.textContent = `El promedio de edad de tu grupo familiar es de ${promedioDeEdad}`;
    respuestaPromedio.setAttribute("class", "respuesta");
    respuestas.appendChild(respuestaPromedio);
}


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante 
de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y 
salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


