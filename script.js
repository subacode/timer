let [seconds, minutes, hours] = [0, 0, 0];
    let displayTimer = document.getElementById("displayTimer");
    let stopwatch = null;


    function timer() {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
        let h = hours < 10 ? "0" + hours: hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;

        displayTimer.innerHTML = h + ":" + m + ":" + s;
    }

    function startTimer() {
        if (stopwatch !== null) {
            clearInterval(stopwatch);
        }
        stopwatch = setInterval(timer, 1000);
    }

    function stopTimer() {
        clearInterval(stopwatch);
    }

    function resetTimer() {
        clearInterval(stopwatch);
        let [seconds, minutes, hours] = [0, 0, 0];
        displayTimer.innerHTML = "00:00:00"
    }
