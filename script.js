const ingredients = document.querySelectorAll(".ingredient-checkbox");
const progressCount = document.querySelector("#progress-count");

function updateProgress() {
  let checked = 0;
  for (const ingredient of ingredients) {
    if (ingredient.checked) {
      checked++;
      ingredient.parentElement.classList.add("completed");
  } else {
  ingredient.parentElement.classList.remove("completed");
    } }
  progressCount.textContent = checked + " / " + ingredients.length;
}
for (const ingredient of ingredients) {
  ingredient.addEventListener("change", updateProgress);
}
updateProgress();

const display = document.querySelector("#timer-display");
const timer15 = document.querySelector("#timer-15");
const timer45 = document.querySelector("#timer-45");
const pauseButton = document.querySelector("#pause-timer");
const resetButton = document.querySelector("#reset-timer");

let seconds = 0;
let timer;

function showTime() {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  if (remainingSeconds < 10) {
    display.textContent = minutes + ":0" + remainingSeconds;
  } else {
    display.textContent = minutes + ":" + remainingSeconds;
  }
}

function startTimer() {
  clearInterval(timer);

  timer = setInterval(() => {
    if (seconds > 0) {
      seconds--;
      showTime();
    } else {
      clearInterval(timer);
    }
  }, 1000);
}

timer15.addEventListener("click", () => {
  seconds = 15 * 60;
  showTime();
  startTimer();
});

timer45.addEventListener("click", () => {
  seconds = 45 * 60;
  showTime();
  startTimer();
});

pauseButton.addEventListener("click", () => {
  clearInterval(timer);
});

resetButton.addEventListener("click", () => {
  clearInterval(timer);
  seconds = 0;
  showTime();
});

