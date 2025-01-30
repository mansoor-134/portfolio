// Set the current year in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Handle Project Button Clicks
const projectButtons = document.querySelectorAll('.project-btn');
const modalContent = document.getElementById('modalContent');
const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));

projectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectDetails = button.getAttribute('data-project');
        modalContent.textContent = projectDetails;
        projectModal.show();
    });
});
// Contact Form Submission Handler
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload on form submission

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (optional, already handled by "required" in HTML)
    if (name && email && message) {
        // Display success message
        successMessage.classList.remove('d-none');
        successMessage.textContent = `Thank you, ${name}! I'll get back to you at ${email}.`;

        // Clear form fields
        contactForm.reset();
    }
});
