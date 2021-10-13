const form = document.querySelector('.feedback__form');

form.addEventListener('submit', () => {
  const name = form.querySelector('input[data-name-input]');
  const phone = form.querySelector('input[data-tel-input]');
  const comment = form.querySelector('textarea[data-comment-input]');

  window.localStorage.setItem('name', name.value);
  window.localStorage.setItem('phone', phone.value);
  window.localStorage.setItem('comment', comment.value);
});
