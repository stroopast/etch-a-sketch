const body = document.querySelector("body");

// Resize grid button
const setGridSizeBtn = document.createElement("button");
body.appendChild(setGridSizeBtn);
setGridSizeBtn.style.height = "50px";
setGridSizeBtn.style.width = "100px";
setGridSizeBtn.textContent = "Set grid size";

let gridInput = 16
setGridSizeBtn.addEventListener("click", function (e) {
  gridInput = window.prompt("Set grid size")
  console.log(gridInput);
  createGrid(gridInput);
});

// create a 16x16 grid
// const container = document.createElement("div");

// body.appendChild(container);
// container.style.display = "flex";
// container.style.flexWrap = "wrap";
// container.style.width = "512px";
// container.style.height = "512px";
// container.style.margin = "auto";
// container.style.marginTop = "200px";
// container.style.border = "1px solid grey";

createGrid(gridInput);

function createGrid(gridSize)
{
  const container = document.createElement("div");

  body.appendChild(container);
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.width = "512px";
  container.style.height = "512px";
  container.style.margin = "auto";
  container.style.marginTop = "200px";
  container.style.border = "1px solid grey";

  for(let i = 0; i < gridInput * gridInput; i++)
    {
        const box = document.createElement("div");
        box.style.backgroundColor = "white";
        box.style.width = "30px";
        box.style.height = "30px";
        box.style.border = "1px solid grey";
        container.appendChild(box);
    
        box.addEventListener("mouseover", function (e) {
            box.style.backgroundColor = "red";
          });
    }
}