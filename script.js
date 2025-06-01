const GRID_WIDTH = 500;
const GRID_HEIGHT = 500;
let gridSize = 16

const body = document.querySelector("body");

// create a 16x16 grid
const container = document.createElement("div");
const changeGridBtn = document.createElement("button");
body.appendChild(changeGridBtn);
body.appendChild(container);

// change grid button
changeGridBtn.style.display = "flex";
changeGridBtn.style.width = "200px";
changeGridBtn.style.height = "50px";
changeGridBtn.style.margin = "auto";
changeGridBtn.style.backgroundColor = "red";
changeGridBtn.textContent = "Change grid size";
changeGridBtn.style.fontSize = "20px";
changeGridBtn.style.justifyContent = "center";
changeGridBtn.style.alignItems = "center";

// grid container
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = GRID_WIDTH.toString() + "px";
container.style.height = GRID_WIDTH.toString() + "px";
container.style.margin = "auto";
container.style.marginTop = "200px";
container.style.marginBottom = "200px";
container.style.border = "1px solid black";

changeGridBtn.addEventListener('click',(event) => {
  let value = prompt("Enter the grid size, maximum is 100");
  createGridBoxes(value);
});

function createGridBoxes(numOfBoxes)
{
  if(numOfBoxes > 100)
  {
    return;
  }

  while(container.firstChild){
    container.removeChild(container.firstChild);
  }

  let boxSize = 100 / numOfBoxes;
  for(let i = 0; i < numOfBoxes * numOfBoxes; i++)
  {
      const box = document.createElement("div");
      box.style.width = boxSize.toString() + "%";
      box.style.height = boxSize.toString() + "%";
      box.style.border = "1px solid black";
      container.appendChild(box);
      box.addEventListener('mouseover',(event) => {
          let randomColor = getRandomColor();
          box.style.backgroundColor = randomColor;
      });
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color.toString();
}

createGridBoxes(16);