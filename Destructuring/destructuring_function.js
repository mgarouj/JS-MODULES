
// whithout destructuring;
function createUser(options){
    let name = options.name;
    let age = options.age;
    console.log(name, age);
}

// with destructuring - cleaner, and self-socumenting
function createUser({ name, age }){
    console.log(name, age);
}

createUser({ name: "Anna", age: 25});