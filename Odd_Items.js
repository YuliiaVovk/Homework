function extractOddItems(arr) {
	var arrayResult = [];
 	for (i = 0; i<arr.length; i++) {
 	if (arr[i]%2==1)
		return(arr[i]);
 } 
 }
extractOddItems([1, 2, 3, 4, 5, 11, 8, 13]);