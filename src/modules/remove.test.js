/**
 * @jest-environment jsdom
 */
 import addListToPage from "./createElements.js";
 import removeFromPage from './remove.js'

describe('Remove item from page using deleteItem', () => {

 test('Delete data using index', () => {
  //Arrange
 let array  = [
  {index : 0, description: "I will join standup team",completed: false},
  {index : 1, description: "Meeting at 1pm",completed: false}
 ];


 document.body.innerHTML =
 '<ul id="list">' +
 '<ul>';

 //Act 
 addListToPage(document.getElementById('list'), array)
 removeFromPage(document.getElementById('li-0'))
 const list = document.querySelectorAll('#list .list-item');



 //Assert
 expect(list).toHaveLength(1);
 });

});
