// Example: Smooth scroll to top on page load
window.addEventListener('load', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Example: Form submission handler
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Simple form validation
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (name && email && message) {
        alert('Thank you for your message!');
        form.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  }
});
