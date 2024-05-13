const bells = new Audio("components/sounds/mixkit-achievement-bell-600.wav");
const startBtn = document.querySelector(".btn-start");
const session = document.querySelector(".minutes");
let myInterval;
let state = true;

const appTimer = () => {
  const sessionAmount = Number.parseInt(session.textContent);

  if (state) {
    state = false;
    let totalSeconds = sessionAmount * 60;

    const updateSeconds = () => {
      const minuteDiv = document.querySelector(".minutes");
      const secondsDiv = document.querySelector(".seconds");

      totalSeconds--;

      let minutesLeft = Math.floor(totalSeconds / 60);
      let secondsLeft = totalSeconds % 60;

      if (secondsLeft < 10) {
        secondsDiv.textContent = "0" + secondsLeft;
      } else {
        secondsDiv.textContent = secondsLeft;
      }
      minuteDiv.textContent = `${minutesLeft}`;

      if (minutesLeft == 0 && secondsLeft == 0) {
        bells.play();
        clearInterval(myInterval);
      }
    };
    myInterval = setInterval(updateSeconds, 1000);
  } else {
    alert("session has started already. ");
  }
};
startBtn.addEventListener("click", appTimer);
