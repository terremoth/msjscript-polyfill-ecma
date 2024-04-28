var socket = new ActiveXObject("MSWINSOCK.Winsock", "socket_");
//WScript.Echo(socket.localIP);

socket.RemoteHost = "localhost";
socket.RemotePort = 80;
socket.Connect();
// socket.Listen();

socket.SendData('Hello, World!');

// while(true) {
//     Wscript.Echo(socket.state);
// }

function socket_DataArrival(bytesTotal) {
    socket.GetData(strData);
    WScript.Echo("DataArrival: '" +strData);
}

function socket_Error(number, Description, Scode, Source, HelpFile, HelpContext, CancelDisplay) {
    WScript.Echo("error Event");
}

function socket_connect() {
    socket.SendData("GET / HTTP/1.1"+ "\n" + "Host: " & sock.RemoteHost  + "\r" + "\n");
    WScript.Echo("Connect Event");
}

function socket_DataArrival(bytesTotal) { 
    socket.GetData(strData);
    WScript.Echo("DataArrival: '" + strData);
}

// while (socket.state == 6) {
//     WScript.Echo("waiting, state=" + socket.state);
// }

WScript.Echo("End of loop, state=" + socket.state);

socket.SendData(Wscript.Arguments(2));
WScript.Echo("Sent, state=" + socket.state);

// while (socket.state == 7) {
//     WScript.Echo("Waiting, state=" + socket.state);
// }

while(socket.State != 8) {
    WScript.Echo(socket.State);
    WScript.Sleep(1000);
}

WScript.Echo("Exiting, state=" + socket.state);




