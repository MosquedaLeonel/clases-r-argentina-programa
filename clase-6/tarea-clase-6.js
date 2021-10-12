/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
let parentescosGrupoFamiliar = [];
let edadesGrupoFamiliar = [];
let salarioGrupoFamiliar = [];

let $botonIngresar = document.querySelector("#boton-ingresar");
let $botonResetear = document.querySelector("#boton-resetear");
let $h1= document.querySelector("h1");





$botonIngresar.onclick = function () {
    let $cantidadGrupoFamiliar = document.querySelector("#cantidad-grupo-familiar");
    deshabilitarBoton("cantidad-grupo-familiar", "boton-ingresar");
    agregarGrupoFamiliar($cantidadGrupoFamiliar.valueAsNumber);
    calcularEdades();

    return false;

}





$botonResetear.onclick = function () {
    let $botonIngresar = document.querySelector("#boton-ingresar");

    let $cantidadGrupoFamiliar = document.querySelector("#cantidad-grupo-familiar");
    $cantidadGrupoFamiliar.value = '';

    let $divEdades = document.querySelectorAll("#labels-inputs-edades");
    for (let edad of $divEdades) {
        edad.remove();
    }

    let $divSalarios = document.querySelectorAll("#labels-inputs-salarios");
    for (let salario of $divSalarios) {
        salario.remove();
    }

    let $botonCalcularEdad = document.querySelector("#boton-calcular-edad");
    $botonCalcularEdad.remove();

    let $botonCalcularSalario = document.querySelector("#boton-calcular-salario");
    $botonCalcularSalario.remove();

    let $botonIngresarSalario = document.querySelector("#boton-ingresar-salario");
    $botonIngresarSalario.remove();

    let $respuestaMayorEdad = document.querySelector("#respuesta-mayor-edad");
    $respuestaMayorEdad.textContent = undefined;
    let $respuestaMenorEdad = document.querySelector("#respuesta-menor-edad");
    $respuestaMenorEdad.textContent = undefined;
    let $respuestaPromedioEdad = document.querySelector("#respuesta-promedio-edad");
    $respuestaPromedioEdad.textContent = undefined;

    let $respuestaMayorSalario = document.querySelector("#respuesta-mayor-salario");
    $respuestaMayorSalario.textContent = undefined;
    let $respuestaMenorSalario = document.querySelector("#respuesta-menor-salario");
    $respuestaMenorSalario.textContent = undefined;
    let $respuestaPromedioSalario = document.querySelector("#respuesta-promedio-salario");
    $respuestaPromedioSalario.textContent = undefined;

    $botonIngresar.removeAttribute("disabled");

    return false;
}





function obtenerEdades () {
    let $edades = document.querySelectorAll("#edad-grupo-familiar");
    let edadesGrupoFamiliar = [];
    for (let edad of $edades) {
        edadesGrupoFamiliar.push(edad.valueAsNumber);
    }
    return edadesGrupoFamiliar;
}





function obtenerParentescos() {
    let $parentescos = document.querySelectorAll("#parentesco");
    let parentescosGrupoFamiliar = [];
    for (let parentesco of $parentescos) {
        parentescosGrupoFamiliar.push(parentesco.value);
    }   
    return parentescosGrupoFamiliar;
}





function agregarGrupoFamiliar (cantidad) {
    for (let i = 0; i < cantidad; i++) {
        if (i < cantidad) {
            agregarNuevoFamiliar(i);
        }
        if (i === Number(cantidad) - 1) {
            agregarBotonCalcular();
        }
    }
}





