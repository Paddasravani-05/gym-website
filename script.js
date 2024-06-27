// Carousel functionality
const slides = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

// Event listener for next button
document.querySelector('.next').addEventListener('click', () => {
  changeSlide(currentIndex + 1);
});

// Event listener for previous button
document.querySelector('.prev').addEventListener('click', () => {
  changeSlide(currentIndex - 1);
});

// Function to change slide based on index
function changeSlide(index) {
  // Reset index if it goes beyond slides length
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }
  // Calculate offset for slide transition
  const offset = -currentIndex * 100;
  // Apply transform to carousel slide container
  document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
}

// JavaScript for mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuToggle = document.getElementById('mobile-menu');
  const navbarItems = document.querySelector('.navbar-items');

  // Toggle menu on mobile menu icon click
  mobileMenuToggle.addEventListener('click', function () {
      navbarItems.classList.toggle('show');
  });
});




  // const slides = document.querySelectorAll('.carousel-item');
  // let currentIndex = 0;

  // document.querySelector('.next').addEventListener('click', () => {
  //   changeSlide(currentIndex + 1);
  // });

  // document.querySelector('.prev').addEventListener('click', () => {
  //   changeSlide(currentIndex - 1);
  // });

  // function changeSlide(index) {
  //   if (index >= slides.length) {
  //     currentIndex = 0;
  //   } else if (index < 0) {
  //     currentIndex = slides.length - 1;
  //   } else {
  //     currentIndex = index;
  //   }
  //   const offset = -currentIndex * 100;
  //   document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
  // }
 
  
