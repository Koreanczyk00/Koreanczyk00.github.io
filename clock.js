const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const formattedTime = `${String(hours)}:${String(minutes)}:${String(seconds)}`;
    clock.innerText = `${day}/${month}/${year} ${formattedTime}`;
}

getClock();
setInterval(getClock, 1000);