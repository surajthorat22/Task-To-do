
      function addTask() {
        const task = document.getElementById("task").value;
        const tasks = document.getElementById("tasks");
        const li = document.createElement("li");
        li.innerHTML = task + ' <a href="#" onclick="removeTask(this); return false;">X</a>';
        tasks.appendChild(li);
        document.getElementById("task").value = "";
      }
      function removeTask(link) {
        link.parentElement.remove();
      }
      function toggleDone(task) {
        task.classList.toggle("done");
      }