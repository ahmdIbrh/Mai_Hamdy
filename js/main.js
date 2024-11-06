ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 1000,
  delay: 100,
});

ScrollReveal().reveal(
  ".home__container img,.about__photo,.companies__photo, .selected-works__container .rounded_text, .home__scroll, .fashion__container .content > a",
  { distance: "0px", scale: 0.8 }
);
ScrollReveal().reveal(
  ".home__content p, .about__container .about__content p, .skills__photos .image, .selected-works__links .selected-works__item, .courses__item",
  { origin: "bottom", distance: "60px", interval: 100 }
);
ScrollReveal().reveal(
  ".selected-works__list .portfolio__link, .fashion__container .content .links a",
  { origin: "bottom", distance: "20px", interval: 50 }
);
ScrollReveal().reveal(
  ".home__title,.about__content a, .skills__content h1, .expertise__container h1, .reviews__container h1, .selected-works__container .section__title,.courses__container .section__title, .contact__container .section__title, .dresses__container .content p, .childs__container .content p, .dresses__container h1, .childs__container h1",
  { origin: "left" }
);
ScrollReveal().reveal(
  ".about__container .section__title, .selected-works__container .section__description, .childs__container .imgs img",
  { origin: "right" }
);
ScrollReveal().reveal(".fashion__title", { origin: "top" });
ScrollReveal().reveal(
  ".expertise__skill, .contact__content .contact__item, .reviews__container .reviews__photos, .sports__container .content h1, .sports__container .content p, .sports__container .imgs img, .dresses__container .imgs img",
  { origin: "right", interval: 100 }
);
ScrollReveal().reveal(".sports__container .imgs img", {
  origin: "left",
  interval: 100,
});

/** Nav Toggle **/

let navMenu = document.querySelector("#nav-menu");
let navToggle = document.querySelector("#nav-toggle");
let navClose = document.querySelector(".close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    console.log("Ahmed");
    navMenu.classList.add("show-menu");
    let newEl = document.createElement("div");
    newEl.classList.add("close");
    navToggle.after(newEl);
    navToggle.style.display = "none";
    let navClose = document.querySelector(".close");
    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
        navToggle.style.display = "block";
        navClose.remove();
      });
    }
  });
}
console.log(document.querySelector(".close"));
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    navToggle.style.display = "block";
    document.body.remove(document.querySelector(".close"));
  });
}
// navToggle.classList.remove("close");
// if (navMenu.classList.contains("show-menu")) {
//   document.addEventListener("click", function () {
//     navMenu.classList.remove("show-menu");
//   });
// }

/*=============== Remove Menu ===============*/

const navLinks = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.querySelector("#nav-menu");
  // when you click on each link from nav remove show-menu class
  navMenu.classList.remove("show-menu");
  let navClose = document.querySelector(".close");
  navClose.remove("close");
  navToggle.style.display = "block";
};

navLinks.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CAROUSEL ===============*/

$(document).ready(function () {
  $(".carousel").carousel({
    padding: 300,
    numVisible: 1,
  });
  $(".prev").click(function () {
    $(".carousel").carousel("prev");
  });

  $(".next").click(function () {
    $(".carousel").carousel("next");
  });
  // autoplay();
  // function autoplay() {
  //   $(".carousel").carousel("next");
  //   setTimeout(autoplay, 4500);
  // }
});
