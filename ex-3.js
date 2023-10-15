const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 500 },
  { name: "Headphones", price: 300 },
  { name: "Keyboard", price: 50 },
];

function getMostExpensiveProduct(products) {
  // Start coding here
  let maxPrice = 0
  for(let i in products){
    if(products[i].price < maxPrice){
      maxPrice = i
    }
  }
  console.log(products[maxPrice])
}

getMostExpensiveProduct(products); // Output: { name: "Laptop", price: 1000 }
