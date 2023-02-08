const openModalBtn = document.querySelector('[data-modal-open]');
const openModalBtnMobile = document.querySelector('[data-modal-open-mobile');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const body = document.querySelector('[data-body]');

openModalBtn.addEventListener('click', toggleModal);
openModalBtnMobile.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

export function toggleModal() {
  modal.classList.toggle('is-hidden');
  body.classList.toggle('no-scroll');
  closeByKeybord(modal);
}

export function closeByKeybord(value) {
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      value.classList.add('is-hidden');
      body.classList.remove('no-scroll');
      document.removeEventListener('keydown', closeByKeybord);
    }
  });
}

modal.addEventListener('click', e => {
  if (!e.target.closest('.back-drop')) {
    toggleModal();
  }
});

// const formSubmit = document
//   .querySelector('.btn')
//   .addEventListener('click', () => {
//     preventDefault();
//     let data = document.querySelector('.modal-form-input');
//     console.log(data.value);
//   });

// console.log(formSubmit.value);
