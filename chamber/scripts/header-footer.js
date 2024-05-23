let datespan = document.querySelector("#currentYear")
datespan.innerText = new Date().getFullYear()

let lastmodifiedspan = document.querySelector("#lastModified")
lastmodifiedspan.innerText = document.lastModified

// Hamburger menu

let menubutton = document.getElementById("menubutton")
let navbar = document.getElementById("navbar")
menubutton.addEventListener("click", () => {
    menubutton.classList.toggle("open")
    navbar.classList.toggle("open")
})

// dark mode stuff
let darkbutton = document.getElementById("dark-mode")
darkbutton.addEventListener("click", () =>{    
    darkbutton.classList.toggle("dark")
    if (darkbutton.classList.contains("dark")){
        document.documentElement.style.setProperty('--text-color', 'white');        
        document.documentElement.style.setProperty('--inv-text-color', 'black');        
        document.documentElement.style.setProperty('--body-color', '#1f1f1d');    
        document.documentElement.style.setProperty('--card-color', '#588157');        
        document.documentElement.style.setProperty('--header-color', '#3A5A40');    
        document.documentElement.style.setProperty('--nav-color', '#1e2f21');                
    }
    else{
        document.documentElement.style.setProperty('--text-color', 'black');        
        document.documentElement.style.setProperty('--inv-text-color', 'white');        
        document.documentElement.style.setProperty('--body-color', '#DAD7CD');    
        document.documentElement.style.setProperty('--card-color', '#A3B18A');        
        document.documentElement.style.setProperty('--header-color', '#588157');    
        document.documentElement.style.setProperty('--nav-color', '#3A5A40');                
    }

})