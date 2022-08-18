import { setLocalStorage, getLocalStorage } from "./modules/storage";
import {updateList, updateIndex} from "./modules/update"
import addToList  from "./modules/addlist.js";
import deleteItem from "./modules/delete"
import loadList from "./modules/loadlist";


const ul = document.getElementById('list');
const inp = document.getElementById('add-input');

let todo = [

];


window.onload = () => {
  todo = getLocalStorage();
  loadList(ul, todo);
};

inp.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const val = event.target.value;
    if (/\w+\s*/gi.test()) {
      // input not empty
      todo = addToList(todo, val);
      setLocalStorage(todo);
      ul.innerHTML = '';
      event.preventDefault();
      inp.value = '';
      loadList(ul, todo);
    }
  }
});

ul.addEventListener('click', (e) => {
  e.preventDefault();

  if (/[id]/.test(e.target.parentNode.id)) {
    const val = e.target.parentNode.id.split('-');
    todo = deleteItem(todo, val[1]);
    updateIndex(todo);
    setLocalStorage(todo);
    ul.innerHTML = '';
    loadList(ul, todo);
    return
  }

  //for label
  if (/label-+\w/gi.test(e.target.id)){
   const val = e.target.id.split('-');
    e.target.style.display = "none";
    let hold = document.getElementById(`edit-input-${val[1]}`)
    hold.value = e.target.innerHTML
    hold.style.display = "inline-flex"
  }
});

ul.addEventListener('focusout', (e) => {
  e.preventDefault();
  
  // for edit imput
  if (/[a-z]{4}-{1}[a-z]*/.test(e.target.id)) {
    const val = e.target.id.split('-');
    if (e.target.value !== '') {
      updateList(todo, val[2], e.target.value);
      setLocalStorage(todo);
    }
    ul.innerHTML = '';
    loadList(ul, todo);
  }
});

ul.onmouseover = (e)=>{
 if(/col-+\w/gi.test(e.target.parentNode.id)) {

  e.target.parentNode.style.display = "none";
  const val = e.target.parentNode.id.split('-');
  // e.target.parentNode.previouSibling.style.display= "inline"
  document.getElementById(`del-${val[1]}`).style.display= "inline"
 }
}

 ul.onmouseout = (e)=>{
  if(/del-+\w/gi.test(e.target.parentNode.id)) {
   e.target.parentNode.style.display = "none";
   const val = e.target.parentNode.id.split('-');
   // e.target.parentNode.previouSibling.style.display= "inline"
   document.getElementById(`col-${val[1]}`).style.display= "inline"
  }
}


