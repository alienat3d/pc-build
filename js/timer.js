'use strict';

// * === 1) Timer — a countdown to the end of the promotion. === * \\
// * === 2) Declension of timer words in cases depending on number. === * \\

const timer = () => {
	const timerDays = document.querySelector('.timer__days');
	const timerHours = document.querySelector('.timer__hours');
	const timerMinutes = document.querySelector('.timer__minutes');
	const timerSeconds = document.querySelector('.timer__seconds');

	let timerInterval;

	const getTimerWords = (value, words) => {
		value = Math.abs(value) % 100;
		const lastNum = value % 10;
		switch (true) {
			case lastNum > 1 && lastNum < 5:
				return words[1];
			case lastNum === 1:
				return words[0];
			default:
				return words[2];
		}
	}

	const tickingTimer = () => {
		const date = new Date().getTime();
		const dateDeadline = new Date('1 july 2024').getTime();
		const timeRemaining = (dateDeadline - date) / 1000;

		const days = Math.floor(timeRemaining / 60 / 60 / 24);
		const hours = Math.floor((timeRemaining / 60 / 60) % 24);
		const minutes = Math.floor((timeRemaining / 60) % 60);
		const seconds = Math.floor(timeRemaining % 60);

		const fDays = days < 10 ? '0' + days : days;
		const fHours = hours < 10 ? '0' + hours : hours;
		const fMinutes = minutes < 10 ? '0' + minutes : minutes;
		const fSeconds = seconds < 10 ? '0' + seconds : seconds;

		timerDays.textContent = fDays;
		timerHours.textContent = fHours;
		timerMinutes.textContent = fMinutes;
		timerSeconds.textContent = fSeconds;

		timerDays.nextElementSibling.textContent = getTimerWords(days, ['день', 'дня', 'дней']);
		timerHours.nextElementSibling.textContent = getTimerWords(hours, ['час', 'часа', 'часов']);
		timerMinutes.nextElementSibling.textContent = getTimerWords(minutes, ['минута', 'минуты', 'минут']);
		timerSeconds.nextElementSibling.textContent = getTimerWords(seconds, ['секунда', 'секунды', 'секунд']);

		if (timeRemaining <= 0) {
			clearInterval(timerInterval);
			timerDays.textContent = '00';
			timerHours.textContent = '00';
			timerMinutes.textContent = '00';
			timerSeconds.textContent = '00';
		}
	}

	tickingTimer();

	timerInterval = setInterval(tickingTimer, 500);
}

timer();