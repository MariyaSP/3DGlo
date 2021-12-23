const timer = (dadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {

        let dateStop = new Date(dadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;

        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {
            days,
            hours,
            minutes,
            seconds,
            timeRemaining
        }
    }
    const zeroPlus = (number) => {
        return  number < 10 ? '0' + number : number;
    }
    const updateClock = () => {
        let gettime = getTimeRemaining();
        if (gettime.timeRemaining > 0) {
            timerHours.textContent = zeroPlus(gettime.hours);
            timerMinutes.textContent = zeroPlus(gettime.minutes);
            timerSeconds.textContent = zeroPlus(gettime.seconds);
            console.log(gettime.timeRemaining);
        }
        else {
            clearInterval(jTime);
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";
        }
    }
    let jTime = setInterval(updateClock, 1000);
}
export default timer;