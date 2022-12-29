"use strict";

const slides = document.querySelectorAll(".slide");

setTimeout(()=>{
  document.getElementById("winner-slider-section").style.visibility="visible";
}, 3000);


const nextSlide = document.querySelector(".slider-btn-next");
let curSlide = 0;
let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  renewSlider();
});

const prevSlide = document.querySelector(".slider-btn-prev");

prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  renewSlider();
});

const indicators = document.getElementsByClassName("indicator");
console.log(indicators);

Array.from(indicators).forEach((element, indx) => {
  element.addEventListener("click", function () {
    curSlide = indx;
    console.log(indx);

    renewSlider();
  });
});

renewSlider();

function renewSlider() {
  Array.from(indicators).forEach((element) => {
    if(curSlide === Number(element.dataset.slide)) {
      element.style.background = "rgba(14, 220, 235)";
    } else {
      element.style.background = "rgba(166, 246, 252)";
    }
  });
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
}