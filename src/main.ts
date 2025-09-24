const shapeSelect = document.getElementById("shapeSelect") as HTMLSelectElement;
const widthInput = document.getElementById("widthInput") as HTMLInputElement;
const heightInput = document.getElementById("heightInput") as HTMLInputElement;
const borderInput = document.getElementById("borderInput") as HTMLInputElement;
const borderColorInput = document.getElementById(
  "borderColorInput"
) as HTMLInputElement;
const bgColorInput = document.getElementById(
  "bgColorInput"
) as HTMLInputElement;
const drawBtn = document.getElementById("drawBtn") as HTMLButtonElement;
const resetBtn = document.getElementById("resetBtn") as HTMLButtonElement;
const canvas = document.getElementById("canvas") as HTMLDivElement;

function draw(): void {
  const shape = shapeSelect.value;
  const w = Math.max(10, Number(widthInput.value));
  const h = Math.max(10, Number(heightInput.value));
  const border = Math.max(0, Number(borderInput.value));
  const strokeColor = borderColorInput.value;
  const fillColor = bgColorInput.value;

  canvas.innerHTML = "";

  const element = document.createElement("div");

  if (shape === "triangle") {
    element.style.width = "0";
    element.style.height = "0";
    element.style.backgroundColor = "transparent";
    element.style.borderLeft = `${w / 2}px solid transparent`;
    element.style.borderRight = `${w / 2}px solid transparent`;
    element.style.borderBottom = `${h}px solid ${fillColor}`;
    element.style.borderTop = "0";
    element.style.borderRadius = "0";
    if (border > 0) {
      element.style.filter = `drop-shadow(0 0 0 ${strokeColor})`;
    }
  } else {
    element.style.width = `${w}px`;
    element.style.height = `${h}px`;
    element.style.backgroundColor = fillColor;
    element.style.border = `${border}px solid ${strokeColor}`;

    if (shape === "circle") {
      element.style.borderRadius = "50%";
    }
  }

  canvas.appendChild(element);
}

function reset(): void {
  widthInput.value = "200";
  heightInput.value = "150";
  borderInput.value = "4";
  borderColorInput.value = "#0f172a";
  bgColorInput.value = "#60a5fa";
  shapeSelect.value = "rectangle";
  draw();
}

drawBtn.addEventListener("click", draw);
resetBtn.addEventListener("click", reset);

[
  shapeSelect,
  widthInput,
  heightInput,
  borderInput,
  borderColorInput,
  bgColorInput,
].forEach((el) => el.addEventListener("input", draw));

draw();
