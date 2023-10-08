let numbers = [10, 20, 30];
let anotherNumbers = [2, 4, 6];

function addNumber(numbers, amount) {
  // Start coding here
  let output = []
  for (let i=0; i < numbers.length; i++) {
   output.push(numbers[i]+amount);
}
  return "Output: ["+output+"]";
}

addNumber(numbers, 10); // Output: [20, 30, 40]
addNumber(anotherNumbers, 2); // Output: [4, 6, 8]
