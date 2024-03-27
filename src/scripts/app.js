import Lenis from "@studio-freight/lenis";

// Init smooth scroll
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Hamburger Menu
// const hamburger = document.querySelector("#hamburger-menu");
// const nav = document.querySelector("#nav-list");

// hamburger.addEventListener("click", () => {
//   nav.classList.remove("hidden");
// });
