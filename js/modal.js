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

	// ? Как работает метод "closest"? Когда пользователь совершает клик по какому-то месту на экране браузера в условиях модального окна, то мы получим "event target", точнее любой элемент, по которому он кликнул вернётся в свойство "target" этот объекта события. А метод "closest" первым делом проверит наличие переданного в него селектора в этом элементе. Если он его найдёт, то вернёт его в переменную "isModal", а если не найдёт, то поднимется на уровень выше и проверит у родительского элемента этот селектор и т.д. Если же он не будет найдет, то в "isModal" вернётся null. Теперь это будет значить, что если мы кликнем на любой элемент внутри модального окна, то JS найдёт селектор ".modal__inner", а если вне его, то соответственно нет и тогда его скроет поменяв CSS стили на "display: none;".

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