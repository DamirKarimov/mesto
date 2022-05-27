import {showPopup} from './index.js'; //привет

export default class Card {

  constructor(data, cardSelector) {
    this._name = data.name;
		this._link = data.link;
    this._cardSelector = cardSelector;
    this._popupImage = document.querySelector('.popup__image');
    this._popupShowImage = document.querySelector('.popup_show-image');
    this._popupImageDescription = document.querySelector('.popup__image-description');
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.elements__block-grid')
      .cloneNode(true);

    this._element = cardElement;
  }

  _setEventListeners() {
		this._element.querySelector('.elements__photo-grid').addEventListener('click', () => {
			this._handleCardClick();
		});

    this._element.querySelector('.elements__heart').addEventListener('click', () => {
			this._handleCardLike();
		});

    this._element.querySelector('.elements__urn').addEventListener('click', () => {
			this._handleCardDelete();
		});
	}

    _handleCardClick() {
      showPopup(this._popupShowImage);
      this._popupImageDescription.textContent = this._name;
      this._popupImage.alt = this._name;
      this._popupImage.src = this._link;
    }

    _handleCardDelete() {
      this._element.remove();
    }
  
    _handleCardLike() {
      this._element.querySelector('.elements__heart').classList.toggle('elements__heart_active');
    }
  
    generateCard() {
      this._getTemplate();
      this._setEventListeners();
  
      this._element.querySelector('.elements__photo-grid').src = this._link;
      this._element.querySelector('.elements__photo-grid').alt = this._name;
      this._element.querySelector('.elements__title').textContent = this._name;
  
      return this._element;
    }
}

