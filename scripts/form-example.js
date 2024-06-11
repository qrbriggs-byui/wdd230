let rangeinput = document.getElementById("rating")
rangeinput.addEventListener('change', () => {
    document.getElementById("rangevalue").innerText = rangeinput.value
}
)

let repeatinput = document.querySelector("#repeat");
repeatinput.addEventListener("focusout", () => {
    let passwordinput = document.querySelector("#password")
    if (passwordinput.value != repeatinput.value){
        document.getElementById("message").innerText="Password values do not match!"
        passwordinput.focus()
    }
})