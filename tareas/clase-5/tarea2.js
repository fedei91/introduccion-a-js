//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $botonCalcularTiempo = document.querySelector("#calcular-tiempo");


$botonCalcularTiempo.onclick = function() {

    // carga de arrays con todos los inputs.

    /* Gonza
        arraySegundos puede y debería ser un const. Agregar y remover elementos
        de un array modifica sus propiedades pero el objeto sigue siendo el
        mismo, no afecta su identidad. Las cosas definidas con const no pueden
        ser "reasignadas" pero si pueden "mutar".
    */
    let arraySegundos = [];
    let $arraySegundos = document.getElementsByClassName("segundos");

    for (i=0; i<$arraySegundos.length; i++) {
        let campoSegundos = $arraySegundos[i];
        arraySegundos.push(Number(campoSegundos.value));
        /* Gonza
            Personalmente prefiero preparar/sanitizar/transformar el dato antes
            de la operación final donde lo envio/asigno porque a mi me resulta
            más legible. I.e.:
                let campoSegundos = Number($arraySegundos[i].value);
                arraySegundos.push(campoSegundos);
        */
    }

    let arrayMinutos = [];
    let $arrayMinutos = document.getElementsByClassName("minutos");

    for (i=0; i<$arrayMinutos.length; i++) {
        let campoMinutos = $arrayMinutos[i];
        arrayMinutos.push(Number(campoMinutos.value));
    }

    let arrayHoras = [];
    let $arrayHoras = document.getElementsByClassName("horas");

    for (i=0; i<$arrayHoras.length; i++) {
        let campoHoras = $arrayHoras[i];
        arrayHoras.push(Number(campoHoras.value));
        /* Gonza
            Ya es la 3ra vez que te repites con una lógica similar, podrías
            abstraer esto en una función de orden superior. Te dejo un ejemplo
            en un índice abajo: handleTimer();

            handleTimer($arraySegundos);
            handleTimer($arrayMinutos);
            handleTimer($arrayHoras);

            En lugar de utilisar todos estos for-loop repetidos
        */
    }

    // cálculo de tiempo total

    let totalHoras = 0;
    for (i=0; i<arrayHoras.length; i++) {
        totalHoras+= arrayHoras[i];
    }

    let totalMinutos = 0;
    for (i=0; i<arrayMinutos.length; i++) {
        totalMinutos+= arrayMinutos[i];
    }

    let totalSegundos = 0;
    for (i=0; i<arrayMinutos.length; i++) {
        totalSegundos+= arraySegundos[i];

        /* Gonza
            Para estos 3 casos podes usar otra función de orden superior pero
            te lo dejo a tu imaginación con el ejemplo que te dejé ya para
            handleTimer()
        */
    }

    // transformar resultados totales
    
    const divisionSegundos = totalSegundos / 60;
    const segundosEnteros = Math.floor(divisionSegundos);
    const segundosRestantes = totalSegundos % 60;
    //segundosActual = Math.round(decimalSegundos * 60);

    const divisionMinutos = (totalMinutos + segundosEnteros) / 60;
    const minutosEnteros = Math.floor(divisionMinutos);
    const minutosRestantes = (totalMinutos + segundosEnteros) % 60;
    //const minutosActual = Math.round(decimalMinutos * 60);

    const horasActual = totalHoras + minutosEnteros;

    let resultadoFinal = document.querySelector("#resultado");
    // Gonza: Bien por ese string literal y esa interpolation!
    resultadoFinal.textContent = `${horasActual} : ${minutosRestantes} : ${segundosRestantes}`;

    /* Gonza
        Por qué retornamos false? Quién va a usar este valor? Si no retornas
        nada igual JS va a retornar undefined.
        Mi recomendación es que si no piensas usar el valor de retorno de una
        función, no lo asignes, porque podes confundirte a vos mismo o a otro
        dev que se pregunte que otra función u variable espera este tipo de
        valor.
    */
    return false;
}

// Métodos de Gonza

function handleTimer(timeArray) {
    for (i=0; i<timeArray.length; i++) {
        let fieldValue = Number(timeArray[i].value);
        timeArray.push(fieldValue);
    }
}