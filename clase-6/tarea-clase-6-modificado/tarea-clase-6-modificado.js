/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/



document.querySelector("#ingresar").onclick = function (event) {
    borrarIntegrantesAnteriores();
    
    const cantidadIntegrantes = document.querySelector("#cantidad-integrantes").value;

    const errorCantidadIntegrantes = validarCantidadIntegrantes(Number(cantidadIntegrantes));

    if (errorCantidadIntegrantes) {
        errores["cantidad-integrantes"] = errorCantidadIntegrantes;
        manejarErrores('edades', errores);
    } else {
        delete errores["cantidad-integrantes"];
        document.querySelector("#cantidad-integrantes").className = '';
        crearIntegrantes(Number(cantidadIntegrantes));
    }

    event.preventDefault();
}

document.querySelector("#calcular-edad").onclick = function (event) {
    const edades = obtenerEdadesIntegrantes();
    let contador = 0;
    

    edades.forEach(function(edad) {
        document.querySelector(`#edad-integrante-${contador + 1}`).className = '';
        let errorEdadIntegrante = validarEdadIntegrante(edad);

        if (errorEdadIntegrante) {
            errores[`edad-integrante-${contador + 1}`] = errorEdadIntegrante;
            contador++;
            ocultarResultados();
            ocultarBotonSiguiente();
            ocultarResultadosSalario();
            borrarIntegrantesAnterioresSalario();
            ocultarBotonCalculoSalario();
        } else {
            delete errores[`edad-integrante-${contador + 1}`];
            contador++;
        }
    });  

    const esExito = manejarErrores(`edades`, errores) === 0;
        
        if (esExito) {
            mostrarEdad('mayor', hallarMaximo(edades));        
            mostrarEdad('menor', hallarMinimo(edades));
            mostrarEdad('promedio', hallarPromedio(edades));
            mostrarResultados();
            mostrarBotonSiguiente();
        }

    event.preventDefault();
}

document.querySelector("#resetear").onclick = resetear;

function crearIntegrantes (integrantes) {
    if (integrantes > 0) {
        mostrarBotonCalcular();
    } 
    else {
        resetear();
    }

    for (let i = 0; i < integrantes; i++) {
            crearIntegrante(i);
    }
}

function crearIntegrante (indice) {
    const $div = document.createElement("div");
    $div.className = "integrante";


    const $label = document.createElement("label");
    $label.textContent = `Ingrese la edad del integrante numero ${indice + 1}: `;
    const $input = document.createElement("input");
    $input.type = "number";
    $input.id = `edad-integrante-${indice + 1}`;
    
    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantes = document.querySelector("#integrantes")
    $integrantes.appendChild($div);
}   

function borrarIntegrantesAnteriores () {
    delete errores['cantidad-integrantes'];
    const $integrantes = document.querySelectorAll(".integrante");

    for (let i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove();
    }
}

function resetear () {
    borrarIntegrantesAnteriores();
    ocultarBotonCalculo();
    ocultarResultados();
    borrarIntegrantesAnterioresSalario();
    ocultarBotonSiguiente();
    ocultarBotonCalculoSalario();
    ocultarResultadosSalario();
}

function mostrarEdad(tipo, valor) {
    document.querySelector(`#${tipo}-edad`).textContent = valor;
}

function mostrarBotonCalcular () {
    document.querySelector("#calcular-edad").className = '';
}

function ocultarBotonCalculo () {
    document.querySelector("#calcular-edad").className = 'oculto';
}

function mostrarResultados () {
    document.querySelector("#respuestas").className = '';
}

function ocultarResultados () {
    document.querySelector("#respuestas").className = 'oculto'
}

