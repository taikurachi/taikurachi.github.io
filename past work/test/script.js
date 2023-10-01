let firstName = "Taisei"; // string
let age = 21; //number
let student = true; //boolean

console.log(firstName);
console.log(age);

console.log("Hello", firstName);
console.log("Hello", firstName);
console.log("enrolled", student);

document.querySelector(".p1").textContent = "Hello " + firstName;
document.querySelector(".p2").textContent = "You are " + age + "years old";
document.querySelector(".p3").textContent = "Enrolled " + student;

let students = 20;

students /= 2;

console.log(students);

console.log(username);

let username;
document.querySelector(".myButton").onClick = function () {
  username = document.querySelector("myText").value;

  console.log(username);

  document.querySelector(".myName").textContent = "Hello" + username;
};
