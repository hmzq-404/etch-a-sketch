const GRID_LENGTH = 500;

function setHoverEffect(square) {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "lightgreen";
    });
}

function populateGrid(squaresPerRow=16) {
    const grid = document.querySelector(".grid");
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

    for (square of grid.children) setHoverEffect(square);

    const gridSizeHeading = document.querySelector(".grid-size-heading");
    gridSizeHeading.innerText = `${squaresPerRow} × ${squaresPerRow}`;
}

// Make initial grid
populateGrid();

// Add event listeners to buttons
const resetButton = document.querySelector(".reset-button");

resetButton.addEventListener("click", () => populateGrid());

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