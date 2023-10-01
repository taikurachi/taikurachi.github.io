console.log("the Message");

const theButton = document.querySelector("button");

let theBody = document.querySelector("body");
let theThesis = document.getElementById("theMainPoint");

theButton.addEventListener("click", beTheChange);

function beTheChange() {
  console.log("you changed");
  theThesis.style.backgroundColor = "pink";
  theBody.style.backgroundColor = "yellow";
  theThesis.textContent = "You erased history!";
}

// theThesis.style.backgroundColor = "pink";
// theBody.style.backgroundColor = "yellow";
// theThesis.textContent = "potatoes!";

//differnce between var and let
//use let when you want to change the value of something
//const stands for constant
