let todoList = JSON.parse(localStorage.getItem("todoList")) || [
  { name: 'make dinner', dueDate: '2022-12-22' },
  { name: 'wash dishes', dueDate: '2022-12-22' }
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;  //this  is known as object destructring, this is a shortcut for the line 13 and 14.
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        localStorage.setItem('todoList', JSON.stringify(todoList));
        renderTodoList();
      " class="delete-todo-button">Delete</button>
      `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push(
  {
    // name: name, 
    // dueDate: dueDate
    name,   // this is known as shorthand property it is a shortcut for the line 40 and 41.
    dueDate
  });

  localStorage.setItem("todoList", JSON.stringify(todoList));
  inputElement.value = "";

  renderTodoList();
}
