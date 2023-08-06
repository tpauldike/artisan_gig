// import { application } from "express";

//This part handles for the client button
const firstBtn = document.querySelector("#clientSignup");
const clientBtn = document.querySelector("#client-close");
const clientSubmit = document.getElementById("client-submit");
// const artisanSubmit = document.getElementById("artisan-submit");
const artisanForm = document.getElementById('myForm');
const baseURL = 'artisangig-api.vercel.app:3000';

firstBtn.addEventListener('click', function () {
    if (formCont.style.display === 'block') {
        alert('Please close previous form.');
    } else if (login_Form.style.display === 'block') {
        alert('Please close login form');
    } else {
        formContainer.style.display = 'block'
    }
})

clientBtn.addEventListener('click', function () {
    formContainer.style.display = 'none'
})



//This part handles the artisan button

const artisanSignup = document.querySelector("#artisanSignup")
const artisanBtn = document.querySelector("#artisan-close")

artisanSignup.addEventListener('click', function () {

    if (formContainer.style.display === 'block') {
        alert('Please close previous form.');
    } else if (login_Form.style.display === 'block') {
        alert('Please close login form');
    } else {
        formCont.style.display = 'block'
    }
})

artisanBtn.addEventListener('click', function () {
    formCont.style.display = 'none'
})

clientSubmit.addEventListener('click', async (event) => {
    event.preventDefault();
    const firstNameInput = document.getElementById('user-firstname');
    const lastNameInput = document.getElementById('user-lastname');
    const otherNameInput = document.getElementById('user-othername');
    const sexInput = document.getElementById('user-sex');
    const emailInput = document.getElementById('user-email');
    const phoneNumberInput = document.getElementById('user-phone');
    const confirmedPassword = document.getElementById('user-password-confirmed');
    const clientAddress = document.getElementById('user-address');

    const passwordNotCofirmed = document.getElementById('user-password')
    const formData = {
        firstname: firstNameInput.value,
        lastname: lastNameInput.value,
        othername: otherNameInput.value,
        sex: sexInput.value,
        email: emailInput.value,
        phone: phoneNumberInput.value,
        password: confirmedPassword.value,
        role: "Client",
        address: clientAddress.value
    }
    if (formData.password !== passwordNotCofirmed.value) {
        alert('The second password does not match the first one you entered');
        return('Password entries not same');
    }

    try {
        const response = await fetch(`${baseURL}/user/sign_up`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })

        const data = await response.json();
        console.log(data);
        if (data.message === `New ${formData.sex} ${formData.role}, ${formData.firstname} ${formData.lastname}, created sucessfully`){
            alert("You successfully signed up, you may sign in now");
            setTimeout( () => location.reload(), 2000);
        };
        // formData.reset();
        // alert('You successfully signed up, please login');

    } catch (error) {
        console.log(error)
    }

});

// artisanSubmit.addEventListener('click', () => {
//     let formData = new FormData([artisanForm]);
//     artisanForm.onsubmit = async (event) => {
//         event.preventDefault();

//         let response = await fetch(`${baseURL}/user/sign_up`, {
//             method: 'POST',
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(formData)
//         });

//         let outcome = await response.json();

//         alert(outcome.message);
//     };
// });