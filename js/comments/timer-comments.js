'use strict';

// * === 1) Timer — a countdown to the end of the promotion. === * \\
// * === 2) Declension of timer words in cases depending on number. === * \\

const timerDays = document.querySelector('.timer__days');
const timerHours = document.querySelector('.timer__hours');
const timerMinutes = document.querySelector('.timer__minutes');
const timerSeconds = document.querySelector('.timer__seconds');

let timerInterval;

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

	// * Чтобы обратиться к следующему по списку элементу (надписи под числом таймера) используем свойство nextElementSibling и поменяем ему значение на то, что выведет функция getTimerWords().
	timerDays.nextElementSibling.textContent = getTimerWords(days, ['день', 'дня', 'дней']);
	timerHours.nextElementSibling.textContent = getTimerWords(hours, ['час', 'часа', 'часов']);
	timerMinutes.nextElementSibling.textContent = getTimerWords(minutes, ['минута', 'минуты', 'минут']);
	timerSeconds.nextElementSibling.textContent = getTimerWords(seconds, ['секунда', 'секунды', 'секунд']);

	// Чтобы остановить таймер, когда он дойдёт до 0
	if (timeRemaining <= 0) {
		clearInterval(timerInterval);
		timerDays.textContent = '00';
		timerHours.textContent = '00';
		timerMinutes.textContent = '00';
		timerSeconds.textContent = '00';
	}
}

tickingTimer();
timerInterval = setInterval(tickingTimer, 500); // Чтобы можно было остановить интервал, мы занесли его в переменную.

// * Напишем специальную функцию, которая будет склонять по падежам и менять надписи под числами таймера в зависимости от их значения. Примет 2 параметра: 1) значение, 2) массив необходимых нам для этой задачи значений.
// Далее с помощью условий будем обрабатывать входные значения value. Сперва избавимся от возможных отрицательных значений.
// Также нас интересуют только две последние цифры, поэтому можем отделить остаток деления на 100. (% 100)
// Далее определяем находится ли передаваемый в функцию value между 10 и 20
function getTimerWords (value, words) {
	value = Math.abs(value) % 100; // Избавляемся от отрицательных значений и оставляем лишь остаток деления на 100
	const lastNum = value % 10; // Проверим последнее число.
	switch (true) {
		case value > 10 && value < 20:
			return words[2];
		case lastNum > 1 && lastNum < 5:
			return words[1];
		case lastNum === 1:
			return words[0];
		default:
			return words[2];
	}
}

// Создадим массив склонения слов под секундами.
// console.log(getTimerWords(51, ['секунда', 'секунды', 'секунд']));