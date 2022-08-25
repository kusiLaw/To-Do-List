/**
 * @jest-environment jsdom
 */

import addListToPage from '../createElements.js';

describe('Add item to page', () => {
  test('Add item to page must return list of length = 2', () => {
  // Arrange
    const array = [
      { index: 0, description: 'I will join standup team', completed: false },
      { index: 1, description: 'Meeting at 1pm', completed: false },
    ];
    document.body.innerHTML = '<ul id="list">'
 + '<ul>';

    // Act
    addListToPage(document.getElementById('list'), array);
    const list = document.querySelectorAll('#list .list-item');

    // Assert
    expect(list).toHaveLength(2);
  });

  test('test adding items using, return list of length = 3 ', () => {
  // Arrange
    const array = [
      { index: 0, description: 'I will join standup team', completed: false },
      { index: 1, description: 'Meeting at 1pm', completed: false },
      { index: 3, description: 'Meeting at 6pm', completed: false },
    ];

    document.body.innerHTML = '<ul id="list">'
   + '<ul>';

    // Act
    addListToPage(document.getElementById('list'), array);
    const list = document.querySelectorAll('#list .list-item');

    // Assert
    expect(list).toHaveLength(3);
  });
});