/* =================================
   MYPERFUME - PROFILE
================================= */


/* =================================
   GET USER
================================= */

function getUser() {

    return JSON.parse(
        localStorage.getItem("perfumeUser")
    ) || {};

}


/* =================================
   GET PROFILE DETAILS
================================= */

function getProfile() {

    return JSON.parse(
        localStorage.getItem("perfumeProfile")
    ) || {};

}


/* =================================
   DISPLAY PROFILE
================================= */

function displayProfile() {

    const user = getUser();

    const profile = getProfile();


    document.getElementById("profileName").value =
        profile.name || user.name || "";


    document.getElementById("profileEmail").value =
        user.email || profile.email || "";


    document.getElementById("profilePhone").value =
        profile.phone || "";


    document.getElementById("profileCountry").value =
        profile.country || "";


    document.getElementById("profileAddress").value =
        profile.address || "";


    document.getElementById("profileCity").value =
        profile.city || "";


    document.getElementById("profileState").value =
        profile.state || "";


    document.getElementById("profilePin").value =
        profile.pin || "";

}


/* =================================
   ENABLE EDITING
================================= */

function enableEditing() {

    const editableFields = [

        "profileName",
        "profilePhone",
        "profileCountry",
        "profileAddress",
        "profileCity",
        "profileState",
        "profilePin"

    ];


    editableFields.forEach(function(id) {

        document.getElementById(id)
            .disabled = false;

    });


    document.getElementById("editProfileBtn")
        .style.display = "none";


    document.getElementById("saveProfileBtn")
        .style.display = "inline-block";

}


/* =================================
   SAVE PROFILE
================================= */

function saveProfile() {

    const user = getUser();


    const profile = {

        name:
            document.getElementById("profileName").value.trim(),

        email:
            document.getElementById("profileEmail").value.trim(),

        phone:
            document.getElementById("profilePhone").value.trim(),

        country:
            document.getElementById("profileCountry").value.trim(),

        address:
            document.getElementById("profileAddress").value.trim(),

        city:
            document.getElementById("profileCity").value.trim(),

        state:
            document.getElementById("profileState").value.trim(),

        pin:
            document.getElementById("profilePin").value.trim()

    };


    /* Save profile information */

    localStorage.setItem(
        "perfumeProfile",
        JSON.stringify(profile)
    );


    /* Update main user name */

    if (user) {

        user.name = profile.name;

        localStorage.setItem(
            "perfumeUser",
            JSON.stringify(user)
        );

    }


    /* Disable fields again */

    const editableFields = [

        "profileName",
        "profilePhone",
        "profileCountry",
        "profileAddress",
        "profileCity",
        "profileState",
        "profilePin"

    ];


    editableFields.forEach(function(id) {

        document.getElementById(id)
            .disabled = true;

    });


    document.getElementById("editProfileBtn")
        .style.display = "inline-block";


    document.getElementById("saveProfileBtn")
        .style.display = "none";


    alert("Profile updated successfully! ✓");

}


/* =================================
   CART COUNT
================================= */

function updateCartCount() {

    const cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];


    let totalQuantity = 0;


    cart.forEach(function(product) {

        totalQuantity +=
            product.quantity || 1;

    });


    const cartCount =
        document.getElementById("cartCount");


    if (cartCount) {

        cartCount.textContent =
            totalQuantity;

    }

}


/* =================================
   LOGOUT
================================= */

function logoutUser() {

    localStorage.removeItem(
        "currentUser"
    );

    localStorage.removeItem(
        "isLoggedIn"
    );

    window.location.href =
        "index.html";

}


/* =================================
   BUTTON EVENTS
================================= */

document.getElementById("editProfileBtn")
    .addEventListener(
        "click",
        enableEditing
    );


document.getElementById("saveProfileBtn")
    .addEventListener(
        "click",
        saveProfile
    );


document.getElementById("logoutBtn")
    .addEventListener(
        "click",
        logoutUser
    );


/* =================================
   LOAD PROFILE
================================= */

displayProfile();

updateCartCount();