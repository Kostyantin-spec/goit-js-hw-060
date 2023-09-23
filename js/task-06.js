const inputElement = document.querySelector("#validation- imput");
 
inputElement.addEventListener("blur", () => {
    const inputValue = inputElement.value ;
    const maxLength = inputElement.getAttribute("data-length");

    if (inputValue.length === maxLength) {
        inputElement.classList.remove("invalid");
        inputElement.classList.add("valid");
    } else {
        inputElement.classList.remove("valid");
        inputElement.classList.add("invalid");
    }
});