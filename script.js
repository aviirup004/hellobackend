// script.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simple form validation
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        alert('Login successful!');
    } else {
        alert('Please fill in all fields.');
    }
});
