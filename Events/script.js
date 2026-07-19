const showButton = document.getElementById("showButton");


const showTitle = (event) => {
    event.target.innerText = 'zabii';
    console.log("hello ");
};

showButton.addEventListener("click", showTitle);


const myInput = document.getElementById("myInput");

myInput.addEventListener("keypress", function (event){
    console.log(event.key);
});