const deleteItem = (obj, index) => {
if(Number.isInteger(parseInt(index, 10))){
 return obj.filter((list) => list.index !== parseInt(index, 10));
}{
 return obj
}

}
const deleteComplete = (obj) => obj.filter((list) => list.completed !== 'true');

export { deleteItem, deleteComplete };