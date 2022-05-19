function scrollToggle() {
    const element = document.querySelector('.button--scrolltop');

    if (window.scrollY == 0) {
        element.style.display = 'none';
    } else {
        element.style.display = 'flex';
    };
};

window.addEventListener('scroll', scrollToggle);

function scrollToTop() {
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    );
};