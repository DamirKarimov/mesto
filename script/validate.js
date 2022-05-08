 const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn-form',
    inactiveButtonClass: 'popup__btn-form_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input_error-show',
}


function enableValidation(config) {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll(config.formSelector));
  
    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        // У каждой формы отменим стандартное поведение
        evt.preventDefault();
      });
  
      // Для каждой формы вызовем функцию setEventListeners,
      // передав ей элемент формы
      setEventListeners(formElement, config);
      
    });
  };

  function setEventListeners (formElement, config) {
    // Найдём все поля формы и сделаем из них массив
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    
    // Найдём в текущей форме кнопку отправки
    const buttonElement = formElement.querySelector(config.submitButtonSelector);

    // чтобы проверить состояние кнопки в самом начале
    toggleButtonState(config, inputList, buttonElement);
  
    inputList.forEach((inputElement, index, array) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(config, formElement, inputElement);
        
        // Вызовем toggleButtonState и передадим ей массив полей и кнопку
        toggleButtonState(config, array, buttonElement);
      });
    });
  };

  const checkInputValidity = (config, formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      // showInputError теперь получает параметром форму, в которой
      // находится проверяемое поле, и само это поле
      showInputError(config, formElement, inputElement, inputElement.validationMessage);
    } else {
      // hideInputError теперь получает параметром форму, в которой
      // находится проверяемое поле, и само это поле
      hideInputError(config, formElement, inputElement);
    }
  };


const showInputError = (config, formElement, inputElement, errorMessage) => {
    // Находим элемент ошибки внутри самой функции
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.classList.add(config.errorClass);
    errorElement.textContent = errorMessage;  
  };
  
  const hideInputError = (config, formElement, inputElement) => {
    // Находим элемент ошибки
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
  };


  // Функция принимает массив полей

  const hasInvalidInput = (inputList) => {
    // проходим по этому массиву методом some
    return inputList.some((inputElement) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся функция
      // hasInvalidInput вернёт true
  
      return !inputElement.validity.valid;
    })
  };

  function toggleButtonState(config, inputList, buttonElement){
    if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
  }

  // Вызовем функцию
  enableValidation(config);

