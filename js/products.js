/* =========================================
   MYPERFUME - PRODUCTS
========================================= */


/* =========================================
   PRODUCT DATA
========================================= */

const products = [

    {
        name: "Rose Bloom",
        category: "floral",
        price: 599,
        image: "images/perfumes/rose-bloom.png",
        rating: "★★★★★",
        color: "pink",
        description: "A soft romantic fragrance with fresh rose petals."
    },

    {
        name: "Vanilla Dream",
        category: "sweet",
        price: 649,
        image: "images/perfumes/vanilla-dream.png",
        rating: "★★★★★",
        color: "cream",
        description: "A warm vanilla fragrance with a soft creamy touch."
    },

    {
        name: "Lavender Mist",
        category: "fresh",
        price: 699,
        image: "images/perfumes/lavender-mist.png",
        rating: "★★★★★",
        color: "lavender",
        description: "A refreshing lavender scent for a calm and relaxing mood."
    },

    {
        name: "Royal Oud",
        category: "woody",
        price: 799,
        image: "images/perfumes/royal-oud.png",
        rating: "★★★★★",
        color: "brown",
        description: "A rich and elegant oud fragrance with a luxurious finish."
    },

    {
        name: "Jasmine Glow",
        category: "floral",
        price: 629,
        image: "images/perfumes/jasmine-glow.png",
        rating: "★★★★☆",
        color: "pink",
        description: "A delicate jasmine fragrance with a graceful floral aroma."
    },

    {
        name: "Cherry Blossom",
        category: "floral",
        price: 679,
        image: "images/perfumes/cherry-blossom.png",
        rating: "★★★★★",
        color: "pink",
        description: "A light floral fragrance inspired by blooming cherry blossoms."
    },

    {
        name: "Sweet Amber",
        category: "sweet",
        price: 749,
        image: "images/perfumes/sweet-amber.png",
        rating: "★★★★★",
        color: "cream",
        description: "A warm amber fragrance with a smooth and sweet finish."
    },

    {
        name: "Caramel Kiss",
        category: "sweet",
        price: 699,
        image: "images/perfumes/caramel-kiss.png",
        rating: "★★★★☆",
        color: "cream",
        description: "A delicious caramel scent with a soft luxurious sweetness."
    },

    {
        name: "Ocean Breeze",
        category: "fresh",
        price: 599,
        image: "images/perfumes/ocean-breeze.png",
        rating: "★★★★★",
        color: "lavender",
        description: "A cool refreshing fragrance inspired by the ocean breeze."
    },

    {
        name: "Citrus Splash",
        category: "fresh",
        price: 579,
        image: "images/perfumes/citrus-splash.png",
        rating: "★★★★☆",
        color: "cream",
        description: "A bright citrus fragrance with a fresh energetic feeling."
    },

    {
        name: "Green Garden",
        category: "fresh",
        price: 649,
        image: "images/perfumes/green-garden.png",
        rating: "★★★★★",
        color: "lavender",
        description: "A fresh green fragrance inspired by a peaceful garden."
    },

    {
        name: "Sandalwood Luxe",
        category: "woody",
        price: 849,
        image: "images/perfumes/sandalwood-luxe.png",
        rating: "★★★★★",
        color: "brown",
        description: "A rich sandalwood fragrance with a warm elegant character."
    },

    {
        name: "Cedar Night",
        category: "woody",
        price: 799,
        image: "images/perfumes/cedar-night.png",
        rating: "★★★★☆",
        color: "brown",
        description: "A deep woody fragrance perfect for evening occasions."
    },

    {
        name: "Musk Velvet",
        category: "woody",
        price: 829,
        image: "images/perfumes/musk-velvet.png",
        rating: "★★★★★",
        color: "brown",
        description: "A smooth musk fragrance with a sophisticated woody touch."
    },

    {
        name: "Pink Peony",
        category: "floral",
        price: 679,
        image: "images/perfumes/pink-peony.png",
        rating: "★★★★★",
        color: "pink",
        description: "A soft and elegant peony fragrance with a romantic feel."
    },

    {
        name: "Midnight Rose",
        category: "floral",
        price: 749,
        image: "images/perfumes/midnight-rose.png",
        rating: "★★★★★",
        color: "pink",
        description: "A mysterious rose fragrance designed for special evenings."
    },

    {
        name: "Honey Bliss",
        category: "sweet",
        price: 729,
        image: "images/perfumes/honey-bliss.png",
        rating: "★★★★☆",
        color: "cream",
        description: "A smooth honey fragrance with a warm sweet aroma."
    },

    {
        name: "Coconut Dream",
        category: "sweet",
        price: 649,
        image: "images/perfumes/coconut-dream.png",
        rating: "★★★★★",
        color: "cream",
        description: "A creamy coconut fragrance with a tropical character."
    },

    {
        name: "Aqua Pearl",
        category: "fresh",
        price: 699,
        image: "images/perfumes/aqua-pearl.png",
        rating: "★★★★★",
        color: "lavender",
        description: "A clean aquatic fragrance with a fresh modern feeling."
    },

    {
        name: "Oud Noir",
        category: "woody",
        price: 899,
        image: "images/perfumes/oud-noir.png",
        rating: "★★★★★",
        color: "brown",
        description: "A luxurious dark oud fragrance with a bold lasting aroma."
    }

];


