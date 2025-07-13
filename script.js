const input = document.getElementById("task");
const button = document.getElementById("add-btn");
const list = document.getElementById("task-list");

button.addEventListener("click", function () {
  const taskText = input.value; // get input text

  if (taskText !== "") { // add only if not empty
    const li = document.createElement("li"); // create new li
    li.textContent = taskText; // set its text

    // remove task on click
    li.addEventListener("click", function () {
      li.remove();
    });

    list.appendChild(li); // add li to ul
    input.value = ""; // clear input box
  }
});
 const toggleButton = document.getElementById("toggle-dark");

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});