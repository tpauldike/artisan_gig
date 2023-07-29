
//this part handles for login form

const loginFirst = document.querySelector("#loginLink")
const LoginBtn = document.querySelector("#loginBtn")

loginFirst.addEventListener('click', function(){
    if (formCont.style.display === 'block'){
        alert('Please close signup form.');
    } else if (formContainer.style.display === 'block'){
        alert('Please close signup form.');
    } else {
        login_Form.style.display = 'block'
    }
    
});

LoginBtn.addEventListener('click', function(){
    login_Form.style.display = 'none'
});

