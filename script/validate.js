 const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn-form',
    errorClass: 'popup__error',
}

const enableValidation = () => {
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

  const setEventListeners = (formElement, config) => {
    // Найдём все поля формы и сделаем из них массив
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    
    // Найдём в текущей форме кнопку отправки
    const buttonElement = formElement.querySelector(config.submitButtonSelector);

    // чтобы проверить состояние кнопки в самом начале
    toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement, index, array) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(config, formElement, inputElement);
        
        // Вызовем toggleButtonState и передадим ей массив полей и кнопку
        toggleButtonState(array, buttonElement);
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
    // Остальной код такой же
    errorElement.classList.add(config.errorClass);
    errorElement.textContent = errorMessage;  
  };
  
  const hideInputError = (config, formElement, inputElement) => {
    // Находим элемент ошибки
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
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

  function toggleButtonState(inputList, buttonElement){
    if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup_disabled');
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove('popup_disabled');
    buttonElement.disabled = false;
  }
  }

  // Вызовем функцию
  enableValidation(config);

