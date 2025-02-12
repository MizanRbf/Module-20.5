// Show the unique words except duplicate words

let words = ['laptop', 'phone', 'laptop', 'phone', 'computer']

let uniqueWords = [];

for(let i = 0; i < words.length; i++){
  let element = words[i];
  
  if(!uniqueWords.includes(element)){
    uniqueWords.push(element);
  }
}
console.log(uniqueWords);

// with using numbers

let numbers = [1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 10]

let uniqueNumbers = [];

for(let i = 0; i < numbers.length; i++){
  let element = numbers[i];
  
  if(!uniqueNumbers.includes(element)){
    uniqueNumbers.push(element);
  }
}
console.log(uniqueNumbers);
