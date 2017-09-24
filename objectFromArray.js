//objectFromArray - принимает два массива. Первый - ключи, второй - значения. Возвращает объект
//objectFromArray(['first', 'second', 'third'], [1, 2, 3]) // {first: 1, second: 2, third: 3}

function objectFromArray(key,name){
	var generatedObj = {};
for(var i = 0; i < key.length; i++) {
  	generatedObj[key[i]] = name[i];
}
  return generatedObj;
}
objectFromArray(['first', 'second', 'third'],[1, 2, 3]);