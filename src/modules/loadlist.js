import addListToPage from './createElements.js';

const loadList = (ul, obj) => {
  ul.style.display = 'flex';
  addListToPage(ul, obj);
};

export default loadList;