const classNames = {
    TODO_ITEM: "todo-container",
    TODO_CHECKBOX: "todo-checkbox",
    TODO_TEXT: "todo-text",
    TODO_DELETE: "todo-delete",
  };
  
  const list = document.getElementById("todo-list");
  const itemCountSpan = document.getElementById("item-count");
  const uncheckedCountSpan = document.getElementById("unchecked-count");
  
  let itemCount = 0;
  let uncheckedCount = 0;
  
  function newTodo() {
    const todoText = prompt("Enter a new TODO:");
  
    if (todoText) {
      itemCount++;
      uncheckedCount++;
  
      const todoItem = document.createElement("li");
      todoItem.className = classNames.TODO_ITEM;
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = classNames.TODO_CHECKBOX;
      checkbox.addEventListener("change", updateUncheckedCount);
  
      const text = document.createElement("span");
      text.className = classNames.TODO_TEXT;
      text.innerText = todoText;
  
      const deleteButton = document.createElement("button");
      deleteButton.className = classNames.TODO_DELETE;
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", () => {
        list.removeChild(todoItem);
        itemCount--;
        if (!checkbox.checked) {
          uncheckedCount--;
        }
        updateCounts();
      });
  
      todoItem.appendChild(checkbox);
      todoItem.appendChild(text);
      todoItem.appendChild(deleteButton);
      list.appendChild(todoItem);
  
      updateCounts();
    }
  }
  
  function updateUncheckedCount(event) {
    if (event.target.checked) {
      uncheckedCount--;
    } else {
      uncheckedCount++;
    }
    updateCounts();
  }
  
  function updateCounts() {
    itemCountSpan.innerText = itemCount;
    uncheckedCountSpan.innerText = uncheckedCount;
  }