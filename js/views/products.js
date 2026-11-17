
// Products Page View
function ProductsView() {

    if (typeof products === "undefined" || products.length === 0) {
        return `
            <section class="products-section">
                <h2>Our Products</h2>
                <p>Products are loading...</p>
            </section>
        `;
    }

    let productHTML = products.map(function(product) {

        return `
            <div class="product-card">
                <img src="${product.image}" 
                     class="product-image" 
                     alt="${product.name}">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <h3>₹${product.price.toLocaleString("en-IN")}</h3>

                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;

    }).join("");

    return `
        <section class="products-section">
            <h2>Our Products</h2>

            <div class="products">
                ${productHTML}
            </div>
        </section>
    `;

}
