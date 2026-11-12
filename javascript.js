const container = document.getElementById("container")
const btn = document.querySelector("button");
const superior = document.querySelector("superior");

function create(n){

    let percentage = (100 / n) + '%';

    for(let i = 0; i < n * n; i++){

        let row = document.createElement("div");
        row.setAttribute(`style`, `width: ${percentage}; height: ${percentage};`);
        row.classList.add("grid-item");

        container.appendChild(row);

        
    }
}

create(16)

btn.addEventListener('click', function(e){

    container.innerHTML = "";

    let input = document.getElementById("grid-number");
    let size = parseInt(input.value);

    create(size);
})

container.addEventListener("mouseover", function(e){
    if (e.target.classList.contains("grid-item")) {

        e.target.style.backgroundColor = randomColor();

    }
});

function randomColor(){

    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    let rgb = `rgb(${r},${g},${b})`;
    return rgb;
}

