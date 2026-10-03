/* =================================
   MYPERFUME - ORDER SUCCESS
================================= */


/* =================================
   GET ORDER
================================= */

const order =
    JSON.parse(
        localStorage.getItem("lastOrder")
    );


/* =================================
   DISPLAY ORDER ID
================================= */

const orderId =
    document.getElementById("orderId");


if (order && orderId) {

    orderId.textContent =
        order.orderId;

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


updateCartCount();


/* =================================
   LOGOUT
================================= */

const logoutBtn =
    document.getElementById("logoutBtn");


if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        function() {

            localStorage.removeItem(
                "currentUser"
            );

            localStorage.removeItem(
                "isLoggedIn"
            );

            window.location.href =
                "index.html";

        }
    );

}