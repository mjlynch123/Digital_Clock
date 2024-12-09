function updateClock() {
    const clockElement = document.querySelector('.clock');
    const now = new Date();

    // Getting hours, minutes and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Adding leading zeros
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    const currentTime = `${hours}:${minutes}:${seconds}`;

    clockElement.textContent = currentTime;
}

setInterval(updateClock, 1000);

updateClock();