const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    if (isOpen) {
        setTimeout(() => {
            document.addEventListener('click', handleOutsideClick);
        }, 0);

    }
    else {
        document.removeEventListener('click', handleOutsideClick);
    }
});

const menuClose = document.getElementById('menu-close');

menuClose.addEventListener('click', () => {
    navMenu.classList.remove('open');
    document.removeEventListener('click', handleOutsideClick)
});

//this function handles clicks outside of the menu 
function handleOutsideClick (event) {
    if (!event.target.closest('#nav-menu')) {
        navMenu.classList.remove('open');
        document.removeEventListener('click', handleOutsideClick); //evenetlistener cleanup
    }
}

const sealLink = document.getElementById('seal-link');
const gif = document.getElementById('seal-gif');

sealLink.addEventListener('click', (e) => {
    e.preventDefault();
    gif.style.opacity= '1';

    confetti ({
        particleCount: 50,
        spread: 60,
        origin: {x: 0.5, y: 0.5},
        colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00']
    });
    setTimeout(() => {
        gif.style.opacity = '0';
    }, 4000);
})