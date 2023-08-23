//@ts-nocheck
var searchBar = document.getElementById("searchBar");
var addTaskButton = document.getElementById("addTaskButton");
var taskTable = document.getElementById("taskTable");
var search = document.getElementById("search");
var tableBody = taskTable.querySelector("tbody");
var tableRows = taskTable.getElementsByTagName('tr');
addTaskButton.addEventListener("click", function () {
    var taskText = searchBar.value.trim();
    var status = "completed";
    if (taskText.trim() !== "") {
        var newRow_1 = taskTable.insertRow();
        var checkboxCell = newRow_1.insertCell(0);
        var textCell_1 = newRow_1.insertCell(1);
        var dropdownCell = newRow_1.insertCell(2);
        var deleteCell = newRow_1.insertCell(3);
        var checkbox_1 = document.createElement("input");
        checkbox_1.type = "checkbox";
        checkboxCell.appendChild(checkbox_1);
        textCell_1.textContent = taskText;
        var dropdown_1 = document.createElement("select");
        var option1 = document.createElement("option");
        option1.value = "To do";
        option1.textContent = "To Do";
        var option2 = document.createElement("option");
        option2.value = "completed";
        option2.textContent = "Completed";
        var option3 = document.createElement("option");
        option3.value = "ongoing";
        option3.textContent = "Ongoing";
        dropdown_1.appendChild(option1);
        dropdown_1.appendChild(option2);
        dropdown_1.appendChild(option3);
        dropdownCell.appendChild(dropdown_1);
        var deleteButton = document.createElement("button");
        deleteButton.className = "deleteButton";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            taskTable.deleteRow(newRow_1.rowIndex);
        });
        deleteCell.appendChild(deleteButton);
        searchBar.value = ""; // Clear the search bar
        dropdown_1.addEventListener('change', function () {
            if (dropdown_1.value === 'completed') {
                checkbox_1.checked = true;
                textCell_1.style.textDecoration = 'line-through';
                checkbox_1.disabled = true;
                dropdown_1.disabled = true;
            }
            else {
                checkbox_1.checked = false;
                textCell_1.style.textDecoration = 'none';
            }
        });
        var row = document.createElement("tr");
        row.innerHTML = "\n      <td><input type=\"checkbox\"></td>\n      <td></td>\n      <td>\n          <select name=\"\" id=\"\">\n              <option>To do</option>\n              <option>completed</option>\n              <option>ongoing</option>\n          </select>\n      </td>\n      <td>\n          <button class=\"deleteButton\">X</button>\n      </td>\n    ";
        tableBody.appendChild(row);
    }
});
search.addEventListener('input', function () {
    var searchText = search.value.toLowerCase();
    for (var i = 1; i < tableRows.length; i++) {
        var taskText = tableRows[i].getElementsByTagName('td')[1].textContent.toLowerCase();
        if (taskText.includes(searchText)) {
            tableRows[i].style.display = "";
        }
        else {
            tableRows[i].style.display = "none";
        }
    }
});
