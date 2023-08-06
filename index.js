// Toggle the menu 
function toggleMenu() {
    const menu = document.getElementById('main-menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }

// The carousel and dot active
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
let activeIndex = 0;

function navigate(index) {
    if (activeIndex === index) return;
    items[activeIndex].classList.remove('active');
    dots[activeIndex].classList.remove('active');
    activeIndex = index;
    items[activeIndex].classList.add('active');
    dots[activeIndex].classList.add('active');
}

navigate(activeIndex); // Initialize

setInterval(() => {
    const nextIndex = (activeIndex + 1) % items.length;
    navigate(nextIndex);
}, 7500); // Change to the next picture every 7.5 seconds

// The gallery slide to move 
const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const currentSlideSpan = document.getElementById('current-slide');
const totalSlidesSpan = document.getElementById('total-slides');

let currentSlide = 0;

const showSlide = () => {
  slides.forEach((slide, index) => {
    if(index === currentSlide){
      slide.style.transform = 'translateX(0)';
      slide.style.opacity = '1';
      slide.style.pointerEvents = 'auto'; 
    } else {
      slide.style.transform = 'translateX(100%)';
      slide.style.opacity = '0';
      slide.style.pointerEvents = 'none'; 
    }
  });
  currentSlideSpan.innerText = currentSlide + 1;
};

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
};

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide();
};

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

totalSlidesSpan.innerText = slides.length;
showSlide();

// 
let images = document.querySelectorAll('.service-image-middle');
let currentImage = 0;

// function to cycle through the images
function changeImage() {
  images[currentImage].classList.remove('active');
  currentImage++;

  if (currentImage === images.length) {
    currentImage = 0;
  }

  images[currentImage].classList.add('active');
}

// change the image every 10 seconds
setInterval(changeImage, 10000);


document.addEventListener('DOMContentLoaded', function () {
  const officeDirection = document.querySelector('.contact-overlay');
  const mapImage = document.getElementById('map-image');
  const socialIcons = document.querySelector('.social-icons');

  // Function to toggle visibility
  function toggleVisibility(element) {
      const style = window.getComputedStyle(element);
      const isVisible = style.getPropertyValue('display') !== 'none';
      element.style.display = isVisible ? 'none' : 'block';
  }

  // Function to toggle map
  function toggleMap() {
      const style = window.getComputedStyle(mapImage);
      const isMapVisible = style.getPropertyValue('width') !== '0px';
      mapImage.style.width = isMapVisible ? '0px' : '100%';
  }

  // Attach event listener
  officeDirection.addEventListener('click', function () {
      toggleMap();
      toggleVisibility(socialIcons);
  });
});
