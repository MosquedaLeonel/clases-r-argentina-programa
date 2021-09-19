/* TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
también vamos a crear un <h1> que diga Bienvenido!
vas a crear un botón de acción que una vez que lo apretás, va a
mostrar toda la información junta en un campo de texto
Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"! */

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
 */

const $ingresoDeDatos = document.querySelector('#ingreso-datos');

$ingresoDeDatos.onclick = function() {
    const nombresUsuario = document.querySelector('#nombres-usuario').value;
    const apellidosUsuario = document.querySelector('#apellidos-usuario').value;
    const edadUsuario = document.querySelector('#edad-usuario').value;
    bienvenidaPersonalizada(nombresUsuario, apellidosUsuario);
    mostrarDatos(nombresUsuario, apellidosUsuario, edadUsuario);
    return false;
}

function bienvenidaPersonalizada (nombresUsuario, apellidosUsuario) {
    const bienvenida = document.querySelector('h1');
    return bienvenida.textContent = `Hola, ${nombresUsuario} ${apellidosUsuario}!`;
}

function mostrarDatos (nombresUsuario, apellidosUsuario, edadUsuario) {
    const nodoPagina = document.querySelector('form');
    const nuevoParrafo = document.createElement('p');
    nodoPagina.appendChild(nuevoParrafo);
    const datosAMostrar = `${nombresUsuario} ${apellidosUsuario}, ${edadUsuario} años.`;
    return nuevoParrafo.textContent = datosAMostrar; 
}
