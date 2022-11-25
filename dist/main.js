/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const currentTemp = document.querySelector("#currentTemp");
const feelsLike = document.querySelector("#feelsLike");
const todayHi = document.querySelector("#tempMax");
const todayLow = document.querySelector("#tempMin");
const windSpeed = document.querySelector("#wind");

async function getWeatherMain(location){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location},US&units=imperial&appid=9f75ca6643a67f1e2530e0c39ee7627d`, {mode: 'cors'});
    const weatherStuff = await response.json();
    console.log(weatherStuff);

    currentTemp.innerHTML = Math.round(weatherStuff.main.temp);
    feelsLike.innerHTML = Math.round(weatherStuff.main.feels_like);
    todayHi.innerHTML = Math.round(weatherStuff.main.temp_max);
    todayLow.innerHTML = Math.round(weatherStuff.main.temp_min);
    windSpeed.innerHTML = Math.round(weatherStuff.wind.speed) + ` MPH`;    
}

const submit = document.querySelector("#submit");
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    let loc = document.querySelector("#loc").value;
    getWeatherMain(loc);
})
/******/ })()
;