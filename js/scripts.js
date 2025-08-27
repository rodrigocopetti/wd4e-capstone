// Toggles the navigation menu when the menu button is clicked
document.querySelector('.header__menu-btn').addEventListener('click', function() {
  // Handles menu button click to show/hide navigation
  document.querySelector('.header__nav').classList.toggle('active');
});

// Closes the navigation menu when the close button is clicked
document.querySelector('.header__close-btn').addEventListener('click', function() {
  // Handles close button click to hide navigation
  document.querySelector('.header__nav').classList.remove('active');
});

// Sets the back link destination and text based on the referrer page
const referrer = document.referrer;
const backLink = document.getElementById('back-link');
if (backLink) {
  // Updates back link based on previous page
  if (referrer.includes('index.html')) {
    backLink.href = '../../index.html';
    backLink.textContent = '← Back to Home';
  } else {
    backLink.href = '../recipes.html';
    backLink.textContent = '← Back to Recipes';
  }
}

