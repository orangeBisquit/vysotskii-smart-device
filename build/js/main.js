// Отключение nojs
const nojsButtons = document.querySelectorAll('.nojs__button-hide');
const nojsContent = document.querySelectorAll('.nojs__content-show');

if (nojsButtons) {
  window.addEventListener('load', () => {
    nojsButtons.forEach((elem) => {
      elem.classList.remove('nojs__button-hide');
    });
    nojsContent.forEach((elem) => {
      elem.classList.remove('nojs__content-show');
    });
  });
}

// Маска инпута телефона
document.addEventListener('DOMContentLoaded', () => {
  const phoneInputs = document.querySelectorAll('input[data-tel-input]');

  const getInputNumbersValue = (input) => input.value.replace(/\D/g, '');

  const onPhonePaste = (e) => {
    const input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    const pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      const pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;

      }
    }
  };

  const onPhoneInput = (e) => {
    const input = e.target,
      selectionStart = input.selectionStart;

    let inputNumbersValue = getInputNumbersValue(input),
      formattedInputValue = '';


    if (!inputNumbersValue) {
      return input.value = '';
    }

    if (input.value.length !== selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] === '9') { inputNumbersValue = `7${inputNumbersValue}`; }
      const firstSymbols = (inputNumbersValue[0] === '8') ? '8' : '+7';
      formattedInputValue = input.value = `${firstSymbols} `;
      if (inputNumbersValue.length > 1) {
        formattedInputValue += `(${inputNumbersValue.substring(1, 4)}`;
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += `) ${inputNumbersValue.substring(4, 7)}`;
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += `-${inputNumbersValue.substring(7, 9)}`;
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += `-${inputNumbersValue.substring(9, 11)}`;
      }
    } else {
      formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
    }
    input.value = formattedInputValue;
  };
  const onPhoneKeyDown = function (e) {
    const inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode === 8 && inputValue.length === 1) {
      e.target.value = '';
    }
  };
  for (const phoneInput of phoneInputs) {
    phoneInput.addEventListener('keydown', onPhoneKeyDown);
    phoneInput.addEventListener('input', onPhoneInput, false);
    phoneInput.addEventListener('paste', onPhonePaste, false);
  }
});

// Popup
const pupupCloseButton = document.querySelector('.popup-call__button-close');
const popupOpenButton = document.querySelector('.header__button-call');
const popupOverlay = document.querySelector('.popup-call');
const pageBody = document.querySelector('body');

const popupCloseClass = 'popup-call--closed';
const popupForm = document.querySelector('.popup-call');
const focusableElements = popupForm.querySelectorAll(('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));

const firstFocusableElement = focusableElements[0];
const lastFocusableElement = focusableElements[focusableElements.length - 1];

const disableTabUp = (evt) => {
  if (evt.shiftKey && evt.keyCode === 9) {
    if (document.activeElement === firstFocusableElement) {
      firstFocusableElement.focus();
      evt.preventDefault();
    }
  }
};

const disableTabDown = (evt) => {
  if (evt.keyCode === 9 && !evt.shiftKey) {
    if (document.activeElement === lastFocusableElement) {
      lastFocusableElement.focus();
      evt.preventDefault();
    }
  }
};

const popupTabHandler = (evt) => {
  disableTabUp(evt);
  disableTabDown(evt);
}

if (popupOverlay && pupupCloseButton) {
  const disableScroll = () => {
    pageBody.classList.add('no-scroll');
  };

  const enableScroll = () => {
    pageBody.classList.remove('no-scroll');
  };

  const closePopup = () => {
    popupOverlay.classList.add(popupCloseClass);
    enableScroll();
  };

  const openPopup = () => {
    popupOverlay.classList.remove(popupCloseClass);
    const popupNameField = document.querySelector('#popup-name');
    popupNameField.focus();
    disableScroll();

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

    popupForm.addEventListener('keydown', popupTabHandler);
  };

  popupOpenButton.addEventListener('click', () => {
    openPopup();
  });
}

// Аккордеоны в футере
const accordeonToggles = document.querySelectorAll('.accordeon__toggle');
const accordeonBlocks = document.querySelectorAll('.accordeon__content');
const ACTIVE_CONTENT_CLASS = 'accordeon__content--open';
const ACTIVE_TOGGLE_CLASS = 'accordeon__toggle--open';

if (accordeonToggles && accordeonBlocks) {
  accordeonToggles.forEach((button) => {
    button.addEventListener('click', (evt) => {
      for (let i = 0; i < accordeonBlocks.length; i++) {
        if (accordeonBlocks[i].dataset.accordeon === evt.target.dataset.accordeon) {
          accordeonBlocks[i].classList.toggle(ACTIVE_CONTENT_CLASS);
        } else {
          accordeonBlocks[i].classList.remove(ACTIVE_CONTENT_CLASS);
        }
      }
      if (evt.target.classList.contains(ACTIVE_TOGGLE_CLASS)) {
        evt.target.classList.remove(ACTIVE_TOGGLE_CLASS);
        return;
      }
      accordeonToggles.forEach((toggle) => {
        toggle.classList.remove(ACTIVE_TOGGLE_CLASS);
      });
      evt.target.classList.add(ACTIVE_TOGGLE_CLASS);
    });
  });
}

// Вставка/Удаление "+7 (" при фокусе/расфокусе
const telInputs = document.querySelectorAll('input[data-tel-input]');

if (telInputs) {
  telInputs.forEach((input) => {
    input.addEventListener('focus', (evt) => {
      if (evt.target.value.length === 0) {
        evt.target.value = '+7 (';
      }
    });

    input.addEventListener('focusout', (evt) => {
      if (evt.target.value === '+7 (') {
        evt.target.value = '';
      }
    });
  });
}

// Сохранение данных в Local Storage
const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  form.addEventListener('submit', () => {
    const name = form.querySelector('input[data-name-input]');
    const phone = form.querySelector('input[data-tel-input]');
    const comment = form.querySelector('textarea[data-comment-input]');

    if (name) {
      window.localStorage.setItem('name', name.value);
    }
    if (phone) {
      window.localStorage.setItem('phone', phone.value);
    }
    if (comment) {
      window.localStorage.setItem('comment', comment.value);
    }
  });
});
