$("#message-error-title").text(
  messagesError[0]
);
$(`#fail-0`)[0].play();
//Actualiza el score y resta una pregunta
setTimeout(() => {
  subtractScore();
  ask--
  generateImg();
}, 2500);




