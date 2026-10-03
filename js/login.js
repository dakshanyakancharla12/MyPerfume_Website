const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get values
    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value;

    const message =
        document.getElementById("loginMessage");


    // Get saved account
    const savedUser =
        JSON.parse(localStorage.getItem("perfumeUser"));


    // No account
    if (!savedUser) {

        message.textContent =
            "No account found. Please create an account first.";

        message.style.color = "#c0392b";

        return;
    }


    // Check credentials
    if (
        email === savedUser.email &&
        password === savedUser.password
    ) {

        // Login status
        localStorage.setItem(
            "isLoggedIn",
            "true"
        );


        message.textContent =
            "Login successful!";

        message.style.color = "#2e7d32";


        // Home page
        setTimeout(function () {

            window.location.href = "home.html";

        }, 800);

    }

    else {

        message.textContent =
            "Invalid email or password.";

        message.style.color = "#c0392b";

    }

});