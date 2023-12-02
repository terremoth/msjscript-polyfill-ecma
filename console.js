var console = {};
console.__handler__ = function(data) {
    var wsh = new ActiveXObject("wScript.shell");
    var ps = wsh.exec('powershell.exe -noProfile -executionPolicy bypass -c ""exit""'); 
    
    while (ps.status == 0) {
        WScript.sleep(1);
    }

    WScript.Echo(data);
};

console.log = function(data) {
    this.__handler__(data);
}; 

console.error = function(data) {
    this.__handler__('\x1B[41m'+data+'\x1B[0m');
};

console.warn = function(data) {
    this.__handler__('\x1B[103m'+data+'\x1B[0m');
};

console.info = function(data) {
    this.__handler__('\x1B[106m'+data+'\x1B[0m');
};

console.debug = function(data) {
    this.__handler__('\x1B[3m'+data+'\x1B[0m');
};