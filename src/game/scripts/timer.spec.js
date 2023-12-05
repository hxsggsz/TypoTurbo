import { Timer } from './timer';

let timer;
const seconds = 2;
const timerTest = document.querySelector('teste');
const setup = (otherSeconds) => {
  const timer = new Timer(otherSeconds ?? seconds, timerTest);

  return timer;
};

describe('new Timer()', () => {
  describe('when initialize', () => {
    it('setups all variables correctly', () => {
      const timer = setup();

      expect(timer.seconds).toBe(seconds);
      expect(timer.secondstimer).toBe(timerTest);
    });
  });

  describe('when run timer()', () => {
    beforeEach(() => {
      timer = setup();
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('reduces timer', () => {
      timer.timer();

      setTimeout(() => {
        expect(timer.seconds).toBe(1);
      }, 2000);
    });
  });

  describe('when calls reset()', () => {
    it('updates the seconds variable', () => {
      timer.reset(1);
      expect(timer.seconds).not.toBe(2);
      expect(timer.seconds).toBe(1);
      expect(timer.seconds).to.be.a('number');
    });
  });
});
