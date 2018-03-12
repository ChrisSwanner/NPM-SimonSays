
export function Simon(array) {
  var colorArray = ["BLUE", "GREEN", "RED", "YELLOW"];
  var randomNumber = Math.floor(Math.random()*colorArray.length);

  array.push(colorArray[randomNumber]);

  return array;
}

export function Player(array, string) {
  array.push(string);
  return array;
}

export function ArrayCheck (playerArray, compArray) {
  var i;
  for (i = 0; i < playerArray.length; i++){
    if(playerArray[i] === compArray[i]){
      continue;
    } else {
    	return false;
    }
  }
  return true;
}

export function setColor(color) {
 $('body').css("background-color", color.toLowerCase());
}
