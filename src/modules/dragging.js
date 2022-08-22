const handleDrop = (event) =>{
 let data = null;
 let newDragList = [];
 let index = 0;
 let node = event.target.parentNode.getElementsByClassName('list-item');
 
 for(let elements of node){
  data =  {
    index : index,
    description : elements.getElementsByTagName('label')[0].innerText,
    completed : elements.getElementsByTagName('input')[0].value
   }
  index += 1;
  newDragList =newDragList.concat(data)
 }
 return newDragList
}

export default handleDrop