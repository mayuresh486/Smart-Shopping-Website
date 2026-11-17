
// Shopping Cart Page View
function CartView() {

    return `
        <section class="cart-container">
            <h2>My Shopping Cart</h2>

            <div id="cartItems">
                <p>Your cart is empty.</p>
            </div>

            <br>

            <a href="#/products" class="shop-btn">
                Continue Shopping
            </a>

            <a href="#/checkout" class="shop-btn">
                Proceed to Checkout
            </a>
        </section>
    `;

}
