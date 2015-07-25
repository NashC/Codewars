//Codewars_digitalRoot

function digital_root (n) {
    var numArr = n.toString().split('').map(function(y){return parseInt(y);});
    var total = 0;
    
    if (n<10) {
        return n;
    }
    else {
        numArr.forEach(function(num) {
            total += num;
        });
        return digital_root(total);
    }
}

var num = 493193;

console.log(digital_root(num));