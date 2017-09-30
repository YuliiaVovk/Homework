function summ() {
	'use strict'
	var result = 0;
		for (var i = 0; i < arguments.length; i++) {
		result += arguments[i];
}
	return result;
}

summ(1, 2, 3);