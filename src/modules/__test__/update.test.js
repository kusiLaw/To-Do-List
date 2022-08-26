/**
 * @jest-environment jsdom
 */

import { updateList, updateIndex } from '../update'
import {deleteItem} from '../delete.js'
import addListToPage from '../createElements.js';


describe('deleteComplete Dom menupulation', () => {
 test('Delete all data mark with completed as true', () => {
   // Arrange
   let array = [
     { index: 0, description: 'I will join standup team', completed: 'false' },
     { index: 2, description: 'Meeting at 6pm', completed: 'false' }
   ];
  
   document.body.innerHTML = '<ul id="list">'+
   '<span class="delete-icon" id="del-1"><i class="fa-solid fa-trash-can"></i></span>'
   + '<ul>'
   ;
 
   let del = document.getElementById('del-1')
   del.onclick = () =>{
         updateIndex(array)
      };

      // Act
      del.click();

  
      // Assert
      expect(array).toStrictEqual([
       { index: 0, description: 'I will join standup team', completed: 'false' },
       { index: 1, description: 'Meeting at 6pm', completed: 'false' }

      ]);
 });

//  test('Delete all data mark with completed as true', () => {
//   // Arrange
//   let array = [
//     { index: 0, description: 'I will join standup team', completed: 'false' },
//     { index: 1, description: 'Meeting at 1pm', completed: 'true' },
//   ];
 
//   document.body.innerHTML = '<ul id="list">'
//   + '<ul>'+
//   '<button type="button"  id="delete-complete">Clear all completed</button>'
//   ;
  
//   const button = document.getElementById('delete-complete')
//   button.onclick = () =>{
//       array = deleteComplete(array)
//      };

//      // Act
//    button.click();

 
//      // Assert
//      expect(array).toStrictEqual([{ index: 0, description: 'I will join standup team', completed: 'false' }
//     ]);
// });

});