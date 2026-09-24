// ===============================
// PORTFOLIO - PRIA DIMAS
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio Pria Dimas loaded.");

});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const phoneNumber = "6282162918423";

    const whatsappMessage =
        `Halo Pria Dimas,%0A%0A` +
        `Nama: ${name}%0A` +
        `Email: ${email}%0A%0A` +
        `Pesan:%0A${message}`;

    const whatsappURL =
        `https://wa.me/${6282162918423}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
});