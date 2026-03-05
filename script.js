let toDoList = [
  {
    name: "make dinner",
    dueDate: "2022-12-22",
  },
  {
    name: "wash dishes",
    dueDate: "2022-12-22",
  },
];

renderToDoList();
function renderToDoList() {
  let todolistHTML = "";
  toDoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
       <div>${name}</div> 
       <div>${dueDate}</div>
       <button class="delete-todo-button js-delete-todo-button" >Delete</button>`;
    todolistHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todolistHTML;
  document
    .querySelectorAll(".js-delete-todo-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        toDoList.splice(index, 1);
        renderToDoList();
      });
    });
}

document.querySelector(".js-add-todo-button").addEventListener("click", () => {
  addToDo();
});

function addToDo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-date-input");
  const dueDate = dateInputElement.value;

  toDoList.push({
    // name: name,
    name,
    //  dueDate: dueDate,
    dueDate,
  });

  inputElement.value = "";
  renderToDoList();
}
