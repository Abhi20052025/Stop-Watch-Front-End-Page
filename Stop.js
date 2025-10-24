let timeDisplay = document.querySelector('.timeDisplay');
let Stopbtn = document.getElementById('Stopbtn');
let Startbtn = document.getElementById('Startbtn');
let Resertbtn = document.getElementById('Resertbtn');

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

Startbtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

Stopbtn.addEventListener('click', function () {
    clearInterval(timerId);
});

Resetbtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null;
    msec = secs = mins = 0;
    timeDisplay.innerHTML = `00:00:00`;
});

function startTimer() {
    msec++;
    if (msec === 100) {
        msec = 0;
        secs++;
        if (secs === 60) {
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timeDisplay.innerHTML = `${minsString}:${secsString}:${msecString}`;
}

