const createMyElement = (el, cl = '', ids = '') => {
  const doc = document.createElement(el);

  if (ids !== '') {
    doc.id = ids;
  }

  if (cl !== '') {
    doc.className = cl;
  }
  return doc;
};

const addListToPage = (ul, ob) => {
  ob.forEach((obj) => {
    const div = createMyElement('div');
    const checkbox = createMyElement('input', '', `id-${obj.index}`);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'checkbox');
    checkbox.setAttribute('value', `${obj.completed}`);

    const label = createMyElement('label', '', `label-${obj.index}`);
    label.setAttribute('for', `id-${obj.index}`);
    label.innerHTML = `${obj.description}`;

    if (`${obj.completed}` === 'true') {
      label.style.textDecoration = 'line-through';
      checkbox.setAttribute('checked', true);
    }

    div.appendChild(checkbox);
    div.innerHTML += `  <input type="text" id="edit-input-${obj.index}", class = "edit-input">
  `;
    div.appendChild(label);

    const div2 = createMyElement('div');
    div2.innerHTML += `
   <span class="collapse" id='col-${obj.index}'><i class="fa-solid fa-ellipsis-vertical"></i></span>
   <span class="delete-icon"  id='del-${obj.index}'><i class="fa-solid fa-trash-can"></i></span>
   `;

    const li = createMyElement('li', 'list-item');
    li.appendChild(div);
    li.appendChild(div2);
    li.setAttribute('draggable', 'true');
    ul.appendChild(li);
  });
};

export default addListToPage;