const GRID_LENGTH = 500;
let mouseDown = false;
let mouseEnter = false;
let selectedColor = "white";

const grid = document.querySelector(".grid");

function allowColorChange(square) {
    // Multiple events to allow user to color while dragging their clicked mouse
    square.addEventListener("mousedown", (event) => {
        mouseDown = true;
        if (mouseEnter && mouseDown) {
            event.target.style.backgroundColor = selectedColor;
        }
    });

    square.addEventListener("mouseenter", (event) => {
        mouseEnter = true;
        if (mouseEnter && mouseDown) {
            event.target.style.backgroundColor = selectedColor;
        }
    });

    square.addEventListener("mouseup", () => {
        mouseDown = false;
        mouseEnter = false;
    });

}

function populateGrid(squaresPerRow=16) {
    const gridSquares = grid.childNodes;

    // Remove previous squares
    if (gridSquares.length > 0) {
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
    }

    const squareLength = GRID_LENGTH / squaresPerRow;
    const totalSquares = squaresPerRow ** 2

    // Add new squares
    for (let i = 1; i <= totalSquares; i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.style.width = squareLength + "px";
        newSquare.style.height = squareLength + "px";
        grid.appendChild(newSquare);
    }

    for (square of grid.children) allowColorChange(square);

    const gridSizeHeading = document.querySelector(".grid-size-heading");
    gridSizeHeading.innerText = `Grid Size: ${squaresPerRow} × ${squaresPerRow}`;
}


// Add event listeners to buttons
const colorBoxes = document.querySelectorAll(".color-box");

for (colorBox of colorBoxes) {
    colorBox.addEventListener("click", (event) => {
        const previouslySelected = document.querySelector(".selected");
        previouslySelected.classList.remove("selected");

        event.target.classList.add("selected");
        selectedColor = event.target.getAttribute("id");
    });
}


const resetButton = document.querySelector(".reset-button");

resetButton.addEventListener("click", () => {
    // Keeps the same size but removes color
    populateGrid(Math.sqrt(grid.children.length));
});

const changeGridSizeButton = document.querySelector(".change-grid-size-button");

changeGridSizeButton.addEventListener("click", () => {
    let newGridLength = "";

    while (typeof(newGridLength) !== "number" || newGridLength < 1 || newGridLength > 50) {
        newGridLength = parseInt(prompt(
            "Enter a number between 1 and 50 to change the number of squares on each side of the grid."
            )) | "";
    }

    populateGrid(newGridLength);
})

// Make initial grid
populateGrid();
