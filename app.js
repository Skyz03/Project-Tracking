const navItems = document.querySelectorAll(".navigation__item");

const button = document.getElementsByClassName("icon")[0];




function navToggle() {

  navItems.forEach(navItem => {
    navItem.classList.toggle("active");
  })

}


button.addEventListener("click", navToggle);