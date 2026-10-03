const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get values
    const name =
        document.getElementById("signupName").value.trim();

    const email =
        document.getElementById("signupEmail").value.trim();

    const password =
        document.getElementById("signupPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const message =
        document.getElementById("signupMessage");


    // Check password
    if (password !== confirmPassword) {

        message.textContent =
            "Passwords do not match.";

        message.style.color = "#c0392b";

        return;
    }


    // Check password length
    if (password.length < 6) {

        message.textContent =
            "Password must contain at least 6 characters.";

        message.style.color = "#c0392b";

        return;
    }


    // Check existing user
    const savedUser =
        JSON.parse(localStorage.getItem("perfumeUser"));


    if (savedUser && savedUser.email === email) {

        message.textContent =
            "An account with this email already exists.";

        message.style.color = "#c0392b";

        return;
    }


    // Create user
    const user = {

        name: name,

        email: email,

        password: password

    };


    // Save user
    localStorage.setItem(
        "perfumeUser",
        JSON.stringify(user)
    );


    // Success message
    message.textContent =
        "Account created successfully!";

    message.style.color = "#2e7d32";


    // Go to login page
    setTimeout(function () {

        window.location.href = "index.html";

    }, 1000);

});