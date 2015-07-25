//Codewars_squeakyClean

function squeakyClean(arr) {
	var newArr = [];

	for (var i = 0; i < arr.length; i++) {
	
		if (arr[i] === null | arr[i] == '' | arr[i] == undefined) {
			;
		}
		else if (arr[i].match(/^0/g) === null){
			newArr.push(arr[i]);
		}
		//console.log(newArr);	
	}
	

	return newArr;
}

var origArr = ['click1','click20',null,'','','submitForm',0,undefined];

console.log(squeakyClean(origArr));

//if (arr[i].match(/^''|^0|^\0|^undefined/) !== null)