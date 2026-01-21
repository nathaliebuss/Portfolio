const burgerMenu = document.getElementById("burger");
const navMenu = document.getElementById("menu");
const navLinks = document.querySelectorAll(".menu a");

//LOGIC FOR SHOWING THE MENU
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

//LOGIC THAT HIDES THE MENU WHEN CLICKED
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// OBJECT //
const myProjects = [
  {
    title: "Movie Night Website",
    description:
      "Made a website based on a design we got in class. We were not allowed to use any AI but we were allowed to look at past homework. Was a grrat way of testing our CSS and HTML knowledge.",
    link: "https://github.com/Callum-Jones230893/API-group-assignment",
    demo: "https://api-group-assignment.vercel.app/",
    image: "images/mini-movie.webp",
    tags: ["HTML", "CSS"],
  },
  {
    title: "Zoo Group Assignment",
    image: "images/zoo-mini.webp",
    description:
      "A collaborative javascript project. The group were tasked to make a website for an Australian zoo. The goal for the assignment was to hardcode as little as possible and use our javascript knowledge to populate the page.",
    link: "https://github.com/nathaliebuss/Group-zoo-assignment",
    demo: "https://group-zoo-assignment.vercel.app/",
    tags: ["Javascript", "HTML", "CSS"],
  },
];

const projectContainer = document.getElementById("project-container");

function displayProjects() {
  myProjects.forEach((project) => {
    let tagsHTML = "";

    for (const tag of project.tags) {
      tagsHTML += `<span class="tag">${tag}</span>`;
    }

    const cardHTML = `
            <div class="card">
                <img src="${project.image}" alt="${project.title}" loading="lazy" />
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tags">
                    ${tagsHTML}
                </div>
               <a class="link" href="${project.link}" target="_blank">GitHub</a>
            <a class="link" href="${project.demo}" target="_blank">Demo</a>
            </div>
        `;

    projectContainer.innerHTML += cardHTML;
  });
}
displayProjects();

// LOGIC FOR COLOUR CHANGING NAVBAR ON SCROLL
const menu = document.getElementById("menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // console.log(window.scrollY);
    menu.classList.add("scrolled");
  } else {
    menu.classList.remove("scrolled");
  }
});

// UPDATES THE YEAR AUTOMATICALLY
const footerYear = document.getElementById("spanYear");
const currentYear = new Date().getFullYear();

footerYear.textContent = currentYear;
