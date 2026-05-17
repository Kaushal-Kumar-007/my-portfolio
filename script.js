// LOADER
window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
});

// TYPING EFFECT
const roles = [
  "Power BI Developer",
  "SQL Analyst",
  "Python Data Analyst",
  "Business Intelligence Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeEffect() {

  if(charIndex < roles[roleIndex].length){

    typingElement.textContent += roles[roleIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 100);

  } else {

    setTimeout(eraseEffect, 1500);

  }

}

function eraseEffect(){

  if(charIndex > 0){

    typingElement.textContent =
      roles[roleIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseEffect, 50);

  } else {

    roleIndex++;

    if(roleIndex >= roles.length){
      roleIndex = 0;
    }

    setTimeout(typeEffect, 200);

  }

}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

// SCROLL PROGRESS BAR
window.addEventListener("scroll", () => {

  const scrollTop =
    document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercent =
    (scrollTop / scrollHeight) * 100;

  document.getElementById("progress-bar")
    .style.width = scrollPercent + "%";

});

// COUNTER ANIMATION
const counters = document.querySelectorAll("[data-target]");

counters.forEach(counter => {

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = target / 100;

    if(count < target){

      counter.innerText = `${Math.ceil(count + increment)}`;

      setTimeout(updateCounter, 20);

    } else {

      counter.innerText = target;

    }

  };

  updateCounter();

});