const getLocalStorage = () => {
  // Check if data is in storage and convert to js object
  if (localStorage.getItem('to-do')) {
    return JSON.parse(localStorage.getItem('to-do'));
  }
  return [];
};

const verifyObject = (list) => {
  for (let i = 0; i < list.length; i += 1) {
    if (!('index' in list[i]
    && 'completed' in list[i]
    && 'description' in list[i])) {
      return false;
    }
  }
  return true;
};

const setLocalStorage = (array) => {
  if (Array.isArray(array) && verifyObject(array)) {
    localStorage.setItem('to-do', JSON.stringify(array));
  }
};

export { setLocalStorage, getLocalStorage };