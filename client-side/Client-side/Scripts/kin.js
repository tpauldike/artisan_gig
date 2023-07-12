artisanSignup = document.querySelector("#artisanSignup")
closeBtn = document.querySelector("#closeBtn")
myForm = document.querySelector("myForm")
artisanContainer = document.querySelector("aT")

artisanSignup.addEventListener('click', function(){
    formCont.style.display = 'block'
})

closeBtn.addEventListener('click', function(){
    formCont.style.display = 'none'
})



//This is for client signup
clientSignup = document.querySelector("#clientSignup")
clientBtn= document.querySelector("#clientBtn")


clientSignup.addEventListener('click', function(){
    formContainer.style.display = 'block'
})

clientBtn.addEventListener('click', function(){
    formContainer.style.display = 'none'
})