const GRID_LENGTH = 500;

function setHoverEffect(square) {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "lightgreen";
    });
}

function populateGrid(squaresPerRow=16) {
    const grid = document.querySelector(".grid");
    const gridSquares = document.querySelectorAll(".grid > .square");

    // Remove previous squares
    if (gridSquares.length > 0) {
        for (square of grid.children) {
            grid.removeChild(square);
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