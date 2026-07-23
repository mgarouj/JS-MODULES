

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


walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => console.log(value));

