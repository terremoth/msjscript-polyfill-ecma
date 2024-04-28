// var input;
// // while(!WScript.StdIn.AtEndOfLine) {
//     input = WScript.StdIn.Read(1);
//     WScript.Echo(input); 
// // }

// var a = new ActiveXObject('System.Console');
var shell = new ActiveXObject('WScript.Shell');

var exec = shell.Exec('choice /c wasd /n');

WScript.Echo(exec.Status);

while(!exec.StdOut.AtEndOfStream) {
    Wscript.Echo(exec.StdOut.ReadLine);
}

WScript.Echo('finished');
