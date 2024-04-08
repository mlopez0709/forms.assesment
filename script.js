
var todos = [];

const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

function renderTodos() {
   
    todoList.innerHTML = '';

   
    todos.forEach(todo => {
        const todoItem = document.createElement('li');
        todoItem.textContent = todo;
        todoList.appendChild(todoItem);
    });
}

function handleFormSubmit(event) {
    event.preventDefault(); 

    const newTodo = todoInput.value.trim(); 
    if (newTodo !== '') {
        todos.push(newTodo); 
        renderTodos(); 
        todoInput.value = ''; 
    }
}
todoForm.addEventListener('submit', handleFormSubmit);