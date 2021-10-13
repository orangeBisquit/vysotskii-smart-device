// Accordeon
const accordeonToggles = document.querySelectorAll('.accordeon__toggle');
const accordeonBlocks = document.querySelectorAll('.accordeon__content');
const ACTIVE_CONTENT_CLASS = 'accordeon__content--open';
const ACTIVE_TOGGLE_CLASS = 'accordeon__toggle--open';

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
