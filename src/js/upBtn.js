const btnUp = {
  el: document.querySelector('.btn-up'),

  showButton() {
    this.el.classList.remove('btn-up_hide');
  },

  hideButton() {
    this.el.classList.add('btn-up_hide');
  },

  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.showButton() : this.hideButton();
    });

    const { el } = this;

    el.onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

btnUp.addEventListener();
