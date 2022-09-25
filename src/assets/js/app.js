import gsap from "gsap";

const bar = document.querySelector(".loading__bar--inner");
const counter = document.querySelector(".loading__percentage--counter");
let count = 0;

let barInterval = setInterval(() => {
  bar.style.width = count + "%";
  counter.innerHTML = count + "%";
  count++;
  if (count === 101) {
    clearInterval(barInterval);
    gsap.to(".loading__bar", {
      duration: 1,
      width: 0,
    });
    gsap.to(".loading__percentage,.loading__text", {
      duration: 1,
      opacity: 0,
    });
    gsap.to(".loading__box", {
      duration: 1,
      border: "solid 4px #fff",
      borderRadius: "50%",
      height: "500px",
    });
    gsap.to(".loading__box", {
      duration: 2,
      delay: 2,
      border: "none",
    });
    gsap.to(".loading__svg", {
      duration: 5,
      opacity: 1,
    });
    gsap.to(".loading__svg", {
      duration: 2,
      delay: 2,
      left: "125%",
    });
    gsap.to(".loading", {
      delay: 2,
      duration: 2,
      background: "transparent",
      zIndex: 1,
      // opacity: 0.5,
    });
  }
}, 10);
