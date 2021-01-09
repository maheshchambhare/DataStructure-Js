//  Pricticing Arrays

//  Declaration of array []

let array = ["a", "b", "c", 1, 23, 25, 35, 55];

console.log(array);

// Access Element from an array O(1) constant time

let access = array[2];
console.log(access);

let lastEle = array[array.length - 1];
console.log(lastEle);

// Add element to array - Insertion  O(n) linear complexity

array.push("hello");
console.log(array);

// remove element from array - Deletion O(n) linear copmlexity

array.pop(); // removes only last item of array
console.log(array);

// remove element from front - Deletion O(n) linear copmlexity

let shift = array.shift();
console.log(shift);

// Add element to front - Insertion  O(n) linear complexity

array.unshift("d", "a", "z");
console.log(array);

// Find the index of an item in array

let pos = array.indexOf("c");
console.log(pos);

// Remove the item by index position

let removeItem = array.splice(pos, 5);
console.log(removeItem);
console.log(array);

// Copy an Array

let copy = [...array];
console.log(copy);

//  Must Know Methods of array

//  Filter items from an array

const bank = [
  { name: "john", Balance: 100 },
  { name: "sam", Balance: 500 },
  { name: "dev", Balance: 100000 },
  { name: "Ed", Balance: 800 },
  { name: "Web", Balance: 10005500 },
  { name: "Dev", Balance: 300 },
];

const filter = bank.filter((item) => {
  return item.Balance < 1000;
});

console.log(filter);

// MAP in Arrays

const customerName = bank.map((item) => {
  return item.name;
});

console.log(customerName);

//  Find an item in array

const foundYou = bank.find((item) => {
  return item.name === "dev";
});

console.log(foundYou);

//  forEach method

bank.forEach((item) => {
  console.log(item.Balance, item.name);
});

//  Some method checks the array and returns true or false

// For one item

const hasExpensiveItem = bank.some((item) => {
  return item.Balance > 1000;
});

console.log(hasExpensiveItem);
console.log(bank);

//  Every method checks every item in array

const hasFreeItem = bank.every((item) => {
  return item.Balance <= 0;
});
console.log(hasFreeItem);

// Reduce used for operation on a Array

const total = bank.reduce((currentTotal, item) => {
  return item.Balance + currentTotal;
}, 0);

console.log(total);

//  include method ( it returns true and false)

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const found = num.includes(4);

console.log(found);

//  Destructuring an array

function sumAndMuliply(a, b) {
  return [a + b, a * b];
}

console.log(sumAndMuliply(5, 3));

const [sum, mult] = sumAndMuliply(5, 5);

console.log(sum);
console.log(mult);

//  combine all

const combine = bank
  .map((item) => item.Balance * 2)
  .sort((a, b) => b - a)
  .reduce((a, b) => a + b, 0);

console.log(combine);
