function increaseCounter(id) {
  let counter = document.querySelector("#" + id);
  counter.textContent = parseInt(counter.textContent) + 1;
}

function decreaseCounter(id) {
  let counter = document.querySelector("#" + id);
  let value = parseInt(counter.textContent);
  if (value < 2) {
    return;
  }
  counter.textContent = value - 1;
}