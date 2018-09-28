'use strict';

// TODO: definição de váriaveis;

const pixelCanvas = document.getElementById('pixelCanvas');

let currentColor = document.getElementById("colorPicker").value;

let gridHeight;

let gridWidth;

const submitButton = document.getElementById("submit");

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(event) {
  $(pixelCanvas).empty();
  event.preventDefault();
  pixelCanvas.createTBody();
  const tableBody = pixelCanvas.firstElementChild;
  gridHeight = document.getElementById("inputHeight").value;
  gridWidth = document.getElementById("inputWidth").value;
  for (let itr = 0; gridHeight > itr; itr++) {
    tableBody.insertRow(itr)
    for (let itr2 = 0; gridWidth > itr2; itr2++) {
      tableBody.children[itr].insertCell(0);
    }
    $("td").click(function(event){
      let currentCell = event.target;
      currentCell.style.backgroundColor = colorPicker.value;
    })
  };

}
$(submitButton).click(makeGrid);
