//Codewars-array_diff

function array_diff(a, b) {
    var arr = [];
	if (b.length === 0) {
	    return a;
	}
	else {
	
    	for (var i = 0; i < a.length; i++) {
    		for (var j = 0; j < b.length; j++) {
    			if (a[i] != b[j]) {
    				arr.push(a[i]);
    			}
    		}
    	}
	}
	return arr;
}

console.log(array_diff([1,2,2,2,3,3,2],[2]));