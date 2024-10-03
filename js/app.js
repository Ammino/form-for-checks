function sendform() {
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