/* =========================================
   DISPLAY PRODUCTS
========================================= */

function displayProducts(productList) {

    const container = document.getElementById("productsContainer");

    container.innerHTML = "";

    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.setAttribute("data-category", product.category);

        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-photo"
                >

                <button 
                    class="wishlist-btn ${isInWishlist(product.name) ? 'added' : ''}" 
                    data-name="${product.name}"
                    onclick="addWishlist('${product.name}', this)"> 

                    ${isInWishlist(product.name) ? '♥' : '♡'} 

                </button>

            </div>


            <div class="product-info">

                <p class="category">
                    ${product.category.toUpperCase()}
                </p>

                <h2>
                    ${product.name}
                </h2>

                <div class="rating">
                    ${product.rating}
                </div>

                <p class="description">
                    ${product.description}
                </p>


                <div class="product-bottom">

                    <span class="price">
                        ₹${product.price}
                    </span>

                    <button
                        class="add-cart-btn"
                        onclick="addToCart('${product.name}', ${product.price}, this)">
                        Add to Cart
                    </button>

                </div>

            </div>

        `;

        container.appendChild(card);

    });

}


/* =========================================
   ADD TO CART
========================================= */

function addToCart(name, price, button) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];


    const existingProduct =
        cart.find(function(product) {

            return product.name === name;

        });


    /* If product is already in cart */

    if (existingProduct) {

        existingProduct.quantity =
            (Number(existingProduct.quantity) || 1) + 1;

    } else {

        const product = products.find(function(item) {
    return item.name === name;
});

cart.push({

    name: name,
    price: price,
    category: product.category,
    image: product.image,
    quantity: 1

});

    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    /* Change button text */

    if (button) {

        button.textContent = "Added to Cart";

        button.classList.add("added");

    }


    updateCartCount();


    alert(name + " added to cart! 🛒");

}


/* =========================================
   UPDATE CART COUNT
========================================= */

function updateCartCount() {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let totalQuantity = 0;

    cart.forEach(function(product) {

        if (product.quantity) {
            totalQuantity += Number(product.quantity);
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

updateCartCount();

/* =========================================
   WISHLIST
========================================= */


/* CHECK IF PRODUCT IS IN WISHLIST */

function isInWishlist(name) {

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    return wishlist.some(item => {

        if (typeof item === "string") {
            return item === name;
        }

        return item.name === name;

    });

}


/* ADD / REMOVE WISHLIST */

function addWishlist(name, button) {

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];


    const product =
        products.find(item => item.name === name);


    if (!product) {
        return;
    }


    const existingIndex =
        wishlist.findIndex(item => {

            if (typeof item === "string") {
                return item === name;
            }

            return item.name === name;

        });


    /* =================================
       REMOVE FROM WISHLIST
    ================================= */

    if (existingIndex !== -1) {

        wishlist.splice(existingIndex, 1);

        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );

        button.textContent = "♡";

        button.classList.remove("added");

    }


    /* =================================
       ADD TO WISHLIST
    ================================= */

    else {

        wishlist.push(product);

        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );

        button.textContent = "♥";

        button.classList.add("added");

    }

}

/* =========================================
   FILTER PRODUCTS
========================================= */

function filterProducts(category, button) {

    document
        .querySelectorAll(".filter-btn")
        .forEach(btn => {
            btn.classList.remove("active");
        });

    button.classList.add("active");


    if (category === "all") {

        displayProducts(products);

    } else {

        const filteredProducts = products.filter(
            product => product.category === category
        );

        displayProducts(filteredProducts);

    }

}


/* =========================================
   LOGOUT
========================================= */

document.getElementById("logoutBtn").onclick = function () {

    localStorage.removeItem("isLoggedIn");

    window.location.href = "index.html";

};


/* =========================================
   USER NAME
========================================= */

function displayUserName() {

    const user = JSON.parse(
        localStorage.getItem("perfumeUser")
    );

    const userName = document.getElementById("userName");

    if (user && userName) {

        userName.textContent = user.name;

    }

}



/* =========================================
   INITIALIZE
========================================= */

displayProducts(products);

updateCartCount();

displayUserName();