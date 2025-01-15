// Toggle mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Smooth scroll for anchor links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Testimonial carousel
const testimonialCards = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

function showNextTestimonial() {
  if (testimonialCards.length === 0) return; // Exit if no testimonial cards

  // Remove active class from the current testimonial
  testimonialCards[currentTestimonial].classList.remove('active');

  // Move to the next testimonial
  currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;

  // Add active class to the next testimonial
  testimonialCards[currentTestimonial].classList.add('active');
}

// Only start the carousel if there are testimonial cards
if (testimonialCards.length > 0) {
  // Show the first testimonial immediately
  testimonialCards[currentTestimonial].classList.add('active');

  // Start the carousel
  setInterval(showNextTestimonial, 5000);
}

// Fade-in on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.5 });

fadeElements.forEach((element) => {
  observer.observe(element);
});

// Modal functionality
const cards = document.querySelectorAll('.card');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

// Open modal when a card is clicked
cards.forEach((card) => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
    }
  });
});

// Close modal when the close button is clicked
closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    if (modal) {
      modal.style.display = 'none';
    }
  });
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});

// Close modal and scroll to contact form when "Contact Now" is clicked
document.querySelectorAll('.contact-now').forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    if (modal) {
      modal.style.display = 'none';
    }
  });
});