function GetParentProcessId() {
    var processesList = new ActiveXObject("winmgmts:{impersonationLevel=impersonate}!\\.\root\cimv2");
    var processesList = processesList.ExecQuery("SELECT * FROM Win32_Process WHERE (Name = 'cscript.exe') AND Commandline LIKE '%"+WScript.ScriptName+"%'" );
    
    var response = null;
    for (var i = 0; i < processesList.length; i++) {
        response = process.ParentProcessId;
    }

    return response;
}

WScript.Echo(GetParentProcessId());