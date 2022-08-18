import './style.css';

const ul = document.getElementById('list');
const inp = document.getElementById('add-input');

let todo = [

];

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

const addToList = (text) => todo.concat({
 index: todo.length,
 description: text,
 complete: false,
});

const deleteItem = (obj, index) => obj.filter((list) => list.index !== parseInt(index));

const updateIndex = (obj) => {
 let index = 0;
 obj.forEach((objs) => {
  objs.index = index;
  index += 1;
 });
};

const updateList = (obj, index, description) =>{
 // edit-input
 obj.forEach((objs) => {
  if(objs.index === parseInt(index)){
    objs.description = description
    return
  }
 });
}


const addListToPage = (ob) => {
 ob.forEach((obj) => {
  ul.innerHTML += `
   <li class="list-item">
   <div>
   <input type="checkbox" name="checkbox" id="id-${obj.index}" value="value">
   <input type="text" id="edit-input-${obj.index}", class = "edit-input">
   <label for="id-${obj.index}" id="label-${obj.index}">${obj.description}</label>
   </div>
   <div>
   <span class="collapse" id='col-${obj.index}'><i class="fa-solid fa-ellipsis-vertical"></i></span>
   <span class="delete-icon"  id='del-${obj.index}'><i class="fa-solid fa-trash-can"></i></span>
   </div>
  </li>
   `;
 });
};

const toggle = (objIndex, extra = {}) => {
 document.getElementById(`${extra.selfIdExtension}-${objIndex}`).style.display = extra.selfDisplay;
 document.getElementById(`${extra.otherIdExtension}-${objIndex}`).style.display = extra.otherDisplay;
};

const addEvent = (arr, idExtension, eType, func, extra) => {
 // this add event to dynamic element
 arr.forEach((obj) => {
  // id such " col-1"
  document.getElementById(`${idExtension}-${obj.index}`).addEventListener(`${eType}`, (e) => {
   e.preventDefault();
   if (e.type === 'click' && idExtension === 'label') {

    // get the value from the particular label click before toggle
    const val = document.getElementById(`${extra.selfIdExtension}-${obj.index}`).innerText;
    document.getElementById(`${extra.otherIdExtension}-${obj.index}`).value = val;
    e.preventDefault();
    func(obj.index, extra);
    return
   } 
   
 
   func(obj.index, extra);
   
  });
 });
};

const loadList = (obj) => {
 ul.style.display = 'flex';
 addListToPage(obj);

 // add eventListener to element
 // call advent tell it how to style yourself from others
 addEvent(obj, 'del', 'mouseleave', toggle,
  {
   selfIdExtension: 'del', selfDisplay: 'none', otherDisplay: 'inline-flex', otherIdExtension: 'col',
  });

 addEvent(obj, 'col', 'mouseenter', toggle,
  {
   selfIdExtension: 'col',
   selfDisplay: 'none',
   otherDisplay: 'inline-flex',
   otherIdExtension: 'del',
  });

 addEvent(obj, 'edit-input', 'focusout', toggle,
  {
   selfIdExtension: 'edit-input',
   selfDisplay: 'none',
   otherDisplay: 'inline-flex',
   otherIdExtension: 'label',
  });

 addEvent(obj, 'label', 'click', toggle,
  {
   selfIdExtension: 'label',
   selfDisplay: 'none',
   otherDisplay: 'inline-flex',
   otherIdExtension: 'edit-input',
  });

};

window.onload = () => {
 todo = getLocalStorage();
 loadList(todo);
};

inp.addEventListener('keypress', (event) => {
 if (event.key === 'Enter') {
  const val = event.target.value;
  if (/\w+\s*/gi.test()) {
   // input not empty
   console.log("am")
   todo = addToList(val);
   setLocalStorage(todo);
   ul.innerHTML = '';
   event.preventDefault()
   inp.value = '';
   loadList(todo);
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
  loadList(todo);
 }
 // else if(/[label]/)

});

ul.addEventListener('focusout', (e) => {
 e.preventDefault();
 if (/[a-z]{4}-{1}[a-z]*/.test(e.target.id)) {
  const val = e.target.id.split('-')
  if(e.target.value !== ""){
   updateList(todo,val[2], e.target.value)
   setLocalStorage(todo);
  }
  ul.innerHTML = '';
  loadList(todo);
 }
});
