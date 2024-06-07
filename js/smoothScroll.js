'use strict';

const smoothScroll = () => {
	const navbar = document.querySelector('.header__nav');
const links = navbar.querySelectorAll('a');

links.forEach(link => {
	link.addEventListener('click', (evt) => {
		evt.preventDefault();
		// const section = document.querySelector(link.getAttribute('href')); // получаем секцию, к которой нам нужно прокрутить страницу
		const anchor = link.getAttribute('href');
		// Сделаем проверку, если querySelector нашёл секцию, то мы прокрутим к ней
		if (anchor) {
			/* section.scrollIntoView({
				block: 'start',
				behavior: 'smooth'
			}); */
			seamless.scrollIntoView(document.querySelector(anchor), {
				behavior: 'smooth',
				block: 'start',
				inline: 'center',
			});
		}
	})
});
}

smoothScroll();