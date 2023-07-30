const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let intervalId;

  return (seconds) => {
    let remainingSeconds = seconds;

    intervalId = setInterval(() => {
      const hours = Math.floor(remainingSeconds / 3600)
        .toString()
        .padStart(2, "0");
      const minutes = Math.floor((remainingSeconds % 3600) / 60)
        .toString()
        .padStart(2, "0");
      const seconds = Math.floor((remainingSeconds % 3600) % 60)
        .toString()
        .padStart(2, "0");

      timerEl.textContent = `${hours}:${minutes}:${seconds}`;
      remainingSeconds--;

      if (remainingSeconds < 0) {
        clearInterval(intervalId);
        timerEl.textContent = "Таймер остановился";
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
