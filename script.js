function orderClickHandler() {
  const modal = document.querySelector('.modal');

  modal.classList.add('is-active');
};

function init() {
  const orderBtn = document.querySelector('.order-btn');

  if (!orderBtn) {
    return;
  }

  orderBtn.addEventListener(('click'), orderClickHandler);
};


init();
