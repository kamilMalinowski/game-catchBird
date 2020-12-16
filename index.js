//const
const button = document.querySelector(".button--js");
const points = document.querySelector(".points--js");
const seconds = document.querySelector(".seconds--js");

//generate random image number
function getRandomImg(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//time limit
let timeLimit = 11;

let intervalID = setInterval(() => {
  timeLimit--;
  seconds.innerHTML = timeLimit;
  if (timeLimit === 0) {
    clearInterval(intervalID);
    button.disabled = true;
  }
}, 1000);

//button
button.addEventListener("click", () => {
  points.innerHTML++;
  let image = getRandomImg(1, 10);
  const imageTemplate = `<img class="birdGame-area__img img--js" src="birds/${image}.jpg" alt="bird ${image}">`;
  button.innerHTML = imageTemplate;

});



// experiment
// let buttonWidth = button.offSetWidth;
// let buttonHeight = button.offSetHeight;
// let leftRandom = getRandomNumber(0, button.parentElement.offsetWidth);
// let topRandom = getRandomNumber(0, button.parentElement.offsetHeight);

// button.style.marginLeft = getNumberWidthUnits(leftRandom - buttonWidth, "px");
// button.style.marginTop = getNumberWidthUnits(topRandom - buttonHeight, "px");
// //generate random image number
// function getNumberWidthUnits(number, units) {
//   return number + units;
// }

// function getRandomNumber(min, max) {
//   return (min = Math.floor((max - min) * Math.random()));
// }