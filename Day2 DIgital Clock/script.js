function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const time = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").innerText = time;
}
setInterval(updateClock, 1000);// Update time every second

updateClock();// Initial call to display time immediately
