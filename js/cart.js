/* =================================
   MYPERFUME - CART
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
   SAVE CART
================================= */

function saveCart(cart) {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}


/* =================================
   UPDATE CART COUNT
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
   DISPLAY CART
================================= */

function displayCart() {

    const cart = getCart();

    const container =
        document.getElementById("cartContainer");

    const emptyCart =
        document.getElementById("emptyCart");

    const summary =
        document.getElementById("cartSummary");


    if (!container || !emptyCart || !summary) {
        return;
    }


    container.innerHTML = "";


    /* EMPTY CART */

    if (cart.length === 0) {

        container.style.display = "none";

        emptyCart.style.display = "block";

        summary.style.display = "none";

        updateCartCount();

        return;

    }


    /* CART HAS PRODUCTS */

    container.style.display = "grid";

    emptyCart.style.display = "none";

    summary.style.display = "block";


    let total = 0;

    let totalItems = 0;


    cart.forEach(function(product, index) {

        const quantity =
            product.quantity || 1;


        const itemTotal =
            Number(product.price) * quantity;


        total += itemTotal;

        totalItems += quantity;


        const card =
            document.createElement("div");

        card.className = "cart-card";


        card.innerHTML = `

            <div class="cart-image">

    <img
        src="${product.image}"
        alt="${product.name}"
        class="cart-product-photo"
    >

</div>


            <div class="cart-info">

                <p class="cart-category">
                    ${(product.category || "PERFUME").toUpperCase()}
                </p>

                <h2>
                    ${product.name}
                </h2>

                <p class="cart-price">
                    ₹${product.price}
                </p>

                <div class="quantity-box">

                    <button
                        class="quantity-btn"
                        onclick="decreaseQuantity(${index})">

                        −

                    </button>


                    <span class="quantity">
                        ${quantity}
                    </span>


                    <button
                        class="quantity-btn"
                        onclick="increaseQuantity(${index})">

                        +

                    </button>

                </div>


                <p class="item-total">
                    Item Total: ₹${itemTotal}
                </p>

            </div>


            <button
                class="remove-cart-btn"
                onclick="removeFromCart(${index})">

                Remove

            </button>

        `;


        container.appendChild(card);

    });


    /* =================================
       SUMMARY
    ================================= */

    const totalItemsElement =
        document.getElementById("totalItems");

    const totalPrice =
        document.getElementById("totalPrice");


    if (totalItemsElement) {

        totalItemsElement.textContent =
            totalItems;

    }


    if (totalPrice) {

        totalPrice.textContent =
            "₹" + total;

    }


    updateCartCount();

}


/* =================================
   INCREASE QUANTITY
================================= */

function increaseQuantity(index) {

    const cart = getCart();

    const currentQuantity =
        cart[index].quantity || 1;

    if (currentQuantity >= 10) {

        alert("Maximum quantity is 10.");

        return;
    }

    cart[index].quantity =
        currentQuantity + 1;

    saveCart(cart);

    displayCart();
}

/* =================================
   DECREASE QUANTITY
================================= */

function decreaseQuantity(index) {

    const cart = getCart();

    const currentQuantity =
        cart[index].quantity || 1;

    if (currentQuantity <= 1) {

        alert("Minimum quantity is 1.");

        return;
    }

    cart[index].quantity =
        currentQuantity - 1;

    saveCart(cart);

    displayCart();
}


/* =================================
   REMOVE FROM CART
================================= */

function removeFromCart(index) {

    const cart = getCart();

    cart.splice(index, 1);

    saveCart(cart);

    displayCart();

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
   LOAD CART
================================= */

displayCart();