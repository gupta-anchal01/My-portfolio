// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic year in footer
const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Contact form submission alert
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting to a server
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset(); // Clear the form
});
