const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", currentName);

function currentName(event) {
    const input = event.currentTarget;

    if (input.value.trim() === "") {
        spanEl.textContent = "Anonimous";
    } else {
        spanEl.textContent = input.value;
    }
}
