let arr = [1, 2, 3];
let [a, b, c] = arr;

console.log(a, b, c);


// instead of doing this the manual way
// you unpack in one line. oreder matters position maps directly, like structured bindings

let [first, , third] = [1, 2, 3];
console.log(first, third);


// rest pattern (grab the remainder)
let [first2, ...rest] = [1, 2, 3, 4];
console.log(first2); // 1
console.log(rest); //[2, 3, 4]








let user = { name: "John", age: 30, city: "Paris" };

let { age, name } = user;  
console.log(name, age);