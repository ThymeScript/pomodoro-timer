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

}

function toggleVisibility(selector) {
  const div = document.querySelector(selector);
  // workaround for initial CSS load
  const currentDisplay = window.getComputedStyle(div).display;
  div.style.display = currentDisplay === "none" ? "block" : "none";
}