// Smooth scrolling function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Scroll smoothly to the section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to toggle event details
function toggleDetails(card) {
    card.classList.toggle('rotated'); // Toggle rotation class
}

// Function to handle fade-in effect on scroll
window.addEventListener('scroll', () => {
    const fadeIns = document.querySelectorAll('.fade-in'); // Select all elements with the fade-in class
    fadeIns.forEach(fadeIn => {
        const { top } = fadeIn.getBoundingClientRect(); // Get position of the element
        if (top < window.innerHeight) {
            fadeIn.classList.add('visible'); // Add visible class if the element is in view
        }
    });
});

// Function to shuffle gallery items
function shuffleGallery() {
    const galleryContainer = document.querySelector('.gallery-container');
    const items = Array.from(galleryContainer.children);

    // Shuffle the items
    items.sort(() => Math.random() - 0.5);

    // Append items in the new order
    items.forEach(item => galleryContainer.appendChild(item));
}

// Call shuffleGallery every 3 seconds
setInterval(shuffleGallery, 3000); // Adjust time as needed


