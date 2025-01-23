let cart = {};
let total = 0;

//  product list
let products = [
    { id: 1, name: 'Apple per 1kg', price: 100, image: 'data:image/jpeg;base64,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' },
    { id: 2, name: 'Banana 1 dozen', price: 40, image: 'https://m.media-amazon.com/images/I/51ugYaVEVQL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 3, name: 'Tomato per 1kg', price: 30, image: 'https://m.media-amazon.com/images/I/41av+vz+ppL._AC_UL480_FMwebp_QL65_.jpg' },
{ id: 4, name: 'Lettuce 1 pse', price: 20, image: 'https://th.bing.com/th/id/OIP.ATvon4kZP-hlbZzFlaf9XQHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
{ id: 5, name: 'Carrot per(1/2 kg)', price: 20, image: 'https://m.media-amazon.com/images/I/61e7AiNbINL._AC_UL480_FMwebp_QL65_.jpgimages/carrot.jpg' },  
  { id: 6, name: 'Potato per (1 kg)', price: 50, image: 'https://m.media-amazon.com/images/I/41QKCkQ2A5L._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 7, name: 'Onion per(1kg)', price: 50, image: 'https://m.media-amazon.com/images/I/51DJ-9xkuQL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 8, name: 'Garlic 100 gram', price: 60, image: 'https://m.media-amazon.com/images/I/51BSNgiBDqL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 9, name: 'Cucumber per(1/4kg)', price: 20, image: 'https://m.media-amazon.com/images/I/71xkI-PIE5L._AC_UL480_FMwebp_QL65_.jpg' },
{ id: 10, name: 'Spinach 1 pse', price: 5, image: 'https://th.bing.com/th/id/OIP.MIhh6wGi3kXh6m0sAzOhhAHaIl?w=156&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 11, name: 'Chana Dal 1 kg', price: 154, image: 'https://m.media-amazon.com/images/I/71QwdcYyggL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 12, name: 'Ground Nut 1 kg', price: 200, image: 'https://m.media-amazon.com/images/I/814n4ILM3NL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 13, name: 'Urad Dal 1 kg', price: 160, image: 'https://m.media-amazon.com/images/I/719lo6RuSHL._SX679_.jpg' },
    { id: 14, name: 'Ashirvaad Wheat Flour 2kg packet', price: 99, image: 'https://m.media-amazon.com/images/I/9104JpXbv6L._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 15, name: 'Green Peas 500 gram packet', price: 150, image: 'https://m.media-amazon.com/images/I/91W2RIwe--L._SX679_.jpg' },
    { id: 16, name: 'Natural Yogurt 100 gram', price: 20, image: 'https://m.media-amazon.com/images/I/51ldjLd6ftL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 17, name: 'Pasta 500 gram', price: 170, image: 'https://m.media-amazon.com/images/I/41YUMZQj27L._AC_SR250,250_QL65_.jpg' },
    { id: 18, name: 'Amul Butter 100 gram', price: 60, image: 'https://m.media-amazon.com/images/I/51KrxEKN58L._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 19, name: 'Sugar 1kg packet', price: 40, image: 'https://m.media-amazon.com/images/I/71cHAsm-5+L._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 20, name: 'tata Salt 1kg packet', price: 15, image: 'https://m.media-amazon.com/images/I/614mm2hYHyL._AC_UL480_FMwebp_QL65_.jpg' }
];


// Dynamically load products into the product list
function loadProducts(filteredProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear the list

    // Display filtered products
    filteredProducts.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <p>${product.name} - ₹${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}" data-price="${product.price}" data-item="${product.name}">
                Buy (<span id="buy-count-${product.id}">0</span>)
            </button>
        `;
        productList.appendChild(div);
    });

    // Add "Add to Cart" functionality to dynamically created buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', event => {
            const item = event.target.dataset.item;
            const price = parseFloat(event.target.dataset.price);
            const id = event.target.dataset.id;

            if (cart[item]) {
                cart[item].quantity++;
            } else {
                cart[item] = { price, quantity: 1 };
            }

            total += price;

            // Update the item count beside the "Buy" button
            document.getElementById(`buy-count-${id}`).textContent = cart[item].quantity;

            // Update total cart count
            updateCartCount();
            updateCart();
        });
    });
}

function updateCartCount() {
    const totalCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalCount;
}



// Handle cart updates
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');

    cartItems.innerHTML = ''; // Clear cart items

    for (const item in cart) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item} - ₹${cart[item].price} x ${cart[item].quantity}
            <button class="discard" data-item="${item}">Discard 1</button>
        `;
        cartItems.appendChild(li);
    }

    totalDisplay.textContent = `₹${total.toFixed(2)}`;

    // Handle discard button functionality
    document.querySelectorAll('.discard').forEach(button => {
        button.addEventListener('click', event => {
            const item = event.target.dataset.item;
            if (cart[item]) {
                const itemPrice = cart[item].price;
                cart[item].quantity--;
                total -= itemPrice;

                if (cart[item].quantity <= 0) {
                    delete cart[item];
                }

                // Update the item count beside the "Buy" button
                const productId = products.find(product => product.name === item).id;
                document.getElementById(`buy-count-${productId}`).textContent = cart[item]?.quantity || 0;
loadProducts(products);
                updateCartCount();
                updateCart();
            }
        });
    });

    updateCartCount(); // Ensure total count is updated
}


// Handle search functionality
document.getElementById('search-box').addEventListener('input', event => {
    const query = event.target.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    loadProducts(filteredProducts);
});

// Open cart modal
document.getElementById('cart-button').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'block';
});

// Close cart modal
document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
});

// Show QR code modal
document.getElementById('pay-button').addEventListener('click', () => {
    document.getElementById('qr-code').style.display = 'block';
});

// Hide QR code modal
document.getElementById('clear-qr').addEventListener('click', () => {
    document.getElementById('qr-code').style.display = 'none';
});

// Initial load of all products
loadProducts(products);
// Show Contact Modal
document.getElementById('contact-button').addEventListener('click', () => {
    document.getElementById('contact-modal').style.display = 'block';
});

// Close Contact Modal
document.getElementById('close-contact').addEventListener('click', () => {
    document.getElementById('contact-modal').style.display = 'none';
});

// Handle Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();

    // Show success notification
    const successNotification = document.getElementById('success-notification');
    successNotification.style.display = 'block';

    // Hide after 3 seconds
    setTimeout(() => {
        successNotification.style.display = 'none';
    }, 3000);

    // Close the contact modal
    document.getElementById('contact-modal').style.display = 'none';
});
// Show Sign-Up Modal
document.getElementById('signup-button').addEventListener('click', () => {
    document.getElementById('signup-modal').style.display = 'block';
});

