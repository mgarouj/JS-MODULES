function wait(seconds) {
    return new Promise((resolve, reject) => {
        if (seconds < 0) {
            reject("Cannot wait negative time!");
            return;
        }
        setTimeout(() => {
            resolve(`Waited ${seconds} seconds`);
        }, seconds * 1000);
    });
}