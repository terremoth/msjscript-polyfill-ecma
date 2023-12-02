WScript.Echo("WScript.Application: "+WScript.Application);
WScript.Echo("WScript.BuildVersion: "+WScript.BuildVersion);
WScript.Echo("WScript.FullName: "+WScript.FullName);
WScript.Echo("WScript.Interactive: "+WScript.Interactive );
WScript.Echo("WScript.Name: "+WScript.Name);
WScript.Echo("WScript.Path: "+WScript.Path);
WScript.Echo("WScript.ScriptFullName: "+WScript.ScriptFullName);
WScript.Echo("WScript.ScriptName: "+WScript.ScriptName);
WScript.Echo("WScript.Version: "+WScript.Version);

var WShell = new ActiveXObject("Wscript.Shell") 

// var objShell = new ActiveXObject("Shell.Application");

WScript.Echo(String.fromCharCode(33));