const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

let colorButton = document.getElementById("primary_color");
let colorDiv = document.getElementById("color_val");

colorButton.onchange = function() {
  //colorDiv.innerHTML = colorButton.value;
  colorDiv.style.color = colorButton.value;
}