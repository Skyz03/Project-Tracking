const navItems = document.querySelectorAll(".navigation__item");

const button = document.getElementsByClassName("icon")[0];

const iconBars = document.getElementById("icon-bars");

const iconCross = document.getElementById("icon-cross");


function navToggle() {

  navItems.forEach(navItem => {
    navItem.classList.toggle("active");

    if (navItem.classList.contains("active")) {
      iconCross.style.display = "block";
      iconBars.style.display = "none";
    } else {
      iconCross.style.display = "none";
      iconBars.style.display = "block";
    }
  });
}

button.addEventListener("click", navToggle);