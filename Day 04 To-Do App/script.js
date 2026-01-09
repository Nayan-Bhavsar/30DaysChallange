const tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  tasks.push(taskText);
  input.value = "";
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function displayTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    li.innerHTML =
      tasks[i] +
      ' <span class="delete" onclick="deleteTask(' +
      i +
      ')">✖</span>';

    list.appendChild(li);
  }
}