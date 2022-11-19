/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
async function getWeatherMain(location){

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location},US&units=imperial&appid=9f75ca6643a67f1e2530e0c39ee7627d`, {mode: 'cors'});
    const weatherStuff = await response.json();
    console.log(weatherStuff);
}

const submit = document.querySelector("#submit");
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    let loc = document.querySelector("#loc").value;
    getWeatherMain(loc);
})



 


/******/ })()
;