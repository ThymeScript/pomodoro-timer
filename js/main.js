const SECOND = 1000;
const MINUTE = 60 * SECOND;

function increaseCounter(id) {
  const counter = document.querySelector("#" + id);
  counter.textContent = parseInt(counter.textContent) + 1;
}

function decreaseCounter(id) {
  const counter = document.querySelector("#" + id);
  const value = parseInt(counter.textContent);
  if (value < 2) {
    return;
  }
  counter.textContent = value - 1;
}

function startPomodoro() {
  const session = document.querySelector("#sessionTime");
  const sessionTime = parseInt(session.textContent);

  const _break = document.querySelector("#breakTime");
  const breakTime = parseInt(_break.textContent);

  const repetitions = document.querySelector("#repetitions");
  const repAmount = parseInt(repetitions.textContent);
  console.log(sessionTime);
  console.log(breakTime);
  console.log(repAmount);

  toggleVisibility(".setup");
  toggleVisibility(".running");

  //TODO add proper time
  runCycle(1);

}

function runCycle(timeInMinutes) {
  let seconds = 0;
  let minutes = timeInMinutes;
  let timer = setInterval(countdown, SECOND);
  const counter = document.querySelector(".countdown");
  let currentTime = document.createElement("p");

  function countdown() {
    console.log(seconds, minutes);
    currentTime.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    counter.appendChild(currentTime);
    if (seconds == 0 && minutes == 0) {
      //TODO sound
      clearInterval(timer);
    }
    if (seconds == 0) {
      minutes -= 1;
      seconds = 59;
    } else {
      seconds--;
    }
  }
}

function toggleVisibility(selector) {
  const div = document.querySelector(selector);
  // workaround for initial CSS load
  const currentDisplay = window.getComputedStyle(div).display;
  div.style.display = currentDisplay === "none" ? "block" : "none";
}