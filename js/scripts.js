// Carrega o header__container em todas as páginas
function getBasePath() {
  // Exemplo: /capstone/pages/recipes.html → retorna '/capstone'
  // Exemplo: /index.html → retorna ''
  const parts = window.location.pathname.split('/');
  // parts[0] = '', parts[1] = 'capstone', parts[2] = 'pages', ...
  // Se o segundo elemento for vazio ou igual ao arquivo, retorna ''
  if (parts.length <= 2 || parts[1] === '' || parts[1].includes('.html')) {
    return '';
  }
  // Retorna apenas a primeira subpasta do domínio
  // return `/${parts[1]}`;
  return '';
}

document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('main-header');
  if (header) {
    fetch('/data/header.json')
      .then(response => response.json())
      .then(data => {
        const basePath = getBasePath();
        header.innerHTML = `
          <div class="header__container">
            <button class="header__btn header__menu-btn" aria-label="Abrir menu">
              <i class="fa-solid fa-bars"></i>
            </button>
            <a href="${basePath}${data.logo.href}" class="header__logo">
              <img src="${basePath}${data.logo.src}" alt="${data.logo.alt}">
            </a>
            <nav class="header__nav">
              <button class="header__close-btn" aria-label="Fechar menu">
                <i class="fa-solid fa-xmark"></i>
              </button>
              <ul>
                ${data.links.map(link => `<li><a href="${basePath}${link.href}">${link.label}</a></li>`).join('')}
              </ul>
            </nav>
            <button class="header__btn header__user-btn" aria-label="Usuário">
              <i class="fa-solid fa-user"></i>
            </button>
          </div>
        `;

        // Adiciona eventos após o header ser inserido
        const menuBtn = header.querySelector('.header__menu-btn');
        const closeBtn = header.querySelector('.header__close-btn');
        const nav = header.querySelector('.header__nav');

        if (menuBtn && nav) {
          menuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
          });
        }
        if (closeBtn && nav) {
          closeBtn.addEventListener('click', function() {
            nav.classList.remove('active');
          });
        }

        // Marcar link ativo dinamicamente
        const links = header.querySelectorAll('.header__nav ul li');
        links.forEach(li => {
          const a = li.querySelector('a');
          if (a && window.location.pathname === new URL(a.href).pathname) {
            li.classList.add('active');
          } else {
            li.classList.remove('active');
          }
        });
      });
  }

  // Back link (mantém igual)
  const referrer = document.referrer;
  const backLink = document.getElementById('back-link');
  if (backLink) {
    if (referrer.includes('index.html')) {
      backLink.href = '../../index.html';
      backLink.textContent = '← Back to Home';
    } else {
      backLink.href = '../recipes.html';
      backLink.textContent = '← Back to Recipes';
    }
  }
});


