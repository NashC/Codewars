//Codewars_calculateHypotenuse

function calculateHypotenuse (a,b) {
	if (a <= 0 || b <= 0 || typeof a != 'number' || typeof b != 'number' || isNaN(a) || isNaN(b)) {
	    throw new Error(['Invalid Input']);
	}
	else {
    	var hyp = Math.sqrt((a * a) + (b * b));
	    return parseFloat(hyp.toFixed(3));
	}
}

console.log(calculateHypotenuse(NaN,5));