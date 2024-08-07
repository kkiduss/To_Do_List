// login.js

// Get the login form and button
const loginForm = document.getElementById('loginForm');
const loginButton = document.getElementById('loginButton');

// Add an event listener to the login button
loginButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the username and password values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform the login logic
  if (username === 'admin' && password === '123') {
    // Redirect the user to index.html
    window.location.href = 'index.html';
  } else {
    // Display an error message
    alert('Invalid username or password');
  }
});