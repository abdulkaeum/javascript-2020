const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = `${colors[randomNumber]} - ${randomNumber}`;
});

function getRandomNumber() {
  // 0 - 3
  // [0, 1, 2, 3]
  return Math.floor(Math.random() * colors.length);
}
