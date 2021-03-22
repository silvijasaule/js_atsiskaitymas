var todoInput = document.getElementById('todo-input');
var addBtn = document.getElementById('add');
var invalidFeedback = document.querySelector('.invalid-feedback');
var form = document.getElementById('todo-form');
var body = document.querySelector('body');
var todoClmn = document.getElementById('todos');
var doneClmn = document.getElementById('dones');


function createCard(moveBtnText) {
    const cardDiv = document.createElement('div');
    const cardHeading = document.createElement('h3');
    cardHeading.innerText = todoInput.value;
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add("btn-danger", 'delete-btn');
    let moveToDoneBtn = document.createElement('button');
    moveToDoneBtn.innerText = moveBtnText;
    moveToDoneBtn.classList.add('btn-success', 'move-btn');

    todoClmn.appendChild(cardDiv);
    cardDiv.appendChild(cardHeading);
    cardDiv.appendChild(deleteBtn);
    cardDiv.appendChild(moveToDoneBtn);
}


addBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if (todoInput.value == '') {
        invalidFeedback.style.display = 'block';
    } else if (todoInput.value != '') {
        createCard('Move to Done')
    }
    form.reset();
}
)

body.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        deleteCard = e.target.closest('div');
        deleteCard.remove();
    }
});


body.addEventListener('click', function (e) {
    if (e.target.classList.contains('move-btn')) {
        let moveCard = e.target.closest('div');
        doneClmn.appendChild(moveCard);
        let moveBtn = e.target
        if (moveBtn.innerText == "Move to Done") 
        {moveBtn.innerText = "Move Back"; 
        moveBtn.classList.add('move-back')}
    }
});