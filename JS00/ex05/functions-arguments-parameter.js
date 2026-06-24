x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
    let max = -Infinity; // Initialize max to the smallest possible number
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]; // Update max if the current argument is greater
        }
    }   
    return max; // Return the maximum value found
}

var maxValue = findMax(1, 123, 500, 115, 44, 88);
console.log(maxValue); // Output: 500




function findMin() {
    let min = Infinity; // Initialize min to the largest possible number
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i]; // Update min if the current argument is smaller
        }
    }   
    return min; // Return the minimum value found
}

var minValue = findMin(1, 123, 500, 115, 44, 88);
console.log(minValue); // Output: 1