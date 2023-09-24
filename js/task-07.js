const inputEl = document.getElementById('font-size-control');
const output = document.getElementById('text');

output.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener('input', inputHadler)

function inputHadler(event) {
    output.style.fontSize = `${event.currentTarget.value}px`;
}
