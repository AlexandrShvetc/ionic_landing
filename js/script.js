const slideLeft = [
    document.querySelector('.section2'),
    document.querySelector('.section4'),
    document.querySelector('.section6'),
    document.querySelector('.section9'),
    document.querySelector('.bottom_footer'),
];
const slideRight = [
    document.querySelector('.section3'),
    document.querySelector('.section5'),
    document.querySelector('.section8'),
    document.querySelector('.footer'),
];
ScrollReveal().reveal('.section1', {duration: 1000});
ScrollReveal().reveal(slideLeft, {
    duration: 3000,
    easing: 'ease-out',
    distance: '25%',
    scale: 0.5,
    origin: 'left',
    rotate: {
        y: 120,
        z: 90,
    },
});
ScrollReveal().reveal(slideRight, {
    duration: 3000,
    easing: 'ease-out',
    distance: '25%',
    scale: 0.5,
    origin: 'right',
    rotate: {
        y: -120,
        z: -90,
    },
});