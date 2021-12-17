const figures = [{
        type: "square",
        width: 100,
        height: 100,
        background: "red",
    },
    {
        type: "circle",
        width: 150,
        height: 150,
        background: "green",
    },
    {
        type: "rectangle",
        width: 150,
        height: 150,
        background: "blue",
    },
];

let firstdiv = document.querySelector(`#figuresWrapper`);

function renderTime(element) {
    let div = document.createElement(`div`);

    for (var key in element) {
        if (key == `type`) {
            div.classList.add(element[key]);
        } else if (typeof element[key] === "number") {
            const B = `${element[key]}px`;
            div.style[key] = B;
        } else {
            const A = element[key];
            div.style[key] = A;
        }
    }
    return div;
}

figures.map(function(figure) {
    let newdiv = renderTime(figure);
    return firstdiv.append(newdiv);
});

let krug = document.querySelector(`.circle`);
krug.style.borderRadius = "50%";
krug.style.margin = "10px";

const Sobitiya = (event) => {
    console.log(`${event.type} with ${event.target.classList}`);
};

let Mydivs = document.querySelectorAll(`#figuresWrapper > *`);

Mydivs.forEach((element) => {
    element.onmouseenter = Sobitiya;
    element.onmouseleave = Sobitiya;
});