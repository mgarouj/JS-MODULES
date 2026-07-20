function printNames(arr, callbackFunction){
    for (e of arr)
            callbackFunction(e);
}

const names = ['mohammed', 'hala', 'samy', 'maria'];

printNames(names, (names) => {
    console.log(names );
})