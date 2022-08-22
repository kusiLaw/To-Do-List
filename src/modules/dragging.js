const handleDrop = (event) => {
  let data = null;
  let newDragList = [];

  const node = event.target.parentNode.getElementsByClassName('list-item');

  for (let i = 0; i < node.length; i += 1) {
    data = {
      index: i,
      description: node[i].getElementsByTagName('label')[0].innerText,
      completed: node[i].getElementsByTagName('input')[0].value,
    };
    newDragList = newDragList.concat(data);
  }

  return newDragList;
};

export default handleDrop;