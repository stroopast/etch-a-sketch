let initialGridSize = 16;
const body = document.querySelector("body");

const container = document.createElement("div");
const changeGridBtn = document.createElement("button");
body.appendChild(changeGridBtn);
body.appendChild(container);

changeGridBtn.style.display = "flex";
changeGridBtn.style.height = "30px";
changeGridBtn.style.width = "200px";
changeGridBtn.textContent = "Change grid size";
changeGridBtn.style.alignItems = "center";
changeGridBtn.style.justifyContent = "center";
changeGridBtn.style.margin = "auto";
changeGridBtn.style.marginBottom = "30px";


container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "600px";
container.style.height = "600px";
container.style.margin = "auto";

createGrid(16);

changeGridBtn.addEventListener('click',(event) => {
  let value = prompt("Enter the grid size, maximum is 100");
  if(value > 100)
  {
    alert("Grid can't be greater than 100");
  }
  else if(value < 1)
  {
    alert("Grid can't be smaller than 1");
  }
  else
  {
    removeAllChildNodes(container);
    createGrid(value);
  }
});

function createGrid(gridSize)
{
    let gridPrecent = 100 / gridSize;
    for(let i = 0; i < gridSize * gridSize; i++)
    {
        let box = document.createElement("div");
        container.appendChild(box);
        box.style.width = gridPrecent + "%";
        box.style.height = gridPrecent + "%";
        box.style.border = "1px solid gray";
        box.style.opacity = "0.1";
        box.style.backgroundColor = "white";
        box.addEventListener('mouseover',(event) => {
          if(box.style.backgroundColor === "white")
          {
            let randomColor = getRandomColor();
            box.style.backgroundColor = randomColor;
          }
          else
          {
            let currentOpacity = box.style.opacity;
            currentOpacity = parseFloat(currentOpacity) + 0.1;
            box.style.opacity = currentOpacity.toString();
          }
        });
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
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