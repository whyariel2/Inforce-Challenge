/*=============== CHANGE BACKGROUND HEADER ===============*/



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