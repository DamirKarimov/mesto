import { popupShowImage, popupImage, popupImageDescription } from './const.js';
import {showPopup} from './index.js';

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
		this._link = data.link;
    this._cardSelector = cardSelector;
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
      showPopup(popupShowImage);
      popupImageDescription.textContent = this._name;
      popupImage.alt = this._name;
      popupImage.src = this._link;
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

