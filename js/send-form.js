const sendForm = () => {
	const form = document.querySelector('.modal');

	// * 1.0 Нам нужно получить значения каждого input’а перед отправкой, записать в переменную, создать объект и отправить объект на сервер.
	// 1.1 Сперва создадим 3 переменные для каждой строки ввода формы.
	// 1.2 А симулировать отправку на сервер мы будем при помощи JSONplaceholder API
	form.addEventListener('submit', (evt) => {
		evt.preventDefault();

		const inputName = form.querySelector('input[type=text]');
		const inputPhone = form.querySelector('input[type=tel]');
		const inputEmail = form.querySelector('input[type=email]');

		const formData = {
			name: inputName.value,
			phone: inputPhone.value,
			email: inputEmail.value,
		}

		sendData(formData);
	})

	// 1.3.0 С помощью fetch() мы принимаем первым аргументом url для связи с сервером, а вторым опциональные настройки (если их не передавать, то по умолчанию стоит метод "GET").
	// 1.3.1 Далее метод then() будет ожидать успешного получения ответа сервера и запустит расшифровку данных ответа из JSON в JS-объект.
	// 1.3.2 Также нам нужно продумать случай, если сервер вернёт ошибку (например не верный URL-адрес). Это мы можем сделать специальным методом catch(). Но нам также нужно проделать проверку, что статус ответа 404, т.е. такой адрес не найден
	const getData = () => {
		fetch('https://jsonplaceholder.typicode.com/todos/4')
			.then(response => {
				if (response.status === 404) {
					throw new Error("Запрашиваемая ссылка на сервер не найдена, пожалуйста перепроверьте ссылку и попробуйте снова.");
				}
				response.json();
			})
			.then(json => console.log(json))
			.catch(error => console.error(error.message));
	}

	// * 2.0 Создадим ещё одну функцию, которая будет также использовать fetch() для связи с сервером, но уже использовать метод "POST" для отсылки и сохранения данных на сервере. Здесь у нас уже объект с настройками, в котором собственно указан метод, "body" - тело отсылаемых данных и "headers" - заголовки, описывающие тип данных и кодировку, без которых сервер не примет данные.
	const sendData = (data) => {
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => {
				if (response.status === 201) console.log('Данные были успешно сохранены!');
				response.json();
			})
			.then((json) => console.log(json))
			.finally(form.reset());
	}

	getData();
}

sendForm();