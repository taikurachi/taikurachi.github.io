let colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let typedString = "";

function createRandomColorElement() {
  let color = colors[Math.floor(Math.random() * colors.length)];
  let colorElement = document.createElement("span");
  colorElement.textContent = color;
  colorElement.classList.add("color-name");
  colorElement.style.color = color;
  colorElement.style.left =
    Math.random() * (window.innerWidth - colorElement.clientWidth) + "px";
  colorElement.style.top =
    Math.random() * (window.innerHeight - colorElement.clientHeight) + "px";
  colorElement.id = "color-" + color;
  document.body.appendChild(colorElement);
}

function removeColorElement(color) {
  let colorElement = document.getElementById("color-" + color);
  if (colorElement) {
    document.body.removeChild(colorElement);
  }
}

function createSplotch(color, x, y, fontSize) {
  let splotchElement = document.createElement("div");
  splotchElement.classList.add("splotch");
  splotchElement.style.left = x + "px";
  splotchElement.style.top = y + "px";
  splotchElement.style.backgroundColor = color;

  let scaleFactor = fontSize / 14;
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
  applyAnimation(splotchElement, 1); // Animation duration in seconds
}

function incrementScore() {
  score++;
  let scoreElement = document.getElementById("score");
  scoreElement.textContent = score;
}

document.addEventListener("keydown", function (event) {
  let key = event.key.toLowerCase();
  if (key.length === 1) {
    typedString += key;
  }

  colors.forEach(function (color) {
    if (typedString.endsWith(color)) {
      removeColorElement(color);
      typedString = "";
    }
  });
});

setInterval(function () {
  createRandomColorElement();
}, 2000);
