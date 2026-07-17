function User(name){
    this.name = name;
    this.isAdmin = false;
}

let user1 = new User("john");
let user2 = new User("Anna");

console.log(user1.name);
console.log(user2.name);

// There's no class keyword required (classes exist too, we'll get there) — a plain function becomes a "constructor" purely by convention: capitalize the name, and call it with new.
// So function User(name) { this.name = name; } is doing roughly what a C++ constructor body does — except you're not defining a class shape, you're writing imperative code that builds the object property by property, using this as the object being constructed.
