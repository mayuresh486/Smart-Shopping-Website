
// Get cart data from LocalStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];


// Add product to cart
function addToCart(productId) {

    let product = products.find(p => p.id === productId);

    if (!product) return;

    let existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart();

    alert(product.name + " added to cart!");
}


// Save cart in LocalStorage
function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}


// Display cart
function displayCart() {

    let container = document.getElementById("cartItems");

    if (!container) return;

    container.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach(item => {

        let subtotal = item.price * item.quantity;

        total += subtotal;

        container.innerHTML += `
            <div class="cart-item">
                <h3>${item.name}</h3>

                <p>Price: ₹${item.price}</p>

                <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
                    -
                </button>

                <span>${item.quantity}</span>

                <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                    +
                </button>

                <p>Subtotal: ₹${subtotal.toLocaleString("en-IN")}</p>

                <button onclick="removeFromCart(${item.id})">
                    Remove
                </button>
            </div>
        `;
    });

    container.innerHTML += `
        <h2>Total: ₹${total.toLocaleString("en-IN")}</h2>
    `;
}


// Update quantity
function updateQuantity(productId, quantity) {

    let item = cart.find(p => p.id === productId);

    if (!item) return;

    if (quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    item.quantity = quantity;

    saveCart();
}


// Remove product
function removeFromCart(productId) {

    cart = cart.filter(item => item.id !== productId);

    saveCart();
}
