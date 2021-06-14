const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailField = document.querySelector("input[name='email']");

emailField.addEventListener('input', e => {
    const emailEntry = emailField.value;
    const validEmail = emailRegex.test(emailEntry);
    if (validEmail) {
        console.log('Valid E-mail');
    } else {
        console.log("invalid");
    }
})
