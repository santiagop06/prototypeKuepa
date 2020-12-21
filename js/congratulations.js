$("#brains-total").text(brains)
$(`#add-brain-sound`)[0].play();

moveToElementPosition('.congratulations-medal','#star-icon');

setTimeout(() => {
  $("#score").addClass('animate__flip');
  
  $("#medal-icon-image").addClass('animate__animated animate__wobble d-block');
  $(`#add-medal-sound`)[0].play();
  
  $(`#fine-${Math.floor((Math.random() * (5 - 0 + 1)) + 0)}`)[0].play();
  
  generateOperation();

  setTimeout(() => {
    $("#medal-icon-image").removeClass('animate__animated animate__wobble')
  }, 2000)

}, 4000);

