const phoneInputs = document.querySelectorAll('input[data-tel-input]');

phoneInputs.forEach((input) => {
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
