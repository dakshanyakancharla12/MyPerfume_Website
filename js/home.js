/* =================================
   CHECK LOGIN
================================= */

const isLoggedIn =
    localStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {

    window.location.href = "index.html";

}


/* =================================
   DISPLAY USER NAME
================================= */

const savedUser =
    JSON.parse(localStorage.getItem("perfumeUser"));

const userName =
    document.getElementById("userName");

if (savedUser && userName) {

    userName.textContent =
        savedUser.name;

}


/* =================================
   CART
================================= */

let cart =
    JSON.parse(localStorage.getItem("perfumeCart")) || [];


/* Display cart count */

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

updateCartCount();


/* =================================
   ADD TO CART
================================= */

const addButtons =
    document.querySelectorAll(".add-btn");

addButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const name =
            button.getAttribute("data-name");

        const price =
            Number(
                button.getAttribute("data-price")
            );


        const product = {

            name: name,

            price: price,

            quantity: 1

        };


        cart.push(product);


        localStorage.setItem(
            "perfumeCart",
            JSON.stringify(cart)
        );


        updateCartCount();


        button.textContent = "Added ✓";


        setTimeout(function () {

            button.textContent = "+ Add";

        }, 1200);

    });

});


/* =================================
   LOGOUT
================================= */

const logoutBtn =
    document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "isLoggedIn"
            );

            window.location.href =
                "index.html";

        }
    );

}