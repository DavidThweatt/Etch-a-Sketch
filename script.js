const container = document.getElementById("container");
const colorWheel = document.getElementById("primary_color");
const colorBTN = document.getElementById("color");
const rainbowBTN = document.getElementById("rainbow");
const eraserBTN = document.getElementById("eraser");
const clearBTN = document.getElementById("clear");
const slider = document.getElementById("slider");
const colorDiv = document.getElementById("color_val");
const gridElement = document.createElement('div');
const default_color = '#000000';
const default_mode = 'color';
const default_size = '16px';

let currentColor = default_color;
let currentMode = default_mode;
let currentSize = default_size;

function setCurrentColor(newColor) {
  currentColor = newColor;
};

function setCurrentMode(newMode) {
  activateButton(newMode);
  currentMode = newMode;
};

function setCurrentSize(newSize) {
  currentSize = newSize;
};

function setupGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.className = 'grid-item';
    container.appendChild(gridElement);
  };
};

setupGrid(28);

colorWheel.addEventListener('change', (e) => {
  setCurrentColor(e.target.value); 
});
colorBTN.addEventListener('click', () => {
  setCurrentMode('color');
  colorBTN.classList.add('clicked');
});
rainbowBTN.addEventListener('click', () => {
  setCurrentMode('rainbow');
});
eraserBTN.addEventListener('click', () => {
  setCurrentMode('eraser');
});
clearBTN.addEventListener('click', () => {
  clearAll('clear');
});
slider.addEventListener('input', (e) => {
  setupGrid(e.target.value);
});
gridElement.addEventListener('mouseover', () => {
  e.target.classlist.add('active')
});


function changeColor() {
  const randoNum = Math.floor(Math.random() * 255);

  if (currentMode === rainbowMode) {
    gridElement.style.color = "rgb(randoNum, randoNum, randoNum)"; 
  } else if (currentMode === color) {

  } else if (currentMode === eraser) {

  };

};

function clearAll() {
  const allGrid = document.querySelectorAll(gridElement);

  if (currentMode === clear) {
    allGrid.classlist.add('white');
  }
}
