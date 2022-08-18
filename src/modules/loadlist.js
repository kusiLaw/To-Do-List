import addListToPage from "./createElements";



const loadList = (ul, obj) => {
 ul.style.display = 'flex';
 addListToPage(ul, obj);

};

export default loadList