function calcularEdades () {

    let $botonCalcular = document.querySelector("#boton-calcular-edad");


    $botonCalcular.onclick = function () {
        parentescosGrupoFamiliar = obtenerParentescos();
        edadesGrupoFamiliar = obtenerEdades();

        deshabilitarBoton("edad-grupo-familiar", "boton-calcular-edad");

        let mayorEdad = hallarMaximo(edadesGrupoFamiliar);
        let menorEdad = hallarMinimo(edadesGrupoFamiliar);
        let promedioDeEdad = calcularPromedio(edadesGrupoFamiliar);
        mostrarResultados(mayorEdad, menorEdad, promedioDeEdad, edadesGrupoFamiliar, parentescosGrupoFamiliar);

        return false;
    }
}





function agregarNuevoFamiliar (i) {

    let $form = document.querySelector("#edades");

    let div = document.createElement("div");
    div.id = "labels-inputs-edades";

    $form.appendChild(div);

    let labelParentesco = document.createElement("label");
    labelParentesco.textContent = `Ingrese parentesco de persona ${i + 1}: `;
    let inputParentesco = document.createElement("input");
    inputParentesco.type = "text";
    inputParentesco.id = 'parentesco';
    inputParentesco.placeholder = 'por ejemplo: Madre';

    let labelEdad = document.createElement("label");
    labelEdad.textContent = `Ingrese edad de persona ${i + 1}: `;
    let inputEdad = document.createElement("input");
    inputEdad.type = "number";
    inputEdad.id = "edad-grupo-familiar";
    inputEdad.placeholder = 'por ejemplo: 21';
    
    div.appendChild(labelParentesco);
    labelParentesco.appendChild(inputParentesco);
    div.appendChild(labelEdad);
    labelEdad.appendChild(inputEdad);

}





function agregarBotonCalcular () {
    let $boton = document.querySelector("#calcular-edad");
    let botonCalcular = document.createElement("button");
    botonCalcular.textContent = 'Calcular';
    botonCalcular.type = "button";
    botonCalcular.id = "boton-calcular-edad";
    $boton.appendChild(botonCalcular);
}





function hallarMaximo (array) {
    let maximo = array[0];

    for (let elemento of array) {
        if (elemento > maximo) {
            maximo = elemento;        
        }
    }

    return maximo;
}





function hallarMinimo (array) {
    let minimo = array[0];

    for (let elemento of array) {
        if (elemento < minimo) {
            minimo = elemento;
        }
    }

    return minimo;
}





function calcularPromedio(array) {
    let suma = 0;

    for (let elemento of array) {
        suma += elemento;
    }

    return promedio = suma / array.length;
}





function mostrarResultados(mayorEdad, menorEdad, promedioDeEdad, edadesGrupoFamiliar, parentescosGrupoFamiliar) {
    let indiceMayorEdad = edadesGrupoFamiliar.indexOf(mayorEdad);
    let indiceMenorEdad = edadesGrupoFamiliar.indexOf(menorEdad);

    let $respuestaMayorEdad = document.querySelector("#respuesta-mayor-edad");
    $respuestaMayorEdad.textContent = `Tu ${parentescosGrupoFamiliar[indiceMayorEdad].toLowerCase()} tiene la mayor edad de tu grupo familiar con ${mayorEdad} años.`;

    let $respuestaMenorEdad = document.querySelector("#respuesta-menor-edad");
    $respuestaMenorEdad.textContent = `Tu ${parentescosGrupoFamiliar[indiceMenorEdad].toLowerCase()} tiene la menor edad de tu grupo familiar con ${menorEdad} años.`;
    
    let $respuestaPromedio = document.querySelector("#respuesta-promedio-edad");
    $respuestaPromedio.textContent = `El promedio de edad de tu grupo familiar es de ${promedioDeEdad}`;

    agregarBotonIngresarSalario()
}






