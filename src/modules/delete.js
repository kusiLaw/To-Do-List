const deleteItem = (obj, index) => {
  if (Number.isInteger(index)) {
    return obj.filter((list) => list.index !== index);
  }
  return obj;
};

const deleteComplete = (obj) => obj.filter((list) => list.completed !== 'true');

export { deleteItem, deleteComplete };