// *Pagination
let numbersBar = document.querySelector(".numbers-bar");

function generatePageNumbers() {
  for (let i = 1; i <= 10; i++) {
    let numSpan = document.createElement("span");
    numSpan.innerHTML = i;
    numbersBar.appendChild(numSpan);
  }
}
generatePageNumbers();
// *--------
let leftIcon = document.getElementById("leftIcon");
let circle = numbersBar.querySelector(".circle");

let numbersBarMargin = Number(numbersBar.getElementsByClassName.marginLeft);
let circleMargin = Number(circle.getElementsByClassName.marginLeft);

leftIcon.addEventListener("click", () => {
  numbersBarMargin -= 50;
  circleMargin -= 50;

  numbersBarMargin >= 0
    ? (numbersBar.style.marginLeft = `-${numbersBarMargin}px`)
    : (numbersBarMargin = 0);
  circleMargin >= 0
    ? (circle.style.marginLeft = `${circleMargin}px`)
    : (circleMargin = 0);
});
// *-----------
rightIcon.addEventListener("click", () => {
  numbersBarMargin += 50;
  circleMargin += 50;

  numbersBarMargin <= 250
    ? (numbersBar.style.marginLeft = `-${numbersBarMargin}px`)
    : (numbersBarMargin = 250);
  circleMargin <= 450
    ? (circle.style.marginLeft = `${circleMargin}px`)
    : (circleMargin = 450);
});
