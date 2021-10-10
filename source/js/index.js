const inputPhone = document.querySelector('#customer-phone');

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

// inputPhone.addEventListener('input', (evt) => {
//   console.log(evt.target.value.length);
//   if (evt.target.value.length === 6) {
//     console.log(evt.target.value.length);
//     evt.target.value = evt.target.value + ")";
//   }
// })

