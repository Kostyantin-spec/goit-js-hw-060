const counterValue = document.querySelector(".counter");
const button = document.querySelector("#decrement");
const button = document.querySelector("#increment");

let counterValue = 0;

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);

function increment() {
    counterValue++;
    counterElement.textContent = counterValue;
}

function decrement() {
    counterValue--;
    counterElement.textContent = counterValue;
}
