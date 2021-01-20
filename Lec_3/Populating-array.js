let arr1 = ["A", true, 2];

console.log("\n********Length and index********\n");
console.log(arr1.length);
console.log(arr1[3]); //Doesn't exist
console.log(arr1[2]); //Last index of array
console.log(arr1[arr1.length - 1]); //Equals 2
console.log("\n********Length and index Part 2********\n");
let arr3 = Array(3); //Empty array of length 3
arr3[2] = "Adding a value!";
console.log(arr3[2]); //Last index of array
console.log(arr3[arr3.length - 1]); //Index: 2
console.log(arr3[0]); //No value yet
console.log(arr3[1]); //No value yet