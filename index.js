//button
//1. click and change random photo inside button
const button = document.querySelector(".button--js");

button.addEventListener("click", () => {
  function getRandomImg(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let image = getRandomImg(1, 10);
  console.log(getRandomImg(1, 10));
  const randomImg = `<img class="birdGame-area__img img--js" src="birds/${image}.jpg" alt="bird${image}">`;
  button.innerHTML = randomImg;
});

//   let image = new Array(10);
//   for (let i = 1; i < 11; i++) {
//     image[i] = i + ".jpg";

//     Math.random(i);
//     console.log(Math.random(i));
