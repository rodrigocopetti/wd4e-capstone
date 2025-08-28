function getBasePath() {
  return window.location.pathname.includes("wd4e-capstone") ? "/wd4e-capstone" : "";
}

document.addEventListener("DOMContentLoaded", function () {
  const basePath = getBasePath();
  const header = document.getElementById("main-header");
  if (header) {
    fetch(`${basePath}/partials/header__container.html`)
      .then((response) => response.text())
      .then((html) => {
        header.innerHTML = html;
        const logoImg = header.querySelector(".header__logo img");
        if (logoImg) {
          logoImg.src = `${basePath}/images/logo.png`;
        }
        header.querySelectorAll(".header__nav a").forEach((a) => {
          a.href = `${basePath}/${a.getAttribute("href")}`;
        });

        const menuBtn = header.querySelector(".header__menu-btn");
        const closeBtn = header.querySelector(".header__close-btn");
        const nav = header.querySelector(".header__nav");

        if (menuBtn && nav) {
          menuBtn.addEventListener("click", function () {
            nav.classList.toggle("active");
          });
        }
        if (closeBtn && nav) {
          closeBtn.addEventListener("click", function () {
            nav.classList.remove("active");
          });
        }

        const links = header.querySelectorAll(".header__nav ul li");
        links.forEach((li) => {
          const a = li.querySelector("a");
          if (a && window.location.pathname === new URL(a.href).pathname) {
            li.classList.add("active");
          } else {
            li.classList.remove("active");
          }
        });
      });
  }

  // Back link (mantém igual)
  const referrer = document.referrer;
  const backLink = document.getElementById("back-link");
  if (backLink) {
    if (referrer.includes("index.html")) {
      backLink.href = "../../index.html";
      backLink.textContent = "← Back to Home";
    } else {
      backLink.href = "../recipes.html";
      backLink.textContent = "← Back to Recipes";
    }
  }
});
