const spanEl = document.getElementById('value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = Number(spanEl.innerHTML);

incrementBtn.classList.add('increment-btn');
decrementBtn.classList.add('decrement-btn');

 incrementBtn.addEventListener('click', increment);
 decrementBtn.addEventListener('click', decrement);

function increment() {
    counterValue++;
    spanEl.textContent = counterValue;
}

function decrement() {
    counterValue--;
    spanEl.textContent = counterValue;
}

