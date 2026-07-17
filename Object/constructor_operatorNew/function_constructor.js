function User(name){
    this.name = name;
    this.isAdmin = false;
}

let user1 = new User("john");
let user2 = new User("Anna");

console.log(user1.name);
console.log(user2.name);

// There's no class keyword required (classes exist too, we'll get there) — a plain function becomes a "constructor" purely by convention: capitalize the name, and call it with new.