// Smooth scrolling for navigation links
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent the default anchor click behavior

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        // Scroll to the target element
        targetElement.scrollIntoView({
            behavior: "smooth", // Enable smooth scroll
            block: "start" // Scroll to the top of the target element
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const reservationModal = document.getElementById("reservationModal");
    const closeButton = document.querySelector(".close-button");
    const reservationButton = document.querySelector(".btn-reservation");
    const reservationForm = document.getElementById("reservationForm");

    // Toggle hamburger menu and navigation links
    hamburger.addEventListener("click", function() {
        this.classList.toggle("active");
        navLinks.classList.toggle("nav-active");
    });

    // Open the reservation modal
    reservationButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default button action
        reservationModal.style.display = "block"; // Show modal
    });

    // Close the reservation modal
    closeButton.addEventListener("click", function() {
        reservationModal.style.display = "none"; // Hide modal
    });

    // Close the modal when clicking outside of it
    window.addEventListener("click", function(event) {
        if (event.target === reservationModal) {
            reservationModal.style.display = "none"; // Hide modal
        }
    });

    // Handle form submission
    reservationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const guests = document.getElementById("guests").value;
        const specialRequest = document.getElementById("special-request").value;

        const message = `Reservation Details:\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\nSpecial Requests: ${specialRequest}`;
        
        // Open WhatsApp with the reservation details
        const whatsappNumber = "+27762485764";
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");

        // Close the modal after submission
        reservationModal.style.display = "none"; 
        reservationForm.reset(); // Reset the form fields
    });

    // Close the navigation when clicking outside
    document.addEventListener("click", function(e) {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove("active");
            navLinks.classList.remove("nav-active");
        }
    });
});

// Get the modals
var foodModal = document.getElementById("food-modal");
var beveragesModal = document.getElementById("beverages-modal");

// Get the buttons that open the modals
var foodImg = document.getElementById("food-img");
var beveragesImg = document.getElementById("beverages-img");

// Get the <span> elements that close the modals
var closeFood = document.getElementById("close-food");
var closeBeverages = document.getElementById("close-beverages");

// When the user clicks on the food image, open the food modal
foodImg.onclick = function() {
    foodModal.style.display = "flex";
}

// When the user clicks on the beverages image, open the beverages modal
beveragesImg.onclick = function() {
    beveragesModal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modals
closeFood.onclick = function() {
    foodModal.style.display = "none";
}
closeBeverages.onclick = function() {
    beveragesModal.style.display = "none";
}

// Close the modals if user clicks anywhere outside the modal content
window.onclick = function(event) {
    if (event.target == foodModal) {
        foodModal.style.display = "none";
    }
    if (event.target == beveragesModal) {
        beveragesModal.style.display = "none";
    }
}
