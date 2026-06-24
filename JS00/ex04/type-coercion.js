let res1 = ('1' + '2');
console.log(res1); // Output: '12'

let res2 = ('1' - '2');
console.log(res2); // Output: -1 , because the minus operator converts the strings to numbers before performing the operation.



// If any part of a + operation is a string, JavaScript converts everything to strings and concatenates them.
let x = "5" + 3;
console.log(x); // Output: '53', because the plus operator concatenates the string and the number.




// Numeric Coercion
// Other arithmetic operators (-, *, /, %) and the unary plus (+x) force values into numbers.
let y = "5" - 3;
console.log(y); // Output: 2, because the minus operator converts the string to a number before performing the operation.



// Boolean Coercion
// Values are coerced to booleans in logical contexts like if statements or using the double-NOT operator (!!).

// Falsy values: 0, "", null, undefined, NaN, and false.

// Truthy values: Everything else (including empty objects {} and arrays []).


let boolx = (5 == "5"); // x = true, because the double equals operator (==) performs type coercion and converts the string "5" to a number before comparing.
console.log(boolx); // Output: true

let booly = (5 === "5"); // y = false, because the triple equals operator (===) does not perform type coercion and compares both value and type.
console.log(booly); // Output: false