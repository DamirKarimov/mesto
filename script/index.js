const popups = document.querySelectorAll('.popup')

const popupContainerEdit = document.querySelector('.popup__container_edit');

const popupForm = document.querySelector('.popup__form');
const popupInput = document.querySelector('.popup__input');

const popupNameInput = popupForm.querySelector('.popup__name-input');
const popupJobInput = popupForm.querySelector('.popup__job-input');

const profileBtnEdit = document.querySelector('.profile__btn_type_edit');
const btnAddImage = document.querySelector('.profile__btn_type_add');
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');

const popupCloseEdit = document.querySelector('.popup__close-edit');
const popupCloseAdd = document.querySelector('.popup__close-add');
const popupСloseImage = document.querySelector('.popup__close-image');

const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupImage = document.querySelector('.popup__image');

const popupAddSubmit = document.querySelector('.popup__submit-add');
const popupEditSubmit = document.querySelector('.popup__submit-edit');

const popupInputNameAdd = document.querySelector('.popup__input_name-add');
const popupInputLinkAdd = document.querySelector('.popup__input_link-add');

const popupFormAdd = document.querySelector('.popup__form-add');
const popupContainerAdd = document.querySelector('.popup__container_add');
const popupContainerImage = document.querySelector('.popup__container-image')

const popupShowImage = document.querySelector('.popup_show-image');
const popupImageDescription = document.querySelector('.popup__image-description');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const inputValueName = document.querySelector('.popup__input_name-add');
const inputValueLink = document.querySelector('.popup__input_link-add');



function showPopup (popapName){
  popapName.classList.add('popup_opened');

document.addEventListener('keydown', handleHotkey);
document.addEventListener('mousedown', handleOverlayClick);
//enableValidation(config);
}

function closePopup(popupName) {
popupName.classList.remove('popup_opened');

document.removeEventListener('keydown', handleHotkey);
document.removeEventListener('click', handleOverlayClick);
}

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



function disableSubmitButton (button){
  button.classList.add('popup__btn-form_disabled');
  button.disabled = true;
}

btnAddImage.addEventListener('click', () => {
  showPopup(popupAdd);
  const buttonCardDisable = popupAdd.querySelector('.popup__btn-form');
  disableSubmitButton(buttonCardDisable); 
});




popupCloseEdit.addEventListener('click', () => { closePopup(popupEdit)});

popupEditSubmit.addEventListener('click', () => {closePopup(popupEdit)});

btnAddImage.addEventListener('click', () => {
  showPopup(popupAdd);
 // enableValidation(config);
});

popupCloseAdd.addEventListener('click', () => {closePopup(popupAdd)});
popupAddSubmit.addEventListener('click', () => {closePopup(popupAdd)});

popupImage.addEventListener('click', () => {showPopup(popupShowImage)});
popupСloseImage.addEventListener('click', () => {closePopup(popupShowImage)});


function handleProfileFormSubmit (event) {
    event.preventDefault();

    profileTitle.textContent = popupNameInput.value;
    profileSubtitle.textContent = popupJobInput.value;
}

popupForm.addEventListener('submit', handleProfileFormSubmit);

function openShowImage(item) {
  showPopup(popupShowImage);
  popupImage.alt = item.name;
  popupImage.src = item.link;
  popupImageDescription.textContent = item.name;
}


const elementsBlockGrid = document.querySelector(".elements");
const templateElem = document.querySelector('.template');

function showCards() {
  const cards = initialCards.map(getElement);
  elementsBlockGrid.prepend(...cards);
}

function getElement(item) {
  const newItem = templateElem.content.cloneNode(true);

  const picture = newItem.querySelector('.elements__photo-grid');
  const title = newItem.querySelector('.elements__title');
  const likeBtn = newItem.querySelector('.elements__heart');
  const urn = newItem.querySelector('.elements__urn');

  picture.src = item.link;
  picture.alt = item.name;
  title.textContent = item.name;

  function buttonLikeActive(event) {
    event.target.classList.toggle('elements__heart_active');
  }

  likeBtn.addEventListener('click', buttonLikeActive);

  urn.addEventListener('click', function(){
    const elementDelete = urn.closest('.elements__block-grid');
    elementDelete.remove();
  });



 picture.addEventListener('click', function() {
  openShowImage(item);
 });

  return newItem;
}
 
function handleAddCard(evt){
evt.preventDefault();

  const inputName = inputValueName.value;
  const inputLink = inputValueLink.value;

  const elementLinkName = getElement({name:inputName, link:inputLink});
  elementsBlockGrid.prepend(elementLinkName);

  popupFormAdd.reset();
}

popupFormAdd.addEventListener('submit', handleAddCard );

showCards();


