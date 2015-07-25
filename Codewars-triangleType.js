//Codewars_triangleType

function triangleType(a, b, c) {
	var a2 = a * a;
	var b2 = b * b;
	var c2 = c * c;

	if (a + b <= c || b + c <= a || c + a <= b) {
		return 0;
	}
	else if (Math.sqrt(a2 + b2) < c2 || Math.sqrt(b2 + c2) < a2 || Math.sqrt(c2 + a2) < b2) {
		return 1;
	}
	else if (Math.sqrt(a2 + b2) == c2 || Math.sqrt(b2 + c2) == a2 || Math.sqrt(c2 + a2) == b2) {
		return 2;
	}
	else {
		return 3;
	}
}