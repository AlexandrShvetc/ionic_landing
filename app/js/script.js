ScrollReveal().reveal('.animate-fade', {duration: 1000});

ScrollReveal().reveal('.slide-left', {
    duration: 1000,
    easing: 'ease-out',
    distance: '25%',
    scale: 0.25,
    origin: 'left',
    rotate: {
        y: 120,
        z: 90,
    },
});

ScrollReveal().reveal('.slide-right', {
    duration: 1000,
    easing: 'ease-out',
    distance: '25%',
    scale: 0.25,
    origin: 'right',
    rotate: {
        y: -120,
        z: -90,
    },
});
