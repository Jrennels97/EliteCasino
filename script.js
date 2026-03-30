// script.js - JavaScript for Carousel Functionality and Interactivity

class Carousel {
    constructor(element) {
        this.carousel = element;
        this.slides = this.carousel.querySelectorAll('.slide');
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.showSlide(this.currentIndex);
        this.carousel.querySelector('.next').addEventListener('click', () => this.nextSlide());
        this.carousel.querySelector('.prev').addEventListener('click', () => this.prevSlide());
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.showSlide(this.currentIndex);
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentIndex);
    }
}

// Initialize the carousel when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.querySelector('.carousel');
    if (carouselElement) {
        new Carousel(carouselElement);
    }
});