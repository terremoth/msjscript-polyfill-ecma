function require(file) {eval((new ActiveXObject("Scripting.FileSystemObject")).OpenTextFile(file+'.js', 1).ReadAll());}require('polyfill');
// require('console');
require('console');

// function echo (data) {return WScript.Echo(data);}
// var print = echo;
function xxx(y=1) {
    return y ;
}
var obj = {
    prop: function() {},
    foo: 'bar'
  };
  
  // New properties may be added, existing properties
  // may be changed or removed.
  obj.foo = 'baz';
  obj.lumpy = 'woof';
  delete obj.prop;
  
  var o = Object.seal(obj);


// console.log(animals.reverse());
// console.log(animals.sort());
// push

// console.error(atob(btoa('stayin alive')));

// require("array.js");
// require("object.js");

// console.log(13);

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



// function Animal() { }
// Animal.prototype.eat = function() {
//   return "nom nom nom";
// };

// function Bird() { }

// Bird.prototype = Object.create(Animal.prototype);

// Bird.prototype.eat = function() {
//   return "peck peck peck";
// };


var myobj = {'a': 1, 'b': 2, 'c':3};
var myArr = ['a', 'b', 'c', 'd'];
// console.log("fuedase");
// myArr.forEach(function(item){
//     console.log(item);
// });



// console.log(myArr.indexOf('b'))


// console.log(Object.values(myobj));

// console.log(Object.values(myobj));