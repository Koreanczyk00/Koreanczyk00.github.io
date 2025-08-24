const API_KEY = "40730676b2455c26632c694c2b08c306";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        const temp = document.querySelector("#weather span:nth-child(2)");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temp.innerText = data.main.temp;
    });
}
function onGeoError() {
    alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);