'use strict';

const modalWindow = document.querySelector('.modal');
const btnModals = document.querySelectorAll('.modal__btn');
const modalClose = document.querySelector('.modal__close');
const modalSend = document.querySelector('.modal__send');
const body = document.querySelector('body');

btnModals.forEach((item) => {
  item.addEventListener('click', () => {
    modalWindow.style.display = 'flex';
    body.classList.add('no-scroll');
  });
});

modalWindow.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal__inner');

  if (!isModal) {
    modalWindow.style.display = 'none';
    body.classList.remove('no-scroll');
  }
});

modalClose.addEventListener('click', () => {
  modalWindow.style.display = 'none';
  body.classList.remove('no-scroll');
});

modalSend.addEventListener('click', () => {
  modalWindow.style.display = 'none';
  body.classList.remove('no-scroll');
})