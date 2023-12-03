function require(file) {
    return eval((new ActiveXObject("Scripting.FileSystemObject")).OpenTextFile(file, 1).ReadAll());
}