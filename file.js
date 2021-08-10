const container = document.getElementById("container");
const colorWheel = document.getElementById("primary_color");
const colorBTN = document.getElementById("color");
const rainbowBTN = document.getElementById("rainbow");
const eraserBTN = document.getElementById("eraser");
const clearBTN = document.getElementById("clear");
const slider = document.getElementById("slider");
const colorDiv = document.getElementById("color_val");


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);



colorWheel.onchange = function() {
  colorDiv.style.color = colorWheel.value;
  activate();
}

colorBTN.addEventListener('click', (e) => {
  colorMode();
});

rainbowBTN.addEventListener('click', (e) => {
  rainbowMode();
});

eraserBTN.addEventListener('click', (e) => {
  eraserMode();
});

clearBTN.addEventListener('click', (e) => {
  clearAll();
});

slider.addEventListener('click', (e) => {
  makeRows;
});

container.addEventListener('mouseover', (e) => {
  activate();
});

// activate() {
   // mouse over color pad actives coloring
// }

// function clearAll {
//   container background-color: white;
// }

// function eraserMode() {
//   mouse over turns cell white.
// };

// fucntion colorMode() {
//   turns cells chosen color with mouse over.
// };
     
// fucntion rainbowMode() {
//    turns cells random rbg value with .math on mouse over
// }