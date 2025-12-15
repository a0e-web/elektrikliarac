const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');

let scrollStarted = false;

btn.addEventListener('click', navToggle);
window.addEventListener('scroll', scrollPage);

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}

function scrollPage() {
    const scrollPos = window.scrollY;

    if (scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
}

function countUp() {
    counters.forEach(counter => {
        counter.innerText = '0';

        const target = +counter.getAttribute('data-target');
        const increment = target / 100;

        const updateCounter = () => {
            const current = +counter.innerText;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 30);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

function reset() {
    counters.forEach(counter => {
        counter.innerText = '0';
    });
}
