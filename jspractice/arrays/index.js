let fruits = ["apple", "orange", "banana"];

fruits[0] = "coconut"; //this changes the first string in the index to whatever is set

fruits.push("lemon"); //this adds a string to the end of the array

fruits.pop(); //this removes the last string in the array

fruits.unshift("mango"); //this adds a string before all the other strings in the array

fruits.shift(); //this removes the first string in an array

let length = fruits.length;
let index = fruits.indexOf("orange");

console.log(index);
// console.log(length);

// console.log(fruits); //displays array
