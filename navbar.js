// navbar appearance on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        document.querySelector('nav').classList.add('active');
    } else {
        document.querySelector('nav').classList.remove('active');
    }
})

const navbarLinks = document.querySelectorAll('.navbar li a');
const elementsPostions = [];
navbarLinks.forEach((link) => {
    const target1 = document.querySelector(link.getAttribute('href'));
    elementsPostions.push(target1.getBoundingClientRect().top + window.scrollY);

    link.addEventListener('click', (e) => {
        e.preventDefault();

        removeActiveAll();
        link.classList.add('active');
        const target = document.querySelector(link.getAttribute('href'));
        let elementPosition = target.getBoundingClientRect().top;
        let offsetPosition = elementPosition + window.scrollY - 45;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    })
}
);

function removeActiveAll() {
    navbarLinks.forEach((link) => {
        link.classList.remove('active');
    })
}


window.addEventListener('scroll', checkScrollPosition);
window.addEventListener('load', checkScrollPosition);

function checkScrollPosition() {
    elementsPostions.forEach((position, index) => {
        if (window.scrollY >= position - 100) {
            removeActiveAll();
            navbarLinks[index].classList.add('active');
        }
    })
}