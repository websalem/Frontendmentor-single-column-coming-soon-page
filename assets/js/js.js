const error = document.querySelector('.err');
const email = document.getElementById('email');
const submit = document.querySelector('.submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
        error.innerHTML = "Please provide a valid email address";
    }

});