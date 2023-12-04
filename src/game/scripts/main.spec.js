import { deleteInputValue, onInputChange } from './main';

describe('main.js', () => {
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

  describe('deleteInputValue()', () => {
    it('deletes the previous input value', () => {
      const mockEvent = {
        key: 'Backspace',
      };

      const query = document.querySelectorAll('input');
      deleteInputValue(mockEvent, query, 1);

      expect(mockElements[0].value).toBe('');
      expect(mockElements[0].value).to.be.a('string');
    });

    it('focus on the previous input', () => {
      const mockEvent = {
        key: 'Backspace',
      };

      const query = document.querySelectorAll('input');
      deleteInputValue(mockEvent, query, 1);

      expect(mockElements[0].focus).toHaveBeenCalled();
    });

    it('if key is not "Backspace" do nothing', () => {
      const mockEvent = {
        key: 'other keyboard',
      };

      const query = document.querySelectorAll('input');
      deleteInputValue(mockEvent, query, 1);

      expect(mockElements[0].focus).not.toHaveBeenCalled();
    });
  });

  describe('onInputChange()', () => {
    it('focus on next input', () => {
      const allInputs = document.querySelectorAll('input');
      onInputChange(allInputs, 0);

      expect(mockElements[1].focus).toHaveBeenCalled();
    });
  });
});
