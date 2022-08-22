import { setLocalStorage, getLocalStorage } from './modules/storage.js';
import { updateList, updateIndex } from './modules/update.js';
import addToList from './modules/addlist.js';
import { deleteItem, deleteComplete } from './modules/delete.js';
import loadList from './modules/loadlist.js';
import handleDrop from './modules/dragging.js';

const ul = document.getElementById('list');
const inp = document.getElementById('add-input');
const delComplete = document.getElementById('delete-complete');

let todo = [];
let dragItem = null;

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
  /** for delete * */
  if (/del-+\w/gi.test(e.target.parentNode.id)) {
    const val = e.target.parentNode.id.split('-');
    todo = deleteItem(todo, val[1]);
    updateIndex(todo);
    setLocalStorage(todo);
    ul.innerHTML = '';
    loadList(ul, todo);
    return;
  }

  /** for label* */
  if (/label-+\w/gi.test(e.target.id)) {
    const val = e.target.id.split('-');
    e.target.style.display = 'none';
    const hold = document.getElementById(`edit-input-${val[1]}`);
    hold.value = e.target.innerHTML;
    hold.style.display = 'inline-flex';
    return;
  }

  /** *
   * is  for checkbox **
   * mark list as completed or not
   * ** */
  if (/id-+\w/gi.test(e.target.id)) {
    const val = e.target.id.split('-');
    if (e.target.checked) {
      e.target.value = true;
      document.getElementById(`label-${val[1]}`).style.textDecoration = 'line-through';
      updateList(todo, val[1], e.target.value, 'completed');
      setLocalStorage(todo);
    } else {
      e.target.value = false;
      document.getElementById(`label-${val[1]}`).style.textDecoration = 'none';
      updateList(todo, val[1], e.target.value, 'completed');
      setLocalStorage(todo);
    }
  }
});

ul.addEventListener('focusout', (e) => {
  e.preventDefault();

  /** for edit input* */
  if (/[a-z]{4}-{1}[a-z]*/.test(e.target.id)) {
    const val = e.target.id.split('-');
    if (e.target.value !== '') {
      updateList(todo, val[2], e.target.value, 'description');
      setLocalStorage(todo);
    }
    ul.innerHTML = '';
    loadList(ul, todo);
  }
});

ul.onmouseover = (e) => {
  /** *
  * toggle between icon, del and collapse
  ** */
  if (/col-+\w/gi.test(e.target.parentNode.id)) {
    e.target.parentNode.style.display = 'none';
    const val = e.target.parentNode.id.split('-');
    document.getElementById(`del-${val[1]}`).style.display = 'inline';
  }
};

ul.onmouseout = (e) => {
  if (/del-+\w/gi.test(e.target.parentNode.id)) {
    e.target.parentNode.style.display = 'none';
    const val = e.target.parentNode.id.split('-');
    document.getElementById(`col-${val[1]}`).style.display = 'inline';
  }
};

delComplete.onclick = (e) => {
  e.preventDefault();
  todo = deleteComplete(todo);
  updateIndex(todo);
  setLocalStorage(todo);
  ul.innerHTML = '';
  loadList(ul, todo);
};

document.addEventListener('dragstart', (event) => {
  // make it half transparent
  event.target.classList.add('dragging');
  dragItem = event.target;
});

document.addEventListener('dragenter', (event) => {
  if (event.target.className === 'list-item') {
    event.target.style.backgroundColor = 'rgb(233, 230, 230)';
  }
});

document.addEventListener('dragleave', (event) => {
  if (event.target.className === 'list-item') {
    event.target.style.backgroundColor = 'inherit';
  }
});

document.addEventListener('dragover', (event) => {
  // prevent default to allow drop
  event.preventDefault();
});

document.addEventListener('drop', (event) => {
  // prevent default action (open as link for some elements)
  event.preventDefault();

  // if dragItem is not same as valid place it dropping
  if (dragItem !== event.target && event.target.className === 'list-item') {
  // swap innerHTML
    const temp = dragItem.innerHTML;
    dragItem.innerHTML = event.target.innerHTML;
    event.target.innerHTML = temp;
    event.target.style.backgroundColor = 'inherit';

    todo = handleDrop(event);
    setLocalStorage(todo);
    ul.innerHTML = '';
    loadList(ul, todo);
  }
});

document.addEventListener('dragend', (event) => {
  // remove half transparent
  event.target.classList.remove('dragging');
});
