const deleteItem = (obj, index) => obj.filter((list) => list.index !== parseInt(index, 10));

const deleteComplete = (obj) => obj.filter((list) => list.completed !== 'true');

export { deleteItem, deleteComplete };