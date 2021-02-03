function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);// resolve คือสำเร็จ reject คือไม่สำเร็จ
    });
}


promiseTimeout(2000)
    .then(() => {
        console.log("Done!!");
    })
    .catch(() => {
        console.log("Error!");
    });