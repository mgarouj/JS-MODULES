// Step 1: get a reference to the container
const app = document.querySelector('#app');

// Step 2: create elements
const title = document.createElement('h1');
title.textContent = "Counter: 0";

const incBtn = document.createElement('button');
incBtn.textContent = "+1";

const decBtn = document.createElement('button');
decBtn.textContent = "-1";

const resetBtn = document.createElement('button');
resetBtn.textContent = "Reset";

// Step 3: attach them to the page
app.appendChild(title);
app.appendChild(incBtn);
app.appendChild(decBtn);
app.appendChild(resetBtn);

// Step 4: state (just a JS variable)
let count = 0;

// Step 5: function to update the DOM based on state
function updateDisplay() {
    title.textContent = `Counter: ${count}`;
}

// Step 6: event listeners change state, then re-render
incBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});