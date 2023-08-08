const clientFormContainer = document.getElementById('formContainer');
const artisanFormContainer = document.getElementById('formCont');
const loginFormContainer = document.getElementById('login_Form');

// Make the forms to pop up when needed and hidden when not needed

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const clientSignup = document.getElementById('clientSignup');
    const clientClose = document.getElementById('client-close');

    // Hide other forms and show the Client Sign up form when the button is clicked on
    clientSignup.addEventListener('click', function (event) {
        artisanFormContainer.style.display = 'none';
        loginFormContainer.style.display = 'none';
        clientFormContainer.style.display = (clientFormContainer.style.display === "none") ? "block" : "none";
        event.stopPropagation(); // Prevent event bubbling to the document
    });

    // Hide the form by clicking outside the container
    document.addEventListener('click', function (event) {
        if (!clientFormContainer.contains(event.target) && event.target !== clientClose) {
            clientFormContainer.style.display = 'none';
        }
    });

    // Hide the form when the close button is clicked on
    clientClose.addEventListener('click', function (event) {
        clientFormContainer.style.display = 'none';
        event.stopPropagation();
    });

    // Don't trigger the hide action for clicks on the form
    clientFormContainer.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent event bubbling to the document
    });
});

// Do the same thing for the Artisan Sign up form
document.addEventListener('DOMContentLoaded', function () {
    const artisanSignup = document.getElementById('artisanSignup');
    const artisanClose = document.getElementById('artisan-close');

    artisanSignup.addEventListener('click', function (event) {
        clientFormContainer.style.display = 'none';
        loginFormContainer.style.display = 'none';
        artisanFormContainer.style.display = (artisanFormContainer.style.display === "none") ? "block" : "none";
        event.stopPropagation();
    });

    document.addEventListener('click', function (event) {
        if (!artisanFormContainer.contains(event.target) && event.target !== artisanClose) {
            artisanFormContainer.style.display = 'none';
        }
    });

    artisanClose.addEventListener('click', function (event) {
        artisanFormContainer.style.display = 'none';
        event.stopPropagation();
    });

    artisanFormContainer.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});

// Do same to the login form
document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('loginLink');
    const closeLoginBtn = document.getElementById('close-login-form');

    loginBtn.addEventListener('click', function (event) {
        clientFormContainer.style.display = 'none';
        artisanFormContainer.style.display = 'none';
        loginFormContainer.style.display = (loginFormContainer.style.display === "none") ? "block" : "none";
        event.stopPropagation();
    });

    document.addEventListener('click', function (event) {
        if (!loginFormContainer.contains(event.target) && event.target !== closeLoginBtn) {
            loginFormContainer.style.display = 'none';
        }
    });

    closeLoginBtn.addEventListener('click', function (event) {
        loginFormContainer.style.display = 'none';
        event.stopPropagation();
    });

    loginFormContainer.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});
