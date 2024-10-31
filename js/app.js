// задаем переменную формы отправки по id
const formCheck = document.getElementById('js-form')
// "слушаем" кнопку submit в форме и вызываем функцию обработки

if (formCheck) {
	formCheck.addEventListener('submit', handleFormSubmit)
}

// функция обработки кнопки submit
function handleFormSubmit(event) {
	// не отправляем данные автоматически
	event.preventDefault()

	// вызываем валидацию формы на стороне клиента
	validrezult = formValid();

	// если форма прошла валидацию
	if (validrezult==true) {
		// записываем данные в переменную
		const data = serializeForm(formCheck)

		// в консольке можно глянуть данные, которые отправляются
		console.log(Array.from(data.entries()))

		// и разрешаем отправку данных
		formCheck.submit(data);
	}
}

function serializeForm(formNode) {
	// возвращаем все данные из формы
	return new FormData(formNode)

	// вообще можно переписать на одно поле
}

function formValid() {
	const textError = document.getElementById("js--info");
	const numberuid = document.getElementById("js--numberuid");
	const numberuidValue = numberuid.value;
	let errorContent = '';
	let isValid = true;

	textError.textContent = errorContent;
	numberuid.classList.remove('text__error');
	
	if (numberuidValue==="") {
		errorContent = 'Введите номер квитанции UID';
		isValid = false;
	} else if (numberuidValue.length!=18 ) {
		errorContent = 'Номер квитанции должен содержать 18 цифр';
		isValid = false;
	}

	if (isValid==false) {
		numberuid.classList.add('form__input__error');
		textError.textContent = errorContent;
		textError.classList.add('text__error');
		numberuid.focus();			
	} else {
		numberuid.classList.add('form__input__valid');
		textError.textContent = 'Все верно! Немного подождите.';
		textError.classList.add('text__valid');
	}

	return isValid;
}

// Mobile nav button
const navBtn = document.querySelector('.js--mobilemenu-btn');
const mobileMenu = document.querySelector('.js--mobilemenu-nav');
const nav = document.querySelector('.js--mobilemenu');

navBtn.onclick = function () {
	nav.classList.toggle('mobilemenu__opened');
	navBtn.classList.toggle('active');
	document.body.classList.toggle('no-scroll');
};

// если появятся ссылки просто я якорем:

// const menuLinks = Array.from(nav.querySelectorAll('a'));

// menuLinks.forEach((pic) => {
// 	pic.onclick = function() {
// 		if (this.hash) {
// 			nav.classList.toggle('mobilemenu__opened');
// 			navBtn.classList.toggle('active');
// 			document.body.classList.toggle('no-scroll');
// 		}
// 	};		
// });