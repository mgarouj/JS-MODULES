const showButton = document.getElementById("showButton");

showButton.addEventListener('click', function() {
    console.log("hello world");
});

showButton.appendChild(showButton);