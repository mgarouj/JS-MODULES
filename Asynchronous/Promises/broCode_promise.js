// function walkDog(callback){
//     setTimeout(() => {
//         console.log("you walk the dog");
//         callback();
//     }, 1500);
// }

// function takeOutTrash(callback){
//     setTimeout(() => {
//         console.log("You take out the trash");
//         callback();
//     }, 500);
// }

// function cleanKitchen(callback){
//     setTimeout(() => {
//         console.log("Yout clean the kitchen");
//         callback();
//     }, 2500);
// }

// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("yout finished all the chores!");
//         })
//     });
// });


// instead use callback function we can use promise 

function walkDog(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you walk the dog");
        }, 1500);
    })
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You take out the trash");
        }, 500);
    })
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Yout clean the kitchen");
        }, 2500);
    })
}

// im return promise of the next function to use .then for the promise .

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => console.log(value));

