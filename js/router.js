
// Application Routes
const routes = {
    "#/home": "HomeView",
    "#/products": "ProductsView",
    "#/cart": "CartView",
    "#/checkout": "CheckoutView",
    "#/enquiry": "EnquiryView"
};


// Handle SPA Navigation
function handleRoute() {

    let currentRoute = window.location.hash || "#/home";

    renderLayout();

    let viewContainer = document.getElementById("view-container");

    let viewName = routes[currentRoute];

    if (viewName && typeof window[viewName] === "function") {

        viewContainer.innerHTML = window[viewName]();

    } else {

        viewContainer.innerHTML = `
            <h2>404 - Page Not Found</h2>
            <p>The requested page does not exist.</p>
            <a href="#/home">Go to Home</a>
        `;

    }

    // Display cart whenever Cart page opens
    if (currentRoute === "#/cart") {
        displayCart();
    }

    // Attach form validation after rendering
    if (currentRoute === "#/checkout") {
        attachCheckoutValidation();
    }

    if (currentRoute === "#/enquiry") {
        attachEnquiryValidation();
    }

}


// Initialize Router
function initRouter() {

    window.addEventListener("hashchange", handleRoute);

    handleRoute();

}
