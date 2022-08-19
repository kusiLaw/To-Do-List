const getLocalStorage = () => {
  // Check if data is in storage and convert to js object
  if (localStorage.getItem('to-do')) {
    return JSON.parse(localStorage.getItem('to-do'));
  }
  return [];
};

const setLocalStorage = (arr) => {
  localStorage.setItem('to-do', JSON.stringify(arr));
};

export { setLocalStorage, getLocalStorage };