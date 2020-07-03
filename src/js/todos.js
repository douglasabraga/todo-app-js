const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('#app button');
const ulElement = document.querySelector('#app ul');

const todos = JSON.parse(localStorage.getItem('list_item')) || [];

function renderTodos(){
    //Todo o conteudo da lista é substituido por ''
    ulElement.innerHTML = '';

    for(todo of todos){
        const todoElement = document.createElement('li');
        const todoText = document.createTextNode(todo);

        //const linkElement = document.createElement('a');
        const buttonText = document.createTextNode('Excluir');
        const deleteButton = document.createElement('button');

        deleteButton.setAttribute('class','delete');
        const pos = todos.indexOf(todo);
        deleteButton.setAttribute('onclick','( deleteTodo('+ pos +'))');

        
        //linkElement.setAttribute('onclick','( deleteTodo('+ pos +'))')

        //linkElement.setAttribute('href','#');
        deleteButton.appendChild(buttonText);
        //linkElement.appendChild(deleteButton);

        todoElement.appendChild(todoText);
        ulElement.appendChild(todoElement);
        todoElement.appendChild(deleteButton);
    }
}

renderTodos();

function addTodo(){
    const novoTodo = inputElement.value;
    inputElement.value = '';

    todos.push(novoTodo);
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;


function deleteTodo(pos){
    itemRemovido = todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
    console.log(itemRemovido);
}

function saveToStorage() {
    localStorage.setItem('list_item', JSON.stringify(todos));
}