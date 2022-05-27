import { 
  initialCards, config, popupNameInput, popupJobInput, 
  profileBtnEdit, btnAddImage, profileName, profileProfession, 
  popupCloseEdit, popupCloseAdd, popupСloseImage, popupEdit, 
  popupAdd, popupImage, popupAddSubmit, popupEditSubmit, popupFormEdit,
  popupFormAdd,popupShowImage, profileTitle, profileSubtitle, elementsBlockGrid,
  popupInputNameAdd, popupInputLinkAdd
 } from './const.js'; 
import Card from './Card.js';
import FormValidator from './FormValidator.js';


const validProfile = new FormValidator(config, popupFormEdit);
const validPhoto = new FormValidator(config, popupFormAdd);
validProfile.enableValidation();
validPhoto.enableValidation();

export function showPopup (popupName){
popupName.classList.add('popup_opened');
document.addEventListener('keydown', handleHotkey);
popupName.addEventListener('mousedown', handleOverlayClick);
}

function closePopup(popupName) {
popupName.classList.remove('popup_opened');
document.removeEventListener('keydown', handleHotkey);
}

document.removeEventListener('click', handleOverlayClick);

function handleHotkey(event) {

  if (event.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened'); 
    closePopup(activePopup);
  }
}

function handleOverlayClick(event) {
  if (event.target.classList.contains('popup_opened')) {
    closePopup(event.target);
  }
}


function insertInputValues(){
  popupNameInput.value =  profileName.textContent;
  popupJobInput.value = profileProfession.textContent;
}


profileBtnEdit.addEventListener('click', () => {
  showPopup(popupEdit);
  insertInputValues();
})
popupCloseEdit.addEventListener('click', () =>  closePopup(popupEdit));
popupEditSubmit.addEventListener('click', () => closePopup(popupEdit));


btnAddImage.addEventListener('click', () => {
  showPopup(popupAdd);
  validPhoto.toggleButtonState();
});


popupCloseAdd.addEventListener('click', () => closePopup(popupAdd));
popupAddSubmit.addEventListener('click', () => closePopup(popupAdd));


popupImage.addEventListener('click', () => showPopup(popupShowImage));
popupСloseImage.addEventListener('click', () => closePopup(popupShowImage));


function handleProfileFormSubmit (event) {
    event.preventDefault();

    profileTitle.textContent = popupNameInput.value;
    profileSubtitle.textContent = popupJobInput.value;
    
}

function handlePhotoFormSubmit (event) {
  event.preventDefault();

  const data = {};
  data.name = popupInputNameAdd.value;
  data.link = popupInputLinkAdd.value;

  const newCard = createCard(data);
  elementsBlockGrid.prepend(newCard);

  popupFormAdd.reset();
  validPhoto.toggleButtonState();

  closePopup(popupAdd)
}


popupFormAdd.addEventListener('submit', handlePhotoFormSubmit);
popupFormEdit.addEventListener('submit', handleProfileFormSubmit);


function createCard(item) {
  const card = new Card(item, '.template');
  return card.generateCard();
}


initialCards.forEach((item) => {
	const cardElement = createCard(item);
	elementsBlockGrid.append(cardElement);
});







