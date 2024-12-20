
function validateForm() {
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("last_name").value;
    var password = document.getElementById("password").value;
    var checkbox = document.getElementById("checkbox").checked;

    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    
    if (name.trim() === "" || lastName.trim() === "") {
        alert("Please fill in both first and last names.");
        return false;
    }

    
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    if (!checkbox) {
        alert("Please agree to the terms by checking the 'Keep me signed in' box.");
        return false;
    }

    
    window.location.href = "homepage.html";
    return false; 
}
