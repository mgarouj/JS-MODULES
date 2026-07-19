// querySelector: find the existing container already in the html
const app = document.querySelector('#app');

// createElement: build a new <input> element (not attached to page yet)
const input = document.createElement('input');
input.style.marginRight = "10px";

// createElement: build a new <button> element
const addBtn = document.createElement('button');
addBtn.textContent = "Add Task";     // textContent: set plain text safely

// createElement: build a container <ul> to hold task items
const list = document.createElement('ul');

// appendChild: attach input, button, and list into #app (this makes them visible)
app.appendChild(input);
app.appendChild(addBtn);
app.appendChild(list);

function addTask(text){
    // createElement: new <li> for this task
    const li = document.createElement('li');

    // textContent: safely insert the task text (user input — never use innerHTML here)
    li.textContent = text;

    // classList: tag this item with a CSS class (for styling, e.g. via CSS file)
    li.classList.add('task-item');

    // createElement: a small delete button for this specific task
    const delBtn = document.createElement('button');
    delBtn.textContent = "❌";
    delBtn.style.marginLeft = "10px";   // style: quick inline spacing

    // When clicked, remove ONLY this task's <li> from the page
    delBtn.addEventListener('click', () => {
        li.remove();   // remove(): deletes this element from the DOM entirely
    });

    // appendChild: put the delete button INSIDE the <li>
    li.appendChild(delBtn);

    // appendChild: put the finished <li> (text + button) into the <ul>
    list.appendChild(li);
}

addBtn.addEventListener('click', () => {
    const text = input.value;

    if (text === "") return;

    addTask(input.value);

    input.value = "";
});



const warning = document.createElement('p');

warning.innerHTML = "<b>Note:</b> click x to delete a task";
warning.style.color = "gray";

app.appendChild(warning);