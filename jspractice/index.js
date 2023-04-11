const button = document.querySelector("#myButton");

button.addEventListener("click", function () {
  button.textContent = "Thanks for clicking!";
  button.style.backgroundColor = "red";
  button.style.textAlign = "center";
  button.style.margin = "auto";
});

button.addEventListener("mouseenter", function () {
  button.style.color = "white";
  button.style.backgroundColor = "blue";
  button.style.border = "3px solid yellow";
});

button.addEventListener("mouseleave", function () {
  button.style.color = "black";
  button.style.backgroundColor = "white";
  button.style.border = "none";
  button.style.textAlign = "left";
  button.style.margin = "0";
});
