function pow(x, n){
    if (n < 0){
        console.log("negative 'n' not supported");
        return;
    }

    let result = 1;

    for (let i = 0; i < n; i++){
        result *= x;
    }

    return result;
}

let num = pow(5, 2);

console.log(num);