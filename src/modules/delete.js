
const deleteItem = (obj, index) => obj.filter((list) => list.index !== parseInt(index, 10));

export default deleteItem