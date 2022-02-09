let addBtn = document.querySelector('#liveToastBtn');
// let removeItem = document.querySelector('#RemoveItem');
let divList = document.querySelector('#divList');
let addInput = document.querySelector('#task');
let myStorage = localStorage.getItem('task');
function addItem() {
  // add item start here
  if (addInput.value !== '') {
    const ul = divList.querySelector('ul');
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.innerHTML = addInput.value;
    span.classList = 'fa fa-times';
    addInput.value = '';
    ul.appendChild(li);
    li.appendChild(span);
    li.classList.add(
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-center'
    );
    localStorage.setItem('task', ul.outerHTML);
    // add item end here
    //  remove items code space
    const close = document.querySelectorAll('.fa');
    for (let i = 0; i < close.length; i++) {
      close[i].addEventListener('click', () => {
        close[i].parentElement.remove();
      });
    }
    //  remove items code space end
  } else {
    $('.error').toast('show');
  }
}
// check list item start here
let list = document.querySelector('ul');
list.addEventListener(
  'click',
  function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  },
  false
);
// check list item end here
