
// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
}

// nav hide 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
});

//form validation
function validateForm() {
    // Retrieving form inputs and trimming whitespace
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var phone = document.getElementById('phone').value.trim();

    // Clearing previous error messages
    document.getElementById('nameError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('passwordError').innerHTML = "";
    document.getElementById('phoneError').innerHTMl = ""

    // Validation logic
    var isValid = true;

    if (name === "") {
        document.getElementById('nameError').innerHTML = "Name is required";
        isValid = false;
    }
    if (phone === "") {
        document.getElementById('phoneError').innerHTML = "Phone Number is required";
        isValid = false;
    } else if (!isValidPhone(phone)) {
        document.getElementById('phoneError').innerHTML = "Invalid Phone Number";
        isValid = false;
    }
    if (email === "") {
        document.getElementById('emailError').innerHTML = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').innerHTML = "Invalid email format";
        isValid = false;
    }

    if (password === "") {
        document.getElementById('passwordError').innerHTML = "Password is required";
        isValid = false;
    } else if (password.length < 8) { // Minimum length of password is 8 characters
        document.getElementById('passwordError').innerHTML = "Password must be at least 8 characters long";
        isValid = false;
    }

    return isValid;
}

// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
    return emailRegex.test(email);
}
function isValidPhone(phone) {
    var phoneRegex = /^([0-9]{10,12})$/
    return phoneRegex.test(phone);
}
function checkPasswordStrength() {
    var password = document.getElementById('password').value.trim();
    var strength = 0;

    // Check length
    if (password.length >= 8) {
        strength += 1;
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
        strength += 1;
    }

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
        strength += 1;
    }

    // Check for digits
    if (/\d/.test(password)) {
        strength += 1;
    }

    var passwordStrengthLabel = document.getElementById('password-strength');

    if (strength <= 1) {
        passwordStrengthLabel.textContent = 'Weak';
        passwordStrengthLabel.classList.remove('medium', 'strong');
        passwordStrengthLabel.classList.add('weak');
    } else if (strength <= 3) {
        passwordStrengthLabel.textContent = 'Medium';
        passwordStrengthLabel.classList.remove('weak', 'strong');
        passwordStrengthLabel.classList.add('medium');
    } else {
        passwordStrengthLabel.textContent = 'Strong';
        passwordStrengthLabel.classList.remove('weak', 'medium');
        passwordStrengthLabel.classList.add('strong');
    }
}


// Login Form Validation

function validationForm() {
    // Retrieving form inputs and trimming whitespace
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();

    // Clearing previous error messages
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('passwordError').innerHTML = "";

    // Validation logic
    var isValid = true;

    if (email === "") {
        document.getElementById('emailError').innerHTML = "Email is required";
        isValid = false;
    } else if (!isValidMail(email)) {
        document.getElementById('emailError').innerHTML = "Invalid email format";
        isValid = false;
    }

    if (password === "") {
        document.getElementById('passwordError').innerHTML = "Password is required";
        isValid = false;
    } else if (password.length < 6) { // Minimum length of password is 6 characters
        document.getElementById('passwordError').innerHTML = "Password must be at least 6 characters long";
        isValid = false;
    }

    return isValid;
}

// Function to validate email format
function isValidMail(email) {
    var emailRegex = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
    return emailRegex.test(email);
}