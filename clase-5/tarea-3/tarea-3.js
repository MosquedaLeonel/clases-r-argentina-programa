/* TAREA: En otro archivo distinto,
Por cada clase de r/argentina programa existente, vamos a pedir:
horas, minutos y segundos de cada video. Ej. Si un video dura
2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
cada dato.
al apretar el botón "Calcular tiempo total", debe mostrar en un
<strong> pre-creado el tiempo total de los videos. */ 

const CANTIDAD_DE_VIDEOS = 2;
let tiempoDeVideoTotalEnSegundos = [];

const $ingresarTiempoDeVideo = document.querySelector('#ingreso-datos');
const $calcularTiempoTotalDeVideos = document.querySelector('#calculo-tiempo-total');


$ingresarTiempoDeVideo.onclick = function () {
    const horasDeVideo = document.querySelector('#horas-de-video').value;
    const minutosDeVideo = document.querySelector('#minutos-de-video').value;
    const segundosDeVideo = document.querySelector('#segundos-de-video').value;
    if (tiempoDeVideoTotalEnSegundos.length < CANTIDAD_DE_VIDEOS) {
        guardarTiempo(horasDeVideo, minutosDeVideo, segundosDeVideo);
        calculoDelTiempoEnSegundos(horasDeVideo, minutosDeVideo, segundosDeVideo);

    }
    return false;
}


function guardarTiempo (horasDeVideo, minutosDeVideo, segundosDeVideo) {
    const nodoPagina = document.querySelector('form');
    const nuevoParrafo = document.createElement('p');
    const tiempoDeVideo = `${horasDeVideo}:${minutosDeVideo}:${segundosDeVideo}`;
    nuevoParrafo.textContent = tiempoDeVideo;
    nodoPagina.appendChild(nuevoParrafo);
}

function calculoDelTiempoEnSegundos (horasDeVideo, minutosDeVideo, segundosDeVideo) {
    let horasASegundos = parseFloat(horasDeVideo * 3600);
    let minutosASegundos = parseFloat(minutosDeVideo * 60);
    let segundosTotalesDeVideo = parseFloat(segundosDeVideo) + minutosASegundos + horasASegundos;
    if (tiempoDeVideoTotalEnSegundos.length < CANTIDAD_DE_VIDEOS) {
        tiempoDeVideoTotalEnSegundos.push(segundosTotalesDeVideo);
    }
    
}

let resultadoEnSegundos = 0;

$calcularTiempoTotalDeVideos.onclick = function () {
    for (let i = 0; i < tiempoDeVideoTotalEnSegundos.length; i++) {
        resultadoEnSegundos += tiempoDeVideoTotalEnSegundos[i];
    }
    pasajeDeSegundos(resultadoEnSegundos)
    const nuevoCampo = document.querySelector('#campo-de-texto-resultado');
    nuevoCampo.value = resultadoFinal;
    return false;
}
let horasTotales, minutosTotales, segundosTotales;

function pasajeDeSegundos (resultadoEnSegundos) {
    horasTotales = Math.floor(resultadoEnSegundos / 3600);
    minutosTotales = Math.floor((resultadoEnSegundos % 3600) / 60);
    segundosTotales = Math.floor(resultadoEnSegundos % 60);
    return let = resultadoFinal = `${horasTotales}:${minutosTotales}:${segundosTotales}`;
}
