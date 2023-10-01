let typedText = document.getElementById("typed-text");
const textToType =
  "Breaking News! Breaking News! breaking News! reaking Bews! breaking news?"; // The text to be typed

let i = 0; // Initialize index to 0

function typeLetter() {
  typedText.textContent += textToType[i]; // Append next letter to text content
  i++; // Increment index
  if (i === textToType.length) {
    clearInterval(intervalId); // Stop the interval when all letters have been typed
    i = 0;
    console.log(i);
  }
}

const intervalId = setInterval(typeLetter, 70); // Call typeLetter every 70ms
let theButton = document.getElementById("button");

theButton.addEventListener("click", change);

const bgcolor = document.querySelector("body");
let theButton2 = document.getElementById("button2");
// let itemOne = document.getElementsByClassName("item1");
// let itemTwo = document.getElementsByClassName("item2");
// let itemThree = document.getElementsByClassName("item3");
let conEl = document.querySelector(".container");
let theTv = document.getElementById("tv");

function change() {
  console.log("next");
  bgcolor.style.backgroundColor = "white";
  typedText.textContent = "";
  theButton2.style.opacity = "1";
  theButton.style.zIndex = "0";
  theTv.style.opacity = "1";
  typedText.style.opacity = "0";
  conEl.style.opacity = "1";

  //     itemOne.style.opacity = "1";
  //     itemTwo.style.opacity = "1";
  //     itemThree.style.opacity = "1";
}

theButton2.addEventListener("click", change2);

function typeLetter2() {
  typedText.textContent += textToType[i]; // Append next letter to text content
  i++; // Increment index
  if (i === textToType.length) {
    clearInterval(intervalId); // Stop the interval when all letters have been typed
    i = 0;
    console.log(i);
  }
}

function change2() {
  console.log("back");
  bgcolor.style.backgroundColor = "black";
  theButton2.style.opacity = "0";
  theButton.style.zIndex = "1";
  setInterval(typeLetter2, 70);
  theTv.style.opacity = "0";
  typedText.style.opacity = "1";
  conEl.style.opacity = "0";
  //   itemOne.style.opacity = "0";
  //   itemTwo.style.opacity = "0";
  //   itemThree.style.opacity = "0";
}
