/**
 * @jest-environment jsdom
 */

import { getLocalStorage, setLocalStorage } from '../storage.js';
import { updateList } from '../update.js';

const editTask = (label, array) => {
  label.innerHTML = '';
  label.innerHTML = 'Meeting at 6pm postponed';
  updateList(array, 1, label.innerHTML, 'description');
  setLocalStorage(array);
};

describe('', () => {
  test('update object with edited label text', () => {
  // Arrange
    const array = [
      { index: 0, description: 'I will join standup team', completed: 'false' },
      { index: 1, description: 'Meeting at 6pm', completed: 'false' },
    ];

    document.body.innerHTML = '<input id="id-1" type="checkbox" name="checkbox" value="true" checked="true">'
 + '<label id="label-1" for="id-1" style="text-decoration: line-through;"></label>';
    const checked = document.getElementById('id-1');
    const label = document.getElementById('label-1');

    checked.onclick = () => {
      editTask(label, array);
    };

    // Act
    checked.click();

    // Assert
    expect(getLocalStorage()).toEqual([
      { completed: 'false', description: 'I will join standup team', index: 0 },
      { completed: 'false', description: 'Meeting at 6pm postponed', index: 1 },

    ]);
  });
});