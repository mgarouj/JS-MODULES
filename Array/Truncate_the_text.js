function truncate(str, maxlenght){
    let newStr = (str.length >= maxlenght) ? str.slice(0, maxlenght) + '...' : str;
    return newStr;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20) );