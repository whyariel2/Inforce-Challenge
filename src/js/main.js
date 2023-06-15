/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header')
  var img = document.querySelector('#nav-logo');
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 100 ? header.classList.add('scroll-header')
                     : header.classList.remove('scroll-header');
  
  this.scrollY>= 100 ? img.setAttribute('src', '/src/assets/logo-black.svg')
                     : img.setAttribute('src', '/src/assets/logo-white.svg')
                      

}

window.addEventListener('scroll', scrollHeader);


/*=============== DROPDOWN BUTTON ===============*/

// Get all elements from the document
const optionMenu = document.querySelectorAll('.select-menu');

// Loop through all menu elements
optionMenu.forEach((item) => {
  const optionMenu = item.querySelector('.select-btn')

  optionMenu.addEventListener('click', () => {
    const openItem = document.querySelector('.dropdown-open')

    toggleItem(item)

    // Only one open at a time
    if (openItem && openItem!== item) {
      toggleItem(openItem)
    }
  })
});

// Adding class
const toggleItem = (item) => {
  const optionMenu = item.querySelector('.dropdown-options')

  if (item.classList.contains('dropdown-open')) {
    optionMenu.removeAttribute('style')
    item.classList.remove('dropdown-open')
  }else {
    optionMenu.style.height = optionMenu.scrollHeight + 'px'
  item.classList.add('dropdown-open')
  }
};

// =================== SWIPER ===================
var swiperShowcase = new Swiper('.showcase-container', {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidePerView: 'auto',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*=============== CHANGE SECTIONS ACTIVE LINK ===============*/
// Find what page we're located
const activePage = window.location.pathname;

// Loop through all links
const navLinks = document.querySelectorAll('.nav-menu a').
forEach(link => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active-link');
  }
  
});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 300 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== API CONNECTION ===============*/ 
// SHOWCASE
function showcaseList() {
  const urlApi = 'https://labs.inforcedata.com.br/desafio-frontend/vitrines.json'
  
  fetch(urlApi).then(
    response => response.json()
  ).then(data => {
    const divCard = document.querySelector('#showcase-list')
  
    data.forEach((item) => {
      const numberofCards = 1;
  
      const cards = `
        <article class="showcase-card swiper-slide">
          <img src="${item.capa}" alt="" class="showcase-img">

          <div class="showcase-data">
            <h2 class="showcase-title">${item.tipo}</h2>
            <h3 class="showcase-subtitle">${item.bairro} <br /> ${item.cidade}, ${item.UF}</h3>

            <div class="showcase-icon">

              <div class="icon-grid">
                <i class='bx bx-bed'></i>
                <span>${item.quartos}</span>
              </div>

              <div class="icon-grid">
                <i class='bx bx-shower'></i>
                <span>${item.banheiros}</span>
              </div>
              
              <div class="icon-grid">
                <i class='bx bx-car'></i>
                <span>${item.vagas}</span>
              </div>

              <div class="icon-grid">
                <i class='bx bx-shape-square'></i>
                <span>${item.metragem}m²</span>
              </div>
            </div>
          </div>
        </article>
        `
      for (let i = 0; i < numberofCards; i++) {
        divCard.innerHTML += cards;
      }
    })
  
  }).catch(error => {
    console.error("Ih rapaz, deu b.o", error)
  });

}

// NEWS
function newsList() {
  const urlApi = 'https://labs.inforcedata.com.br/desafio-frontend/noticias.json'
  
  fetch(urlApi).then(
    response => response.json()
  ).then(data => {
    const divCard = document.querySelector('#news-list')
  
    data.forEach((item) => {
      const numberofCards = 1;
  
      const cards = `
          <article id="news-card" class="showcase-card swiper-slide">
            <img src="${item.capa}" alt="" class="showcase-img">
  
            <div class="showcase-data">
              <h2 class="showcase-title">${item.titulo}</h2>
              <p class="news-description">${item.sumario}</p>
            </div>
  
            <a href="${item.link}" class="button news-button">Veja Mais</a>
          </article>
        `
      for (let i = 0; i < numberofCards; i++) {
        divCard.innerHTML += cards;
      }
    })
  
  }).catch(error => {
    console.error("Ih rapaz, deu b.o", error)
  });

}

showcaseList();
newsList();
