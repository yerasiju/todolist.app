let completedTasks = 0;
const totalTasksToFillHeart = 7;

document.getElementById("addTaskButton").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    li.appendChild(taskSpan);

    const completeButton = document.createElement("button");
    completeButton.innerHTML = "✅";
    completeButton.classList.add("complete");
    completeButton.addEventListener("click", function () {
      li.classList.toggle("completed");
      updateHeartFill();
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "🗑️";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", function () {
      li.remove();
      updateHeartFill(true);
    });

    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
  }
}

function updateHeartFill(isDeleted = false) {
  const heart = document.getElementById("heart");
  const completedList = document.querySelectorAll("li.completed");
  completedTasks = completedList.length;

  if (isDeleted) {
    completedTasks--;
  }

  if (completedTasks === 0) {
    heart.classList.remove("heart-fill");
  } else if (completedTasks <= totalTasksToFillHeart) {
    heart.classList.add("heart-fill");
    heart.style.opacity = completedTasks / totalTasksToFillHeart;
  } else {
    heart.style.opacity = 1;
  }
}
