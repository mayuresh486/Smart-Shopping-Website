
let products = [];
let categories = [];
let pricing = [];

// Load JSON Data
async function loadData() {

    try {

        const [productResponse, categoryResponse, pricingResponse] =
            await Promise.all([
                fetch("data/products.json"),
                fetch("data/categories.json"),
                fetch("data/pricing.json")
            ]);

        if (!productResponse.ok ||
            !categoryResponse.ok ||
            !pricingResponse.ok) {

            throw new Error("Unable to load JSON files");

        }

        const productData = await productResponse.json();
        const categoryData = await categoryResponse.json();
        const pricingData = await pricingResponse.json();

        products = productData.products;
        categories = categoryData.categories;
        pricing = pricingData.pricing;

        // Apply pricing details
        products = products.map(function(product) {

            const priceDetails = pricing.find(function(item) {
                return item.productId === product.id;
            });

            if (priceDetails) {
                product.price = priceDetails.price;
            }

            return product;

        });

        console.log("Products loaded:", products);

        return products;

    } catch (error) {

        console.error("Data Loading Error:", error);

        throw error;

    }

}
