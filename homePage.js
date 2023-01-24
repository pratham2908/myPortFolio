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
    const otherSpans = document.querySelectorAll('.left-content h1 span:not(.name)')
    otherSpans.forEach((span, index) => {
        span.classList.add('appear');
    });

    const name = document.querySelectorAll(".homePage-left .left-content h1 span.name");
    name.forEach((span, index) => {
        span.classList.add('appear');
    });

});