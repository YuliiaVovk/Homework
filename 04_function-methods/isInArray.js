if (!Array.isArray) {
	Array.isArray = function(value,arrItem) {
		return Object.prototype.toString.call(arg) === arrItem;
	};
}

var a = {};
var totalArr = [{}, a, [], 10];
function isInArray(item,array) {
	"use strict";
	return array.indexOf(item) !== -1;}
isInArray(a, totalArr);


function splash (itemCheck,arrLast){
if (arrLast.indexOf(itemCheck) !== -1) {
    return true;
}
};
splash ('3', [1, 2, 3, 4] )