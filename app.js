//Selectors

const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo")




//Event listeners 
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', checkDelete);
filterOption.addEventListener('click', filterTodo)


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

    // console.log(e.target)
    // console.log(e.target.classList.value)

    if (e.target.classList[0] === 'delete-button') {

        e.target.parentElement.classList.add('animate-delete');

        //wait for animation 
        e.target.parentElement.addEventListener('transitionend', function () {
            // console.log('remove' + e.target.parentElement)
            e.target.parentElement.remove();
        })

    }
    if (e.target.classList[0] === 'checked-button') {

        e.target.parentElement.classList.toggle('todo-completed');

    }

}

function filterTodo(e) {

    const todos = todoList.childNodes;
    // console.log(todos);

    todos.forEach(function (todo) {

        // if (todo..contains('completed'))
        if (e.target.value == 'all') {

            todo.style.display = 'flex';

        }
        else if (e.target.value === 'completed' && todo.classList.contains('todo-completed')) {

            todo.style.display = 'flex';
        } else if (e.target.value === 'uncompleted' && !todo.classList.contains('todo-completed')) {

            todo.style.display = 'flex';
        } else {

            todo.style.display = 'none';
        }
    })




}












