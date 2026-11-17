
// Checkout Page View
function CheckoutView() {

    return `
        <section class="form-container">
            <h2>Checkout</h2>

            <form id="checkoutForm">

                <label for="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter your name">

                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email">

                <label for="phone">Phone Number</label>
                <input type="text" id="phone" placeholder="Enter 10 digit phone number">

                <label for="product">Select Product</label>
                <select id="product">
                    <option value="">Select Product</option>
                    <option value="Smartphone">Smartphone</option>
                    <option value="Laptop">Laptop</option>
                    <option value="T-Shirt">T-Shirt</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Running Shoes">Running Shoes</option>
                </select>

                <label for="address">Address</label>
                <textarea id="address" placeholder="Enter your address"></textarea>

                <button type="submit">Place Order</button>

                <p id="checkoutMessage"></p>

            </form>
        </section>
    `;

}
