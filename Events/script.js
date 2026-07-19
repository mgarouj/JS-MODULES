const showButton = document.getElementById("showButton");


const showTitle = () => {
    console.log("hello world");
};

showButton.addEventListener("click", showTitle);

showButton.appendChild(showButton);