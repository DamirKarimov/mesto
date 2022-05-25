export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn-form',
    inactiveButtonClass: 'popup__btn-form_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input_error-show',
}

export const popupForm = document.querySelector('.popup__form');
  
export const popupNameInput = popupForm.querySelector('.popup__name-input');
export const popupJobInput = popupForm.querySelector('.popup__job-input');
  
export const profileBtnEdit = document.querySelector('.profile__btn_type_edit');
export const btnAddImage = document.querySelector('.profile__btn_type_add');
export const profileName = document.querySelector('.profile__title');
export const profileProfession = document.querySelector('.profile__subtitle');
  
export const popupCloseEdit = document.querySelector('.popup__close-edit');
export const popupCloseAdd = document.querySelector('.popup__close-add');
export const popupСloseImage = document.querySelector('.popup__close-image');
  
export const popupEdit = document.querySelector('.popup_edit');
export const popupAdd = document.querySelector('.popup_add');
export const popupImage = document.querySelector('.popup__image');
  
export const popupAddSubmit = document.querySelector('.popup__submit-add');
export const popupEditSubmit = document.querySelector('.popup__submit-edit');

export const popupInputNameAdd = document.querySelector('.popup__input_name-add');
export const popupInputLinkAdd = document.querySelector('.popup__input_link-add');
  
export const popupFormEdit = document.querySelector('.popup__form-edit');
export const popupFormAdd = document.querySelector('.popup__form-add');

export const popupShowImage = document.querySelector('.popup_show-image');
export const popupImageDescription = document.querySelector('.popup__image-description');
  
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');
   
export const elementsBlockGrid = document.querySelector(".elements");