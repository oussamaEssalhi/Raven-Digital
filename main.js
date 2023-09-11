// select Element
let btn_bars = document.querySelector(".bars i");
let menu = document.querySelector(".menu-list ul");
//
btn_bars.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  menu.classList.toggle("active");
  btn_bars.classList.toggle("fa-beat-fade");
  //
  document.addEventListener("click", (e) => {
    if (e.target.className != btn_bars.className) {
      menu.classList.remove("active");
      btn_bars.classList.remove("fa-beat-fade");
    }
  });
});

//
const liste = Array.from(document.querySelectorAll(".menu-list ul li"));
liste.map((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
    removeActive(liste);
    el.classList.toggle("active");
  });
});

const btn_Up = document.querySelector(".Scroll i");
btn_Up.onclick = function () {
  // document.querySelector(".menu-list").scrollIntoView({
  //   behavior: "smooth",
  // });
  window.scrollTo(0, 0);
};
const lign = document.querySelector(".scroll-horizontal");
window.onscroll = () => {
  let scrolltop = document.documentElement.scrollTop;
  const heigth =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  lign.style.width = `${(scrolltop / heigth) * 100}%`;
};
let ar = Array.from(document.querySelectorAll(".scroll-testimonials span"));
let arr = Array.from(document.querySelectorAll(".bullet span"));
let arrr = [...ar, ...arr];
arrr.forEach((el) => {
  el.addEventListener("click", (e) => {
    removeActive(arrr);
    e.target.classList.add("active");
  });
});
function removeActive(a) {
  a.map((el) => {
    el.classList.remove("active");
  });
}
