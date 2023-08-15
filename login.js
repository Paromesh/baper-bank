// step:1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step:2 get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step:3 get password
    const passwordField =document.getElementById('user-password');
    const password = passwordField.value;
    //DANGER: DO NOT VERIFY email password on the client side
    // step:4 verify email and password and check weather valid user or not
    if(email === 'Paromesh94@gmail.com' && password === 'Paromesh94'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Invalid User')
    }

})