$("#message-done-title" ).text(messagesCorrect[Math.floor((Math.random() * (2)) + 0)]);
//@INFO Se actualiza el score y resta una pregunta si llego a 100 se acaba el juego sino muestra una imagen
setTimeout(() => {
    addScore();
    ask--
    if(correctReponses%5===0){
      brains = brains+50;
      $("#brain-icon-image").addClass('animate__animated animate__shakeY animate__repeat-2 animate__fast d-block')
      $( "#brains" ).text(brains);
      $(`#add-brain-sound`)[0].play();

      setTimeout(() => {
        $("#brain-icon-image").removeClass('animate__animated animate__shakeY animate__repeat-2 animate__fast')
      }, 3500)
    }
    if(score>=100 && medal<3){
      addMedals();
    }
    /* else{ */
      generateImg();
   // }
  }, 2500);

$(`#fine-${Math.floor((Math.random() * (5 - 0 + 1)) + 0)}`)[0].play();



