let userInput = document.querySelector('input');
let addBtn = document.querySelector('.addBtn');
let tasksDiv = document.querySelector('.tasks');

let i = 0;

addBtn.onclick = function() {
    display(++i, userInput.value)
}

function display(id, text) {
    tasksDiv.innerHTML += `
        <div class="task" id="${id}">
            <div class="text_wrapper" onclick="done();">
                <i class='bx bx-checkbox'></i>
                <p>${text}</p>
            </div>
            <button class="deleteBtn" onclick="deleteTask();"><i class='bx bxs-x-square' ></i></button>
        </div>
    `;
}

function deleteTask() {
    event.target.parentElement.parentElement.remove()
}

function done() {
    let parentDiv = event.target.parentElement.parentElement;
    let icon = parentDiv.querySelector('i.bx');
    let text = parentDiv.querySelector('p');
    icon.classList.remove('bx-checkbox');
    icon.classList.add('bxs-checkbox-checked');
    text.classList.add('done');

}