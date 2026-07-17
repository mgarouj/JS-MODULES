let globalVar = "I'm everywhere";

function show() {
    console.log(globalVar);  // accessible
}

if (true) {
    console.log(globalVar);  // accessible
}