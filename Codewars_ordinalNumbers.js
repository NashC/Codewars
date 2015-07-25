//Codewars_OrdinalNumbers

function ordinal(number, brief) {
  var ltrs = ['th','st','nd','rd','th','th','th','th','th','th'];
  var ltrsBrief = ['th','st','d','d','th','th','th','th','th','th'];
  var num = [];
  num = number.toString().split('');
  if (num[num.length-2] == 1) {
      return ltrs[0];
  }
  else if (brief === true) {
      return ltrsBrief[num[num.length-1]];
  }
  else {
      return ltrs[num[num.length-1]];
  }
}

var x = 13;

console.log(ordinal(x, true));