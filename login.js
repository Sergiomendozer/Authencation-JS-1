document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log("Username: " + username + " Password: " + password);
    // Add your login logic here
});
