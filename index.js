const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu= document.querySelector('.dropdown-menu');

toggleBtn.addEventListener('click', function(){
    dropDownMenu.classList.toggle('open')

    const isOpen = dropDownMenu.classList.contains('open')
    toggleBtnIcon.classList = isOpen
    ? "ri-close-line"
    : "ri-menu-3-line"

})

