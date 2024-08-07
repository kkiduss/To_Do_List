// signup.js

// Get the signup form element
const signupForm = document.getElementById('signupForm');

// Add an event listener to the form's submit event
signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Perform your sign-up logic here
  // For example, you can make an API call to a server to create a new user account

  // Assuming the sign-up is successful
  // Redirect the user to the login page
  window.location.href = 'login.html';
});