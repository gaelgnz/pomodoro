const start_button = document.getElementById("start");
const timer_label = document.getElementById("timer");
const mode_label = document.getElementById("currentmode");

let timer;
let time_left = 5;
let running = false;
let on_break = false;

let work_time = 900;
let break_time = 300;

function updateDisplay() {
    let minutes = Math.floor(time_left / 60);
    let seconds = time_left % 60;
    timer_label.innerHTML = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    mode_label.innerHTML = on_break ? "Break" : "Work";
    document.body.style = on_break ? "background-color: blue" : "background-color: red";
    document.title = `${on_break ? "Break: " : "Work: "}${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!running) {
        timer = setInterval(updateTimer, 1000);
        running = true;
    }
}

function stopTimer() {
    if (running) {
        clearInterval(timer);
        running = false;
    }
}

function resetTimer() {
	if (running) {
        clearInterval(timer);
        running = false;
    }
	time_left = on_break ? break_time : work_time
	updateDisplay()
}

function updateTimer() {

    if (time_left > 0) {
        time_left--;
    } else {
        on_break = !on_break; // Toggle work/break mode
        time_left = on_break ? break_time : work_time; // 5 min break, 5 sec work for testing
    }
    updateDisplay();
}

function setTimer() {
	work_time = parseInt(prompt("How much work time? (Minutes)") * 60)
	break_time = parseInt(prompt("How much break time? (Minutes)") * 60)
}

// Initialize display
updateDisplay();
