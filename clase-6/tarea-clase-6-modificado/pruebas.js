function probarValidarCantidadIntegrantes () {
    console.assert(
        validarCantidadIntegrantes('') === "La cantidad de integrantes no debe ser vacio",
        "Validar cantidad integrantes no valido que la cantidad de integrantes no sea vacio"
    );

    console.assert(
        validarCantidadIntegrantes("adad") === "El campo solo acepta numeros",
        "Validar cantidad integrantes no valido que el campo solo tenga numeros"
    );

    console.assert(
        validarCantidadIntegrantes(30) === "Ingrese una cantidad valida de integrantes",
        "Validar cantidad integrantes no valido que la cantidad de integrantes sea mayor a 25"
    );

    console.assert(
        validarCantidadIntegrantes(4) === "",
        "Validar cantidad integrantes fallo con una cantidad de integrantes valida"
    );
}

function probarValidarEdadIntegrante () {
    console.assert(
        validarEdadIntegrante('') === "La edad del integrante no debe ser vacio",
        "Validar edad integrante no valido que la edad de integrante no sea vacio",
    );

    console.assert(
        validarEdadIntegrante("adadsad524") === "El campo edad solo acepta numeros",
        "Validar edad integrante no valido que el campo solo tenga numeros"
    );

    console.assert(
        validarEdadIntegrante(125) === "Ingrese datos validos",
        "Validar edad integrante no valido que el campo tenga datos validos"
    );

    console.assert(
        validarEdadIntegrante(24) === "",
        "Validar edad integrante fallo con una edad valida"
    );
}

function probarValidarSalarioIntegrante() {
    console.assert(
        validarSalarioIntegrante('adfasdsa') === "El campo salario solo acepta numeros",
        "Validar salario integrante no valido que el campo solo tenga numeros"
    );

    console.assert(
        validarSalarioIntegrante(150000) === "",
        "Validar salario integrante fallo con un salario valido"
    );
}

probarValidarCantidadIntegrantes();
probarValidarEdadIntegrante();
probarValidarSalarioIntegrante()