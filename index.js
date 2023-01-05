const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");

document.addEventListener("click", () => {
  if(burger.classList.contains("active")) {
    burger.classList.remove("active");
    nav.classList.remove("open");
  };
});

if(burger) {
  burger.addEventListener("click", e => {
    e.stopPropagation();
    burger.classList.toggle("active");
    nav.classList.toggle("open");
  });
};

if(nav) {
  nav.addEventListener("click", e => {
    e.stopPropagation();
  });
};

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("open");
    navLinks.forEach(el => {
      el.classList.remove("active");
    });
    navLink.classList.add("active");
  });
});