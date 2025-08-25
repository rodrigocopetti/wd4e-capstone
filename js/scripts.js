document.querySelector('.header__menu-btn').addEventListener('click', function() {
  document.querySelector('.header__nav').classList.toggle('active');
});

document.querySelector('.header__close-btn').addEventListener('click', function() {
  document.querySelector('.header__nav').classList.remove('active');
});

