/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nconst API_KEY = \"48305872aed903924eef229a843089cc\";\n\nclass City {\n  constructor(name, temp, icon, description, humidity) {\n    this.name = name;\n    this.temp = temp;\n    this.icon = icon;\n    this.description = description;\n    this.humidity = humidity;\n  }\n}\n\nasync function getData(city) {\n  document.querySelector(\".circle\").style.display = \"flex\";\n  document.getElementById(\"submit-btn\").style.display = \"none\";\n  try {\n\n    let timer = await new Promise((resolve) => {\n        setTimeout(() => resolve('Done'), 500);\n    });\n\n    let response = await fetch(\n      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`\n    );\n\n    let data = await response.json();\n\n    document.querySelector(\".circle\").style.display = \"none\";\n    document.getElementById(\"submit-btn\").style.display = \"flex\";\n\n    if (response.ok) {\n      let newCity = new City(\n        data.name,\n        parseInt(data.main.temp - 273) + \"°C\",\n        `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,\n        data.weather[0].description,\n        data.main.humidity + \"%\"\n      );\n      handleError('');\n      addCityCard(newCity);\n\n      console.log(data);\n    } else {\n      throw Error(data.message);\n    }\n  } catch (err) {\n    handleError(err.message);\n    console.log(err);\n\n  }\n}\n\nfunction handleError(message) {\n    let errorSpan = document.querySelector(\".error-msg\");\n    errorSpan.textContent = message;\n}\n\nfunction addCityCard(city) {\n    console.log(city);\n    const container = document.getElementById(\"cities\");\n    container.innerHTML = '';\n\n    const cityDiv = document.createElement('div');\n    cityDiv.id = city.name;\n\n    const cityName = document.createElement('div');\n    cityName.classList.add(\"city-name\");\n\n    const cityWeather = document.createElement('div');\n    cityWeather.classList.add(\"city-weather\");\n\n    const cityTemp = document.createElement('div');\n    const cityDivIcon = document.createElement('div');\n    const icon = document.createElement('img');\n\n    const cityDescription = document.createElement('div');\n    cityDescription.classList.add(\"city-description\");\n\n\n    cityName.textContent = city.name;\n    cityTemp.textContent = city.temp;\n    icon.src = city.icon;\n\n    const weatherDescription = document.createElement('div');\n    weatherDescription.textContent = city.description;\n\n    \n    const cityHumidity = document.createElement('div');\n    cityHumidity.textContent =  \"Humidity: \" + city.humidity;\n\n    cityDescription.appendChild(cityHumidity);\n    cityDescription.appendChild(weatherDescription);\n\n    cityWeather.appendChild(cityTemp);\n    cityDivIcon.appendChild(icon);\n    cityWeather.appendChild(cityDivIcon);\n\n    cityDiv.appendChild(cityName);\n    cityDiv.appendChild(cityWeather);\n    cityDiv.appendChild(cityDescription);\n\n    container.appendChild(cityDiv);\n}\n\n\n\n\n//# sourceURL=webpack://weather-api/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\nconst button = document.getElementById(\"submit-btn\");\nconst cityName = document.getElementById(\"city-input\");\n\nbutton.addEventListener(\"click\", (e) => {\n  submitCity();\n});\n\n\ncityName.addEventListener(\"keyup\", (e) => {\n  if (e.code == \"Enter\") {\n    submitCity();\n  }\n});\n\nfunction submitCity() {\n  console.log(\"fetching...\", cityName.value);\n  (0,_app__WEBPACK_IMPORTED_MODULE_0__.getData)(cityName.value);\n}\n\n(0,_app__WEBPACK_IMPORTED_MODULE_0__.getData)(\"Petrozavodsk\");\n\n\n//# sourceURL=webpack://weather-api/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;