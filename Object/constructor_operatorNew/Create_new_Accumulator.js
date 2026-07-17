function Accumulator(startingValue){
    this.read = function (){
        const readlineSync = require('readline-sync');

        this.value = Number(readlineSync.question('Enter first number: '));
    }
    this.value = startingValue;
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value);