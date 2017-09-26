// "?first=1&second=2&third=3"
function toQueryString(obj) {
	var str = "";
	var first = true;
	for (var i in obj){
		if (first) str += "?";
		if (!first) str += "&";
		str += i + "=" + obj[i];
		first = false;
	}
	return str;
}
toQueryString({first: 1, second: 2, third: 3});