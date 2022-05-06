
const showInputError = (formElement, inputElement, errorMessage) => {
    // Находим элемент ошибки внутри самой функции
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    errorElement.classList.add('popup__error');
    errorElement.textContent = errorMessage;  
  };
  
  const hideInputError = (formElement, inputElement) => {
    // Находим элемент ошибки
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    errorElement.classList.remove('popup__error');
    errorElement.textContent = '';
  };

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      // showInputError теперь получает параметром форму, в которой
      // находится проверяемое поле, и само это поле
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      // hideInputError теперь получает параметром форму, в которой
      // находится проверяемое поле, и само это поле
      hideInputError(formElement, inputElement);
    }
  };


  const setEventListeners = (formElement) => {
    // Найдём все поля формы и сделаем из них массив
    const inputList = Array.from(formElement.querySelectorAll(`.popup__input`));
    // Найдём в текущей форме кнопку отправки
    const buttonElement = formElement.querySelector('.popup__btn-form');

    // чтобы проверить состояние кнопки в самом начале
    toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement);
  
        // Вызовем toggleButtonState и передадим ей массив полей и кнопку
        toggleButtonState(inputList, buttonElement);
      });
    });
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


  const enableValidation = () => {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll('.popup__form'));
  
    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        // У каждой формы отменим стандартное поведение
        evt.preventDefault();
      });
  
      // Для каждой формы вызовем функцию setEventListeners,
      // передав ей элемент формы
      setEventListeners(formElement);
      
    });
  };
  
  // Вызовем функцию
  enableValidation();