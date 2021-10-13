const inputPhone = document.querySelector('#customer-phone');
const pupupCloseButton = document.querySelector('.popul-call__button-close');
const popupOpenButton = document.querySelector('.header__button-call');
const popupOverlay = document.querySelector('.popup-call');

const popupCloseClass = 'popup-call--closed';

inputPhone.addEventListener('focus', (evt) => {
  if (evt.target.value.length === 0) {
    evt.target.value = '+7(';
  }
});

inputPhone.addEventListener('focusout', (evt) => {
  if (evt.target.value === '+7(') {
    evt.target.value = '';
  }
});

// Popup
const openPopup = () => {
  popupOverlay.classList.remove(popupCloseClass);
  const popupNameField = document.querySelector('#popup-name');
  console.log(popupNameField);
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
// Accordeon
const accordeonToggles = document.querySelectorAll('.accordeon__toggle');
const accordeonBlocks = document.querySelectorAll('.accordeon__content');
const ACTIVE_CLASS = 'accordeon__content--open';

accordeonToggles.forEach((toggle) => {
  toggle.addEventListener('click', (evt) => {
    console.log(evt);
    for (let i = 0; i < accordeonBlocks.length; i++) {
      if (accordeonBlocks[i].dataset.accordeon === evt.target.dataset.accordeon) {
        accordeonBlocks[i].classList.toggle(ACTIVE_CLASS);
      } else {
        accordeonBlocks[i].classList.remove(ACTIVE_CLASS);
      }
    }
    if (evt.target.classList.contains('accordeon__toggle--open')) {
      evt.target.classList.remove('accordeon__toggle--open');
      console.log("HERE1");
      return;
    }
    console.log("HERE2");
    accordeonToggles.forEach((toggle) => {
      toggle.classList.remove('accordeon__toggle--open');
    });
    evt.target.classList.add('accordeon__toggle--open');
  })
})

