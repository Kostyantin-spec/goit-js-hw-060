const formEl = document.querySelector('.login-form');
console.dir(formEl);

formEl.addEventListener('submit', onSubmit)

function onSubmint(event) {
    event.preventDefault();

    const form = event.currentTarget;
    console.dir(form);

    const email = form.elements.email.value;
    console.log(form.elements.email.value);

    const password = form.elements.pasword.value;
    console.log(form.elements.password.value);
}


