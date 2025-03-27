document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const taskInput = document.querySelector("#new-task-description");
    const taskText = taskInput.value;

    if (taskText.trim() !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      taskList.appendChild(taskItem);

      taskInput.value = ""; // Clear the input field
    }
  });
});
