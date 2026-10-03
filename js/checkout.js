/* =================================
   MYPERFUME - CHECKOUT
================================= */


/* =================================
   GET CART
================================= */

function getCart() {

    return JSON.parse(
        localStorage.getItem("cart")
    ) || [];

}


/* =================================
   GET PROFILE
================================= */

function getProfile() {

    return JSON.parse(
        localStorage.getItem("perfumeProfile")
    ) || {};

}


/* =================================
   LOAD PROFILE DETAILS
================================= */

function loadProfile() {

    const profile = getProfile();


    document.getElementById("checkoutName").value =
        profile.name || "";


    document.getElementById("checkoutPhone").value =
        profile.phone || "";


    document.getElementById("checkoutCountry").value =
        profile.country || "";


    document.getElementById("checkoutAddress").value =
        profile.address || "";


    document.getElementById("checkoutCity").value =
        profile.city || "";


    document.getElementById("checkoutState").value =
        profile.state || "";


    document.getElementById("checkoutPin").value =
        profile.pin || "";

}


/* =================================
   CART COUNT
================================= */

function updateCartCount() {

    const cart = getCart();

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
   DISPLAY ORDER
================================= */

function displayOrder() {

    const cart = getCart();

    const orderItems =
        document.getElementById("orderItems");

    const checkoutTotal =
        document.getElementById("checkoutTotal");


    if (!orderItems || !checkoutTotal) {
        return;
    }


    orderItems.innerHTML = "";


    let total = 0;


    if (cart.length === 0) {

        orderItems.innerHTML = `
            <p class="empty-order">
                Your cart is empty.
            </p>
        `;

        checkoutTotal.textContent = "₹0";

        return;

    }


    cart.forEach(function(product) {

        const quantity =
            product.quantity || 1;


        const itemTotal =
            Number(product.price) * quantity;


        total += itemTotal;


        const item =
            document.createElement("div");


        item.className =
            "order-item";


        item.innerHTML = `

            <div>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${quantity} × ₹${product.price}
                </p>

            </div>

            <strong>
                ₹${itemTotal}
            </strong>

        `;


        orderItems.appendChild(item);

    });


    checkoutTotal.textContent =
        "₹" + total;

}


/* =================================
   PLACE ORDER
================================= */

function placeOrder() {

    const name =
        document.getElementById("checkoutName")
            .value.trim();

    const phone =
        document.getElementById("checkoutPhone")
            .value.trim();

    const country =
        document.getElementById("checkoutCountry")
            .value.trim();

    const address =
        document.getElementById("checkoutAddress")
            .value.trim();

    const city =
        document.getElementById("checkoutCity")
            .value.trim();

    const state =
        document.getElementById("checkoutState")
            .value.trim();

    const pin =
        document.getElementById("checkoutPin")
            .value.trim();


    /* =================================
       VALIDATION
    ================================= */

    if (
        !name ||
        !phone ||
        !country ||
        !address ||
        !city ||
        !state ||
        !pin
    ) {

        alert(
            "Please fill in all delivery details."
        );

        return;

    }


    const cart = getCart();


    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        window.location.href =
            "products.html";

        return;

    }


    /* =================================
       SAVE ORDER
    ================================= */

    const order = {

        orderId:
            "MP" +
            Date.now(),

        customer: {

            name: name,
            phone: phone,
            country: country,
            address: address,
            city: city,
            state: state,
            pin: pin

        },

        products: cart,

        total:
            calculateTotal(cart),

        date:
            new Date().toLocaleString()

    };


    localStorage.setItem(
        "lastOrder",
        JSON.stringify(order)
    );


    /* Clear cart */

    localStorage.removeItem("cart");


    /* Go to confirmation */

    window.location.href =
        "order-success.html";

}


/* =================================
   CALCULATE TOTAL
================================= */

function calculateTotal(cart) {

    let total = 0;


    cart.forEach(function(product) {

        total +=
            Number(product.price) *
            (product.quantity || 1);

    });


    return total;

}


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


/* =================================
   PLACE ORDER BUTTON
================================= */

document.getElementById(
    "placeOrderBtn"
).addEventListener(
    "click",
    placeOrder
);


/* =================================
   LOAD
================================= */

loadProfile();

displayOrder();

updateCartCount();