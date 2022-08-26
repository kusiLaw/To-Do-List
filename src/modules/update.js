const updateIndex = (obj) => {
  let index = 0;
  obj.forEach((objs) => {
    objs.index = index;
    index += 1;
  });
};

const updateList = (obj, index, value, targetFiled) => {
  obj[parseInt(index, 10)][targetFiled] = value
};

export { updateList, updateIndex };