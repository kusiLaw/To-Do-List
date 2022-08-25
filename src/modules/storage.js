const getLocalStorage = () => {
  // Check if data is in storage and convert to js object
  if (localStorage.getItem('to-do')) {
    return JSON.parse(localStorage.getItem('to-do'));
  }
  return [];
};

const verifyObject = (list) => {
  for(let element of list){
    if(!(element.hasOwnProperty('index') && 
    element.hasOwnProperty('completed') && 
    element.hasOwnProperty('description') )){
     return false
    }
  }
  return true
}

const setLocalStorage = (array) => {
 if (Array.isArray(array) && verifyObject(array)){
  localStorage.setItem('to-do', JSON.stringify(array));
 }
};

export { setLocalStorage, getLocalStorage };