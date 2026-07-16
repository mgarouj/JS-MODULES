
let user = {
    name: "mohammed",
    age: 21
};

const ali = Object.create(user); // the object.create() method creates an object from an existing object.

console.log(user.name);
console.log(user.age);

console.log("ali object\n");

console.log(ali.name);
console.log(ali.age);

ali.name = "ali";
ali.age = 22
user["first"] = Object.create(ali);
console.log(user["first"].name);
console.log(user["first"].age);

// the "for..in" loop

console.log("\n\n\n\n\n\n");

let codes = { // key is an integer 
    "49": "germany",
    "41": "switzerland",
    "44": "great britain",
    "1": "usa"
};

for (let key in codes){
    console.log(codes[key]);
}

// if the key is not an integer
console.log("\n\n\n\n\n\n");

let exemple = {
  name: "John",
  surname: "Smith"
};
exemple.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in exemple) {
  console.log( prop ); // name, surname, age
}