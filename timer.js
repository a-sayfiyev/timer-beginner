    function startTimer() {
      const minutesInput = document.getElementById("minutes");
      const timerDisplay = document.getElementById("timer");

      let totalSeconds = parseInt(minutesInput.value) * 60;
      let interval = setInterval(updateTimer, 1000);

      function updateTimer() {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (totalSeconds <= 0) {
          clearInterval(interval);
          saveResult(timerDisplay.textContent);
        } else {
          totalSeconds--;
        }
      }

      function saveResult(result) {
        localStorage.setItem("lastResult", result);
      }
    }

    const date = new Date();
    const dateStr = document.getElementById("date");

    let day = (date.getDate());
    let month = (date.getMonth() + 1);
    let year = (date.getFullYear());

    dateStr.innerHTML = `${day}.${month}.${year}`;
