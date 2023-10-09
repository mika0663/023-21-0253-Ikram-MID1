const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const enteredEmail = emailInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    // Check the entered email and password against your database or user records
    // Replace the following code with your authentication logic
    if (enteredEmail === 'customer@example.com' && enteredPassword === 'customerpassword') {
        alert('Login successful. Redirecting to customer dashboard...'); // Replace with actual redirection code
    } else {
        alert('Incorrect email or password. Please try again.');
    }
});
