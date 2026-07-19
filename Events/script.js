const showButton = document.getElementById("showButton");


const showTitle = (event) => {
    event.target.innerText = 'zabii';
    console.log("hello ");
};

showButton.addEventListener("click", showTitle);

showButton.appendChild(showButton);