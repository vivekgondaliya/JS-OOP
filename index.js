function Stopwatch() {
  let stopwatchRunning = false;
  let stopwatchStopped = false;
  let startTime, endTime;

  this.duration = 0;

  this.start = function() {
    //ensure that clock is not running - use a flag
    if (stopwatchRunning) throw new Error("Stopwatch already running...");

    //start the clock - run a fucntion that stores the current time in duration
    startTime = new Date();
    stopwatchRunning = true;
    stopwatchStopped = false;
  };

  this.stop = function() {
    //ensure that clock is not stopped - use a flag
    if (stopwatchStopped) throw new Error("Stopwatch already stopped...");

    //stop the clock
    endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;

    // get seconds
    var seconds = Math.round(timeDiff);
    this.duration += seconds;

    stopwatchStopped = true;
    stopwatchRunning = false;
  };

  this.reset = function() {
    if (stopwatchRunning)
      throw new Error("Please, ensure watch is stopped to reset");

    this.duration = 0;
  };
}
