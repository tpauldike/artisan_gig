// Form containers
const clientContainer = document.getElementById('formContainer');
const artisanContainer = document.getElementById('formCont');
const loginForm = document.getElementById('login_Form');

// The forms
const clientForm = document.getElementById('user-form');
const artisanForm = document.getElementById('artisan-form');
// const clientSignup = document.getElementById('client-submit');
const baseURL = "http://localhost:4001";

clientForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    // const firstNameInput = document.getElementById('user-firstname');
    // const lastNameInput = document.getElementById('user-lastname');
    // const otherNameInput = document.getElementById('user-othername');
    // const sexInput = document.getElementById('user-sex');
    // const emailInput = document.getElementById('user-email');
    // const phoneNumberInput = document.getElementById('user-phone');
    // const confirmedPassword = document.getElementById('user-password-confirmed');
    // const clientAddress = document.getElementById('user-address');

    // const passwordNotCofirmed = document.getElementById('user-password')
    // const formData = {
    //     firstname: firstNameInput.value,
    //     lastname: lastNameInput.value,
    //     othername: otherNameInput.value,
    //     sex: sexInput.value,
    //     email: emailInput.value,
    //     phone: phoneNumberInput.value,
    //     password: confirmedPassword.value,
    //     role: "Client",
    //     address: clientAddress.value
    // }
    const formData = new FormData(event.target)
    // console.log(Object.fromEntries(formData.entries()));
    const formDataAsObject = Object.fromEntries(formData.entries())
    // console.log(formDataAsObject);

    if (formDataAsObject['password'] !== formDataAsObject['password-confirmed']) {
        alert('The second password does not match the first one you entered');
        console.log('Password do not match');
        return ('Password entries not same');
    }

    formDataAsObject['role'] = 'Client';
    const phoneRegex = /^(\+234)\d{10,11}$/;
    if (!phoneRegex.test(formDataAsObject['phone'])) {
        console.log('Phone not valid; expected +234**********')
        alert("Invalid phone number!\nUse the format +234********** with no space.");
        return;
    }

    try {
        const response = await fetch(`${baseURL}/user/sign_up`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formDataAsObject)
        })

        const data = await response.json();
        console.log(data);
        if (data.message === `New ${formData.sex} ${formData.role}, ${formData.firstname} ${formData.lastname}, created sucessfully`) {
            alert("You successfully signed up, you may sign in now");
            setTimeout((formData) => {
                formData.reset();
                artisanContainer.style.display = "none";
                clientContainer.style.display = "none";
                loginForm.style.display = "block";
            }, 2000);
        };

    } catch (error) {
        console.log(error)
    }
});