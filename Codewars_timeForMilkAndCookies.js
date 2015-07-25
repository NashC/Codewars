function timeForMilkAndCookies (date) {
	if (date.getMonth() != 11) {
		return false;
	}
	else if (date.getDate() != 24) {
		return false;
	}
	else {
		return true;
	}
}