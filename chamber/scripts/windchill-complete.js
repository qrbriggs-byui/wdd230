let tempSpan = document.getElementById("temperature")
let windSpan = document.getElementById("windspeed")
let chillSpan = document.getElementById("windchill")

function setWindchill(tempe, wind){
    if (temp > 50 || wind < 3){
        chillSpan.innerText = "N/A"
        return
    }

    chillterm = wind ** 0.16
    console.log(chillterm)
    chill = 35.74 + (0.6215 * temp) - (35.75 * chillterm) + (0.4275 * temp * chillterm)
    chillSpan.innerHTML = `${chill.toFixed(0)} &deg;F`
}

setWindchill(parseInt(tempSpan.innerText), parseInt(windSpan.innerText))
