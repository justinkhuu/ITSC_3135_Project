'use strict';

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
const navItems = Array.from(document.querySelectorAll('.nav-item'));
const CAROUSEL_SIZE = carouselItems.length;

leftBtn.addEventListener('click', swipe);
rightBtn.addEventListener('click', swipe);


function swipe(e) {
    const currentCarouselItem = document.querySelector('.carousel-item.active');
    const currentIndex = carouselItems.indexOf(currentCarouselItem);

    let nextIndex;

    if (e.currentTarget.classList.contains('left')) {
        if (currentIndex === 0) {
            nextIndex = CAROUSEL_SIZE - 1;
        }
        else {
            nextIndex = currentIndex - 1;
        }

    }
    else {
        if (currentIndex === CAROUSEL_SIZE - 1) {
            nextIndex = 0;
        }
        else {
            nextIndex = currentIndex + 1;
        }
    }

    carouselItems[nextIndex].classList.add('active');
    navItems[nextIndex].classList.add('active');
    currentCarouselItem.classList.remove('active');
    navItems[currentIndex].classList.remove('active');
}

const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');
const circle4 = document.getElementById('circle4');
const circle5 = document.getElementById('circle5');

circle1.addEventListener('click', navClick);
circle2.addEventListener('click', navClick);
circle3.addEventListener('click', navClick);
circle4.addEventListener('click', navClick);
circle5.addEventListener('click', navClick);


function navClick(e) {
    const currentCarouselItem = document.querySelector('.carousel-item.active');
    const currentIndex = carouselItems.indexOf(currentCarouselItem);

    let nextIndex;


    if (e.currentTarget.contains(circle1)) {
        nextIndex = 0;
    } else if (e.currentTarget.contains(circle2)) {
        nextIndex = 1;
    } else if (e.currentTarget.contains(circle3)) {
        nextIndex = 2;
    } else if (e.currentTarget.contains(circle4)) {
        nextIndex = 3;
    } else {
        (e.currentTarget.contains(circle5))
        nextIndex = 4;
    }
    

    if (e.currentTarget.classList.contains('active')) {
        console.log('Already here');
    } else {
        carouselItems[nextIndex].classList.add('active');
        navItems[nextIndex].classList.add('active');
        currentCarouselItem.classList.remove('active');
        navItems[currentIndex].classList.remove('active');
    }

}




