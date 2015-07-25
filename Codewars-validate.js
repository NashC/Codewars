//Codewars_validate

function validate(input){
  if(input[0].match(/[a-z]/gi) === null) {
    return false;
  }

  var atspot = 0, dotspot = 0;

  for (var i = 0; i < input.length; i++) {
    if (input[i] == '@') {
      atspot = i;
    }
    if (input[i] == '.') {
      dotspot = i;
    }
  }
  
  if (atspot === 0 | dotspot === 0) {
      return false;
  }

  for (var j = 0; j < atspot; j++) {
    if(input[j].match(/\w/gi) === null) {
      return false;
    }
  }
    
  if ((dotspot-atspot)<2) {
    return false;
  }

  for (var k = atspot+1; k < dotspot; k++) {
    if(input[k].match(/\w|\-|\./gi) === null) {
      return false;
    }
  }

  if ((input.length-dotspot)<2) {
    return false;
  }

  for (var n = dotspot+1; n < input.length; n++) {
    if(input[n].match(/\w/gi) === null) {
      return false;
    }
  }

  return true;
}