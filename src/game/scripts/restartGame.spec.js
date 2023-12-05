import { restartGame } from './restartGame';

describe('restartGame.js', () => {
  let mockElements;
  beforeEach(() => {
    mockElements = [
      {
        value: 'mock',
        focus: vi.fn(),
      },
      {
        value: 'mock2',
        focus: vi.fn(),
      },
    ];
    vi.spyOn(document, 'querySelectorAll').mockReturnValue(mockElements);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('resets all inputs', () => {
    const query = document.querySelectorAll('input');
    restartGame(query);

    expect(mockElements[1].value).toBe('');
    expect(mockElements[1].value).not.toBe('mock');
    expect(mockElements[0].value).to.be.a('string');
  });

  it('focus on first input', () => {
    const query = document.querySelectorAll('input');
    restartGame(query);

    expect(mockElements[0].focus).toHaveBeenCalled();
  });
});
