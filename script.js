const inputBox = document.querySelector('.input-box');
const listContainer = document.querySelector('.list-container');

function addTask() {
    if (inputBox.value ==='') {
        alert('Please enter a task');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        listContainer.appendChild(span);

    }
    inputBox.value='';
}