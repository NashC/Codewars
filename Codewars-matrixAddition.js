//Codewars_matrixAddition

function matrixAddition(a, b) {
	var mSize = a.length;
	var total = [];

	for (var i = 0; i < mSize; i++) {
		total[i] = [];
		for (var j = 0; j < mSize; j++) {
			total[i][j] = a[i][j] + b[i][j];
		}
	}

	return total;
}

console.log(matrixAddition( [ [1, 2, 3], [3, 2, 1,], [1, 1, 1] ], [ [2, 2, 1], [3, 2, 3], [1, 1, 3] ] ));