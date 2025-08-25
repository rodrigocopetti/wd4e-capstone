document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.carousel__slide');
  const indicators = document.querySelectorAll('.carousel__indicators span');
  const prevBtn = document.querySelector('.carousel__control--prev');
  const nextBtn = document.querySelector('.carousel__control--next');
  let current = 0;
  let timer;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
      indicators[i].classList.toggle('active', i === idx);
    });
    current = idx;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
      showSlide(i);
      resetTimer();
    });
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetTimer();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetTimer();
  });

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 4000);
  }

  showSlide(0);
  timer = setInterval(nextSlide, 4000);
});