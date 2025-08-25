const recipes = [
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

recipes.forEach((recipe) => {
  const card = template.content.cloneNode(true);
  const mainImg = card.querySelector(".recipe-card__main-img");
  const thumbnails = card.querySelector(".recipe-card__thumbnails");
  const title = card.querySelector(".recipe-card__title");
  const viewBtn = card.querySelector(".recipe-card__view-btn");

  mainImg.src = recipe.images[0];
  mainImg.alt = recipe.title + " main image";
  title.textContent = recipe.title;

  recipe.images.forEach((imgSrc, idx) => {
    const thumb = document.createElement("img");
    thumb.src = imgSrc;
    thumb.alt = recipe.title + " thumbnail " + (idx + 1);
    thumb.className = "recipe-card__thumb";
    thumb.style.cursor = "pointer";
    thumb.style.width = "60px";
    thumb.style.margin = "4px";
    thumb.onclick = () => {
      mainImg.src = imgSrc;
    };
    thumbnails.appendChild(thumb);
  });

  viewBtn.onclick = () => {
    window.location.href = recipe.link;
  };

  cardsContainer.appendChild(card);
});
