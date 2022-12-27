// Social LInks Animation Delay
const linksGroup = document.querySelectorAll('.social-media-links ');
linksGroup.forEach(linkGroup => {
    const links = linkGroup.children;
    for (let i = 0; i < links.length; i++) {
        links[i].style.animationDelay = `${i * 0.1}s`;
    }
})

// Appear on Scroll Effect
window.addEventListener('scroll', appearOnScroll);
window.addEventListener('load', appearOnScroll);
function appearOnScroll() {
    const elements = document.querySelectorAll('.project, body > * > h1, .about-container, .contact-header, .social-media-links> *, .contact-form, .achievement-image-container, .achievement-info ');

    const scrollPosition = window.innerHeight - 100;
    elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        if (scrollPosition > elementPosition) {
            element.classList.add('appear');
        } else {
            element.classList.remove('appear');
        }
    })
}


// Add Project Images
const projects = document.querySelectorAll('.project');
projects.forEach((project, idx) => {
    project.firstElementChild.style.backgroundImage = `url("./Images/ProjectImages/${idx + 1}.png")`
}
);

// Project Images Hover Effect
const lights = document.querySelectorAll('.project-image .light');
lights.forEach(member => {
    member.addEventListener('mousemove', (e) => {
        const mouseLeft = e.clientX;
        const mouseTop = e.clientY;
        const memberTop = member.getBoundingClientRect().top;
        const memberLeft = member.getBoundingClientRect().left;
        const left = mouseLeft - memberLeft;
        const top = mouseTop - memberTop;
        member.style.background = `radial-gradient(circle at ${left}px ${top}px, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.2) 85%)`
    });
    member.addEventListener('mouseleave', () => {
        member.style.background = '';
    })
}
);



