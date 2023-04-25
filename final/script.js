document
  .getElementById("color-input")
  .addEventListener("keyup", function (event) {
    //listens for when key is released

    if (event.key === "Enter") {
      changeBackgroundColor(this.value); //changes bg color if enter is released
    }
  });

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color; //applies color to the body element
}
