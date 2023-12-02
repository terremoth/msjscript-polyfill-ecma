function require(file) {
    eval((new ActiveXObject("Scripting.FileSystemObject")).OpenTextFile(file, 1).ReadAll());
}