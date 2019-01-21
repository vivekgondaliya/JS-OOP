function Stopwatch() {
  let stopwatchRunning = false;
  let startTime,
    endTime,
    duration = 0;

  this.start = function() {
    //ensure that clock is not running - use a flag
    if (stopwatchRunning) throw new Error("Stopwatch already running...");

    //start the clock - run a fucntion that stores the current time in duration
    startTime = new Date();
    stopwatchRunning = true;
  };

  this.stop = function() {
    //ensure that clock is not stopped - use a flag
    if (!stopwatchRunning) throw new Error("Stopwatch already stopped...");

    //stop the clock
    stopwatchRunning = false;

    endTime = new Date();
    const seconds = (endTime - startTime) / 1000;
    duration += seconds;
  };

  this.reset = function() {
    if (stopwatchRunning)
      throw new Error("Please, ensure watch is stopped to reset");

    startTime = null;
    endTime = null;
    stopwatchRunning = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}
