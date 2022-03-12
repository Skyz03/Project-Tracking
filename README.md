# Frontend Mentor - Project tracking intro component solution

This is a solution to the [Project tracking intro component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/project-tracking-intro-component-5d289097500fcb331a67d80e). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
This is a cool challenge where I could practice the skill of navigation especially mobile menu to appear and disapper with understanding the inner width of the device. Also, I got a oppurtinity to pratice some basic skills.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Create the background shape using code

### Screenshot

![image](https://user-images.githubusercontent.com/42742924/157890189-f268a176-c74a-43f3-b769-f9211a7e427b.png)

### Links

- Live Site URL: [Live](https://skyz03.github.io/Project-Tracking/)
- Solution URL : [Code](https://github.com/Skyz03/Project-Tracking/)

## My process
1. First HTML
2. SCSS for destop then mobile
3. JS for nav
4. Finish touch ups

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

Nav use using W3schools examples and samples

```JS
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
```

### Continued development

## Author

- Website - [Skyz03](https://aakibshah.com.np/)


## Acknowledgments

