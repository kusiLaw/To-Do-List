/**
 * @jest-environment jsdom
 */

import { updateList, updateIndex } from '../update.js';

describe('Update Dom element', () => {
  test('Update index upon item deleted', () => {
    // Arrange
    const array = [
      { index: 0, description: 'I will join standup team', completed: 'false' },
      { index: 2, description: 'Meeting at 6pm', completed: 'false' },
    ];

    document.body.innerHTML = '<ul id="list">'
   + '<span class="delete-icon" id="del-1"><i class="fa-solid fa-trash-can"></i></span>'
   + '<ul>';
    const del = document.getElementById('del-1');
    del.onclick = () => {
      updateIndex(array);
    };

    // Act
    del.click();

    // Assert
    expect(array).toStrictEqual([
      { index: 0, description: 'I will join standup team', completed: 'false' },
      { index: 1, description: 'Meeting at 6pm', completed: 'false' },

    ]);
  });

  test('update object with edited label text', () => {
    // Arrange
    const array = [
      { index: 0, description: 'I will join standup team', completed: 'false' },
      { index: 1, description: 'Meeting at 6pm', completed: 'false' },
    ];

    document.body.innerHTML = '<input id="id-1" type="checkbox" name="checkbox" value="true" checked="true">'
   + '<label id="label-1" for="id-1" style="text-decoration: line-through;">lawrence</label>';
    const checked = document.getElementById('id-1');
    const label = document.getElementById('label-1');

    checked.onclick = () => {
      label.innerHTML = '';
      label.innerHTML = 'Meeting at 6pm postponed';
      updateList(array, 1, label.innerHTML, 'description');
    };

    // Act
    checked.click();

    // Assert
    expect(array).toStrictEqual([
      { index: 0, description: 'I will join standup team', completed: 'false' },
      { index: 1, description: 'Meeting at 6pm postponed', completed: 'false' },

    ]);
  });
});