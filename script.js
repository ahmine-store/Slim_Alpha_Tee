// script.js
import { db } from './firebase.js'; // make sure path is correct
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Select all order forms
const forms = document.querySelectorAll(".orderForm");

forms.forEach(form => {
    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // Prevent page refresh

        const product = form.dataset.product;
        const price = form.dataset.price;
        const advance = form.dataset.advance;

        const name = form.querySelector(".name").value.trim();
        const phone = form.querySelector(".phone").value.trim();
        const email = form.querySelector(".email").value.trim();
        const size = form.querySelector(".size").value;
        const color = form.querySelector(".color").value;
        const address = form.querySelector(".address").value.trim();
        const msgEl = form.querySelector(".msg");

        if (!name || !phone || !email || !size || !color || !address) {
            alert("Please fill all fields!");
            return;
        }

        try {
            // Add order to Firestore "orders" collection
            await addDoc(collection(db, "orders"), {
                product,
                price,
                advance,
                name,
                phone,
                email,
                size,
                color,
                address,
                timestamp: serverTimestamp()
            });

            // Show confirmation message
            msgEl.style.color = "green";
            msgEl.textContent = "✅ Your order has been placed successfully!";
            
            // Reset the form
            form.reset();

        } catch (error) {
            msgEl.style.color = "red";
            msgEl.textContent = "❌ Error placing order: " + error.message;
        }
    });
});
