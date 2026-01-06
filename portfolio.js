const burgerMenu = document.getElementById("burger");
const navMenu = document.getElementById("menu");
const navLink = document.querySelectorAll(".menu a");

//LOGIC FOR SHOWING THE MENU
burgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
