const lebarLayar = window.innerWidth;

function smoothScroll(event) {
  event.preventDefault();

  const currentElemen = document.querySelector(event.currentTarget.hash);

  currentElemen.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });

  for (const elemenChildOut of currentElemen.children) {
    for (const elemenChildIn of elemenChildOut.children) {
      if (elemenChildIn.tagName === "H2") {
        elemenChildIn.classList.add("main-section-selected");

        setTimeout(() => {
          elemenChildIn.classList.remove("main-section-selected");
        }, 2000);
      }
    }
  }
}

function hideUnhideNav() {
  const navElement = document.querySelector("nav ul");
  const mainContentElement = document.getElementById("main-doc");
  const barRapi = document.querySelector(".fa-bars");
  const barTidakRapi = document.querySelector(".fa-bars-staggered");

  navElement.classList.toggle("d-none");
  mainContentElement.classList.toggle("pt-40");
  barRapi.classList.toggle("d-none");
  barTidakRapi.classList.toggle("d-none");
}

function hideNav() {
  const navElement = document.querySelector("nav ul");

  if (lebarLayar <= 768) {
    navElement.classList.add("d-none");
  } else {
    navElement.classList.remove("d-none");
  }
}

function navTopPage() {
  const mainElement = document.getElementById("main-doc");

  mainElement.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}

// running
const humbergerToggle = document.getElementById("humberger-toggle");
const navUpElement = document.getElementById("nav-up");

humbergerToggle.addEventListener("click", () => {
  hideUnhideNav();
});

navUpElement.addEventListener("click", () => {
  navTopPage();
});

$("nav ul li a").on("click", (event) => {
  if (lebarLayar <= 768) {
    smoothScroll(event);
  }

  smoothScroll(event);
});

document.addEventListener("DOMContentLoaded", () => {
  hideNav();
});

window.addEventListener("resize", () => {
  console.log(lebarLayar);

  hideNav();
});

console.log(lebarLayar);
