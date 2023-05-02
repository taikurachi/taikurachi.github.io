let colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "navy",
  "maroon",
  "olive",
  "fuchsia",
  "silver",
  "gold",
  "coral",
  "salmon",
  "indigo",
  "violet",
  "turquoise",
  "plum",
  "sienna",
  "tan",
  "khaki",
  "lavender",
  "peru",
  "pink",
  "tomato",
  "crimson",
  "gainsboro",
  "gray",
  "moccasin",
  "orchid",
  "thistle",
  "wheat",
  "azure",
  "beige",
  "bisque",
  "brown",
  "burlywood",
  "chartreuse",
  "chocolate",
  "cornsilk",
  "honeydew",
  "ivory",
  "linen",
  "seashell",
  "snow",
  "black",
];
// Initialize variables to store the typed string and the current score

let typedString = "";
let score = 0;

// Initialize variables for game state management

let gameOverTriggered = false;
let colorSpawnInterval;

// Function to increment the score and update the score display

function incrementScore() {
  score++;
  let scoreElement = document.getElementById("score");
  scoreElement.textContent = score; //update score display
}

//game over animation
function typeGameOver() {
  let i = 0;
  let endText = "Game Over";
  let typedText = document.querySelector(".gameOver");

  let intervalId = setInterval(typeLetter, 180); // Call typeLetter every 180ms

  function typeLetter() {
    typedText.textContent += endText[i]; // Append next letter to text content
    i++; // Increment index

    if (i === endText.length) {
      clearInterval(intervalId); // Stop the interval when all letters have been typed
      console.log("done typing");
    }
  }
}

// Flag to prevent multiple "Game Over" animations from being triggered

let hasGameOverBeenCalled = false;

// Function to end the game and stop spawning colors
function gameOver(color) {
  clearInterval(colorSpawnInterval); // Add this line
  document.body.style.backgroundColor = color;
}

// Function to create a random color element on the screen
function createRandomColorElement() {
  let color = colors[Math.floor(Math.random() * colors.length)];
  let colorElement = document.createElement("span");
  let colorInnerText = document.createElement("span");
  colorInnerText.textContent = color;
  colorInnerText.classList.add("color-name-inner");
  colorElement.appendChild(colorInnerText);
  colorElement.classList.add("color-name");
  colorElement.style.color = color;

  // Calculate position before appending to the DOM
  let xPos = Math.random() * (window.innerWidth - 100) + "px";
  let yPos = Math.random() * (window.innerHeight - 20) + "px";
  colorElement.style.left = xPos;
  colorElement.style.top = yPos;

  document.body.appendChild(colorElement); // Add the color element to the DOM

  // Set a unique ID for the color element and set a timeout to remove it after 10 seconds
  colorElement.id = "color-" + color;
  setTimeout(function () {
    if (document.getElementById("color-" + color)) {
      removeColorElement(color);
      if (!hasGameOverBeenCalled) {
        typeGameOver();
        gameOver(color);
        hasGameOverBeenCalled = true;
      }
    }
  }, 10000); // 10 seconds delay
}

// Function to create a splotch on the screen
function createSplotch(color, x, y, fontSize) {
  // Create a new splotch element and set its position and background color
  let splotchElement = document.createElement("div");
  splotchElement.classList.add("splotch");
  splotchElement.style.left = x + "px";
  splotchElement.style.top = y + "px";
  splotchElement.style.backgroundColor = color;

  // Set the size of the splotch based on the font size

  let scaleFactor = fontSize / 14;

  // Set random values for the before and after pseudo-elements of the splotch
  splotchElement.style.setProperty("--splotch-size", 50 * scaleFactor + "px");
  splotchElement.style.setProperty("--before-top", Math.random() * 50 + "%");
  splotchElement.style.setProperty("--before-left", Math.random() * 50 + "%");

  splotchElement.style.setProperty(
    "--after-width",
    30 + Math.random() * 40 + "%"
  );
  splotchElement.style.setProperty(
    "--after-height",
    30 + Math.random() * 40 + "%"
  );
  splotchElement.style.setProperty(
    "--after-top",
    50 + Math.random() * 50 + "%"
  );
  splotchElement.style.setProperty("--after-left", Math.random() * 50 + "%");

  document.body.appendChild(splotchElement);
}

function displayGameOverText(gameOverElement, index = 0) {
  if (index < gameOverElement.textContent.length) {
    let letterElement = document.createElement("span");
    letterElement.textContent = gameOverElement.textContent[index];
    gameOverElement.appendChild(letterElement);

    setTimeout(() => displayGameOverText(gameOverElement, index + 1), 100);
  }
}

function removeColorElement(color) {
  let colorElement = document.getElementById("color-" + color);
  if (colorElement) {
    document.body.removeChild(colorElement);
  }
}

document.addEventListener("keydown", function (event) {
  let key = event.key.toLowerCase();
  if (key.length === 1) {
    typedString += key;
  }
  // Check if the typed string ends with a color name

  colors.forEach(function (color) {
    if (typedString.endsWith(color)) {
      let colorElement = document.getElementById("color-" + color);
      if (colorElement) {
        let computedFontSize = parseFloat(
          getComputedStyle(colorElement).fontSize
        );
        // Create a splotch at the position of the color element

        createSplotch(
          color,
          parseInt(colorElement.style.left),
          parseInt(colorElement.style.top),
          computedFontSize
        );
        // Remove the color element, increment the score, and reset the typed string

        removeColorElement(color);
        incrementScore();
        typedString = "";
      }
    }
  });
});

colorSpawnInterval = setInterval(function () {
  createRandomColorElement();
}, 2000); // Add this line
