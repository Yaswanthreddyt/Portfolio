const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const form = document.getElementById('contact-form');
const success = document.getElementById('success');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (name.value === '' || email.value === '' || phone.value === '' || message.value === '') {
        error.style.display = 'block';
        success.style.display = 'none';
    } else {
        error.style.display = 'none';
        success.style.display = 'block';
    }
});