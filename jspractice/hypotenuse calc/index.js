let a;
let b;
let c;

let buttonData = document.querySelector("#submitButton");

buttonData.onclick = function () {
  a = document.querySelector("#aTextbox").value;
  a = Number(a);
  console.log(a);
  b = document.querySelector("#bTextbox").value;
  b = Number(b);
  console.log(b);
  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  document.querySelector("#cLabel").textContent = "Side C: " + c;
};
