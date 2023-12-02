function setTimeout(code, delay) {
    WScript.Sleep(delay);
    code();
}

function setInterval(code, delay) {
    while (true) {
        setTimeout(code, delay);
    }
}