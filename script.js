/* Dark Mode Button */

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {

document.body.classList.toggle("dark-mode");

if (document.body.classList.contains("dark-mode")) {

    themeButton.textContent = "☀️";

} else {

    themeButton.textContent = "🌙";
}

});

/* Contact Form */

const contactForm = document.getElementById("contact-form");

const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {

event.preventDefault();

const name = document.getElementById("name").value;

formMessage.textContent =
    "Thank you, " +
    name +
    "! Your message has been received.";

contactForm.reset();

});