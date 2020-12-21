
$( "#score" ).addClass('animate__flip')

$( "#medal-icon-image" ).addClass('animate__animated animate__rotateIn d-block')
$(`#add-medal-sound`)[0].play();

$(`#fine-${Math.floor((Math.random() * (5 - 0 + 1)) + 0)}`)[0].play();
setTimeout(()=>{
    cleanMessage()
},2000)