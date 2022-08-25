const addToList = (obj, text) => {
  if (text.trim().length !== 0) {
    return obj.concat({
      index: obj.length,
      description: text,
      completed: false,
    });
  }
  return obj;
};
export default addToList;