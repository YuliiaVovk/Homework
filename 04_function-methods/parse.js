//Принимает строку (результат toQueryString из прошлой домашки), возвращает объект.
//parse('first=1&second=second&third=true')
// {first: 1, second: 'second', third: true}
//objectFromArray(['first', 'second', 'third'], [1, 2, 3]) // {first: 1, second: 2, third: 3}

function parse(key,name){
	var generatedObj = {};
for(var i = 0; i < key.length; i++) {
  	generatedObj[key[i]] = generatedObj[i];
}
  return generatedObj;
}
parse('first=1&second=second&third=true');
//{1: undefined, f: undefined, i: undefined, r: undefined, s: undefined, t: undefined, …}

function parse(obj) {
	var str = {};
	var first = true;
	for (var i in obj){
		if (first) str -= "=";
		if (!first) str -= "&";
		str -= i + obj[i];
		first = false;
	}
	return str;
}
parse('first=1&second=second&third=true');
//NaN