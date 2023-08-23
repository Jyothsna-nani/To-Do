//@ts-nocheck

const searchBar = document.getElementById("searchBar") as HTMLInputElement;
const addTaskButton = document.getElementById("addTaskButton") as HTMLButtonElement;
const taskTable = document.getElementById("taskTable") as HTMLTableElement;
const search = document.getElementById("search") as HTMLInputElement;
const tableBody = taskTable.querySelector("tbody") as HTMLTableSectionElement;
const tableRows = taskTable.getElementsByTagName('tr');

addTaskButton.addEventListener("click", function() {
  const taskText = searchBar.value.trim();
  const status = "completed";

  if (taskText.trim() !== "") {
    const newRow = taskTable.insertRow();
    const checkboxCell = newRow.insertCell(0);
    const textCell = newRow.insertCell(1);
    const dropdownCell = newRow.insertCell(2);
    const deleteCell = newRow.insertCell(3);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkboxCell.appendChild(checkbox);

    textCell.textContent = taskText;

    const dropdown = document.createElement("select");
    const option1 = document.createElement("option");
    option1.value = "To do";
    option1.textContent = "To Do";
    const option2 = document.createElement("option");
    option2.value = "completed";
    option2.textContent = "Completed";
    const option3 = document.createElement("option");
    option3.value = "ongoing";
    option3.textContent = "Ongoing";

    dropdown.appendChild(option1);
    dropdown.appendChild(option2);
    dropdown.appendChild(option3);

    dropdownCell.appendChild(dropdown);

    const deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      taskTable.deleteRow(newRow.rowIndex);
    });

    deleteCell.appendChild(deleteButton);

    searchBar.value = ""; // Clear the search bar
    
    dropdown.addEventListener('change', function () {
        if (dropdown.value === 'completed') {
            checkbox.checked = true;
            textCell.style.textDecoration = 'line-through';
            checkbox.disabled = true
            dropdown.disabled = true
        } else {
            checkbox.checked = false;
            textCell.style.textDecoration = 'none';
        }
    });

    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input type="checkbox"></td>
      <td></td>
      <td>
          <select name="" id="">
              <option>To do</option>
              <option>completed</option>
              <option>ongoing</option>
          </select>
      </td>
      <td>
          <button class="deleteButton">X</button>
      </td>
    `;
    tableBody.appendChild(row);
  }
});

search.addEventListener('input', function() {
  const searchText = search.value.toLowerCase();

  for (let i = 1; i < tableRows.length; i++) { 
    const taskText = tableRows[i].getElementsByTagName('td')[1].textContent.toLowerCase();

    if (taskText.includes(searchText)) {
      tableRows[i].style.display = ""; 
    } else {
      tableRows[i].style.display = "none"; 
    }
  }
});
