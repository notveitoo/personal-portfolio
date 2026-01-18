// ======= Simple Slider Functionality =======
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;
const totalSlides = slides.length;

// Function to show a specific slide
function showSlide(index) {
  // Keep the index within bounds
  if (index >= totalSlides) currentSlide = 0;
  else if (index < 0) currentSlide = totalSlides - 1;
  else currentSlide = index;

  // Move slides container
  const slidesContainer = document.querySelector('.slides');
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Next slide function
function nextSlide() {
  showSlide(currentSlide + 1);
}

// Previous slide function
function prevSlide() {
  showSlide(currentSlide - 1);
}

// Optional: Auto slide every 5 seconds
// setInterval(() => nextSlide(), 5000);

// Initialize the slider
showSlide(currentSlide);
