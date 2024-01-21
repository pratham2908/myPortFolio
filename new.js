let container = document.querySelector(".relative.flex.h-full.max-w-full.flex-1.overflow-hidden");
let minus = document.createElement("button");
let plus = document.createElement("button");
let style = {
    "position": "absolute",
    "top": "10px",
    "left": "10px",
    "zIndex": "100",
    "backgroundColor": "grey",
    "fontSize": "20px",
    "padding": "10px",
}
for (let key in style) {
    minus.style[key] = style[key];
    plus.style[key] = style[key];
}
plus.style.left = "50px";
minus.innerText = "-";
plus.innerText = "+";
container.appendChild(plus);
container.appendChild(minus);

minus.addEventListener("click", () => {
    container.querySelectorAll("*").forEach((el) => {
        let fontSize = window.getComputedStyle(el).fontSize;
        el.style.fontSize = (parseInt(fontSize) - 1) + "px";
    })
});

plus.addEventListener("click", () => {
    container.querySelectorAll("*").forEach((el) => {
        let fontSize = window.getComputedStyle(el).fontSize;
        el.style.fontSize = (parseInt(fontSize) + 1) + "px";
    })
});