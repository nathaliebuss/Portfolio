const burgerMenu = document.getElementById("burger");
const navMenu = document.getElementById("menu");

burgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
