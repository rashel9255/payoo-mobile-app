// login button functionality

document.getElementById("login-btn").addEventListener("click",function(e){
    e.preventDefault();
    const mobileNumber = 123456789;
    const pinNumber = 1234;
    const userMobileNumber = document.getElementById('mobile-number').value;
    const userMobileNumberConverted = parseInt(userMobileNumber);
    const userPinNumber = document.getElementById('pin-number').value;
    const userPinNumberConverted = parseInt(userPinNumber);

    if(mobileNumber === userMobileNumberConverted && pinNumber === userPinNumberConverted){
        window.location.href = 'home.html';
    }else{
        alert('Invalid credentials. Please try again.');
    }
})