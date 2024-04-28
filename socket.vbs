Dim sock
Set sock = WScript.CreateObject("MSWinsock.Winsock","sock_")
sock.RemoteHost = "www.yandex.com"
sock.RemotePort = "80"
sock.Connect

Dim received
received = 0

Sub sock_Connect()
    WScript.Echo "[sock] Connection Successful!"
    sock.SendData "GET / HTTP/1.1"& vbCrLf & "Host: " & sock.RemoteHost  & vbCrLf & vbCrLf
End Sub

Sub sock_Close()
    WScript.Echo "[sock] Connection closed!"
End Sub

Sub sock_DataArrival(Byval b)
    Dim data
    sock.GetData data, vbString
    received = received + b
    WScript.Echo "---------------------------------------"
    WScript.Echo " Bytes received: " & b  & " ( Total: " & received & " )"
    WScript.Echo "---------------------------------------"
    WScript.Echo data
End Sub

'Wait for server close connection
Do While sock.State <> 8
    rem WScript.Echo sock.State
    WScript.Sleep 1000
Loop
