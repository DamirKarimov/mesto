const initialCards = [
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

const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__form');
const profileBtnEdit = document.querySelector('.profile__btn_type_edit');
const btnAddImage = document.querySelector('.profile__btn_type_add');
const profileTName = document.querySelector('.profile__title');
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


function showPopup (popapName){
  popapName.classList.add('popup_opened');
}

function closePopup (popapName){
  popapName.classList.remove('popup_opened');
}

function profilEditHadler(){
  nameInput.value =  profileTName.textContent;
  jobInput.value = profileProfession.textContent;
}

profileBtnEdit.addEventListener('click', () => {
  showPopup(popupEdit);
  profilEditHadler();
});


popupCloseEdit.addEventListener('click', () => { closePopup(popupEdit)});

popupEditSubmit.addEventListener('click', () => {closePopup(popupEdit)});

btnAddImage.addEventListener('click', () => {showPopup(popupAdd)});
popupCloseAdd.addEventListener('click', () => {closePopup(popupAdd)});
popupAddSubmit.addEventListener('click', () => {closePopup(popupAdd)});

popupImage.addEventListener('click', () => {showPopup(popupShowImage)});
popupСloseImage.addEventListener('click', () => {closePopup(popupShowImage)});


const popupContainerEdit = document.querySelector('.popup__container_edit');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#description');


function handleProfileFormSubmit (evt) {
    evt.preventDefault();

    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
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

  const inputValueName = document.querySelector('.popup__input_name-add').value;
  const inputValueLink = document.querySelector('.popup__input_link-add').value;

  const elementLinkName = getElement({name:inputValueName, link:inputValueLink});
  elementsBlockGrid.prepend(elementLinkName);

  popupFormAdd.reset();
}

popupFormAdd.addEventListener('submit', handleAddCard);

showCards();





