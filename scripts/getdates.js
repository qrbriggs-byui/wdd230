// Sets the current year
let year = new Date().getFullYear()
let currentYearSpan = document.querySelector("#currentYear")
currentYearSpan.innerHTML = `${year}`

// Sets the last modified date
let lastModifedParagraph = document.getElementById("lastModified")
lastModifedParagraph.innerHTML = `Last Modified: ${document.lastModified}`

