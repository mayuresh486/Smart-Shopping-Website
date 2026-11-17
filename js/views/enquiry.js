
// Enquiry Page View
function EnquiryView() {

    return `
        <section class="form-container">

            <h2>Product Enquiry</h2>

            <form id="enquiryForm">

                <label for="enquiryName">Name</label>
                <input
                    type="text"
                    id="enquiryName"
                    placeholder="Enter your name"
                >

                <label for="enquiryEmail">Email</label>
                <input
                    type="email"
                    id="enquiryEmail"
                    placeholder="Enter your email"
                >

                <label for="enquiryProduct">Select Product</label>
                <select id="enquiryProduct">
                    <option value="">Select Product</option>
                    <option value="Smartphone">Smartphone</option>
                    <option value="Laptop">Laptop</option>
                    <option value="T-Shirt">T-Shirt</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Running Shoes">Running Shoes</option>
                </select>

                <label for="question">Your Question</label>
                <textarea
                    id="question"
                    placeholder="Enter your question"
                ></textarea>

                <button type="submit">Submit Enquiry</button>

                <p id="enquiryMessage"></p>

            </form>

        </section>
    `;

}
