
// Checkout Form Validation
function attachCheckoutValidation() {

    let checkout = document.getElementById("checkoutForm");

    if (!checkout) return;

    checkout.addEventListener("submit", function(e) {

        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let product = document.getElementById("product").value;
        let address = document.getElementById("address").value.trim();

        let msg = document.getElementById("checkoutMessage");

        if (!name || !email || !phone || !product || !address) {
            msg.innerText = "Please fill all fields.";
            msg.style.color = "red";
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            msg.innerText = "Enter a valid email.";
            msg.style.color = "red";
            return;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            msg.innerText = "Enter a valid 10 digit phone number.";
            msg.style.color = "red";
            return;
        }

        msg.innerText = "Order placed successfully!";
        msg.style.color = "green";

        localStorage.setItem("customerName", name);

    });
}


// Enquiry Form Validation
function attachEnquiryValidation() {

    let enquiry = document.getElementById("enquiryForm");

    if (!enquiry) return;

    enquiry.addEventListener("submit", function(e) {

        e.preventDefault();

        let name = document.getElementById("enquiryName").value.trim();
        let email = document.getElementById("enquiryEmail").value.trim();
        let product = document.getElementById("enquiryProduct").value;
        let question = document.getElementById("question").value.trim();

        let msg = document.getElementById("enquiryMessage");

        if (!name || !email || !product || !question) {
            msg.innerText = "Please fill all fields.";
            msg.style.color = "red";
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            msg.innerText = "Enter a valid email.";
            msg.style.color = "red";
            return;
        }

        msg.innerText = "Enquiry submitted successfully!";
        msg.style.color = "green";

    });

}
