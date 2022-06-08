//Selectors

const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


//Event listeners 
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', checkDelete);
//Functions

function addTodo(event) {
    event.preventDefault();
    let input = todoInput.value;
    // console.log(input);

    //create todoDiv
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    let listItem = document.createElement('li');
    listItem.classList.add('todo-item');
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    let checkedButton = document.createElement('button');
    checkedButton.classList.add('checked-button');
    checkedButton.innerHTML = '<i class="fa-solid fa-check"></i></i>';

    listItem.innerHTML = input;

    todoDiv.append(listItem, checkedButton, deleteButton);
    todoList.append(todoDiv);

    todoInput.value = ""

}


function checkDelete(e) {

    console.log(e.target)
    console.log(e.target.classList.value)

    if (e.target.classList[0] === 'delete-button') {

        e.target.parentElement.remove();
    }
    if (e.target.classList[0] === 'checked-button') {

        e.target.parentElement.classList.toggle('todo-completed');

    }

}












