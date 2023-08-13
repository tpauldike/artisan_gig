// Form containers
const clientContainer = document.getElementById('formContainer');
const artisanContainer = document.getElementById('formCont');
const loginForm = document.getElementById('login_Form');

// The forms
const clientForm = document.getElementById('user-form');
const artisanForm = document.getElementById('artisan-form');
// const clientSignup = document.getElementById('client-submit');

const baseURL = "https://artisangig-api.vercel.app";
// const baseURL = "http://localhost:4001";

// Client sign up
clientForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target)
    const formDataAsObject = Object.fromEntries(formData.entries())


    if (formDataAsObject['password'] !== formDataAsObject['password-confirmed']) {
        alert('The second password does not match the first one you entered');
        console.log('Password do not match');
        return ('Password entries not same');
    }

    formDataAsObject['role'] = 'Client';
    
    const phoneRegex = /^(\+234)\d{10,11}$/; //check the phone no. for the required format
    if (!phoneRegex.test(formDataAsObject['phone'])) {
        console.log('Phone not valid; expected +234**********')
        alert("Invalid phone number!\nUse the format +234********** with no space;\nThe number should be complete and correct");
        return;
    }

    try {
        const clientSubmitBtn = document.getElementById('client-submit');
        clientSubmitBtn.innerHTML = 'Loading...';

        const response = await fetch(`${baseURL}/user/sign_up`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formDataAsObject)
        })

        const data = await response.json();
        console.log(data);
        if (data.message === "User with this email already exists!") {
            alert(data.message);
            clientSubmitBtn.innerHTML = 'Submit';
        } else if (data.message === `New ${formDataAsObject['sex']} ${formDataAsObject['role']}, ${formDataAsObject['firstname']} ${formDataAsObject['lastname']}, created sucessfully`) {
            clientSubmitBtn.innerHTML = 'Submit';
            clientForm.reset();
            alert("You successfully signed up, you may sign in now");
            setTimeout(() => {
                clientContainer.style.display = "none";
                artisanContainer.style.display = "none";
                window.scrollTo(0, 0);
                loginForm.style.display = "block";
            }, 2000);
        };

    } catch (error) {
        document.getElementById('client-submit').innerHTML = 'Submit';
        console.log(error);
        alert('An error occured');
    }
});

// Artisan sign up
artisanForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target)
    const formDataAsObject = Object.fromEntries(formData.entries())


    if (formDataAsObject['password'] !== formDataAsObject['password-confirmed']) {
        alert('The second password does not match the first one you entered');
        console.log('Password do not match');
        return ('Password entries not same');
    }

    formDataAsObject['role'] = 'Artisan';
    
    const phoneRegex = /^(\+234)\d{10,11}$/;
    if (!phoneRegex.test(formDataAsObject['phone'])) {
        console.log('Phone not valid; expected +234**********')
        alert("Invalid phone number!\nUse the format +234********** with no space;\nThe number should be complete and correct");
        return;
    }
    // console.log(formDataAsObject); //Used for debugging
    document.getElementById('artisan-submit').innerHTML = 'Create Account';
    try {
        const artisanSubmitBtn = document.getElementById('artisan-submit');
        artisanSubmitBtn.innerHTML = 'Please wait...';

        const response = await fetch(`${baseURL}/user/sign_up`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formDataAsObject)
        })

        const data = await response.json();
        console.log(data);
        if (data.message === "User with this email already exists!") {
            alert(data.message);
            artisanSubmitBtn.innerHTML = 'Create Account';
        } else if (data.message === `New ${formDataAsObject['sex']} ${formDataAsObject['role']}, ${formDataAsObject['firstname']} ${formDataAsObject['lastname']}, created sucessfully`) {
            artisanContainer.style.display = "none";
            artisanSubmitBtn.innerHTML = 'Create Account';
            artisanForm.reset();
            localStorage.setItem("userToken", data.token);
            alert("Account created successfully! You may proceed and give us more details about you");
            setTimeout(() => {
                window.location = "./pages/details.html";
            }, 2000);
        };

    } catch (error) {
        document.getElementById('artisan-submit').innerHTML = 'Create Account';
        alert('Sorry! An error occured');
        console.log(error)
    }
});

// login
loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const loginButton = document.getElementById("login-btn");
    loginButton.innerHTML = "Please wait..."

    const loginEmailInput = document.getElementById("login-email");
    const loginPasswordInput = document.getElementById("login-password");

    const formData = {
        email: loginEmailInput.value,
        password: loginPasswordInput.value
    }

    try {
        const response = await fetch(`${baseURL}/user/sign_in`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log(data);
        if (data.message === "Successfully logged in") {
            localStorage.setItem("userToken", data.token);
            localStorage.setItem("initials", data.firstname[0] +" "+ data.lastname[0]);
            localStorage.setItem("userFirstname", data.firstname);
            localStorage.setItem("userLastname", data.lastname);
            setTimeout(() => {
                window.location = "./pages/home.html";
            }, 2000);
        } else {
            loginButton.innerHTML = "Login";
            alert(data.message);
        }
    } catch (error) {
        document.getElementById("login-btn").innerHTML = "Login";
        console.log(error);
        alert("An unknown error occured");
    }
});
