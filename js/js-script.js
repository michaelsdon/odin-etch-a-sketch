// Create square divs

const container = document.querySelector('.container');
const resize = document.querySelector('#resize');
resize.addEventListener('click', resizeGrid);

function setGrid(r = 16) {
  
  for (let i = 0; i < r; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row-element');
  
    for (let j = 0; j < r; j++) {
      const colDiv = document.createElement('div');
      colDiv.classList.add('grid-element');
      colDiv.addEventListener('mouseover', leavePenTrace);
      rowDiv.appendChild(colDiv);
    };
  
    container.appendChild(rowDiv);
  };
}

function leavePenTrace(e) {
  e.target.classList.add('marked');
}

function resizeGrid() {
  
  const element = document.querySelector('.container');

  // element.removeChild();
  const size = prompt("Number of squares per side: ");

  if (size < 100) {
    element.textContent = '';
    setGrid(size);
  };
};

setGrid();