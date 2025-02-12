
const products = [
  { name: "Laptop", catagory: "Electronics"},
  { name: "T-Shirt", catagory: "Clothing"},
  { name: "Headphones", catagory: "Electronics"},
  { name: "Jeans", catagory: "Clothing"},
];

let catagorizeProducts = {
  electronics: [],
  clothing: []
}

for(let i = 0; i < products.length; i++){
  let singleProduct = products[i];

  if(singleProduct.catagory === "Electronics"){
    catagorizeProducts.electronics.push(singleProduct.name)
  }
  else if(singleProduct.catagory === "Clothing"){
    catagorizeProducts.clothing.push(singleProduct.name)
  }
}

console.log(catagorizeProducts);