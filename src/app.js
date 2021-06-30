const API_KEY = "48305872aed903924eef229a843089cc";

class City {
  constructor(name, temp, icon, description, humidity) {
    this.name = name;
    this.temp = temp;
    this.icon = icon;
    this.description = description;
    this.humidity = humidity;
  }
}

async function getData(city) {
  document.querySelector(".circle").style.display = "flex";
  document.getElementById("submit-btn").style.display = "none";
  try {

    let timer = await new Promise((resolve) => {
        setTimeout(() => resolve('Done'), 500);
    });

    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
    );

    let data = await response.json();

    document.querySelector(".circle").style.display = "none";
    document.getElementById("submit-btn").style.display = "flex";

    if (response.ok) {
      let newCity = new City(
        data.name,
        parseInt(data.main.temp - 273) + "°C",
        `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        data.weather[0].description,
        data.main.humidity + "%"
      );
      handleError('');
      addCityCard(newCity);

      console.log(data);
    } else {
      throw Error(data.message);
    }
  } catch (err) {
    handleError(err.message);
    console.log(err);

  }
}

function handleError(message) {
    let errorSpan = document.querySelector(".error-msg");
    errorSpan.textContent = message;
}

function addCityCard(city) {
    console.log(city);
    const container = document.getElementById("cities");
    container.innerHTML = '';

    const cityDiv = document.createElement('div');
    cityDiv.id = city.name;

    const cityName = document.createElement('div');
    cityName.classList.add("city-name");

    const cityWeather = document.createElement('div');
    cityWeather.classList.add("city-weather");

    const cityTemp = document.createElement('div');
    const cityDivIcon = document.createElement('div');
    const icon = document.createElement('img');

    const cityDescription = document.createElement('div');
    cityDescription.classList.add("city-description");


    cityName.textContent = city.name;
    cityTemp.textContent = city.temp;
    icon.src = city.icon;

    const weatherDescription = document.createElement('div');
    weatherDescription.textContent = city.description;

    
    const cityHumidity = document.createElement('div');
    cityHumidity.textContent =  "Humidity: " + city.humidity;

    cityDescription.appendChild(cityHumidity);
    cityDescription.appendChild(weatherDescription);

    cityWeather.appendChild(cityTemp);
    cityDivIcon.appendChild(icon);
    cityWeather.appendChild(cityDivIcon);

    cityDiv.appendChild(cityName);
    cityDiv.appendChild(cityWeather);
    cityDiv.appendChild(cityDescription);

    container.appendChild(cityDiv);
}

export { getData };
