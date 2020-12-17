//const
const button = document.querySelector(".button--js");
const points = document.querySelector(".points--js");
const seconds = document.querySelector(".seconds--js");

// generate random image number
function getRandomImg(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//time limit
let timeLimit = 11;
let reset = "...";

let intervalID = setInterval(() => {
  timeLimit--;
  seconds.innerHTML = timeLimit;
  if (timeLimit === 0) {
    seconds.innerHTML = reset;
    clearInterval(intervalID);
    button.disabled = true;
    setInterval(() => {
      window.location.reload(true);
    }, 1000);
  }
}, 500);

//generate random number
function getNumberWidthUnits(number, units) {
  return number + units;
}

//generate random image number
function getRandomNumber(min, max) {
  return (min = Math.floor((max - min) * Math.random()));
}

//button
button.addEventListener("click", () => {
  points.innerHTML++;
  let image = getRandomImg(1, 10);
  const imageTemplate = `<img class="birdGame-area__img img--js" src="birds/${image}.jpg" alt="bird ${image}">`;
  button.innerHTML = imageTemplate;
  timeLimit++;
  let buttonWidth = button.offsetWidth;
  let buttonHeight = button.offsetHeight;
  let leftRandom = getRandomNumber(50, button.parentElement.offsetWidth);
  let topRandom = getRandomNumber(0, button.parentElement.offsetHeight);

  button.style.marginLeft = getNumberWidthUnits(leftRandom - buttonWidth, "px");
  button.style.marginTop = getNumberWidthUnits(topRandom - buttonHeight, "px");
});
