document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    this.reset();
  });
  