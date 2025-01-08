// Author: Gillian Kelly


// function to save account info to localstorage 
function saveData(event) {
    event.preventDefault();

    let name = document.getElementById('inputName').value;
    let username = document.getElementById('inputEmail').value;
    let pass = document.getElementById('inputPassword').value;

    console.log(name);
    console.log(username);
    console.log(pass);
    // don't allow null or empty values
    if (name === "" || username === "" || pass === "" || name === null || username === null || pass === null) {
        alert('Please fill out all required fields');
    } else {
        // store user credentials in localStorage 
        localStorage.setItem('user', username);
        localStorage.setItem('psswd', pass);
        localStorage.setItem('nameID', name);
        let signupModal = new bootstrap.Modal(document.getElementById('signup-modal'));
        signupModal.hide(); // close modal on successful 
        alert("Sign up successful");
    }
}

// function to login user by comparing inputted values to those stored in localStorage
function loadData(event) {
    event.preventDefault();

    // get user entered values
    let enteredUsername = document.getElementById('email').value;
    let enteredPass = document.getElementById('password').value;

    // get values from local storage 
    let storedUser = localStorage.getItem('user');
    let storedPass = localStorage.getItem('psswd');

    // determine if user entered valid login information 
    if((enteredUsername === storedUser) && (enteredPass === storedPass)) {
        var loginModal = new bootstrap.Modal(document.getElementById('login-modal'));
        loginModal.hide(); // dismiss the modal on successful login
        alert('Login successful');
    } else {
        alert('Invalid username or password');
    }
}

// function for switching between modals when bottom link is clicked
function switchModals(currentModalId, targetModalId) {
        var currentModalEl = document.getElementById(currentModalId);
        var targetModalEl = new bootstrap.Modal(document.getElementById(targetModalId));
  
        // Hide the current modal and then show the target modal
        var currentModal = bootstrap.Modal.getInstance(currentModalEl);
        currentModal.hide();
  
        // show the other modal 
        currentModalEl.addEventListener('hidden.bs.modal', function onModalHidden() {
          currentModalEl.removeEventListener('hidden.bs.modal', onModalHidden);
          targetModalEl.show();
        }, {once: true}); // Ensures the listener is removed after it's invoked once
}
