let squares = []; // Array to hold square objects
let baseSize = 50; // Variable to control square size

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke(); // Remove stroke for clean squares

  // Populate the squares array with Square objects
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(baseSize / 2, baseSize * 2);
    let color = [random(255), random(255), random(255), random(50, 200)]; // RGBA color
    squares.push(new Square(x, y, size, color));
  }
}

function draw() {
  background(30); // Dark background for contrast
  drawSquares(); // Function to handle drawing all squares
}

// Function to draw all squares
function drawSquares() {
  for (let square of squares) {
    square.display();
  }
}

// Square class
class Square {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }

  // Method to display the square
  display() {
    fill(...this.color);

    // Conditional to check if the square is near the center
    if (dist(this.x, this.y, width / 2, height / 2) < 100) {
      push();
      translate(this.x, this.y);
      rotate(frameCount * 0.01); // Add rotation to squares near the center
      rect(-this.size / 2, -this.size / 2, this.size, this.size);
      pop();
    } else {
      rect(this.x, this.y, this.size, this.size);
    }
  }
}

