const container = document.getElementById("grid_container");
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
const default_size = '16';



let currentColor = default_color;
let currentMode = default_mode;
let currentSize = default_size;


function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`;
};

function setCurrentSize(newSize) {
  currentSize = newSize
};

function setCurrentColor(newColor) {
  currentColor = newColor;
};

function setCurrentMode(newMode) {
  activateButton(newMode);
  currentMode = newMode;
};




colorWheel.addEventListener('change', (e) => {
  setCurrentColor(e.target.value); 
});
colorBTN.addEventListener('click', () => {
  setCurrentMode('color')
});
rainbowBTN.addEventListener('click', () => {
  setCurrentMode('rainbow')
});
eraserBTN.addEventListener('click', () => {
  setCurrentMode('eraser')
});
clearBTN.addEventListener('click', () => {
  location.reload();
});
slider.addEventListener('input', (e) => {
  setupGrid(e.target.value);
  updateSizeValue(e.target.value);
});






function setupGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div')
      gridElement.className = 'grid-item';
      container.appendChild(gridElement);
      gridElement.addEventListener('mouseover', changeColor);
    };
};




function changeColor(e) {
  const randomNum1 = Math.floor(Math.random() * 255);
  const randomNum2 = Math.floor(Math.random() * 255);
  const randomNum3 = Math.floor(Math.random() * 255);

  if (currentMode === 'color') {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === 'rainbow') {
    e.target.style.backgroundColor = `rgb(${randomNum1},${randomNum2},${randomNum3})`;
  } else if (currentMode === 'eraser') {
    e.target.style.backgroundColor = 'white';
  };
};





function activateButton(newMode) {
  if (currentMode === 'rainbow') {
    rainbow.classList.remove('active');
  } else if (currentMode === 'color') {
    color.classList.remove('active');
  } else if (currentMode === 'eraser') {
    eraser.classList.remove('active');
  }

  if (newMode === 'rainbow') {
    rainbow.classList.add('active');
  } else if (newMode === 'color') {
    color.classList.add('active');
  } else if (newMode === 'eraser') {
    eraser.classList.add('active');
  }
}




window.onload = () => {
  setupGrid(default_size);
  activateButton(default_mode);
};