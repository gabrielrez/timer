const timerContainer = document.querySelector(".timer-container");
const time = document.querySelector(".time");
const btnStart = document.querySelector(".start");
const btnPause = document.querySelector(".pause");
const btnReset = document.querySelector(".reset");
const btnSave = document.querySelector(".save");
let i = 0;
let timer;
let minutes = 0;
var currentTime = 0;

function start() {
  timer = setInterval(() => {
    time.innerText = minutes + ":" + i++;
    if (i > 60) {
      minutes += 1;
      i = 0;
    }
    currentTime = minutes + ":" + i;
  }, 1000);
  btnStart.setAttribute("disabled", "");
}

function pause() {
  clearInterval(timer);
  btnStart.removeAttribute("disabled", "");
}

function reset() {
  clearInterval(timer);
  currentTime = 0;
  time.innerText = 0 + ":" + 0;
  i = 0;
  btnStart.removeAttribute("disabled", "");
  const saves = document.querySelectorAll(".saves");
  saves.forEach((save) => {
    timerContainer.removeChild(save);
  });
}

function save() {
  const saves = document.createElement("div");
  saves.classList.add("saves");
  saves.innerHTML = currentTime;
  timerContainer.appendChild(saves);
}

btnStart.addEventListener("click", start);
btnPause.addEventListener("click", pause);
btnReset.addEventListener("click", reset);
btnSave.addEventListener("click", save);