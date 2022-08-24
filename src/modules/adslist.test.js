import addToList from "./addlist";

describe('addToList', () => {

 test('Add new data to empty object', () => {
  //Arrange
 const array  = [];
 const string = "I will join standup team"


 //Act 
 const result = addToList(array, string)
 
 //Assert
 expect(result).toStrictEqual([{
             index : 0, 
             description: "I will join standup team",
          completed: false}]);
 });

 test('Add new data to array of object', () => {
  //Arrange
  const array  = [{index : 0, description: "I will join standup team",completed: false}];
  const string = "Meeting at 1pm"
 
 
  //Act 
  const result = addToList(array, string)
 
 //Assert
 expect(result).toStrictEqual([
  {index : 0, description: "I will join standup team",completed: false},
  {index : 1, description: "Meeting at 1pm",completed: false}
 ]
  );
 });

 test('Add empty string to array of objects', () => {
  //Arrange
  const array  = [{index : 0, description: "I will join standup team",completed: false}];
  const string = ""
 
 
  //Act 
  const result = addToList(array, string)
 
 //Assert
 expect(result).toStrictEqual([
  {index : 0, description: "I will join standup team",completed: false}
 ]
  );
 });

});