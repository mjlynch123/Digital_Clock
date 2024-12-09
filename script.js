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

    // Formatting the time
    const currentTime = `${hours}:${minutes}:${seconds}`;

    // Adding clock to the DOM
    clockElement.textContent = currentTime;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call
updateClock();