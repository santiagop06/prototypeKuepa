var correctAnswer = 0;
var topNumber = 0;
var bottomNumber = 0;
var score = 0;
var lives = 3;
var correctReponses = 0;
var responses = 0;
var brains = 0;
var medal = 0;
let nivel = 1;
let subnivel = 1
let ask = scoreList.length //numero de preguntas
let tries = 0;//intentos en un subnivel
let fail = 0;//errores en un subnivel
let beginToCount = 3;//desde que nivel se evalua el score
let star = 0;

var messagesError = [
    'INTÉNTALO DE NUEVO'
];

var messagesCorrect = [
    'ASI SE HACE!',
    '¡SÚPER!',
];

const tts = TTS()


$(document).ready(
    () => {
        generateImg()
        readIntructions(3000)
    });

const generateImg = () => {
    //@INFO Si ya no quedan preguntas acabe el juego, si la pregunta actual no suma puntos acabe el juego
    if (ask === 0) {
        showEndGame();
    } else {
        $("#game-containers").empty();
        $('#game-containers').addClass('game_size')
        //INFO Se selecciona una posicion aleatoria del array de la cual saldran las fotos
        let index = Math.floor(Math.random() * (arrayImg.length));
        let arr = arrayImg[index];

        /**
         * Se evalua el nivel y el subnivel y se muestra sus respectivas imagenes
         */
        if (nivel === 1) {
            if (subnivel === 1) {
                showInstructions(0)
                selectImg(arr, 1, 1, 0);
            } else if (subnivel > 1) {
                showInstructions(1)
                selectImg(arr, 1, 1, 1);
            }
        } else if (nivel === 2) {
            if (subnivel === 1) {
                showInstructions(0)
                selectImg(arr, 1, 2, 0);
            } else if (subnivel > 1) {
                showInstructions(1)
                selectImg(arr, 2, 1, 1);
            }
        } else if (nivel > 2) {
            if (subnivel === 1) {
                showInstructions(0)
                selectImg(arr, 1, 4, 0);

            } else if (subnivel > 1) {
                showInstructions(1)
                selectImg(arr, 4, 1, 1);

            }
        }
    }
}

/**
 * 
 * @param {array de imagenes} arr 
 * @param {numero de imagenes grandes que se necesitan} big 
 * @param {numero de imagenes pequeñas que se necesitan} small 
 * @param {tipo de pregunta, es grande=0, es pequeño=1} type 
 */
const selectImg = (arr, big, small, type) => {

    if (type === 0) {
        $('#title-h1').text('Comparamos y ordenamos.')
        $('#p-1').text(`¿Cuál es el más grande? <a href='#' id="read-instructions-button"><img src='./assets/images/audio.png' style="width: 30px" /></a>`)
    } else {
        $('#title-h1').text('Comparamos y ordenamos.')
        $('#p-1').text(`¿Cuál es el más pequeño? <a href='#' id="read-instructions-button"><img src='./assets/images/audio.png' style="width: 30px" /></a>`)
    }
    let arrayAux = []
    $(document).ready(function () {
        while (small > 0 || big > 0) {
            //INFO Se selecciona una imagen aleatoria del array
            let subIndex = Math.floor(Math.random() * (arr.length));
            let objImg = arr[subIndex];
            if (!arrayAux.includes(subIndex)) {
                arrayAux.push(subIndex)
                if (objImg.type === 0 && big > 0) {
                    appendImg(type, subIndex, objImg, 'big')
                    big--;
                } else if (objImg.type === 1 && small > 0) {
                    appendImg(type, subIndex, objImg, 'small')
                    small--;
                }
            }
            if (arr.length === arrayAux.length) {
                small = 0;
                big = 0;
            }
        }
    })
    cleanMessage();
}
/**
 * 
 * @param {tipo de pregunta} type 
 * @param {posicion de la imagen} subIndex 
 * @param {obj del arrayImg} objImg 
 * @param {big or small}typeclass
 */
const appendImg = (type, subIndex, objImg, typeClass) => {
    //INFO numero random para los id de los componentes
    const random = Math.floor(Math.random() * 500) + Math.floor(Math.random() * 1000) + subIndex;

    if (objImg.type == type) {
        $('#game-containers').append('<div class=pencil  id="div' + random + '"/>');
        $('#div' + random).append('<input class="andres" type="radio" name="size" value="true" id="input' + random + '"/>');
        $('#div' + random).append('<label  for="input' + random + '"id="label' + random + '"/>');
        $('#label' + random).append('<img  class=' + typeClass + ' src="assets/images/game/' + objImg.image + '" >');
    } else {
        $('#game-containers').append('<div  class=pencil id="div' + random + '"/>');
        $('#div' + random).append('<input class="andres" type="radio" name="size" value="false" id="input' + random + '"/>');
        $('#div' + random).append('<label  for="input' + random + '"id="label' + random + '"/>');
        $('#label' + random).append('<img  class=' + typeClass + ' src="assets/images/game/' + objImg.image + '" >');
    }
}

