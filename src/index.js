import './style.css';

const todo = [
  {
    description: 'Morning session group',
    complete: true,
    index: 0,
  },
  {
    description: 'After program group',
    complete: true,
    index: 1,
  },
  {
    description: 'Even session group',
    complete: false,
    index: 2,
  },
  {
    description: 'Weekend program',
    complete: true,
    index: 3,
  },
];

const ul = document.getElementById('list');
const loadList = () => {
  ul.style.display = 'flex';
  todo.forEach((obj) => {
    ul.innerHTML += `
   <li class="list-item">
   <div>
   <input type="checkbox" name="checkbox" id="id-${obj.index}" value="${obj.complete}">
   <label for="id-${obj.index}">${obj.description}</label>
   </div>
   <div>
   <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
   </div>
  </li>
   `;
  });
};

window.onload = loadList();