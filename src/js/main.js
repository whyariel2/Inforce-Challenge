// Get all Dropdown from document
const dropdowns = document.querySelectorAll('.home-dropdown');

// Loop through all dropdown elements
dropdowns.forEach(dropdown => {
  // Get elements from each dropdown
  const select = dropdown.querySelector('.dropdown-select');
  const arrow = dropdown.querySelector('.arrow');
  const menu = dropdown.querySelector('.dropdown-menu');
  const options = dropdown.querySelector('.dropdown-menu li');
  const selected = dropdown.querySelector('.dropdown-selected');

  // Add click event to the select element
  select.addEventListener('click', () => {
    // Add clicked style to the selected element
    select.classList.toggle('select-clicked');

    // Add rotate style to the arrow element
    arrow.classList.toggle('arrow-rotate');

    // Add open style to the menu element
    menu.classList.toggle('dropdown-menu-open');
  });

  // Loop through all options elements
  options.forEach(option => {
  // Add click event to the option element
    option.addEventListener('click', () => {
      // Change selected inner text to clicked option inner text
      selected.innerText = option.innerText;

      // Remove the clicked select style from the selected element
      select.classList.remove('selected-clicked');

      // Remove the rotate style from the arrow element
      arrow.classList.remove('arrow-rotate');

      // Remove the open style from the menu element
      menu.classList.remove('dropdown-menu-open');

      // Remove active class from all option elements
      options.forEach(option => {
        option.classList.remove('active');
      });
  
      option.classList.add('active');
    });
  });
});
