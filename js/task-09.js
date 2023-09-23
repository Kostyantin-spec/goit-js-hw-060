function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector('button.chenge-color');
const body = document.body;
const color = document.querySelector('.color');

btn.addEventListener("click", (event) => {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
});