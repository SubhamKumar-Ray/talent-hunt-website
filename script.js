// Contact form submission
document.getElementById('contactForm')?.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    this.reset();
});

// Admission form submission
document.getElementById('admissionForm')?.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you! Your admission form has been submitted successfully.');
    this.reset();
});