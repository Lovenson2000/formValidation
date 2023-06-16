
const button = document.getElementById("submit-btn");

function validateForm(event) {

    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username == "") {
        alert("Username can't be empty");
        event.preventDefault();
        return false;
    }

    if(!validateEmail(email)){
        alert("Enter a valid email!")
        event.preventDefault();
        return false;
    }

    if(!validatePassword(password)){
        event.preventDefault();
        return false;
    }
    
    return true;  
}

button.addEventListener("click", validateForm);

//HANDLING EMAIL FORMAT USING REGEX
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

//HANDLING PASSWORD FORMAT USING REGEX
function validatePassword (password) {

    if(password.length < 4) { //PAASWORD LENGTH
        alert("Password must be at least 4 characters");
        return false;
    }
    if(!/^[A-Z]/.test(password)) {
        alert("Passsword must start with an uppercase");
        return false;
    }

    if(!/\d/.test(password)) {
        alert("Passsword must contain a number");
        return false;
    }
    return true;
}


