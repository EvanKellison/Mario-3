const button = document.querySelector('button');
const heightInput = document.getElementById('height');
const pyramidDiv = document.getElementById('pyramid');
// Function to build and display the pyramid
function drawPyramid(height) {
  let pyramid = '';
  for (let i = 1; i <= height; i++) {
    // Spaces
    for (let j = 1; j <= height - i; j++) {
      pyramid += ' ';
    }
    // Hash symbols
    for (let k = 1; k <= i; k++) {
      pyramid += '#';
    }
    // Newline for next row
    pyramid += '<br>';
  }
  pyramidDiv.innerHTML = pyramid;
}
// Event listener for the button
button.addEventListener('click', () => {
  const height = parseInt(heightInput.value);
  drawPyramid(height);
});

drawPyramid(5);

function determineHeightAndThenDrawPyramid() {
  // Get the height from the input
  const heightInput = document.getElementById('height').value;
  const height = parseInt(heightInput, 10); // Convert input to a number

  // Validate the height
  if (isNaN(height) || height <= 0) {
    alert("Please enter a valid positive number for the height.");
    return;
  }

  // Get the pyramid container
  const pyramidDiv = document.getElementById('pyramid');
  // Clear existing pyramid
  pyramidDiv.innerHTML = '';

  // Draw the pyramid
  for (let i = 0; i < height; i++) {
    const spaces = ' '.repeat(height - i - 1); // Calculate spaces for centering
    const stars = '#'.repeat(2 * i + 1); // Calculate number of stars
    const row = document.createElement('p'); // Create a new paragraph for each row
    row.textContent = spaces + stars; // Set the centered pyramid row
    pyramidDiv.appendChild(row); // Add the row to the pyramid container
  }
}

// Add event listener to the button
document.querySelector('button').addEventListener('click', determineHeightAndThenDrawPyramid);
