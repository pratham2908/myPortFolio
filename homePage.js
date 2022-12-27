// split name into spans
const box = document.querySelector(".homePage-left .left-content  h1");
const text = box.innerText;
const content = text
    .split("")
    .map((letter) => `<span>${letter}</span>`)
    .join("");
box.innerHTML = content;



// home page name appear and rubberband effect
const spans = document.querySelectorAll(".homePage-left .left-content h1 span");
spans.forEach((span, index) => {
    span.style.animationDelay = `${index * 0.05}s`;
    const delayTime = 1000 + index * 50;
    setTimeout(() => {
        span.style.animationDelay = "0s"
    }, delayTime);

    if (span.innerHTML == " ") {
        span.innerHTML = "&nbsp";
    }
    if (index >= 8) {
        span.classList.add('name');
    }
    if (index == 7) {
        span.after(document.createElement("br"))
    }

    //rubberband effect on hover
    span.addEventListener("mouseover", () => {
        span.classList.add("rubberBand");
        setTimeout(() => {
            span.classList.remove("rubberBand");
        }, 1000);
    });
});

//name appear effect on page load
window.addEventListener('load', () => {
    spans.forEach((span) => {
        span.classList.add('appear');
        span.style.pointerEvents = "none";

        setTimeout(() => {
            span.classList.remove('appear');
            span.style.opacity = 1;
            span.style.pointerEvents = "auto";

        }, 1500)

    })
});