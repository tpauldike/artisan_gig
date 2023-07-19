//This part handles for the client button
const firstBtn = document.querySelector("#clientSignup")
const clientBtn = document.querySelector("#clientBtn")


 firstBtn.addEventListener('click', function(){
    if (formCont.style.display === 'block'){
        alert('Please close previous form.');
    } else if (login_Form.style.display === 'block'){
        alert('Please close login form');
    } else {
    formContainer.style.display = 'block'
    }
})

clientBtn.addEventListener('click', function(){
    formContainer.style.display = 'none'
})



//This part handles the artisan button

const artisanSignup = document.querySelector("#artisanSignup")
const closeBtn = document.querySelector("#closeBtn")

artisanSignup.addEventListener('click', function(){
   
    if (formContainer.style.display === 'block'){
        alert('Please close previous form.');
    } else if (login_Form.style.display === 'block'){
        alert('Please close login form');
    } else {
        formCont.style.display = 'block'
    }
})

closeBtn.addEventListener('click', function(){
    formCont.style.display = 'none'
})



