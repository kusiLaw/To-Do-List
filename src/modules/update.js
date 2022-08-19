const updateIndex = (obj) => {
  let index = 0;
  obj.forEach((objs) => {
    objs.index = index;
    index += 1;
  });
};

const updateList = (obj, index, value, targetFiled) => {
  // edit-input
  obj.forEach((objs) => {
    if (objs.index === parseInt(index, 10)) {
      objs[targetFiled] = value;
    }
  });
};

export { updateList, updateIndex };