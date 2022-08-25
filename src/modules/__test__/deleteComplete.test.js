/**
 * @jest-environment jsdom
 */

 import {deleteComplete} from '../delete.js'


describe('deleteComplete Dom menupulation', () => {
 test('Delete all data mark with completed as true', () => {
   // Arrange
   let array = [
     { index: 0, description: 'I will join standup team', completed: 'true' },
     { index: 1, description: 'Meeting at 1pm', completed: 'true' },
   ];
  
   document.body.innerHTML = '<ul id="list">'
   + '<ul>'+
   '<button type="button"  id="delete-complete">Clear all completed</button>'
   ;
   const button = document.getElementById('delete-complete')
   button.onclick = () =>{
       array = deleteComplete(array)
      };

      // Act
    button.click();

  
      // Assert
      expect(array).toStrictEqual([]);
 });

 test('Delete all data mark with completed as true', () => {
  // Arrange
  let array = [
    { index: 0, description: 'I will join standup team', completed: 'false' },
    { index: 1, description: 'Meeting at 1pm', completed: 'true' },
  ];
 
  document.body.innerHTML = '<ul id="list">'
  + '<ul>'+
  '<button type="button"  id="delete-complete">Clear all completed</button>'
  ;
  
  const button = document.getElementById('delete-complete')
  button.onclick = () =>{
      array = deleteComplete(array)
     };

     // Act
   button.click();

 
     // Assert
     expect(array).toStrictEqual([{ index: 0, description: 'I will join standup team', completed: 'false' }
    ]);
});

});