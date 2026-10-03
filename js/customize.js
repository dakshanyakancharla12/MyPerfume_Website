/* =================================
   MYPERFUME - CUSTOMIZE
================================= */


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
   ELEMENTS
================================= */

const perfumeName =
    document.getElementById("perfumeName");

const fragrance =
    document.getElementById("fragrance");

const scent =
    document.getElementById("scent");

const size =
    document.getElementById("size");

const quantity =
    document.getElementById("quantity");


/* =================================
   UPDATE PREVIEW
================================= */

function updatePreview() {

    const name =
        perfumeName.value.trim();


    document.getElementById("previewName")
        .textContent =
        name || "MY PERFUME";


    document.getElementById("previewFragrance")
        .textContent =
        fragrance.value;


    document.getElementById("previewScent")
        .textContent =
        scent.value;


    document.getElementById("previewSize")
        .textContent =
        size.value + " ml";


    document.getElementById("previewPrice")
        .textContent =
        getPrice();

}


/* =================================
   GET PRICE
================================= */

function getPrice() {

    const selectedSize =
        Number(size.value);


    if (selectedSize === 30) {
        return 499;
    }

    if (selectedSize === 50) {
        return 699;
    }

    if (selectedSize === 100) {
        return 999;
    }

    return 499;

}


/* =================================
   CREATE PERFUME
================================= */

/* =================================
   CREATE PERFUME
================================= */

function createPerfume() {

    const name =
        perfumeName.value.trim();

    const selectedFragrance =
        fragrance.value;

    const selectedScent =
        scent.value;

    const selectedSize =
        size.value;

    let selectedQuantity =
        Number(quantity.value);


    /* =================================
       VALIDATION
    ================================= */

    if (name === "") {

        alert("Please enter a perfume name.");

        perfumeName.focus();

        return;

    }


    if (selectedFragrance === "") {

        alert("Please select a fragrance type.");

        fragrance.focus();

        return;

    }


    if (selectedScent === "") {

        alert("Please select a scent note.");

        scent.focus();

        return;

    }


    if (selectedSize === "") {

        alert("Please select a bottle size.");

        size.focus();

        return;

    }


    if (
        quantity.value === "" ||
        selectedQuantity < 1
    ) {

        alert("Please enter a valid quantity.");

        quantity.focus();

        return;

    }


    if (selectedQuantity > 10) {

        alert("Maximum quantity is 10.");

        quantity.value = 10;

        return;

    }


    /* =================================
       CREATE CUSTOM PERFUME
    ================================= */

    const customPerfume = {

        name: name,

        category:
            selectedFragrance.toLowerCase(),

        price: getPrice(),

        quantity: selectedQuantity,

        fragrance: selectedFragrance,

        scent: selectedScent,

        size: selectedSize + " ml",

        image: "images/perfumes/custom-perfume.png",

        custom: true

    };


    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];


    cart.push(customPerfume);


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    updateCartCount();


    alert(
        name +
        " added to your cart! 🛒"
    );

}

/* =================================
   EVENTS
================================= */

perfumeName.addEventListener(
    "input",
    updatePreview
);

fragrance.addEventListener(
    "change",
    updatePreview
);

scent.addEventListener(
    "change",
    updatePreview
);

size.addEventListener(
    "change",
    updatePreview
);

quantity.addEventListener(
    "input",
    updatePreview
);


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
   LOAD
================================= */

updateCartCount();
updatePreview();