'use strict';

// * === Alternative accordion functionality. Description appear under it’s title, if title has been clicked. But all the other descriptions will be disappeared. === * \\

const accordion2 = () => {
	const contents = document.querySelectorAll('.program-line__content');
	const titles = document.querySelectorAll('.program-line__title');
	const descriptions = document.querySelectorAll('.program-line__descr');

	const addActive = (elem) => elem.classList.add('active');

	const removeActive = (elem) => elem.classList.remove('active');

	contents.forEach((elem, idx) => {
		const title = elem.querySelector('.program-line__title');

		title.addEventListener('click', () => {
			if (title.classList.contains('active')) {
				removeActive(titles[idx]);
				removeActive(descriptions[idx]);
			} else {
				titles.forEach((title, index) => {
					if (idx !== index) removeActive(title)
				});
				descriptions.forEach((descr, index) => {
					if (idx !== index) removeActive(descr)
				});
				addActive(titles[idx]);
				addActive(descriptions[idx]);
			}
		})
	});
}

accordion2();