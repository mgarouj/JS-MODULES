

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


 function doChores(){
    const walkDogResult =  walkDog();
    console.log(walkDogResult.);
    
    const cleanKitchenResult =  cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult =  takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("Yout finished all the chores !");
}

doChores();