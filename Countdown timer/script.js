
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const myBirthday = '3 Jul 2021';

function countdown(){
    const birthdayDate = new Date(myBirthday);
    const currentDate = new Date();

    const totalSeconds = (birthdayDate-currentDate)/1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) %24;
    const mins= Math.floor(totalSeconds/60) %60;
    const seconds = Math.floor(totalSeconds) % 60;
    console.log(days, hours, mins, seconds);

    daysEl.innerHTML =days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML =formatTime(mins);
    secondsEl.innerHTML =formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);
