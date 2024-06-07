'use strict';

const navbar = document.querySelector('.header__nav');
const links = navbar.querySelectorAll('a');

links.forEach(link => {
	link.addEventListener('click', (evt) => {
		evt.preventDefault();
		const section = document.querySelector(link.getAttribute('href')); // получаем секцию, к которой нам нужно прокрутить страницу

		// Сделаем проверку, если querySelector нашёл секцию, то мы прокрутим к ней
		if (section) {
			section.scrollIntoView({
				block: 'start',
				behavior: 'smooth'
			});
		}
	})
});