var console = {};

console.log = function(data) {
    WScript.Echo(data);
}; 

console.error = function(data) {
    WScript.stdout.WriteLine('\x1B[41m'+data+'\x1B[0m');
};

console.warn = function(data) {
    WScript.stdout.WriteLine('\x1B[103m'+data+'\x1B[0m');
};

console.info = function(data) {
    WScript.stdout.WriteLine('\x1B[106m'+data+'\x1B[0m');
};

console.debug = function(data) {
    WScript.stdout.WriteLine('\x1B[3m'+data+'\x1B[0m');
};