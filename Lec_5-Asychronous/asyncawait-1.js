function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    console.log("Start!!");
    await promiseTimeout(5000);
    console.log("Stop!!");
}

console.log("Before run");
run();
console.log("After run");