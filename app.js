let addBtn = document.querySelector('#liveToastBtn');
// let removeItem = document.querySelector('#RemoveItem');
let divList = document.querySelector('#divList');
let addInput = document.querySelector('#task');

function addItem() {
  // add item start here
  if (addInput.value == '' || addInput.value == ' ') {
    $('.error').toast('show');
    addInput.value = '';
  } else {
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
    localStorage.setItem(`item ${localStorage.length + 1}`, li.innerText); // save item to local storage
    $('.success').toast('show');
    // add item end here
    //  remove items code space
    const close = document.querySelectorAll('.fa');
    for (let i = 0; i < close.length; i++) {
      close[i].addEventListener('click', () => {
        close[i].parentElement.remove();
        // localStorage.removeItem(`item ${localStorage.length - 1}`);
      });
    }

    //  remove items code space end
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
