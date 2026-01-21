import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const form = document.getElementById("orderForm");
const successBox = document.getElementById("successMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const order = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    address: form.address.value,
    product: form.product.value,
    size: form.size.value,
    color: form.color.value,
    price: "2900 PKR",
    advance: "500 PKR",
    status: "Pending",
    createdAt: serverTimestamp()
  };

  try {
    await addDoc(collection(db, "orders"), order);

    // SUCCESS MESSAGE
    successBox.style.display = "block";

    // AUTO WHATSAPP MESSAGE (BEST ALTERNATIVE)
    const whatsappNumber = "923302540909"; // YOUR NUMBER
    const message = `
New Order Received 🔥
Product: ${order.product}
Name: ${order.name}
Phone: ${order.phone}
Size: ${order.size}
Color: ${order.color}
Address: ${order.address}
Price: 2900 PKR
Advance: 500 PKR
`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    form.reset();
  } catch (err) {
    alert("Something went wrong. Please try again.");
    console.error(err);
  }
});
