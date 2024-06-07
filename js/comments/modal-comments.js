'use strict';

const modal = () => {
	const body = document.querySelector('body');
	const modalWindow = document.querySelector('.modal');
	const modalBtns = document.querySelectorAll('.modal__btn');
	const modalClose = document.querySelector('.modal__close');
	const modalSend = document.querySelector('.modal__send');

	modalBtns.forEach(item => {
		item.addEventListener('click', () => {
			modalWindow.style.display = 'flex';
			body.classList.add('no-scroll');
		});
	});

	modalWindow.addEventListener('click', (evt) => {
		const isModal = evt.target.closest('.modal__inner');

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
	});
}

modal();