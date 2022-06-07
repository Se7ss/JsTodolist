let btn = document.querySelector('.todo-button');
btn.addEventListener('click',clickhandler);


function clickhandler(event){

    input = document.querySelector('.todo-input').value;
    console.log(input)

}


