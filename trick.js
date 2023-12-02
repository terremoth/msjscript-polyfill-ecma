var wsh = new ActiveXObject("wScript.shell");

// var use_ps_trick = true;
// var virtualTerminalLevel = false;

// try {
//     virtualTerminalLevel = wsh.regRead("HKCU\\Console\\VirtualTerminalLevel");
// } catch(e) {}

// if (virtualTerminalLevel == 0) {
//     use_ps_trick = true;
// } else {
//     use_ps_trick = false;
// }


// if (use_ps_trick) {

    var ps = wsh.exec('powershell.exe -noProfile -executionPolicy bypass -c ""exit""');
    
    while (ps.status == 0) {
        WScript.sleep(1);
    }
// }
// var ps = wsh.exec('powershell.exe -noProfile -executionPolicy bypass -c ""exit""');

var txt = String.fromCharCode(27) + "[91mRed" + String.fromCharCode(27) + "[0m normal";

WScript.Echo(txt);

// var fso = new ActiveXObject("scripting.fileSystemObject");
// var stdOut = fso.getStandardStream(1)

// stdOut.writeLine(txt);
// stdOut.writeLine("[91mRed[0m normal");


// WScript.Echo( "");
// WScript.Echo(      "[92mGreen[0m  ");

// WScript.Sleep( 1000);
// WScript.Echo( "[1F[93mYellow[0m ");

// WScript.Sleep( 1000);
// WScript.Echo( "[1F[94mBlue[0m   ");

// WScript.Sleep( 1000);
// WScript.Echo( "[1F[95mMagenta[0m");