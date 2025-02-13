const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let slideInterval;

function changeSlide() {
  // Add 'previous' class to current slide
  slides[currentSlide].classList.add("previous");
  slides[currentSlide].classList.remove("active");

  // After a brief delay, reset the transform of the previous slide
  setTimeout(() => {
    slides[currentSlide].classList.remove("previous");
  }, 1000);

  // Move to next slide
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

function startSlideshow() {
  clearInterval(slideInterval);
  slideInterval = setInterval(changeSlide, 7000); // 6s zoom + 1s fade
}

// Start the slideshow
startSlideshow();

// Pause slideshow when tab is inactive
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    clearInterval(slideInterval);
  } else {
    startSlideshow();
  }
});
