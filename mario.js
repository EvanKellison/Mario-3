function determineHeightAndThenDrawPyramid() {
  let height = prompt("Enter the height of the pyramid:"); 
  if (height <= 0 || isNaN(height)) {
    alert("Please enter a valid positive number for the height.");
    return; 
  }
  drawPyramid(height); 
}

function drawPyramid(height) {
  // Your pyramid drawing logic goes here
  for (let i = 1; i <= height; i++) {
    let spaces = ' '.repeat(height - i);
    let hashes = '#'.repeat(i);
    console.log(spaces + hashes);
  }
}

// Get the button by its ID
const drawPyramidButton = document.getElementById('drawPyramid');

// Add the click event listener
drawPyramidButton.addEventListener('click', determineHeightAndThenDrawPyramid);
