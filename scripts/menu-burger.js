const openBtn = document.querySelectorAll('.navbar__btn');
let activeList = null;

function findList(elem) {
  const listId = elem.dataset.list;
  return document.querySelector(`#${listId}`);
}

function chooseEvent(e) {
  if (activeList === null) {
    openList(e);
  } else {
    closeList(e);
  }
}

function addClass(elem) {
  elem.classList.add('active');

  activeList = elem;
}

function openList(e) {
  e.preventDefault();
  const btnImg = e.currentTarget.querySelector('img');
  btnImg.src = './img/burger/close.svg';
  const list = findList(e.currentTarget);
  addClass(list);
}

function removeClass(elem) {
  elem.classList.remove('active');
  activeList = null;
}

function closeList(e) {
  const list = findList(e.currentTarget);
  const btnImg = e.currentTarget.querySelector('img');
  btnImg.src = './img/burger/open.svg';
  removeClass(list);
}

openBtn.forEach((btn) => {
  btn.addEventListener('click', chooseEvent);
});
