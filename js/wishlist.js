/* =========================
   WISHLIST
========================= */

function getWishlist() {

    return JSON.parse(
        localStorage.getItem("wishlist")
    ) || [];

}

function saveWishlist(wishlist) {

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

}


/* =========================
   CART
========================= */

function getCart() {

    return JSON.parse(
        localStorage.getItem("cart")
    ) || [];

}


/* =========================
   CHECK IF PRODUCT IS IN CART
========================= */

function isInCart(productName) {

    const cart = getCart();

    return cart.some(function(product) {

        return product.name === productName;

    });

}


/* =========================
   CART COUNT
========================= */

function updateCartCount() {

    const cart = getCart();

    let totalQuantity = 0;

    cart.forEach(function(product) {

        if (product.quantity) {

            totalQuantity +=
                Number(product.quantity);

        } else {

            totalQuantity += 1;

        }

    });

    const cartCount =
        document.getElementById("cartCount");

    if (cartCount) {

        cartCount.textContent =
            totalQuantity;

    }

}


/* =========================
   DISPLAY WISHLIST
========================= */

function displayWishlist() {

    const wishlist =
        getWishlist();

    const grid =
        document.getElementById("wishlistGrid");

    const empty =
        document.getElementById("emptyWishlist");

    if (!grid || !empty) {
        return;
    }

    grid.innerHTML = "";

    if (wishlist.length === 0) {

        grid.style.display = "none";
        empty.style.display = "block";

        return;

    }

    grid.style.display = "grid";
    empty.style.display = "none";


    wishlist.forEach(function(product, index) {

        const card =
            document.createElement("div");

        card.className =
            "wishlist-card";


        const category =
            product.category || "PERFUME";

        const categoryClass =
            category.toLowerCase();


        /* =========================
           PRODUCT IMAGE
        ========================= */

        let imageHTML = "";

        if (product.image) {

            imageHTML =
                '<img src="' +
                product.image +
                '" alt="' +
                product.name +
                '" class="wishlist-product-photo">';

        } else {

            imageHTML =
                '<div class="wishlist-cap"></div>' +
                '<div class="wishlist-bottle">MP</div>';

        }


        /* =========================
           CART BUTTON STATE
        ========================= */

        const alreadyInCart =
            isInCart(product.name);

        const cartButtonText =
            alreadyInCart
                ? "Added to Cart"
                : "Add to Cart";

        const cartButtonClass =
            alreadyInCart
                ? "cart-btn added"
                : "cart-btn";


        /* =========================
           CARD
        ========================= */

        card.innerHTML =

            '<div class="wishlist-image ' +
            categoryClass +
            '">' +

                imageHTML +

            '</div>' +


            '<div class="wishlist-info">' +

                '<p class="wishlist-category">' +
                    category.toUpperCase() +
                '</p>' +

                '<h3>' +
                    product.name +
                '</h3>' +

                '<p class="wishlist-price">' +
                    '₹' + product.price +
                '</p>' +


                '<div class="wishlist-buttons">' +


                    /* ADD TO CART */

                    '<button ' +
                        'class="' +
                        cartButtonClass +
                        '" ' +
                        'onclick="addToCart(' +
                        index +
                        ', this)">' +

                        cartButtonText +

                    '</button>' +


                    /* FILLED HEART */

                    '<button ' +
                        'class="remove-btn" ' +
                        'onclick="removeFromWishlist(' +
                        index +
                        ')">' +

                        '♥' +

                    '</button>' +


                '</div>' +

            '</div>';


        grid.appendChild(card);

    });

}


/* =========================
   REMOVE FROM WISHLIST
========================= */

function removeFromWishlist(index) {

    const wishlist =
        getWishlist();

    wishlist.splice(index, 1);

    saveWishlist(wishlist);

    displayWishlist();

}


/* =========================
   ADD TO CART
========================= */

function addToCart(index, button) {

    const wishlist =
        getWishlist();

    const product =
        wishlist[index];

    if (!product) {
        return;
    }


    let cart =
        getCart();


    const existingProduct =
        cart.find(function(item) {

            return item.name === product.name;

        });


    if (existingProduct) {

        existingProduct.quantity =
            (Number(existingProduct.quantity) || 1) + 1;

    } else {

        cart.push({

            name: product.name,

            price: product.price,

            image: product.image,

            category: product.category,

            quantity: 1

        });

    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    /* Change button immediately */

    if (button) {

        button.textContent =
            "Added to Cart";

        button.classList.add("added");

    }


    /* Update cart number */

    updateCartCount();

}


/* =========================
   LOGOUT
========================= */

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


/* =========================
   INITIAL LOAD
========================= */

updateCartCount();

displayWishlist();