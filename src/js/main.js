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
const optionMenu = document.querySelectorAll(".select-menu");

// Loop through all menu elements
optionMenu.forEach(selectMenu => {
  
  const selectBtn = document.querySelector(".select-btn"),
    options = document.querySelectorAll(".option"),
    btn_text = document.querySelector(".btn-text");

  selectBtn.addEventListener("click", () => {
    selectMenu.classList.toggle("active");
  });

  options.forEach(option => {
    // Get all value inside option text
    option.addEventListener("click", () => {
      let selectedOption = option.querySelector(".option-text").innerText;
      btn_text.innerText = selectedOption;
      console.log(selectedOption)
    });
  });
  
});

// =================== SWIPER ===================
var swiperShowcase = new Swiper(".showcase-container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidePerView: 'auto',
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)