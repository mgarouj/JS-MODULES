"use strict";


// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     console.log( this.name ); // leads to an error
//   }

// };


// let admin = user;
// user = null; // overwrite to make things obvious

// admin.sayHi(); // TypeError: Cannot read property 'name' of null



// let user2 = { name: "john"};
// let admin2 = { name: "admin"};

// function sayHi(){
//     console.log(this.name);
// }

// user2.f = sayHi;
// admin2.f = sayHi;

// user2.f();
// admin2.f();
// admin2['f']();




// calling without an object : this == undefined
function sayHi(){
    console.log(this);
}

sayHi();




// Arrow functions have no "this"

let user = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

user.sayHi();



// Summary
// Functions that are stored in object properties are called “methods”.
// Methods allow objects to “act” like object.doSomething().
// Methods can reference the object as this.
// The value of this is defined at run-time.

// When a function is declared, it may use this, but that this has no value until the function is called.
// A function can be copied between objects.
// When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
// Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.