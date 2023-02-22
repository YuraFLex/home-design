// Открытие/заыкртиые мобильного меню

const refs = {
  openMobileBtn: document.querySelector('[data-menu-open]'),
  closeMobileBtn: document.querySelector('[data-menu-close]'),
  mobile: document.querySelector('[data-menu]'),
};

refs.openMobileBtn.addEventListener('click', toggleMobile);
refs.closeMobileBtn.addEventListener('click', toggleMobile);

function toggleMobile(event) {
  event.preventDefault();
  refs.mobile.classList.toggle('is-open');
}
