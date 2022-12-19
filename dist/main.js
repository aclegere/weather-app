/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const currentTemp = document.querySelector("#currentTemp");
const feelsLike = document.querySelector("#feelsLike");
const todayHi = document.querySelector("#tempMax");
const todayLow = document.querySelector("#tempMin");
const windSpeed = document.querySelector("#wind");
const errorMessage = document.querySelector("#error");

async function getWeatherMain(location){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location},US&units=imperial&appid=9f75ca6643a67f1e2530e0c39ee7627d`, {mode: 'cors'});
        const weatherStuff = await response.json();
        
        errorMessage.innerHTML = ``
        currentTemp.innerHTML = Math.round(weatherStuff.main.temp) + `&#176;F`;
        feelsLike.innerHTML = Math.round(weatherStuff.main.feels_like)+ `&#176;F`;
        todayHi.innerHTML = Math.round(weatherStuff.main.temp_max)+ `&#176;F`;
        todayLow.innerHTML = Math.round(weatherStuff.main.temp_min)+ `&#176;F`;
        windSpeed.innerHTML = Math.round(weatherStuff.wind.speed) + ` MPH`;    
    } catch (err) {
        console.log(err)
        errorMessage.innerHTML = `Please submit a valid US city`
        currentTemp.innerHTML = ``;
        feelsLike.innerHTML = ``;
        todayHi.innerHTML = ``;
        todayLow.innerHTML = ``;
        windSpeed.innerHTML = ``;    
    }
}

const submit = document.querySelector("#submit");
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    let loc = document.querySelector("#loc").value;
    getWeatherMain(loc);
})
/******/ })()
;