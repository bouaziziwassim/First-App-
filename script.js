const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task to the list
function addTask() {
  // Check if the input field is empty
  if (inputBox.value.trim() === '') {
    alert("You must write something!");
  } else {
    // Create a new list item and add it to the list
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    listContainer.appendChild(li);

    // Create a span element to delete the task and add it to the list item
    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);
  }

  // Clear the input field after adding a task
  inputBox.value = "";
  //saveData Function will be called and will save the updated content
  saveData();
}

// Add event listener to the list container to handle clicks on the list items
listContainer.addEventListener('click', function(e) {
  // Toggle the "checked" class of the list item when clicked
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  // Remove the list item when the delete button is clicked
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();