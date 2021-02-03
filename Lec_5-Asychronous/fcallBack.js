function callback (){
    console.log('Timeout Completed');
}

console.log("Start");
setTimeout(callback, 3000);
console.log("End");