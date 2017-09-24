var contains = function (str1,str2) {
	'use strict';
	
	for (var i = 0; i < str2.length; i++) {
		if(str1.indexOf(str2[i]) == -1) {
    	return false;
   	}
}
	return true;
}

contains('test', 'est');
contains('test', 'rest');
contains('test', 'test');