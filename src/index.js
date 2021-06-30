import { getData } from "./app";

const button = document.getElementById("submit-btn");
const cityName = document.getElementById("city-input");

button.addEventListener("click", (e) => {
  submitCity();
});


cityName.addEventListener("keyup", (e) => {
  if (e.code == "Enter") {
    submitCity();
  }
});

function submitCity() {
  console.log("fetching...", cityName.value);
  getData(cityName.value);
}

getData("Petrozavodsk");