const validateSize = () => {

    //INFO mira el valor del input que este en estado checked
    const input = $("#game-containers input[type='radio']:checked").val();
    responses++;
    $("#correct-reponses").text(responses);

    if (input === 'true') {
        showDone();
    } else {
        showError();
    }

    changeImageperson();

}

$("#send").click(validateSize);

const changeImageperson = () => {

    setTimeout(() => {
        $("#person").addClass("animate__flipInY");
        $("#person").attr("src", `./assets/images/characters/${Math.floor(Math.random() * (11 - 0 + 1) + 0)}.png`);
    }, 2600)
}

/**
 * Funcion que muestra las instrucciones
 */
const showInstructions = (num) => {
    const instructionsContainer = $('#instructions-container')

    if(num===0){
        INSTRUCTIONS= "¿Cuál es el más grande?"
        instructionsContainer.html(`${INSTRUCTIONS} <a href='#' id="read-instructions-button"><img src='./assets/images/audio.png' style="width: 30px" /></a>`)
    }else{
        INSTRUCTIONS= "¿Cuál es el más pequeño?"
        instructionsContainer.html(`${INSTRUCTIONS} <a href='#' id="read-instructions-button"><img src='./assets/images/audio.png' style="width: 30px" /></a>`)
    }

}

/**
 * Funcion que lee las instrucciones
 */
const readIntructions = async (sleep = 0) => {
    if (sleep) {
        await delay(sleep)
    }

    tts.readText(INSTRUCTIONS)
}

/**
 * Funcion que suma el score del usuario
 */
const addScore = () => {
    const add = scoreList[correctReponses].correct;
    score = score + add;
    if (score >= 100) {
        $("#resume-score").text(100);
    } else {
        $("#resume-score").text(score);
    }
    correctReponses++;
    nextLevel();
}

/**
 * Funcion que sube de nivel
 */
const nextLevel = () => {
    tries++
    const max = nivelList[nivel - 1].max
    if (score > max) {
        tries = 0;
        subnivel = 1;
        nivel++;
        addMedals();
        showNextLevel()

    } else if (tries === 3) {
        tries = 0;
        subnivel++;
    }
}

/**
 * Funcion que resta el score del usuario
 */
const subtractScore = () => {
    const less = scoreList[responses - 1].incorrect;
    score = score - less;
    if (score <= 0) {
        $("#resume-score").text(0);
    } else {
        $("#resume-score").text(score);
    }
    beforeLevel();
}

/**
 * Funcion que disminuye de nivel
 */
const beforeLevel = () => {
    const min = nivelList[nivel - 1].min
    if (score < min && responses >= beginToCount) {
        showOut();
    } else if (nivel > 2) {
        tries = 0;
        fail++;
        if (fail > 1) {
            tries = 0
            fail = 0
        }
    } else {
        tries = 0;
    }
}
const addMedals = () => {
    medal++;
    $("#medal-icon-image").addClass('animate__animated animate__wobble d-block')
    $("#medal-count").text(medal)
    $(`#add-medal-sound`)[0].play();
    //showMedal()
    if (medal % 3 === 0) {
        brains = brains + 75;
        $("#brain-icon-image").addClass('animate__animated animate__shakeY animate__repeat-2 animate__fast d-block')
        $("#brains").text(brains);
        $(`#add-brain-sound`)[0].play();

        showCongratulations()
        
        setTimeout(() => {
            star++
            showStar()
            $("#brain-icon-image").removeClass('animate__animated animate__shakeY animate__repeat-2 animate__fast')
        }, 3500)
    }

    setTimeout(() => {
        $("#medal-icon-image").removeClass('animate__animated animate__wobble')
    }, 2000)

}

const delay = ms => new Promise(res => setTimeout(res, ms));

const showStar = () => {
    $("#star-icon-image").addClass('animate__animated animate__wobble d-block')
    $("#star-count").text(star)


    setTimeout(() => {
        $("#star-icon-image").removeClass('animate__animated animate__wobble')
    }, 3500)
}

$(document).on('click', '#read-instructions-button', function() {
    readIntructions()
})
  