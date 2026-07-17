// calculator

let calculator = {
    read: function(a, b){
        const readlineSync = require('readline-sync');

        this.a = Number(readlineSync.question('Enter first number: '));
        this.b = Number(readlineSync.question('Enter second number: '));
    },
    sum: function(){
        return this.a + this.b;
    },
    mul: function(){
        return this.a * this.b;
    }
}

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );