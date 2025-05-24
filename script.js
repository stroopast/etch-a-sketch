const GRID_WIDTH = 500;
const GRID_HEIGHT = 500;
let gridSize = 16

const body = document.querySelector("body");

// create a 16x16 grid
const container = document.createElement("div");
body.appendChild(container);
container.style.display = "flex"
container.style.flexWrap = "wrap"
container.style.width = GRID_WIDTH.toString() + "px";
container.style.height = GRID_WIDTH.toString() + "px";
container.style.margin = "auto"
container.style.marginTop = "200px"
container.style.marginBottom = "200px"
container.style.border = "1px solid black"

function createGridBoxes(numOfBoxes)
{
    let boxSize = 100 / numOfBoxes;
    for(let i = 0; i < numOfBoxes * numOfBoxes; i++)
    {
        const box = document.createElement("div");
        box.style.width = boxSize.toString() + "%";
        box.style.height = boxSize.toString() + "%";
        box.style.border = "1px solid black";
        container.appendChild(box);
    }
}

createGridBoxes(gridSize);