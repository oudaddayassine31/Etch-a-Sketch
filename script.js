let container = document.querySelector(".grid");
let colorPicker = document.querySelector("#color-picker");
let dimensions = document.querySelector("#dimensions");
let size = document.querySelector("#size");
let clear = document.querySelector("#clear");
let eraser = document.querySelector("#eraser");


function createGrid(length) {
    container.innerHTML = ''; 
    for (let i = 0; i < length; i++) {
        let row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
        for (let j = 0; j < length; j++) {
            let box = document.createElement("div");
            box.className = "box";
            row.appendChild(box);
            box.style.width = `${32 / length}rem`;
            box.style.height = `${32 / length}rem`;
            box.addEventListener("mouseover", () => {
                if (eraser.classList.contains("active")) {
                    box.style.backgroundColor = "#FFFFFF"; // Erase color
                } else {
                    box.style.backgroundColor = colorPicker.value; // Apply selected color
                }
            });
        }
    }
}


function deleteGrid() {
    container.innerHTML = ''; 
}

size.addEventListener("mousemove", () => {
    dimensions.textContent = `Grid Size: ${size.value} x ${size.value}`;
});


size.addEventListener("mouseup", () => {
    createGrid(size.value);
});

eraser.addEventListener("click", () => {
    if (eraser.classList.contains("active")) {
        eraser.classList.remove("active");
        eraser.style.backgroundColor = "#008060";
    } else {
        eraser.classList.add("active");
        eraser.style.backgroundColor = "#003d2e";
    }
});


clear.addEventListener("click", () => {
    deleteGrid(); 
});


document.addEventListener("DOMContentLoaded", () => {
    size.value = 50; 
    createGrid(50); 
    dimensions.textContent = `Grid Size: 50 x 50`; 
});

