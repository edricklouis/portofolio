const footer = document.querySelector('.footer');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll === 0) {
        footer.style.transform = 'translateY(0)';
    } 
    else 
    {
        footer.style.transform = 'translateY(100%)';
    }
});

document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const backToTopButtons = document.querySelectorAll('.back-to-top');

backToTopButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

const textElement = document.querySelector('.changing-text');
const texts = ['Projects', 'Research', 'Experiments'];
let currentIndex = 0;

function swapText() {
    textElement.classList.add('fade-out');

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        textElement.textContent = texts[currentIndex];

        setTimeout(() => {
            textElement.classList.remove('fade-out');
        }, 100);
    }, 1000);
}

setInterval(swapText, 4000);

document.getElementById("openEmail").addEventListener("click", function (event) {
    event.preventDefault();

    const email = "edricklouiss@gmail.com";
    const mailToLink = `mailto:${email}`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        window.location.href = mailToLink;
    } 
    else {
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`);
    }
});
