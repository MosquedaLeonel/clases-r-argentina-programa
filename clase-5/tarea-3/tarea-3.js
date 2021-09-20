/* TAREA: En otro archivo distinto,
Por cada clase de r/argentina programa existente, vamos a pedir:
horas, minutos y segundos de cada video. Ej. Si un video dura
2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
cada dato.
al apretar el botón "Calcular tiempo total", debe mostrar en un
<strong> pre-creado el tiempo total de los videos. */ 


const $calcularTiempoTotalDeVideos = document.querySelector('#calculo-tiempo-total');
const TIEMPOS_EN_SEGUNDOS = [];
let sumaTotalSegundos = 0;
let horasTotales, minutosTotales, segundosTotales;
let resultadoFinal;

$calcularTiempoTotalDeVideos.onclick = function () {
    const HORAS_DE_VIDEOS = [];
    const MINUTOS_DE_VIDEOS = [];
    const SEGUNDOS_DE_VIDEOS = [];
    cargarTiempos(HORAS_DE_VIDEOS, MINUTOS_DE_VIDEOS, SEGUNDOS_DE_VIDEOS);
    transformarTiemposASegundos(HORAS_DE_VIDEOS, MINUTOS_DE_VIDEOS, SEGUNDOS_DE_VIDEOS);
    sumarSegundos(TIEMPOS_EN_SEGUNDOS);
    transformarSegundosAUnidadesDeTiempo(sumaTotalSegundos);
    mostrarResultadosConFormato24Horas();
    resultadoFinal = `${horasTotales}:${minutosTotales}:${segundosTotales}`;
    mostrarResultadoFinalEnPantalla();
    return false;
}

 
function cargarTiempos (HORAS_DE_VIDEOS, MINUTOS_DE_VIDEOS, SEGUNDOS_DE_VIDEOS) {
    HORAS_DE_VIDEOS.push(Number(document.querySelector("#horas-de-video-clase-uno").value));
    HORAS_DE_VIDEOS.push(Number(document.querySelector("#horas-de-video-clase-dos").value));
    HORAS_DE_VIDEOS.push(Number(document.querySelector("#horas-de-video-clase-tres").value));
    HORAS_DE_VIDEOS.push(Number(document.querySelector("#horas-de-video-clase-cuatro").value));
    HORAS_DE_VIDEOS.push(Number(document.querySelector("#horas-de-video-clase-cinco").value));
        
    MINUTOS_DE_VIDEOS.push(Number(document.querySelector("#minutos-de-video-clase-uno").value));
    MINUTOS_DE_VIDEOS.push(Number(document.querySelector("#minutos-de-video-clase-dos").value));
    MINUTOS_DE_VIDEOS.push(Number(document.querySelector("#minutos-de-video-clase-tres").value));
    MINUTOS_DE_VIDEOS.push(Number(document.querySelector("#minutos-de-video-clase-cuatro").value));
    MINUTOS_DE_VIDEOS.push(Number(document.querySelector("#minutos-de-video-clase-cinco").value));

    SEGUNDOS_DE_VIDEOS.push(Number(document.querySelector("#segundos-de-video-clase-uno").value));
    SEGUNDOS_DE_VIDEOS.push(Number(document.querySelector("#segundos-de-video-clase-dos").value));
    SEGUNDOS_DE_VIDEOS.push(Number(document.querySelector("#segundos-de-video-clase-tres").value));
    SEGUNDOS_DE_VIDEOS.push(Number(document.querySelector("#segundos-de-video-clase-cuatro").value));
    SEGUNDOS_DE_VIDEOS.push(Number(document.querySelector("#segundos-de-video-clase-cinco").value));
}

function transformarTiemposASegundos (HORAS_DE_VIDEOS, MINUTOS_DE_VIDEOS, SEGUNDOS_DE_VIDEOS) {
    for (let horasEnSegundos of HORAS_DE_VIDEOS) {
        TIEMPOS_EN_SEGUNDOS.push(parseFloat(horasEnSegundos * 3600));
    }

    for (let minutosEnSegundos of MINUTOS_DE_VIDEOS) {
        TIEMPOS_EN_SEGUNDOS.push(parseFloat(minutosEnSegundos * 60));
    }

    for (let segundos of SEGUNDOS_DE_VIDEOS) {
        TIEMPOS_EN_SEGUNDOS.push(parseFloat(segundos));
    }

}

function sumarSegundos (TIEMPOS_EN_SEGUNDOS) {
    for (let i of TIEMPOS_EN_SEGUNDOS) {
        sumaTotalSegundos += i;
    }
}


function transformarSegundosAUnidadesDeTiempo (sumaTotalSegundos) {
    horasTotales = Math.floor(sumaTotalSegundos / 3600);
    minutosTotales = Math.floor((sumaTotalSegundos % 3600) / 60);
    segundosTotales = Math.floor(sumaTotalSegundos % 60);
}

function mostrarResultadosConFormato24Horas () {
    if (horasTotales < 10) {
        horasTotales = '0' + horasTotales;
    }

    if (minutosTotales < 10) {
        minutosTotales = '0' + minutosTotales;
    }

    if (segundosTotales < 10) {
        segundosTotales = '0' + segundosTotales;
    }
}

function mostrarResultadoFinalEnPantalla () {
    document.querySelector("#campo-de-texto-resultado").value = resultadoFinal;
}

