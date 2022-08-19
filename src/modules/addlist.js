const addToList = (obj, text) => obj.concat({
  index: obj.length,
  description: text,
  completed: false,
});

export default addToList;