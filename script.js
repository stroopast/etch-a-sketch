const GRID_WIDTH = 600;
const GRID_HEIGHT = 600;
const GRID_AREA = GRID_WIDTH * GRID_HEIGHT
let numOfSmallBoxes = 100;

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
container.style.border = "1px solid black"

// calculate small boxes width adn height based on number of boxes and grid area
smallBoxWidth = Math.sqrt(GRID_AREA / numOfSmallBoxes) - 2; // -2 beacuse we have 1px border on top and bottom
smallBoxHeight = Math.sqrt(GRID_AREA / numOfSmallBoxes) - 2; // -2 beacuse we have 1px border on left and right

for(let i = 0; i < numOfSmallBoxes; i++)
{
    const box = document.createElement("div");
    box.style.width = smallBoxWidth.toString() + "px";
    box.style.height = smallBoxHeight.toString() + "px";
    box.style.border = "1px solid grey";
    console.log(smallBoxHeight);
    console.log(smallBoxWidth);
    container.appendChild(box);
}
