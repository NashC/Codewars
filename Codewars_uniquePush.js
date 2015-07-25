function uniquePush (array, person) {
	if (person.phoneNumber == null) {
		return false;
	}
	else {
		for (var i = 0; i < array.length; i++) {
			if (array[i].phoneNumber == person.phoneNumber) {
				return false;
			}
			else {
				array.push(person);
				return true;
			}
		}
	}
}