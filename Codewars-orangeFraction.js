//Codewars_orangeFraction

function orangeFraction(fractions) {
	var numArr = fractions.split(' ').map(function(a) {return parseInt(a);});
	var frac = numArr.reduce(function(a,b) {return a+b;})/(numArr.length*100)*100;
	return parseFloat(frac.toFixed(4));
}

console.log(orangeFraction('0 25 50 75'));