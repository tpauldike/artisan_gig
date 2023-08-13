const logoutBtn = document.getElementById('logout');

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('user-initials').innerHTML = localStorage.getItem('initials');
    document.getElementById('signed-in-user').innerHTML = `${localStorage.getItem('userFirstname')} ${localStorage.getItem('userLastname')}`;
});
//  = data.firstname[0]+data.lastname[0];

// logout
logoutBtn.addEventListener('click', () => {
    logoutBtn.innerHTML = "logging out...";
    localStorage.setItem("userToken", "");
    localStorage.setItem("initials", "");
    setTimeout(() => {
        window.location = '../index.html';
    }, 2000);
});
