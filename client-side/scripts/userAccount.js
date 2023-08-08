const clientForm = document.getElementById('user-form');
const artisanForm = document.getElementById('artisan-form');
const loginForm = document.getElementById('login_Form');
// const clientSignup = document.getElementById('client-submit');
const baseURL = "127.0.0.1:3000";

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

    // if (formData.password !== passwordNotCofirmed.value) {
    //     alert('The second password does not match the first one you entered');
    //     console.log('Password do not match');
    //     return ('Password entries not same');
    // }

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
            setTimeout(() => location.reload(), 2000);
        };
        // formData.reset();
        // alert('You successfully signed up, please login');

    } catch (error) {
        console.log(error)
    }

});