moveToElementPosition('.congratulations-medal','#medal-icon');

setTimeout(() => {
    $("#score").addClass('animate__flip');
    
    $("#medal-icon-image").addClass('animate__animated animate__heartBeat d-block');
    
    $(`#fine-${Math.floor((Math.random() * (5 - 0 + 1)) + 0)}`)[0].play();
  
    setTimeout(() => {
      $("#medal-icon-image").removeClass('animate__animated animate__heartBeat')
      cleanMessage()
    }, 2000)
  
  }, 4000);
