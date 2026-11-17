
// Header Component
function Header() {
    return `
        <header class="navbar">
            <h2>Smart Shopping</h2>

            <nav>
                <ul>
                    <li><a href="#/home">Home</a></li>
                    <li><a href="#/products">Products</a></li>
                    <li><a href="#/cart">Cart</a></li>
                    <li><a href="#/checkout">Checkout</a></li>
                    <li><a href="#/enquiry">Enquiry</a></li>
                </ul>
            </nav>
        </header>
    `;
}


// Footer Component
function Footer() {
    return `
        <footer>
            <p>
                © 2026 Smart Shopping Website.
                All Rights Reserved.
            </p>
        </footer>
    `;
}


// Main Layout Component
function renderLayout() {

    let app = document.getElementById("app");

    app.innerHTML = `
        ${Header()}

        <main id="view-container">
        </main>

        ${Footer()}
    `;

}
