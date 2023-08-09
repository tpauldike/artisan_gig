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
    const phoneRegex = /^(\+234)\d{10,11}$/;
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
        if (data.message === `New ${formDataAsObject['sex']} ${formDataAsObject['role']}, ${formDataAsObject['firstname']} ${formDataAsObject['lastname']}, created sucessfully`) {
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
        console.log(error)
    }
});
