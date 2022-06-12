//SELECTORS
const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-button');
const todoList = document.querySelector('.todo-list');
const todoSelect = document.querySelector('.todo-select');


//EVENT LISTENERS

addButton.addEventListener('click', addToList);
todoList.addEventListener('click', checkDelete);
todoSelect.addEventListener('click', filterOption);


//FUNCTIONS

function addToList(e) {

    e.preventDefault();
    // console.log(e.target);
    // console.log(todoInput);
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.innerText = todoInput.value;

    // console.log(todoItem);
    const todoCheckedButton = document.createElement('button');
    const todoTrashedButton = document.createElement('button');
    todoCheckedButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    todoTrashedButton.innerHTML = '<i class="fa-solid fa-trash"></i>'

    todoCheckedButton.classList.add('checked-button');
    todoTrashedButton.classList.add('trashed-button');

    todoDiv.append(todoItem, todoCheckedButton, todoTrashedButton);
    // console.log(todoDiv);
    todoList.appendChild(todoDiv);

    todoInput.value = ''

}


function checkDelete(e) {

    // console.log(e.target);


    if (e.target.classList[0] === 'checked-button') {

        // console.log(e.target.parentElement);
        e.target.parentElement.classList.toggle('completed');

    }


    if (e.target.classList[0] === "trashed-button") {

        e.target.parentElement.classList.toggle('fall');

        e.target.parentElement.addEventListener('transitionend', function () {

            e.target.parentElement.remove()

        })

    }


}


function filterOption(e) {

    console.log(todoList);




    let todos = todoList.childNodes
    // console.log(todos);

    todos.forEach(function (todo) {

        // console.log(todo);

        if (e.target.value === 'all') {

            todo.style.display = "flex";

        };

        if (e.target.value === 'completed') {
            if (todo.classList.contains('completed')) {
                todo.style.display = "flex";
            } else {

                todo.style.display = "none";
            }

        };

        if (e.target.value === 'uncompleted') {
            if (!todo.classList.contains('completed')) {
                todo.style.display = "flex";
            } else {
                todo.style.display = "none";
            }

        };



    });



}


