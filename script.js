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
}

// Make initial grid
populateGrid();

// Add event listeners to buttons
resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", () => populateGrid());