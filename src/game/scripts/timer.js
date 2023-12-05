/**
 *
 * @param {number} seconds - the seconds of the timer
 * @param {HTMLElement} secondsTimer - the html of the timer
 *
 */
export function timerSeconds(seconds, secondsTimer) {
  const timer = setInterval(() => {
    const timer = (secondsTimer.textContent = seconds--);

    // if (!timer) {
    //   window.location.replace('/home/');
    // }
  }, 1000);

  return timer;
}

export class Timer {
  seconds;
  secondstimer;

  /**
   * Setup the timer.
   * @param {number} seconds - The seconds of the timer.
   * @param {HTMLElement} secondsTimer - The HTML to put the timer on.
   */
  constructor(seconds, secondsTimer) {
    this.seconds = seconds;
    this.secondstimer = secondsTimer;
  }

  /**
   * start the timer and redirect when seconds is zero
   */
  timer() {
    setInterval(() => {
      const timer = (this.secondstimer.textContent = `timer: ${--this
        .seconds}`);

      if (!timer) {
        window.location.replace('/home/');
      }
    }, 900);
  }

  /**
   * Reset the timer.
   * @param {number} seconds - The seconds to reset the timer.
   */
  reset(seconds) {
    this.seconds = seconds;
  }
}