// Close Sign-Up Modal
document.getElementById('close-signup').addEventListener('click', () => {
    document.getElementById('signup-modal').style.display = 'none';
});

// Handle Sign-Up Form Submission
document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    // Validate passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Show success notification
    const signupSuccess = document.getElementById('signup-success');
    signupSuccess.style.display = 'block';

    // Hide notification after 3 seconds
    setTimeout(() => {
        signupSuccess.style.display = 'none';
    }, 3000);

    // Close the sign-up modal
    document.getElementById('signup-modal').style.display = 'none';
});
    document.getElementById('signup-button').addEventListener('click', () => {
        // Show sign-up modal when user clicks Sign Up
        document.getElementById('signup-modal').style.display = 'block';
    });

    // When Sign-Up button is clicked, show the sign-up modal
    document.getElementById('signup-button').addEventListener('click', () => {
        document.getElementById('signup-modal').style.display = 'flex';
    });

    // Handle Sign-Up Form Submission
document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const phone = document.getElementById('signup-phone').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    // Validate passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Validate email format (basic check)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate phone number format (basic check)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Show success notification
    const signupSuccess = document.getElementById('signup-success');
    signupSuccess.style.display = 'block';

    // Hide notification after 3 seconds
    setTimeout(() => {
        signupSuccess.style.display = 'none';
    }, 3000);

    // Close the sign-up modal
    document.getElementById('signup-modal').style.display = 'none';

    // Hide the sign-up button and display user name
    document.getElementById('signup-button').style.display = 'none';  // Hide Sign-Up button
    document.getElementById('user-info').style.display = 'flex';  // Show user info section
    document.getElementById('user-name').textContent = `Welcome, ${name}`;  // Display the user's name
});

