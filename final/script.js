let colorWords = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];
let randomIndex = Math.floor(Math.random() * colorWords.length);
let colorWord = colorWords[randomIndex];
let heading = document.querySelector("h1");
heading.textContent = "Type the color word: " + colorWord;
let input = document.createElement("input");
document.body.appendChild(input);

input.addEventListener("keyup", function (event) {
  let typedWord = event.target.value.toLowerCase();

  // Check if the typed word matches the color word
  if (typedWord === colorWord) {
    console.log(input);
    // Update the background color
    let background = document.querySelector("#background");
    document.body.style.backgroundColor = colorWord;

    // Generate a new random color word
    randomIndex = Math.floor(Math.random() * colorWords.length);
    colorWord = colorWords[randomIndex];
    heading.textContent = "Type the color word: " + colorWord;

    // Clear the input field
    input.value = "";
  }
});
