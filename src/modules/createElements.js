const addListToPage = (ul, ob) => {
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

export default addListToPage;