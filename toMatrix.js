function toMatrix (array, size) {
	var arrayCopy = array.slice();
	var arrayResult = [];
	var j = -1; // intrenal array counter
	for(var i = 0; i < arrayCopy.length; i++) {
		if(i%size === 0) {
			j++;
			arrayResult[j] = [];
		}
		arrayResult[j].push(arrayCopy[i]);
	}
	return arrayResult;
}
toMatrix([1,2,3,4,5,6,7,8,9], 3); 