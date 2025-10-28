// Scroll to services
function scrollToServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('successMsg').textContent = "Thank you! Your message has been sent.";
    this.reset();
});
