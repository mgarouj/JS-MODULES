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

const jsonString = JSON.stringify(names);

console.log(jsonString);