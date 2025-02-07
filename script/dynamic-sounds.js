const hoverSounds = [
    new Audio('sounds/hover1.mp3'),
    new Audio('sounds/hover2.mp3'),
    new Audio('sounds/hover3.mp3'),
    new Audio('sounds/hover4.mp3'),
    new Audio('sounds/hover5.mp3')
];

const activeSounds = [
    new Audio('sounds/active1.mp3'),
    new Audio('sounds/active2.mp3'),
    new Audio('sounds/active3.mp3')
];

hoverSounds.forEach(sound => sound.volume = 0.01);
activeSounds.forEach(sound => sound.volume = 0.01);

const navLinks = document.querySelectorAll('.nav-link');
const activeLinks = document.querySelectorAll('.active');

function getRandomSound(soundArray) {
    return soundArray[Math.floor(Math.random() * soundArray.length)];
}

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const randomHoverSound = getRandomSound(hoverSounds);
        
        randomHoverSound.play();
        console.log("hovering on " + randomHoverSound)
    });
});

activeLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const randomActiveSound = getRandomSound(activeSounds);
       
        randomActiveSound.play();
    });
});
