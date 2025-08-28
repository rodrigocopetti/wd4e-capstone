import { getBasePath } from "./general.js";

let recipes = [];

const basePath = getBasePath();
fetch(`${basePath}/data/recipes.json`)
  .then(response => response.json())
  .then(data => {
    recipes = data;
    renderRecipeCards();
  });

function renderRecipeCards() {
  const cardsContainer = document.getElementById("recipe-cards");
  const template = document.getElementById("recipe-card-template");
  const basePath = getBasePath();

  cardsContainer.innerHTML = "";

  recipes.forEach((recipe) => {
    const card = template.content.cloneNode(true);
    const mainImg = card.querySelector(".recipe-card__main-img");
    const thumbnails = card.querySelector(".recipe-card__thumbnails");
    const title = card.querySelector(".recipe-card__title");
    const viewBtn = card.querySelector(".recipe-card__view-btn");

    mainImg.src = `${basePath}${recipe.images[0]}`;
    mainImg.alt = recipe.title + " main image";
    title.textContent = recipe.title;

    recipe.images.forEach((imgSrc, idx) => {
      const thumb = document.createElement("img");
      thumb.src = `${basePath}${imgSrc}`;
      thumb.alt = recipe.title + " thumbnail " + (idx + 1);
      thumb.className = "recipe-card__thumb";
      thumb.onclick = () => {
        mainImg.src = `${basePath}${imgSrc}`;
      };
      thumbnails.appendChild(thumb);
    });

    viewBtn.onclick = () => {
      window.location.href = `${basePath}${recipe.link}`;
    };

    cardsContainer.appendChild(card);
  });
}

// Handles lightbox modal for main image preview
document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', function(e) {
    // Opens lightbox modal when main image is clicked
    if (e.target.classList.contains('recipe-card__main-img')) {
      const src = e.target.src;
      // Remove any existing modal
      const oldModal = document.getElementById('lightbox-modal');
      if (oldModal) oldModal.remove();

      // Clone template and set image src
      const template = document.getElementById('lightbox-modal-template');
      const modalFragment = template.content.cloneNode(true);
      const modalDiv = modalFragment.querySelector('#lightbox-modal');
      const img = modalFragment.querySelector('#lightbox-img');
      img.src = src;
      modalDiv.style.display = 'block';

      document.body.appendChild(modalDiv);
    }
    // Closes lightbox modal when close button or modal background is clicked
    if (e.target.id === 'lightbox-close' || e.target.id === 'lightbox-modal') {
      const modal = document.getElementById('lightbox-modal');
      if (modal) modal.remove();
    }
  });
});

