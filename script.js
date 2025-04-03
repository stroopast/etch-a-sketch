const body = document.querySelector("body");

// create a 16x16 grid

const container = document.createElement("div");

body.appendChild(container);
container.style.display = "flex"
container.style.flexWrap = "wrap"
container.style.width = "512px";
container.style.height = "512px";
container.style.margin = "auto"
container.style.marginTop = "200px"
container.style.border = "1px solid grey"

for(let i = 0; i < 256; i++)
{
    const box = document.createElement("div");
    box.style.width = "30px";
    box.style.height = "30px";
    box.style.border = "1px solid grey";
    container.appendChild(box);
}
