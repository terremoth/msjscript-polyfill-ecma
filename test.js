// eval((new ActiveXObject("Scripting.FileSystemObject")).OpenTextFile("array.js", 1).ReadAll());
eval((new ActiveXObject("Scripting.FileSystemObject")).OpenTextFile("console.js", 1).ReadAll());
eval((new ActiveXObject("Scripting.FileSystemObject")).OpenTextFile("object.js", 1).ReadAll());

// for (var i =0; i < 108; i++) {
//     WScript.stdout.WriteLine('\x1B['+i+'mTest with '+i+' code\x1B[0m');
// }
// var i = 0;
// setInterval(function() {
//     WScript.stdout.WriteLine(i++);
// }, 1000);

// var script = (new ActiveXObject("Scripting.FileSystemObject").GetFileName( WScript.FullName ));
// var cscript = "C:\\Windows\\System32\\cscript.exe";



// if (script === 'wscript.exe') {
//     // WScript.Interactive = false;    
//     WScript.Echo(WScript.FullName);
// } else if (script === 'cscript.exe') {
//     WScript.Echo("damm"); 
// }



function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};

function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};


var myobj = {'a': 1, 'b': 2, 'c':3};
var myArr = ['a', 'b', 'c', 'd'];

Array.prototype.indexOf = (function (Object, max, min) {
    "use strict"
    return function indexOf(member, fromIndex) {
        if (this === null || this === undefined)
            throw TypeError("Array.prototype.indexOf called on null or undefined");

        var that = Object(this), Len = that.length >>> 0, i = min(fromIndex | 0, Len);
        if (i < 0) {i = max(0, Len + i);}
        else if (i >= Len) {return -1;}

        if (member === void 0) {        // undefined
            for (; i !== Len; ++i) if (that[i] === void 0 && i in that) {return i;}
        } else if (member !== member) { // NaN
            return -1; // Since NaN !== NaN, it will never be found. Fast-path it.
        } else {                    // all else
            for (; i !== Len; ++i) if (that[i] === member) {return i};
        }

        return -1; // if the value was not found, then return -1
    }
})(Object, Math.max, Math.min);


console.log(myArr.indexOf('b'))

// Object.values = function(obj) {

// 	var allowedTypes = ["[object String]", "[object Object]", "[object Array]", "[object Function]"];
// 	var objType = Object.prototype.toString.call(obj);
	
//     if (obj === null || typeof obj === "undefined") {
//         WScript.Echo("1111111111111111");
// 		throw new TypeError("Cannot convert undefined or null to object");
// 	} else if (!allowedTypes.indexOf(objType)) {
//         WScript.Echo("2222222222");
// 		return [];
// 	} else {WScript.Echo("333333333333333333");
// 		// if ES6 is supported
// 		if (Object.keys) {
//             WScript.Echo("entrou1");
// 			return Object.keys(obj).map(function (key) {
// 				return obj[key];
// 			});
// 		} else {
//             WScript.Echo("entrou 2");
//         }
		
// 		var result = [];
// 		for (var prop in obj) {
// 			if (obj.hasOwnProperty(prop)) {
// 				result.push(obj[prop]);
// 			}
// 		}
		
// 		return result;
// 	}
// };

// console.log(Object.values(myobj));

// console.log(Object.values(myobj));