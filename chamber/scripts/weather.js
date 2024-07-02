const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?lat=43.8870929&lon=-111.6733693&appid=551738b0ab1174f3ec4a37203c32a6ff&units=imperial";

const currentTemp = document.querySelector('#temperature');
const currentWind = document.querySelector('#windspeed');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#current-conditions');

function displayResults(data){
    let temp = data.main.temp.toFixed(0);
    let wind = data.wind.speed.toFixed(0);
    currentTemp.innerHTML = `${temp}`;
    captionDesc.innerText = data.weather[0].main;
    currentWind.innerHTML = `${wind}`;
    weatherIcon.setAttribute("src","https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png");
}

async function getCurrentWeather() {
    try {
      const response = await fetch(WEATHER_URL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  async function getCurrentWeather() {
    try {
      const response = await fetch(WEATHER_URL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }


  getCurrentWeather();
  