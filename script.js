// Add event listeners to elements with tag "navlink" to show an alert when clicked
document.addEventListener('DOMContentLoaded', function() {
  // Select all elements with attribute tag="navlink"
  var navLinks = document.querySelectorAll('[tag="navlink"]');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      alert('A navlink was clicked!');
    });
  });

  // Form validation for the contact form
  var contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      var emptyFields = [];
      var name = document.getElementById('name');
      var address = document.getElementById('address');
      var message = document.getElementById('message');

      if (!name.value.trim()) emptyFields.push('Name');
      if (!address.value.trim()) emptyFields.push('Address');
      if (!message.value.trim()) emptyFields.push('Message');

      if (emptyFields.length > 0) {
        event.preventDefault();
        alert('The following field(s) have not been filled: ' + emptyFields.join(', '));
      }
    });
  }
});