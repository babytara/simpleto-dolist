// Function to add a task to the list
function addTask() {
    // Get input values
    const taskInput = document.getElementById("taskInput");
    const priorityInput = document.getElementById("priorityInput");
    const dueDateInput = document.getElementById("dueDateInput");
    const taskList = document.getElementById("taskList");

    // Create a new list item (li) element
    const listItem = document.createElement("li");

    // Create a text node with the task and priority
    const taskText = document.createTextNode(
        taskInput.value + " (Priority: " + priorityInput.options[priorityInput.selectedIndex].text + ")"
    );

    // Create a text node with the due date
    const dueDateText = document.createTextNode(" - Due Date: " + dueDateInput.value);

    // Create a checkbox for marking as completed
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            listItem.style.textDecoration = "line-through";
        } else {
            listItem.style.textDecoration = "none";
        }
    });

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {
        deleteTask(listItem);
    });

    // Append the checkbox, text nodes, delete button, and text decoration to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(dueDateText);
    listItem.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input fields
    taskInput.value = "";
    priorityInput.selectedIndex = 0;
    dueDateInput.value = "";
}

// Function to delete a task
function deleteTask(listItem) {
    listItem.remove();
}
