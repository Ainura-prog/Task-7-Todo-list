let button = document.querySelector("#add");
let input = document.querySelector("#item");

button.addEventListener("click", function() {
    let todoList = document.querySelector(".todo-list");
    let todoItem = document.createElement("div");
    todoItem.className = "todo-item";
    todoItem.textContent = input.value;
    todoList.append(todoItem);
    input.value = "";
});

document.addEventListener("click", function(e) {
    if (e.target && e.target.className == "todo-item") {
        e.target.remove();
    }
});