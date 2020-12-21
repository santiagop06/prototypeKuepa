var INSTRUCTIONS = "¿Cuál es el más grande?"

$( document ).ready(
    ()=>{
        onInit()
});

const onInit = ()=>{
}

const showError = ()=>{
    $("#content").addClass('error');
    $( "#messages" ).load( "../html/error/error.html" );
}

const showOut = ()=>{
    $("#content").addClass('out');
    $( "#messages" ).load( "../html/out/out.html" );
}

const showDone = ()=>{    
    $("#content").addClass('done');
    $( "#messages" ).load( "../html/done/done.html" );
}


const showCongratulations = ()=>{    
    $("#content").addClass('done');
    $( "#messages" ).load( "../html/congratulations/congratulations.html" );
}
const showMedal = ()=>{    
    $("#content").addClass('done');
    $( "#messages" ).load( "../html/medal/medal.html" );
}

const cleanMessage = ()=>{
    $("#content").removeClass('error');
    $("#content").removeClass('out');
    $("#content").removeClass('done');
    $( "#score" ).removeClass('animate__flip')
    $(`#person`).removeClass("animate__flipInY");
    $( "#messages" ).empty();
}
const showEndGame = ()=>{    
    $("#content").addClass('done');
    $( "#messages" ).load( "../html/endGame/endGame.html" );
}

const showNextLevel = ()=>{    
    $("#content").addClass('done');
    $( "#messages" ).load( "../html/nextLevel/nextLevel.html" );
}

const moveToElementPosition = (elementID, targetElementID) => {
    elementID = $(elementID)
    targetElementID = $(targetElementID)

    var fromPos = elementID.offset();
    var toPos = targetElementID.offset();

    const top = (toPos.top - (fromPos.top / 2)) - (elementID.height() / 3)
    const left = (toPos.left - fromPos.left) - elementID.width()

    $(elementID).css({
        "transform": "translate(" + left + "px, " + top + "px) scale(0.5, 0.5)",
        "transition": "all 1s ease-in-out 3.2s",
        "opacity": 0,
    });
}