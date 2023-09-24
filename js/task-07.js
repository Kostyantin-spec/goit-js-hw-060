const textInput = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

textInput.addEventListener("input", (event) => {
    output.computedStyleMap.fontSize = event.currentTarget.value;
});