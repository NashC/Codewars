//Codewars_dice

function dice(minimum, maximum) {
	var rand = Math.random();
	var range = maximum - minimum;
	var num = rand * range;

	return Math.round(maximum - num);
}

console.log(dice(2,7));

