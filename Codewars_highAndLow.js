function highAndLow (input) {
	var numArr = input.slice(" ").sort();
	return numArr[numArr.length-1].toString() + " " + numArr[0].toString()
}