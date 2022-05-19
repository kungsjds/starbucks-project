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

function menuAreaToggle() {
    const menu = document.querySelector('.header--menu-area');
    const closeButton = document.querySelector('.button--menu-close');

    if (menu.style.height == '100vh') {
        menu.style.height = '0';
        closeButton.style.transform = 'rotate(270deg)';
    } else {
        menu.style.height = '100vh';
        closeButton.style.transform = 'rotate(90deg)';
    };
};