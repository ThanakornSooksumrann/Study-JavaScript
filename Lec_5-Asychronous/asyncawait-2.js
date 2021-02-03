function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function longRunningoperation() {
    return 42;
}

async function run() {
    console.log("Start!!");
    await promiseTimeout(2000);
    const response = await longRunningoperation();
    console.log(response);

    console.log("Stop!!");
}

run();