var a = {};
var totalArr = [{}, a, [], 10];
function isInArray(item,array) {
	"use strict";
	return array.indexOf(item) !== -1;}
isInArray(a, totalArr);
//true 

function splash (itemCheck,arrLast){
if (arrLast.indexOf(itemCheck) !== -1) {
	return true;
}
};
splash ('3', [1, 2, 3, 4] );
//undefined

function splash (str,[str2]) {
	'use strict';
	for (var i = 0; i < str2.length; i++) {
		if(str.indexOf(str2[i]) == -1) {
		return false;
	}
}
	return true;
}

splash('3', [1, 2, 3, 4] );
//undefined