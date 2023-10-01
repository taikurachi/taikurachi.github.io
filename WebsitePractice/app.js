const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");

//function that removes active-btn class from last element that was clicked. Adds class name "active-btn" to new element that is clicked
function PageTransitions() {
  //button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    //for loop iterates through the all of the elements that have the class .control
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].classList.remove("active-btn");
      this.className += " active-btn";
    });
  }
}

PageTransitions();
