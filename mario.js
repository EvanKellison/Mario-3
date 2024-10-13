function drawPyramid(height) {
  // Clear the previous pyramid
  const pyramidContainer = document.getElementById('pyramidContainer'); // Use the correct ID
  pyramidContainer.innerHTML = ''; // Clear the content of the container

  // Draw the pyramid using DOM manipulation
  for (let i = 1; i <= height; i++) {
    let row = document.createElement('div');
    row.classList.add('pyramid-row');

    let spaces = document.createElement('span');
    spaces.textContent = ' '.repeat(height - i);
    spaces.classList.add('pyramid-space');

    let hashes = document.createElement('span');
    hashes.textContent = '#'.repeat(i);
    hashes.classList.add('pyramid-hash');

    row.appendChild(spaces);
    row.appendChild(hashes);
    pyramidContainer.appendChild(row);
  }
}

function determineHeightAndThenDrawPyramid() {
  let height = document.getElementById('height').value; // Get the value from the input
  height = parseInt(height); // Convert to integer

  if (height <= 0 || isNaN(height)) {
    alert("Please enter a valid positive number for the height.");
    return; 
  }

  drawPyramid(height); 
}

// Get the button by its ID
const drawPyramidButton = document.getElementById('drawPyramidButton');

// Add the click event listener
drawPyramidButton.addEventListener('click', determineHeightAndThenDrawPyramid);
