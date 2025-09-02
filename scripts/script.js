function showSlide(slideNumber) {
  // Hide all slides
  for (let i = 1; i <= 4; i++) {
    const slide = document.getElementById("slide" + i);
    if (slide) {
      slide.style.display = "none";
    }
  }

  // Show the selected slide
  const targetSlide = document.getElementById("slide" + slideNumber);
  if (targetSlide) {
    targetSlide.style.display = "block";
  }
}

// Initialize carousel - show first slide
document.addEventListener("DOMContentLoaded", function () {
  showSlide(1);
});
