// JSON = (javascript object ntation) data-interchange Format 
//         used for exchangin data between a server and a web application 
//         JSON files {Key:value} OR [{},  {}, {}]

//         JSON.stringify() = converts a JS object to a JSON string.
//         JSON.parse() = converts a JSON string to a JS object



const names = ["spongebob", "parrick", "squidward", "Sandy"];
const persone = {
    "name":"spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["jellyfishing", "karate", "Cooking"]
};
const people = `[{
    "name":"spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name":"Patrik",
    "age": 30,
    "isEmployed": false
},
{
    "name":"Squidward",
    "age": 30,
    "isEmployed": true
},
{
    "name":"Sandy",
    "age": 30,
    "isEmployed": false
}]`;

// const jsonString = JSON.stringify(people);    this methos to convet a js object to an jsong string 

// console.log(jsonString);



// const parseData = JSON.parse(people);    this method to converts a json string to a js object 
// console.log(people);
// console.log(parseData);


fetch("people.json")
    .then(Response =>response.json())
    .then(value => console.log(value))