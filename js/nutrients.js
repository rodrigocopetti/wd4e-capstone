import { getBasePath } from "./general.js";

let nutrients = [];

const basePath = getBasePath();
fetch(`${basePath}/data/nutrients.json`)
  .then(response => response.json())
  .then(data => {
    nutrients = data;
    renderNutrients();
  });

function renderNutrients() {
  const list = document.querySelector(".nutrient-list");
  const template = document.getElementById("nutrient-item-template");

  list.innerHTML = "";

  nutrients.forEach(nutrient => {
    const clone = template.content.cloneNode(true);
    const img = clone.querySelector(".nutrient-img");
    const h2 = clone.querySelector("h2");
    const p = clone.querySelector("p");

    img.src = `${basePath}${nutrient.img}`;
    img.alt = nutrient.alt;
    h2.textContent = nutrient.title;
    p.textContent = nutrient.desc;

    list.appendChild(clone);
  });
}