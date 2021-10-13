// Popup
const pupupCloseButton = document.querySelector('.popul-call__button-close');
const popupOpenButton = document.querySelector('.header__button-call');
const popupOverlay = document.querySelector('.popup-call');

const popupCloseClass = 'popup-call--closed';

const openPopup = () => {
  popupOverlay.classList.remove(popupCloseClass);
  const popupNameField = document.querySelector('#popup-name');
  popupNameField.focus();
};

const closePopup = () => {
  popupOverlay.classList.add(popupCloseClass);
};

popupOpenButton.addEventListener('click', () => {
  openPopup();
});

pupupCloseButton.addEventListener('click', () => {
  closePopup();
});

popupOverlay.addEventListener('click', (evt) => {
  if (evt.target === popupOverlay) {
    closePopup();
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closePopup();
  }
});
