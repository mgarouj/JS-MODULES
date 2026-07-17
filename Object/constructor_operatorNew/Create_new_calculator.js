"strict mode";

function Calculator(){
    this.read = function(){
        const readlineSync = require('readline-sync');

        this.a = Number(readlineSync.question('Enter first number: '));
        this.b = Number(readlineSync.question('Enter second number: '));
    }
    this.sum = function(){
        return this.a + this.b;
    }
    this.mul = function(){
        return this.a * this.b;
    }
}


let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );