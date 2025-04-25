let seconds = 0;
let interval = null;
let isRunning = false;

const timeDisplay = document.getElementById("timeDisplay");
const toggleBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");

function formatTime(s) {
  const hrs = Math.floor(s / 3600);
  const mins = Math.floor((s % 3600) / 60);
  const secs = s % 60;
  return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(seconds);
}

// Botão único para Start/Pause
toggleBtn.addEventListener("click", () => {
  if (!isRunning) {
    interval = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
    toggleBtn.textContent = "⏸ Pausar";
    isRunning = true;
  } else {
    clearInterval(interval);
    toggleBtn.textContent = "▶ Iniciar";
    isRunning = false;
  }
});

// Botão de reset
resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  isRunning = false;
  toggleBtn.textContent = "▶ Iniciar";
  updateDisplay();
});

updateDisplay();
