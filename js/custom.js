// Mobile Menu Toggle

const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

navToggle.addEventListener('click', function () {

    siteNav.classList.toggle('active');

});


// =================================
// Hero Slider
// =================================

const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const dots = document.querySelectorAll('.slider-dot');

let currentSlide = 0;


// Show Slide
function showSlide(index) {

    slides.forEach(function (slide) {
        slide.classList.remove('is-active');
    });

    dots.forEach(function (dot) {
        dot.classList.remove('is-active');
        dot.setAttribute('aria-current', 'false');
    });

    slides[index].classList.add('is-active');

    dots[index].classList.add('is-active');
    dots[index].setAttribute('aria-current', 'true');
}


// Next Button
nextButton.addEventListener('click', function () {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

});


// Previous Button
prevButton.addEventListener('click', function () {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

});


// Dots
dots.forEach(function (dot, index) {

    dot.addEventListener('click', function () {

        currentSlide = index;

        showSlide(currentSlide);

    });

});


// Auto Slide
setInterval(function () {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 5000);