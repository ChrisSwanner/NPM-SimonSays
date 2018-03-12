import { Simon, Player, ArrayCheck, setColor } from './simon.js';
import './styles.css';

var userArray = [];
var startArray = [];

$(document).ready(function(){
  startArray = Simon(startArray);
  $('#square').css("fill", startArray[startArray.length - 1].toLowerCase());
  $('#BLUE').click(function(event){
    event.preventDefault();
    userArray = Player(userArray, "BLUE");
})

  $('#YELLOW').click(function(event){
    event.preventDefault();
    userArray = Player(userArray, "YELLOW");
})

  $('#RED').click(function(event){
    event.preventDefault();
    userArray = Player(userArray, "RED");
})
  $('#GREEN').click(function(event){
    event.preventDefault();
    userArray = Player(userArray, "GREEN");
  })

$('#check').click(function(event) {
  event.preventDefault();
  if (ArrayCheck(userArray, startArray) === true) {
    startArray = Simon(startArray);
    userArray = [];
    startArray.forEach(function(color, index) {
      setTimeout(function() {
        $('#square').fadeIn(500);
        $('#square').css("fill", color.toLowerCase());
        $('#square').fadeOut(500);
      },
      1000 * index);
    })


    console.log(startArray);
    console.log(userArray);
    } else {
    $('#currentColor').text("YOU LOSE");
  }

})

});
