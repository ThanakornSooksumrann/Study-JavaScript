function criticalCode() {
    throw "throwing an exception";
}

function logError(theEception) {
    console.log(theEception);
}

console.log("\n********Try..Catch********\n");

try {
    criticalCode();
}
catch (ex) {
    console.log("Got an error!");
    logError(ex);
}

console.log("\n********Tgrowing in try..Catch*******\n");

try {
    throw "An exception that is throw every time";
}
catch (ex) { 
    console.log("Got an error");
    logError(ex);
}

console.log("\n********Tgrowing in try..Finally*******\n")

try {
    criticalCode();
}
catch (ex) {
    console.log("Got an error");
    logError(ex);
}
finally {
    console.log("Code that always will run");
}
function hello() {
    console.log("\n********Throwing Eception*******\n");
}