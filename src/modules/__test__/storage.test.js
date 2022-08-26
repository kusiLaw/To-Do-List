/**
 * @jest-environment jsdom
 */
import { setLocalStorage, getLocalStorage } from '../storage.js';

describe('LocalStorage', () => {
  test('store invalid object type to local storage', () => {
  // Arrange
    const array = [
      { index: 0, 0: 'I will join standup team', true: false },
      { index: 1, 9: 'Meeting at 1pm', completed: false },
    ];

    // Act
    setLocalStorage(array);

    // Assert
    expect(getLocalStorage()).toStrictEqual([]);
  });

  test('store valid list of object into local storage', () => {
    // Arrange
    const array = [
      { index: 0, description: 'I will join standup team', completed: false },
      { index: 1, description: 'Meeting at 1pm', completed: false },
    ];

    // Act
    setLocalStorage(array);

    // Assert
    expect(getLocalStorage()).toStrictEqual(array);
  });
});
