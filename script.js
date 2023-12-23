document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for demonstration purposes
    // You can add login logic here
    console.log('Username:', document.getElementById('username').value);
    console.log('Password:', document.getElementById('password').value);
  });
  
  document.getElementById('forgotPassword').addEventListener('click', function(event) {
    event.preventDefault();
    // Implement forgot password functionality or redirect to the appropriate page
    console.log('Forgot Password clicked');
  });
  
  document.getElementById('registerUser').addEventListener('click', function(event) {
    event.preventDefault();
    // Implement registration functionality or redirect to the registration page
    console.log('Register New User clicked');
  });
  