function obtenerEdadesIntegrantes () {
    const $integrantes = document.querySelectorAll(".integrante input");
    const edades = [];

    for (let i = 0;i < $integrantes.length; i++) {
        edades.push($integrantes[i].value);
    }
    return edades;
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante 
de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y 
salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

function mostrarBotonSiguiente () {
    document.querySelector("#siguiente").className = '';
}
document.querySelector("#siguiente").onclick = function (event) {
    const $cantidadIntegrantes = document.querySelector("#cantidad-integrantes").valueAsNumber;

    crearCampoSalario($cantidadIntegrantes);

    event.preventDefault();
}

function crearCampoSalario (cantidadIntegrantes) {
    if (cantidadIntegrantes > 0) {
        mostrarBotonCalculoSalario();
    }
    else {
        resetearSalario();
    }
    
    for (let i = 0; i < cantidadIntegrantes; i++) {
        crearCampoSalarioIntegrante(i);
    }
}

function mostrarBotonCalculoSalario () {
    document.querySelector("#calcular-salario").className = '';
}

function ocultarBotonCalculoSalario () {
    document.querySelector("#calcular-salario").className = 'oculto';
}

function crearCampoSalarioIntegrante (indice) {
    const $div = document.createElement("div");
    $div.className = 'integrante-salario';

    const $label = document.createElement("label");
    $label.textContent = `Ingrese el salario anual de la persona numero ${indice + 1}:`;
    const $input = document.createElement("input");
    $input.type = 'number';
    $input.id = `salario-integrante-${indice + 1}`;
    
    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantesSalario = document.querySelector("#integrantes-salario");
    $integrantesSalario.appendChild($div);
}

document.querySelector("#calcular-salario").onclick = function (event) {
    let contador = 0;
    const salarios = obtenerSalarios();

    salarios.forEach(function(salario){
        document.querySelector(`#salario-integrante-${contador + 1}`).className = '';
        let errorSalarioIntegrante = validarSalarioIntegrante(salario);

        if (errorSalarioIntegrante) {
            errores[`salario-integrante-${contador + 1}`] = errorSalarioIntegrante;
            contador++;
            ocultarBotonCalculoSalario();
            ocultarResultadosSalario();
            borrarIntegrantesAnterioresSalario();
        } else {
            delete errores[`salario-integrante-${contador + 1}`];
            contador++;
        }
    });
    
    const esExito = manejarErrores(`salario`, errores) === 0;

    if (esExito) {
        mostrarSalario('mayor', hallarMaximo(salarios));
        mostrarSalario('menor', hallarMinimo(salarios));
        mostrarSalario('promedio', hallarPromedio(salarios));
        mostrarResultadosSalario();
    }

    event.preventDefault();
}

function obtenerSalarios () {
    let salarios = [];
    let $salarios = document.querySelectorAll('.integrante-salario input')

    for (let salario of $salarios) {
        if (salario.value !== "") {
            salarios.push(salario.value);
        } else {
            salarios.push(0); 
        }
    }
    return salarios;
}

function mostrarSalario (tipo, valor) {
    document.querySelector(`#${tipo}-salario`).textContent = valor;
}

function mostrarResultadosSalario () {
    document.querySelector("#respuestas-salarios").className = '';
}

function ocultarResultadosSalario() {
    document.querySelector("#respuestas-salarios").className = 'oculto';
}

function ocultarBotonSiguiente() {
    document.querySelector("#siguiente").className = 'oculto';
}

function borrarIntegrantesAnterioresSalario() {
    let $salarioIntegrantes = document.querySelectorAll(".integrante-salario");

    for (let i = 0; i < $salarioIntegrantes.length; i++) {
        $salarioIntegrantes[i].remove();
    }
}



function validarCantidadIntegrantes(cantidadIntegrantes) {

    if (cantidadIntegrantes.length === 0) {
        return "La cantidad de integrantes no debe ser vacio";
    };
    if (cantidadIntegrantes >= 25) {
        return "Ingrese una cantidad valida de integrantes"
    };
    if (!/^[0-9]+$/.test(cantidadIntegrantes)) {
        return "El campo solo acepta numeros";
    };
    return '';
}

function validarEdadIntegrante(edadIntegrante) {
    if (edadIntegrante.length === 0) {
        return "La edad del integrante no debe ser vacio";
    };
    if (!/^[0-9]+$/.test(edadIntegrante)) {
        return "El campo edad solo acepta numeros";
    };
    
    if (edadIntegrante >= 120) {
        return "Ingrese datos validos";
    };

    return '';
}

function validarSalarioIntegrante(salarioIntegrante) {
    if (!/^[0-9]+$/.test(salarioIntegrante)) {
        return "El campo salario solo acepta numeros"
    };
    
    return ''
}

let errores = {};

function manejarErrores(tipo, errores) {
    const $form = document.querySelector(`#calculador-${tipo}`);
    const keys = Object.keys(errores);
    contadorErrores = 0;
    
    keys.forEach(function(key){
        const error = errores[key];

        if (error) {
            $form[key].className = 'error';
            contadorErrores++;
        }
    })

    return contadorErrores;
}
