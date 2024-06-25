var tempSpan = document.getElementById("temperature");
var windSpan = document.getElementById("windspeed");
var chillSpan = document.getElementById("windchill");
function showWindChill(temp, wind) {
    if (temp > 50 || wind <= 3) {
        chillSpan.innerText = 'N/A';
        return;
    }
    var chillfactor = Math.pow(wind, 0.16);
    var chill = 35.74 + (0.6215 * temp) - (35.75 * chillfactor) + (0.4275 * temp * chillfactor);
    chillSpan.innerHTML = "".concat(chill.toFixed(0), "&deg;F");
}
showWindChill(parseInt(tempSpan.innerText), parseInt(windSpan.innerText));
