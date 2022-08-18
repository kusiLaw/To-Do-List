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

const addToList = (text) => {
 return todo.concat( {
  index:todo.length,
  description:text,
  complete: false,
});
}

const deleteItem = (obj, index) =>{
 return obj.filter((list) => list.index != index[1]);
}

const updateIndex =(obj)=>{
 let index = 0;
  obj.forEach((objs) => {
   objs.index = index;
   index += 1
  })

}

const addListToPage = (ob) =>{
   ob.forEach((obj) => {
    ul.innerHTML += `
   <li class="list-item">
   <div>
   <input type="checkbox" name="checkbox" id="id-${obj.index}" value="${obj.complete}">
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
}

const toggle = (objIndex, extra={}) => {
 if (extra.property === "text-decoration"){
  // document.getElementById(`${extra.selfIdExtension}-${objIndex}`).style.display = extra.selfDisplay
  document.getElementById(`${extra.otherIdExtension}-${objIndex}`).style.textDecoration = extra.otherDisplay
  
  return;
 }
 
 document.getElementById(`${extra.selfIdExtension}-${objIndex}`).style.display = extra.selfDisplay
 document.getElementById(`${extra.otherIdExtension}-${objIndex}`).style.display = extra.otherDisplay

}

const addEvent = (arr,idExtension, eType, func, extra) =>{
 // this add event to dynamic element
 arr.forEach((obj) => {
  
  // id such " col-1"
  document.getElementById(`${idExtension}-${obj.index}`).addEventListener(`${eType}`,(e) =>{
    e.preventDefault();
     if (e.type === "click" && idExtension ==='label'){
      
      // get the value from the particular label click before toggle
      let val = document.getElementById(`${extra.selfIdExtension}-${obj.index}`).innerText
       document.getElementById(`${extra.otherIdExtension}-${obj.index}`).value = val;
       func(obj.index, extra) 
     
     }else if(e.type === "focusout" && idExtension ==="edit-input"){
      
      //label edit-input press
       //assign edit input to label if not empty
       if (document.getElementById(`${extra.selfIdExtension}-${obj.index}`).value !== ""){
        let doc = document.getElementById(`${extra.selfIdExtension}-${obj.index}`)
        document.getElementById(`${extra.otherIdExtension}-${obj.index}`).innerHTML = doc.value
        doc.value = "";
        func(obj.index, extra); 
       }else{
        func(obj.index, extra);
       }

     }else{

      func(obj.index, extra) 
     }
  });
 });
};

const loadList = (obj) => {
  ul.style.display = 'flex';
  addListToPage(obj)

  //add eventListener to element
  //call advent tell it how to style yourself from others
  addEvent(obj, 'del', 'mouseleave', toggle,
  {selfIdExtension:"del",selfDisplay:"none", otherDisplay: "inline-flex", otherIdExtension:'col'})
  
  addEvent(obj, 'col', 'mouseenter', toggle, 
  {selfIdExtension:"col",selfDisplay:"none", 
  otherDisplay:"inline-flex", otherIdExtension:'del'})
 
  addEvent(obj, 'edit-input', 'focusout', toggle, 
 {selfIdExtension:"edit-input",selfDisplay:"none",
  otherDisplay:"inline-flex", otherIdExtension:'label'})
 
  addEvent(obj, 'id', 'check', toggle, 
 {selfIdExtension:"id",selfDisplay:"none", 
 otherDisplay: "inline-flex", otherIdExtension: 'label'})
 
  addEvent(obj, 'label', 'click', toggle, 
  {selfIdExtension:"label",selfDisplay:"none", 
  otherDisplay: "inline-flex", otherIdExtension: 'edit-input'})
 
  addEvent(obj, 'edit-input', 'focusout', toggle, 
  {selfIdExtension:"edit-input",selfDisplay:"none", 
  otherDisplay: "inline-flex", otherIdExtension: 'label'})

};

window.onload = () =>{
 todo = getLocalStorage()
 loadList(todo);
} 

inp.addEventListener("keypress", (event)=> {
 if (event.key === 'Enter') { 
   let val = event.target.value
  if(/\w+/gi.test()){  
   //input not empty
   todo = addToList(val)
   setLocalStorage(todo);
   ul.innerHTML = ''
   inp.value = ""
   loadList(todo);
 }else{
  return;
 }
 } 
});

ul.addEventListener('click',(e)=>{
  e.preventDefault()
 if(/[id]/.test(e.target.parentNode.id)){
  let  val = e.target.parentNode.id.split("-");
   todo = deleteItem(todo, val);
   updateIndex(todo);
   setLocalStorage(todo);
   ul.innerHTML = '';
   loadList(todo);

  }
})

