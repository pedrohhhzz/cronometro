let startTime = null;
let elapsed = 0;
let interval = null;
let isRunning = false;

const timeDisplay = document.getElementById("timeDisplay");
const toggleBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function updateDisplay() {
  const now = Date.now();
  const diff = isRunning ? now - startTime + elapsed : elapsed;
  timeDisplay.textContent = formatTime(diff);
}

// Botão único para Start/Pause
toggleBtn.addEventListener("click", () => {
  if (!isRunning) {
    startTime = Date.now();
    interval = setInterval(updateDisplay, 1000);
    toggleBtn.textContent = "⏸ Pausar";
    isRunning = true;
  } else {
    elapsed += Date.now() - startTime;
    clearInterval(interval);
    toggleBtn.textContent = "▶ Iniciar";
    isRunning = false;
  }
});

// Botão de reset
resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  startTime = null;
  elapsed = 0;
  isRunning = false;
  toggleBtn.textContent = "▶ Iniciar";
  updateDisplay();
});

updateDisplay();
