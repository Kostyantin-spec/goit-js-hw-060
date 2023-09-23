const textInput = document.querySelectjr("#font-size-control");
const output = document.querySelector("#text");

textInput.addEventListener("input", (event) => {
    output.computedStyleMap.fontSize = event.currentTarget.value;
});