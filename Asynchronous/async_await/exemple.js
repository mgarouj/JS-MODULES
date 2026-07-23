

function walkDog(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true;
            if (flag){
                resolve("you walk the dog");
            }
            else{
                reject("errrrrrorororor")
            }
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


async function doChores(){
    try{

        const walkDogResult = await walkDog();
        console.log(walkDogResult);
        
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("Yout finished all the chores !");
    }
    catch(error){
        console.error(error);
    }
}

doChores();