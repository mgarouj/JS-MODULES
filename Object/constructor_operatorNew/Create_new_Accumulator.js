function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function (){
        const readlineSync = require('readline-sync');

        this.value += Number(readlineSync.question('Enter first number: '));
    }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

console.log(accumulator.value);