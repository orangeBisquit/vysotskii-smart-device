const nojsButtons = document.querySelectorAll('.nojs__button-hide');
const nojsContent = document.querySelectorAll('.nojs__content-show');

window.addEventListener('load', () => {
  nojsButtons.forEach((elem) => {
    elem.classList.remove('nojs__button-hide');
  });
  nojsContent.forEach((elem) => {
    elem.classList.remove('nojs__content-show');
  });
});
