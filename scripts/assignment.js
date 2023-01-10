// This sets the year in the footer
const today = new Date();
let year = document.querySelector("#year");
year.textContent = today.getFullYear();

// This sets the last modified date in the footer
let lastmodified = document.querySelector("#lastupdate");
lastmodified.textContent = document.lastModified;