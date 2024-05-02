// Function to populate the current year
function populateCurrentYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
}

// Function to populate the last modified date
function populateLastModified() {
    var lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`;
}

// Call the functions to populate the current year and last modified date
populateCurrentYear();
populateLastModified();