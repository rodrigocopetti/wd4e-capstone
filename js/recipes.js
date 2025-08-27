const recipes = [
  // Array of recipe objects with title, images, and link
  {
    title: "Roast Pork Loin",
    images: [
      "../images/roast_pork_loin/img1.jpg",
      "../images/roast_pork_loin/img2.jpg",
      "../images/roast_pork_loin/img3.jpg",
    ],
    link: "recipes/roast_pork_loin.html",
  },
  {
    title: "Shrimp with garlic and oil",
    images: [
      "../images/shrimp_with_garlic_and_oil/img1.jpg",
      "../images/shrimp_with_garlic_and_oil/img2.jpg",
      "../images/shrimp_with_garlic_and_oil/img3.jpg",
    ],
    link: "recipes/shrimp_with_garlic_and_oil.html",
  },
  {
    title: "Tomatoes stuffed with seasoned ricotta cream",
    images: [
      "../images/tomatoes_stuffed_with_ricotta/img1.jpg",
      "../images/tomatoes_stuffed_with_ricotta/img2.jpg",
      "../images/tomatoes_stuffed_with_ricotta/img3.jpg",
    ],
    link: "recipes/tomatoes_stuffed_with_ricotta.html",
  },
];

const cardsContainer = document.getElementById("recipe-cards");
const template = document.getElementById("recipe-card-template");

// Creates and appends recipe cards to the container
recipes.forEach((recipe) => {
  const card = template.content.cloneNode(true);
  const mainImg = card.querySelector(".recipe-card__main-img");
  const thumbnails = card.querySelector(".recipe-card__thumbnails");
  const title = card.querySelector(".recipe-card__title");
  const viewBtn = card.querySelector(".recipe-card__view-btn");

  mainImg.src = recipe.images[0];
  mainImg.alt = recipe.title + " main image";
  title.textContent = recipe.title;

  // Adds thumbnail images and click event to change main image
  recipe.images.forEach((imgSrc, idx) => {
    const thumb = document.createElement("img");
    thumb.src = imgSrc;
    thumb.alt = recipe.title + " thumbnail " + (idx + 1);
    thumb.className = "recipe-card__thumb";
    thumb.onclick = () => {
      mainImg.src = imgSrc;
    };
    thumbnails.appendChild(thumb);
  });

  // Adds click event to view button to navigate to recipe page
  viewBtn.onclick = () => {
    window.location.href = recipe.link;
  };

  cardsContainer.appendChild(card);
});

// Handles lightbox modal for main image preview
document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', function(e) {
    // Opens lightbox modal when main image is clicked
    if (e.target.classList.contains('recipe-card__main-img')) {
      const src = e.target.src;
      const modal = document.getElementById('lightbox-modal');
      const img = document.getElementById('lightbox-img');
      img.src = src;
      modal.style.display = 'block';
    }
    // Closes lightbox modal when close button or modal background is clicked
    if (e.target.id === 'lightbox-close' || e.target.id === 'lightbox-modal') {
      document.getElementById('lightbox-modal').style.display = 'none';
    }
  });
});

