import {deleteComplete, deleteItem} from './delete.js'

describe('deleteItem', () => {

 test('Delete data using index', () => {
  //Arrange
 const array  = [
  {index : 0, description: "I will join standup team",completed: false},
  {index : 1, description: "Meeting at 1pm",completed: false}
 ];
 const index = 1;


 //Act 
 const result = deleteItem(array, index)
 
 //Assert
 expect(result).toStrictEqual([{
             index : 0, 
             description: "I will join standup team",
          completed: false}]);
 });

 test('Delete data using any object instead of integer', () => {
  //Arrange
 const array  = [
  {index : 0, description: "I will join standup team",completed: false},
  {index : 1, description: "Meeting at 1pm",completed: false}
 ];
 const index = "this is a trick";


 //Act 
 const result = deleteItem(array, index)
 
 //Assert
 expect(result).toStrictEqual([
  {index : 0, description: "I will join standup team",completed: false},
  {index : 1, description: "Meeting at 1pm",completed: false}
 ]);
 });

 test('Delete data using floating point number instead of integer', () => {
  //Arrange
 const array  = [
  {index : 0, description: "I will join standup team",completed: false},
  {index : 1, description: "Meeting at 1pm",completed: false}
 ];
 const index = 1.1;


 //Act 
 const result = deleteItem(array, index)
 
 //Assert
 expect(result).toStrictEqual([
  {index : 0, description: "I will join standup team",completed: false},
  {index : 1, description: "Meeting at 1pm",completed: false}
 ]);
 });

});

describe("deleteComplete", () => {
  test("Delete all data mark with completed as true", () => {
    //Arrange
    const array = [
      { index: 0, description: "I will join standup team", completed: 'false' },
      { index: 1, description: "Meeting at 1pm", completed: 'true' },
    ];
    //Act
    const result = deleteComplete(array);
    //Assert
    expect(result).toStrictEqual([
      {
        index: 0,
        description: "I will join standup team",
        completed: 'false',
      },
    ]);
  });
  test("Delete all data mark with completed as true, all data should deleted", () => {
    //Arrange
    const array = [
      { index: 0, description: "I will join standup team", completed: 'true' },
      { index: 1, description: "Meeting at 1pm", completed: 'true'},
      { index: 2, description: "Meeting at 6pm", completed: 'true' },
    ];
    //Act
    const result = deleteComplete(array);
    //Assert
    expect(result).toStrictEqual([]);
  });
  test("Delete data using floating point number instead of integer, all data should deleted", () => {
    //Arrange
    const array = [
      { index: 0, description: "I will join standup team", completed: 'false' },
      { index: 1, description: "Meeting at 1pm", completed: 'false' },
      { index: 1, description: "Meeting at 6pm", completed: 'false' },
    ];
    //Act
    const result = deleteComplete(array);
    //Assert
    expect(result).toStrictEqual([
      { index: 0, description: "I will join standup team", completed: 'false' },
      { index: 1, description: "Meeting at 1pm", completed: 'false'},
      { index: 1, description: "Meeting at 6pm", completed: 'false' },
    ]);
  });
});