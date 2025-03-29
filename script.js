function addResource() {
    // Get input values
    let name = document.getElementById("resourceName").value;
    let category = document.getElementById("resourceCategory").value;
    let link = document.getElementById("resourceLink").value;

    // Check if all fields are filled
    if (name === "" || category === "" || link === "") {
        alert("Please fill all fields!");
        return;
    }

    // Create new list item
    let list = document.getElementById("resourceList");
    let listItem = document.createElement("li");
    listItem.innerHTML = `${category}: ${name} - <a href="${link}" target="_blank">Open Link</a>`;

    // Add to list
    list.appendChild(listItem);

    // Clear input fields
    document.getElementById("resourceName").value = "";
    document.getElementById("resourceCategory").value = "";
    document.getElementById("resourceLink").value = "";
}