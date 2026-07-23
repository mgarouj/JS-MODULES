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

async function main() {
    console.log("Start");

    try{
        const result = await wait(2); // pauses here for 2 seconds
        console.log(result);

        const result2 = await wait(-1);
        console.log("sssss");
    } catch (err) {
        console.log("Caught an error:", err);
    }

    console.log("End");
}

main();
console.log("This runs immediately, while main() is still waiting!");


// This is the core proof that await pauses a function, not the whole JS engine — everything else outside that async function keeps executing normally.