/*

TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante 
de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y 
salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

function agregarBotonIngresarSalario() {
    let $div = document.querySelector("#ingresar-salario");
    
    let boton = document.createElement("button");
    boton.id = "boton-ingresar-salario";
    boton.textContent = "Ingresar salario";

    $div.appendChild(boton);
    ingresarSalario()
}





function ingresarSalario () {

    let $botonIngresarSalario = document.querySelector("#boton-ingresar-salario");

    $botonIngresarSalario.onclick = function () {
        $botonIngresarSalario.disabled = "true";
        agregarCamposSalario(parentescosGrupoFamiliar);
        agregarBotonCalcularSalario();
        calcularSalario()

        return false;
    }
}





function agregarCamposSalario(parentescosGrupoFamiliar) {
    let $form = document.querySelector("#salarios");

    let div = document.createElement("div");
    div.id = "labels-inputs-salarios";

    $form.appendChild(div);

    for (let i = 0; i < parentescosGrupoFamiliar.length; i++) {
        let label = document.createElement("label");
        label.textContent = `Ingrese salario anual de ${parentescosGrupoFamiliar[i]}: `;
        let input = document.createElement("input");
        input.id = "salario-anual";
        input.type = "number";
        input.value = '';

        label.appendChild(input);
        div.appendChild(label);

    }
}





function agregarBotonCalcularSalario() {
    let $div = document.querySelector("#calcular-salario");
    let botonCalcularSalario = document.createElement("button");
    botonCalcularSalario.textContent = 'Calcular';
    botonCalcularSalario.type = "button";
    botonCalcularSalario.id = "boton-calcular-salario"
    $div.appendChild(botonCalcularSalario);
}






function obtenerSalarios () {
    let $salarioAnual = document.querySelectorAll("#salario-anual");
    let salarioGrupoFamiliar = [];

    for (let elemento of $salarioAnual) {
        if (elemento.value === "") {
            salarioGrupoFamiliar.push(elemento.value = 0);
        } else { 
        salarioGrupoFamiliar.push(elemento.valueAsNumber);
        }
    }

    return salarioGrupoFamiliar;
}





function calcularSalario () {

    let $botonCalcularSalario = document.querySelector("#boton-calcular-salario");

    $botonCalcularSalario.onclick = function () {
        deshabilitarBoton("salario-anual", "boton-calcular-salario");
        salarioGrupoFamiliar = obtenerSalarios();

        let mayorSalarioAnual = hallarMaximo(salarioGrupoFamiliar);
        let menorSalarioAnual = hallarMinimo(salarioGrupoFamiliar);
        let promedioSalarioAnual = calcularPromedio(salarioGrupoFamiliar);
        mostrarResultadosSalario(mayorSalarioAnual, menorSalarioAnual, promedioSalarioAnual);

        return false;
    }   
}





function mostrarResultadosSalario (mayorSalario, menorSalario, promedioSalario) {
    let indiceMayorSalario = salarioGrupoFamiliar.indexOf(mayorSalario);
    let indiceMenorSalario = salarioGrupoFamiliar.indexOf(menorSalario);

    let $respuestaMayorSalario = document.querySelector("#respuesta-mayor-salario");
    $respuestaMayorSalario.textContent = `El mayor salario lo tiene tu ${parentescosGrupoFamiliar[indiceMayorSalario].toLowerCase()} con $${mayorSalario}.`;

    let $respuestaMenorSalario = document.querySelector("#respuesta-menor-salario");
    $respuestaMenorSalario.textContent = `El menor salario lo tiene tu ${parentescosGrupoFamiliar[indiceMenorSalario].toLowerCase()} con $${menorSalario}.`;

    let $respuestaPromedio = document.querySelector("#respuesta-promedio-salario");
    $respuestaPromedio.textContent = `El promedio del salario de tu grupo familiar es de $${promedioSalario}.`;
}





function deshabilitarBoton(idInput, idBoton) {
    let $input = document.querySelector(`#${idInput}`);
    let $boton = document.querySelector(`#${idBoton}`);

    $boton.disabled = true;

    $input.addEventListener("change", stateHandle);
}





function stateHandle() {
    if (document.querySelector(".input").value === "") {
        button.disabled = true; 
    } else {
        button.disabled = false;
    }
}





$h1.onclick = function () {
    location.reload();
    return false;
}





